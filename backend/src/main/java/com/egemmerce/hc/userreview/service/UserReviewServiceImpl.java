package com.egemmerce.hc.userreview.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.UserReview;
import com.egemmerce.hc.repository.mapper.UserReviewRepository;

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

public class UserReviewServiceImpl implements UserReviewService {

	private UserReviewRepository userReviewRepository;

	@Override
	public UserReview InsertUserReview(UserReview userReview) throws Exception {
		return userReviewRepository.save(userReview);
	}

	@Override
	public List<UserReview> selectUserReviewList(int urUserNo) {
		return userReviewRepository.findAllByurUserNo(urUserNo);
	}

	@Override
	public UserReview UpdateUserReview(UserReview userReview) throws Exception {
		UserReview check = userReviewRepository.findByurNo(userReview.getUrNo());
		check.setUrContent(userReview.getUrContent());
		check.setUrScore(userReview.getUrScore());
		return userReviewRepository.save(check);
	}

}
