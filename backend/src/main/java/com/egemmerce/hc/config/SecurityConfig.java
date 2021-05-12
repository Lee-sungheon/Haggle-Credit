package com.egemmerce.hc.config;

import javax.sql.DataSource;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import com.egemmerce.hc.user.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	private final DataSource dataSource;
	private final UserServiceImpl userServiceImpl;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.mvcMatchers("/", "/user/*","/login/*")
				.permitAll().mvcMatchers(HttpMethod.GET, "/profile/*").permitAll().anyRequest().authenticated();
		
		http.rememberMe().userDetailsService(userServiceImpl).tokenRepository(tokenRepository());

	}
	
	@Bean
	public PersistentTokenRepository tokenRepository() {
		JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
		jdbcTokenRepository.setDataSource(dataSource);
		return jdbcTokenRepository;
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring()
				.antMatchers("/user/**")
				.antMatchers("/item/**")
				.antMatchers("/itemSell/**")
				.antMatchers("/itemBuy/**")
				.antMatchers("/**")
				.antMatchers("/chat/**")
				.antMatchers("/login/**")
				.antMatchers("/v2/**")
				.antMatchers("/webjars/**")
				.antMatchers("/swagger**")
				.antMatchers("/swagger-resources/**").mvcMatchers("/node_modules/**")
				.requestMatchers(PathRequest.toStaticResources().atCommonLocations());
		
		
	}
}
