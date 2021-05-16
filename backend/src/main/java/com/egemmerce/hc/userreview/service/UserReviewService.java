package com.egemmerce.hc.userreview.service;

import java.util.List;
import java.util.Map;

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

	public UserReview UpdateUserReview(UserReview userReview) throws Exception;

	/* R :: 내 상점 리뷰 보기 */
	public List<Map<String, Object>> selectMyReviews(int uNo, int page) throws Exception;

	/* C :: (남의프로필에서) 리뷰 작성하기(거래확정되어야만가능) */
	public int insertReview(UserReview userReview) throws Exception;

	/* R :: (나의프로필에서) 내가 쓴 리뷰 보기 */
	public List<Map<String, Object>> selectMyWrittenReviews(int uNo, int page) throws Exception;

	/* R :: (남의프로필에서) 해당 유저에게 달린 리뷰 보기 */
	public List<UserReview> selectOtherReviews(int uNo) throws Exception;

	/* R :: 내 상점 전체 리뷰 수 */
	public Integer countUserReviews(int urUserNo);

}
