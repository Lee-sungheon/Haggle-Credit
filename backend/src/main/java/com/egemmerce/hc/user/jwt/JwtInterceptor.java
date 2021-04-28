package com.egemmerce.hc.user.jwt;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : JWT Interceptor
 * 	- 프론트에서 받아온 데이터를 백엔드에서 보내기전, 그리고 백엔드에서 프론트로 값을 보내기전 인터셉터해서
 * 		토큰 확인
 *
 */

@Component
public class JwtInterceptor implements HandlerInterceptor {
	
	/* JWT 서비스 객체 불러오기 */
	@Autowired
	private JwtService jwtService;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object hanlder) throws Exception {
		if(request.getMethod().contentEquals("OPTION")) {
			return true;
		} else {
			String token = request.getHeader("auth-token");
			if(token != null && token.length() > 0) {	// request 분석해서 auth-token에 해당하는 값이 존재하기라도 한다면
				jwtService.checkValid(token);			// 토큰 일치한지 체크
				return true;
			} else {
				throw new RuntimeException("인증 토큰 만료");
			}
		}
	}
	
}
