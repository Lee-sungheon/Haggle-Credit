package com.egemmerce.hc.repository.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.UserReview;

@Mapper
public interface UserReviewMapper {

	/* C :: (남의프로필에서) 리뷰 작성하기(거래확정되어야만가능) */
	public int insertReview(UserReview userReview) throws Exception;

	/* R :: (나의프로필에서) 내가 쓴 리뷰 보기 */
	public List<Map<String, Object>> selectMyWrittenReviews(int uNo, int page) throws Exception;

	/* R :: 내 상점 리뷰 보기 */
	public List<Map<String, Object>> selectMyReviews(int uNo, int page) throws Exception;

	/* R :: (남의프로필에서) 해당 유저에게 달린 리뷰 보기 */
	public List<UserReview> selectOtherReviews(int uNo) throws Exception;

	/* R :: 내 상점 전체 리뷰 수 */
	public Integer countUserReviews(int urUserNo);
}
