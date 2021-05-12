package com.egemmerce.hc.userreview.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.UserReview;
import com.egemmerce.hc.userreview.service.UserReviewService;

/**
 * 
 * @Date : 2021. 5. 11.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 사용자 리뷰 관련 컨트롤러 클래스
 * @Description : 리뷰 업로드
 *
 */

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/review")
public class UserReviewController {

	@Autowired
	private UserReviewService userReviewService;
	
	/* C :: 리뷰 등록 */
	@PostMapping("/add")
	public ResponseEntity<String> InsertUserReview(@RequestBody UserReview userReview, HttpServletRequest request) throws Exception {
		userReview.generateurWriteDate();
		userReviewService.InsertUserReview(userReview);
		return new ResponseEntity<String>(userReview.getUrWriteUserNo() + "리뷰 등록 성공", HttpStatus.OK);
	}
	
	/* R :: 리뷰 조회 */
	@GetMapping("/all")
	public ResponseEntity<List<UserReview>> selectByurUserNo(int urUserNo) throws Exception {
		return new ResponseEntity<List<UserReview>>(userReviewService.selectUserReviewList(urUserNo), HttpStatus.OK);
	}
	
	/* U :: 리뷰 수정 */
	@PostMapping("/update")
	public ResponseEntity<String> UpdateUserReview(@RequestBody UserReview userReview, HttpServletRequest request) throws Exception {
		userReviewService.UpdateUserReview(userReview);
		return new ResponseEntity<String>(userReview.getUrContent() + "리뷰 수정 성공", HttpStatus.OK);
	}
}
