package com.egemmerce.hc.userreview.controller;

import java.util.List;
import java.util.Map;

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
	public ResponseEntity<String> InsertUserReview(@RequestBody UserReview userReview, HttpServletRequest request)
			throws Exception {
		userReview.generateurWriteDate();
		userReviewService.InsertUserReview(userReview);
		return new ResponseEntity<String>(userReview.getUrWriteUserNo() + "리뷰 등록 성공", HttpStatus.OK);
	}

	/* R :: 내 상점 리뷰 보기 */
	@GetMapping("/mystore")
	public ResponseEntity<List<Map<String, Object>>> SelectMyReviews(int uNo, int page) throws Exception {
		page = (page - 1) * 10;
		return new ResponseEntity<List<Map<String, Object>>>(userReviewService.selectMyReviews(uNo, page), HttpStatus.OK);
	}

	/* U :: 리뷰 수정 */
	@PostMapping("/update")
	public ResponseEntity<String> UpdateUserReview(@RequestBody UserReview userReview, HttpServletRequest request)
			throws Exception {
		userReviewService.UpdateUserReview(userReview);
		return new ResponseEntity<String>(userReview.getUrContent() + "리뷰 수정 성공", HttpStatus.OK);
	}

	/* C :: (남의프로필에서) 리뷰 작성하기(거래확정되어야만가능) */
	@PostMapping("writing")
	public ResponseEntity<String> InsertReview(@RequestBody UserReview userReview) throws Exception {
		if (userReviewService.insertReview(userReview) > 0)
			return new ResponseEntity<String>("리뷰 추가 성공", HttpStatus.OK);
		return new ResponseEntity<String>("리뷰 추가 실패", HttpStatus.NO_CONTENT);
	}

	/* R :: (나의프로필에서) 내가 쓴 리뷰 보기 */
	@GetMapping("/myWritten")
	public ResponseEntity<List<Map<String, Object>>> SelectMyWrittenReviews(int uNo, int page) throws Exception {
		page = (page - 1) * 10;
		return new ResponseEntity<List<Map<String, Object>>>(userReviewService.selectMyWrittenReviews(uNo, page), HttpStatus.OK);
	}

	/* R :: (남의프로필에서) 해당 유저에게 달린 리뷰 보기 */
	@GetMapping("theirs")
	public ResponseEntity<List<UserReview>> SelectYourReviews(int uNo) throws Exception {
		return new ResponseEntity<List<UserReview>>(userReviewService.selectOtherReviews(uNo), HttpStatus.OK);
	}
	
	/* R :: 내 상점 전체 리뷰 수 */
	@GetMapping("/count")
	public ResponseEntity<Integer> countUserReviews(int urUserNo) throws Exception {
		return new ResponseEntity<Integer>(userReviewService.countUserReviews(urUserNo), HttpStatus.OK);
	}
}
