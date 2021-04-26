package com.egemmerce.hc.user.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.user.jwt.JwtService;
import com.egemmerce.hc.user.service.UserService;

import io.swagger.annotations.ApiOperation;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : 로그인 처리를 위한 Login 컨트롤러 클래스
 * 	- 일반 로그인
 * 	- 카카오 로그인
 *
 */

@RestController
@RequestMapping("/login")
public class LoginController {
	/* jwt 서비스 객체 불러오기 */
	@Autowired
	private JwtService jwtService;
	
	/* User 서비스 객체 불러오기 */
	private UserService userService;
	
	/* 일반 로그인 */
	@ApiOperation(value="로그인 처리하는 Restful API", response=User.class)
	@PostMapping("/hc")
	public ResponseEntity<?> login(@RequestBody User user, HttpSession session) throws Exception {
		Map<String, Object> resultMap = new HashMap<>();
		User check = userService.login(user);
		
		if(check != null) {
			String token = jwtService.create(check);
			
			resultMap.put("auth-token", token);
			resultMap.put("uNo", check.getuNo());
			resultMap.put("uEmail", check.getuEmail());
			resultMap.put("uPassword", check.getuPassword());
			resultMap.put("uName", check.getuName());
			resultMap.put("uPhone", check.getuPhone());
			resultMap.put("uBirth", check.getuBirth());
			resultMap.put("uProvider", check.getuProvider());
			resultMap.put("uAuthority", check.getuAuthority());
			resultMap.put("uJoindate", check.getuJoindate());
			resultMap.put("uCredit", check.getuCredit());
			resultMap.put("uMoney", check.getuMoney());
			resultMap.put("uSalt", check.getuSalt());
			resultMap.put("uJwt", check.getuJwt());
			
			return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
		}
		resultMap.put("errorMessage", "로그인에 실패하였습니다.");
		return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.NO_CONTENT);
	}
	
	/* 카카오 로그인 */
	@ApiOperation(value="SNS(카카오) 로그인을 위한 Restful API", response=User.class)
	@PostMapping("/auth/kakao/callback")
	public ResponseEntity<?> kakaoCallback(@RequestBody User user, HttpServletResponse response, HttpSession session) throws Exception {
		User kakaoUser = new User();
		System.out.println(user.toString());
		kakaoUser.setuEmail(user.getuEmail());
		kakaoUser.setuPassword(user.getuPassword());
		kakaoUser.setuName(user.getuName());
		kakaoUser.setuProvider("kakao");
		
		// 가입자 혹은 비가입자 체크해서 처리
		try {
			User originUser = userService.selectUserLogin(kakaoUser);
			if(originUser == null) {
				userService.insertKakaoUser(kakaoUser);
				System.out.println("카카오 아이디로 회원가입 성공");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		User toLogin = userService.selectUserLogin(user);
		
		Map<String, Object> resultMap = new HashMap<>();
		User check = userService.loginKakao(toLogin);
		
		if(check != null) {
			String token = jwtService.create(check);
			
			resultMap.put("auth-token", token);
			resultMap.put("uNo", check.getuNo());
			resultMap.put("uEmail", check.getuEmail());
			resultMap.put("uPassword", check.getuPassword());
			resultMap.put("uName", check.getuName());
			resultMap.put("uPhone", check.getuPhone());
			resultMap.put("uBirth", check.getuBirth());
			resultMap.put("uProvider", check.getuProvider());
			resultMap.put("uAuthority", check.getuAuthority());
			resultMap.put("uJoindate", check.getuJoindate());
			resultMap.put("uCredit", check.getuCredit());
			resultMap.put("uMoney", check.getuMoney());
			resultMap.put("uSalt", check.getuSalt());
			resultMap.put("uJwt", check.getuJwt());
			resultMap.put("uAuthKey", check.getuAuthKey());
			return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
		}
		
		resultMap.put("errorMessage", "로그인에 실패하였습니다.");
		return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.NO_CONTENT);
	}
}
