package com.egemmerce.hc.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.EmailConfirm;
import com.egemmerce.hc.user.service.UserEmailService;
import com.egemmerce.hc.user.service.UserEmailServiceImpl;

@RestController
@RequestMapping("user/join/service")
public class UserEmailController {
	@Autowired
	UserEmailService userEmailService;
	
	private static String password = UserEmailServiceImpl.ePw;
	
	@PostMapping("/mail")
	public ResponseEntity<String> emailConfirm(String uEmail) throws Exception {
		System.out.println("수신 이메일 : " + uEmail);
		userEmailService.sendSimpleMessage(uEmail);
		return new ResponseEntity<String>("코드 전송 성공", HttpStatus.OK);
	}
	
	@PostMapping("/verifyCode")
	public ResponseEntity<String> verifyCode(EmailConfirm emailConfirm) throws Exception {
		EmailConfirm check = userEmailService.selectEmailConfirm(emailConfirm);
		if(emailConfirm.geteConfirm().equals(check.geteConfirm())) {
			return new ResponseEntity<String>("코드 인증 성공", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>(password, HttpStatus.OK);
		}
	}
}
