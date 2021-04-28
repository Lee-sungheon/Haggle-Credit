package com.egemmerce.hc;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : 공통 처리
 * 	- 에러 떴을 때, 처리 페이지
 *
 */
@Controller
public class RootController implements ErrorController {
	
	@GetMapping("/error")
	public String redirectRoot() {
		return "index.html";
	}
	
	@Override
	public String getErrorPath() {
		return "/error";
	}
}
