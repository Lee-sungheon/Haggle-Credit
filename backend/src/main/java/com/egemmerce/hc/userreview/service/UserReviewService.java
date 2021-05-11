package com.egemmerce.hc.userreview.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.UserReview;

/**
 * 
 * @Date : 2021. 5. 11.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 사용자 리뷰 관련 서비스 클래스
 * @Description : 리뷰 업로드
 *
 */

public interface UserReviewService {

	public UserReview InsertUserReview(UserReview userReview) throws Exception;
	
	public List<UserReview> selectUserReviewList();
	
	public UserReview UpdateUserReview(UserReview userReview) throws Exception;
}
