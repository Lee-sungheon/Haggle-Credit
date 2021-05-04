package com.egemmerce.hc.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfig {

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests()
//				.mvcMatchers("/", "/user/*","/login/*")
//				.permitAll().mvcMatchers(HttpMethod.GET, "/profile/*").permitAll().anyRequest().authenticated();
//
//	}
//
//	@Override
//	public void configure(WebSecurity web) throws Exception {
//		web.ignoring()
//				.antMatchers("/user/*")
//				.antMatchers("/login/**")
//				.antMatchers("/v2/**")
//				.antMatchers("/webjars/**")
//				.antMatchers("/swagger**")
//				.antMatchers("/swagger-resources/**").mvcMatchers("/node_modules/**")
//				.requestMatchers(PathRequest.toStaticResources().atCommonLocations());
//		
//		
//	}
}
