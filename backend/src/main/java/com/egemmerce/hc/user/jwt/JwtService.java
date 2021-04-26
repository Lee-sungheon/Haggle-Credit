package com.egemmerce.hc.user.jwt;

import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.egemmerce.hc.repository.dto.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : JwtService
 * 	- 토큰 생성 메소드
 * 	- 토큰 확인 메소드
 * 	- 토큰 분석 메소드
 *
 */
@Component
public class JwtService {
	
	/* 암호화 설정을 위한 임의 문자열 상수 */
	private final String signature = "HaggleCredit";
	
	/* 로그인 성공시, JWT Token 생성 */
	public String create(User user) {
		JwtBuilder jwtBuilder = Jwts.builder();
		jwtBuilder.setHeaderParam("typ", "JWT");
		// 토큰 제목 설정 및 해당 토큰의 유효기간설정(60분)
		jwtBuilder.setSubject("Login Token").setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60));
		// 토큰 암호화 처리
		jwtBuilder.signWith(SignatureAlgorithm.HS256, signature.getBytes());
		
		String jwt = jwtBuilder.compact();
		return jwt;
	}
	
	/* 생성되어 전달 받은 토큰 확인 처리 => 토큰 문제 발생 시, RuntimeException 처리 */
	public void checkValid(String jwt) {
		Jwts.parser().setSigningKey(signature.getBytes()).parseClaimsJws(jwt);
	}
	
	/* JWT Token 분석 => 필요한 정보 반환하기 위함 */
	public Map<String, Object> get(String jwt) {
		Jws<Claims> claims = null;
		try {
			claims = Jwts.parser().setSigningKey(signature.getBytes()).parseClaimsJws(jwt);
		} catch(final Exception e) {
			throw new RuntimeException();
		}
		return claims.getBody();
	}
}
