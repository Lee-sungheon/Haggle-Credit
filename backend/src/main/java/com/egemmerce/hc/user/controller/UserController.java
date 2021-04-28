package com.egemmerce.hc.user.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.user.jwt.JwtService;
import com.egemmerce.hc.user.service.UserService;

import io.swagger.annotations.ApiOperation;

/**
 * 
 * @Date 2021. 4. 26.
 * @Title Haggle-Credit Backend
 * @Description : 유저와 관련된 기능 연결을 위한 User Controller 클래스
 * 	- 가입 / 탈퇴
 * 	- 개인정보 조회/수정
 * 	- ID/PW 찾기
 *	- +++ 유저와 관련된 기능 당연히 추가되어야함. (판매/구매/계좌/포인트/내역 등등등...)
 */

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserService userService;
	
	/* C :: 회원 가입 */
	@ApiOperation(value="회원가입을 위한 Restful API", response=User.class)
	@PostMapping("/join")
	public ResponseEntity<String> createUser(@RequestBody User user, HttpServletRequest request) throws Exception {
		if(userService.insertUser(user) > 0) {
			userService.mailSendWithUserKey(user.getuEmail(), user.getuPassword(), request);
			return new ResponseEntity<String>(user.getuEmail() + "계정 가입 성공", HttpStatus.OK);
		}
		return new ResponseEntity<String>("계정 가입 실패", HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/key_alter")
	public String key_alterConfirm(@RequestParam("uEmail") String uEmail, @RequestParam("uAuthKey") String uAuthKey) throws Exception {
		userService.alter_userKey_service(uEmail, uAuthKey);
		return "user/userRegSuccessPage";
	}
	
	/* R :: 가입 중 아이디 중복 확인 */
	@ApiOperation(value="단순 아이디 중복확인을 위한 Restful API", response=User.class)
	@GetMapping("/check/id")
	public ResponseEntity<String> reviewCheckUEmail(String uEmail) throws Exception {
		if(userService.checkUEmail(uEmail) == 0)
			return new ResponseEntity<String>("사용 가능한 아이디 입니다.", HttpStatus.OK);
		return new ResponseEntity<String>("중복된 아이디가 존재합니다.", HttpStatus.OK);
	}
	
	/* R :: 개인 정보 전체 조회 [토큰으로 확인] */
	@ApiOperation(value="개인정보 조회를 위한 Restful API", response=User.class)
	@GetMapping("/mypage")
	public ResponseEntity<Map<String, Object>> reviewUser(HttpServletRequest request) {
		HttpStatus status = null;
		Map<String, Object> resultMap = new HashMap<>();
		
		try {
			resultMap.putAll(jwtService.get(request.getHeader("auth-token")));
			status = HttpStatus.ACCEPTED;
		} catch (RuntimeException e) {
			resultMap.put("errorMessage", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
	
	/* U :: 개인 정보 수정 */
	@ApiOperation(value="개인정보수정을 위한 Restful API", response=User.class)
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@RequestBody User user) throws Exception {
		if(userService.updateUser(user))
			return new ResponseEntity<String>("개인 정보 수정 성공", HttpStatus.OK);
		return new ResponseEntity<String>("개인 정보 수정 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: ID 찾기 (등록된 이름과 휴대폰번호를 통해) */
	@ApiOperation(value="ID를 찾기위한 Restful API", response=User.class)
	@GetMapping("find/id")
	public ResponseEntity<String> findUEmail(String uName, int uPhone) throws Exception {
		if(userService.selectFindUEmail(uName, uPhone) > 0) {
			return new ResponseEntity<String>("이메일 찾기 성공", HttpStatus.OK);
		}
		return new ResponseEntity<String>("이메일 찾기 실패", HttpStatus.NO_CONTENT);
	}
	
	/* U :: PW 찾기[정확히는 등록된 이메일로 임시 비번 발급 및 업데이트] (등록된 이름, 휴대폰 그리고 이메일을 통해) */
	@ApiOperation(value="PW를 찾기위한 Restful API", response=User.class)
	@PutMapping("find/pw")
	public ResponseEntity<String> findUpassword(@RequestBody User user) throws Exception {
		// 1. 우선 해당 이메일의 이름,폰번호 일치한지 확인
		if(user.getuEmail() == userService.selectUEmailByNameAndPhone(user.getuName(), user.getuPhone())) {
			// 2. 일치하다면, 해당 이메일의 비밀번호 재발급 + 업데이트 
			// 3. 재발급한 번호 이메일로 보내기
			if(userService.findUPassword(user)) {
				userService.sendSimpleMessage(user.getuEmail());
				return new ResponseEntity<String>("비밀번호 찾기(재발급) 성공", HttpStatus.OK);
			}
			else {
				return new ResponseEntity<String>("비밀번호 찾기(재발급) 실패", HttpStatus.NO_CONTENT);
			}
		}else {
			return new ResponseEntity<String>("비밀번호 찾기(재발급) 실패", HttpStatus.NO_CONTENT);
		}
	}
	
	
	@ApiOperation(value="탈퇴를 위한 Restful API", response=User.class)
	@DeleteMapping("delete")
	public ResponseEntity<String> deleteUser(String uEmail) throws Exception {
		if(userService.deleteUser(uEmail))
			return new ResponseEntity<String>("탈퇴처리 성공", HttpStatus.OK);
		return new ResponseEntity<String>("탈퇴처리 실패", HttpStatus.NO_CONTENT);
	}
}

