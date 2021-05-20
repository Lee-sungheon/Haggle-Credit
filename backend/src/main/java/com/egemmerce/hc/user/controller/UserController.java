package com.egemmerce.hc.user.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.user.service.UserService;
import com.fasterxml.jackson.databind.deser.impl.ExternalTypeHandler.Builder;

import io.swagger.annotations.ApiOperation;

/**
 * 
 * @Date 2021. 4. 26.
 * @Title Haggle-Credit Backend
 * @Description : 유저와 관련된 기능 연결을 위한 User Controller 클래스 - 가입 / 탈퇴 - 개인정보 조회/수정 -
 *              ID/PW 찾기 - +++ 유저와 관련된 기능 당연히 추가되어야함. (판매/구매/계좌/포인트/내역 등등등...)
 */

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;

	/* C :: 회원 가입 */
	@ApiOperation(value = "회원가입을 위한 Restful API(uEmail,uPassword,uBirth(yyyy-mm-dd),uName,uPhone)", response = User.class)
	@PostMapping("/join")
	public ResponseEntity<String> createUser(@RequestBody User user, HttpServletRequest request) throws Exception {
		if (userService.insertUser(user) != null) {
			userService.mailSendWithUserKey(user);
			return new ResponseEntity<String>(user.getuEmail() + "계정 가입 성공", HttpStatus.OK);
		}
		return new ResponseEntity<String>("계정 가입 실패", HttpStatus.NO_CONTENT);
	}

	/* 일반 로그인 */
	@ApiOperation(value = "로그인 처리하는 Restful API(uEmail,uPassword)", response = User.class)
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user, HttpSession session) throws Exception {
		User check = userService.login(user);

		if (check != null) {
			return new ResponseEntity<User>(check, HttpStatus.OK);
		}
		return new ResponseEntity<String>("로그인 실패", HttpStatus.NO_CONTENT);
	}

	@GetMapping("/key_alter")
	public ResponseEntity<String> key_alterConfirm(@RequestParam("email") String uEmail, @RequestParam("token") String uAuthKey)
			throws Exception {
		System.out.println("email : " + uEmail);
		System.out.println("token : " + uAuthKey);
		if(userService.alter_userKey_service(uEmail, uAuthKey)) {
			
			return new ResponseEntity<String>("인증 완료", HttpStatus.OK);
		}
		return new ResponseEntity<String>("인증 실패", HttpStatus.OK);
	}

	/* R :: 가입 중 아이디 중복 확인 */
	@ApiOperation(value = "단순 아이디 중복확인을 위한 Restful API", response = User.class)
	@GetMapping("/check/id")
	public ResponseEntity<String> reviewCheckUEmail(String uEmail) throws Exception {
		User user = userService.checkUEmail(uEmail);
		if (user == null) {
			return new ResponseEntity<String>("사용 가능한 아이디 입니다.", HttpStatus.OK);

		} else {
			return new ResponseEntity<String>("중복된 아이디가 존재합니다.", HttpStatus.OK);

		}
	}

	/* R :: 개인 정보 전체 조회 [토큰으로 확인] */
	@ApiOperation(value = "개인정보 조회를 위한 Restful API", response = User.class)
	@GetMapping("/mypage")
	public ResponseEntity<?> reviewUser(User user) {
		System.out.println(user.getuEmail());
		User check = userService.selectUserByEmail(user.getuEmail());
		if (check != null) {
			return new ResponseEntity<User>(check, HttpStatus.OK);
		}
		return new ResponseEntity<String>("개인정보가 없음", HttpStatus.NO_CONTENT);
	}
	/* R :: 현재 크레딧 조회 */
	@ApiOperation(value = "현재 크래딧 조회 Restful API", response = User.class)
	@GetMapping("/mycredit")
	public ResponseEntity<?> myCredit(int uNo) {
		int credit=userService.selectMyCredit(uNo);
		return new ResponseEntity<Integer>(credit, HttpStatus.OK);
	}
	/* R :: 개인 정보 전체 조회 [토큰으로 확인] */
	@ApiOperation(value = "개인정보 조회를 위한 Restful API", response = User.class)
	@GetMapping("/myinfo")
	public ResponseEntity<?> selectUserByuNo(int uNo) {
		User check = userService.selectUserByuNo(uNo);
		if (check != null) {
			return new ResponseEntity<User>(check, HttpStatus.OK);
		}
		return new ResponseEntity<String>("개인정보가 없음", HttpStatus.NO_CONTENT);
	}

	/* U :: 개인 정보 수정 */
	@ApiOperation(value = "개인정보수정을 위한 Restful API", response = User.class)
	@PutMapping("/update")
	public ResponseEntity<?> updateUser(@RequestBody User user) throws Exception {
		User check=userService.updateUser(user);
		if (check!=null)
			return new ResponseEntity<User>(check, HttpStatus.OK);
		return new ResponseEntity<String>("개인 정보 수정 실패", HttpStatus.NO_CONTENT);
	}
	/* U :: 뱅크 정보 수정 */
	@ApiOperation(value = "뱅크수정을 위한 Restful API", response = User.class)
	@PutMapping("/updateBank")
	public ResponseEntity<?> updateUserBank(@RequestBody User user) throws Exception {
		User check=userService.updateUserBank(user.getuNo(),user.getuBankName(),user.getuBankNo());
		if (check!=null)
			return new ResponseEntity<User>(check, HttpStatus.OK);
		return new ResponseEntity<String>("개인 정보 수정 실패", HttpStatus.NO_CONTENT);
	}

	/* R :: ID 찾기 (등록된 이름과 휴대폰번호를 통해) */
	@ApiOperation(value = "ID를 찾기위한 Restful API", response = User.class)
	@GetMapping("/find/id")
	public ResponseEntity<String> findUEmail(String uName, int uPhone) throws Exception {
		User check=userService.selectFindUEmail(uName, uPhone);
		if (check != null) {
			return new ResponseEntity<String>(check.getuEmail(), HttpStatus.OK);
		}
		return new ResponseEntity<String>("이메일 찾기 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: PW 찾기[정확히는 등록된 이메일로 임시 비번 발급 및 업데이트] (등록된 이름, 휴대폰 그리고 이메일을 통해) */
	@ApiOperation(value = "PW를 찾기위한 Restful API", response = User.class)
	@PutMapping("/find/pw")
	public ResponseEntity<String> findUpassword(@RequestBody User user) throws Exception {
		// 1. 우선 해당 이메일의 이름,폰번호 일치한지 확인
		if (userService.selectUserByEmail(user.getuEmail()) != null) {
			// 2. 일치하다면, 해당 이메일의 비밀번호 재발급 + 업데이트
			// 3. 재발급한 번호 이메일로 보내기
			if (userService.findUPassword(user) != null) {
				userService.sendSimpleMessage(user.getuEmail());
				return new ResponseEntity<String>("비밀번호 찾기(재발급) 성공", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("비밀번호 찾기(재발급) 실패", HttpStatus.NO_CONTENT);
			}
		} else {
			return new ResponseEntity<String>("비밀번호 찾기(재발급) 실패", HttpStatus.NO_CONTENT);
		}
	}

	@ApiOperation(value = "탈퇴를 위한 Restful API", response = User.class)
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUser(String uEmail) throws Exception {
		if (userService.deleteUser(uEmail) == null)
			return new ResponseEntity<String>("탈퇴처리 성공", HttpStatus.OK);
		return new ResponseEntity<String>("탈퇴처리 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: credit 충전 */
	@ApiOperation(value = "Credit 충전 Restful API(uNo,uCredit)", response = User.class)
	@PutMapping("/chargeCredit")
	public ResponseEntity<?> chargeCredit(@RequestBody User user) {
		User check=userService.chargeCredit(user.getuNo(),user.getuCredit());
		if (check!=null) {
			return new ResponseEntity<User>(check, HttpStatus.OK);
		}
		return new ResponseEntity<String>("충전 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: credit 출금 */
	@ApiOperation(value = "Credit 출금 Restful API(uNo,uCredit)", response = User.class)
	@PutMapping("/withdrawCredit")
	public ResponseEntity<?> withdrawCredit(@RequestBody User user) {
		User check=userService.withdrawCredit(user.getuNo(), user.getuCredit());
		if (check!=null) {
			return new ResponseEntity<User>(check, HttpStatus.OK);
		}
		return new ResponseEntity<String>("출금 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: 비밀번호 수정 */
	@ApiOperation(value = "비밀번호 수정을 위한 Restful API(uNo,uPassword)", response = User.class)
	@PutMapping("/updatePass")
	public ResponseEntity<?> updatePass(@RequestBody User user) throws Exception {
		User check=userService.updatePass(user);
		if (check!=null)
			return new ResponseEntity<User>(check, HttpStatus.OK);
		return new ResponseEntity<String>("개인 정보 수정 실패", HttpStatus.NO_CONTENT);
	}
}
