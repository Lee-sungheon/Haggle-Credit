package com.egemmerce.hc;

import java.util.TimeZone;

import javax.annotation.PostConstruct;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : 애플리케이션 실행
 *
 */
@PropertySource("classpath:/config.properties")
@SpringBootApplication
@MapperScan(basePackages = "com.egemmerce.hc.repository.mapper")
public class RootApplication implements WebMvcConfigurer {

	/* 메인 메소드 실행 */
	public static void main(String[] args) {
		SpringApplication.run(RootApplication.class, args);
	}

	/* 시큐리티 적용하면, 고쳐질수 있는 부분? */
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*")
				.exposedHeaders("auth-token");
	}

	@PostConstruct
	public void setTimezone() {
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
	}
}
