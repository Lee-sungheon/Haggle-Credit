package com.egemmerce.hc.userreview.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.UserReview;
import com.egemmerce.hc.repository.mapper.UserReviewMapper;
import com.egemmerce.hc.repository.mapper.UserReviewRepository;

import lombok.RequiredArgsConstructor;

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
@Service
@RequiredArgsConstructor
public class UserReviewServiceImpl implements UserReviewService {

	private UserReviewRepository userReviewRepository;

	@Autowired
	private UserReviewMapper userReviewMapper;
	
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

	/* C :: (남의프로필에서) 리뷰 작성하기(거래확정되어야만가능) */ 
	@Override
	public int insertReview(UserReview userReview) throws Exception {
		return userReviewMapper.insertReview(userReview);
	}
	/* R :: (나의프로필에서) 내가 쓴 리뷰 보기 */
	@Override
	public List<UserReview> selectMyWrittenReviews(int uNo) throws Exception {
		return userReviewMapper.selectMyWrittenReviews(uNo);
	}
	
	/* R :: (나의프로필에서) 나에게 달린 리뷰 보기 */
	@Override
	public List<UserReview> selectMyReviews(int uNo) throws Exception {
		return userReviewMapper.selectMyReviews(uNo);
	}
	
	/* R :: (남의프로필에서) 해당 유저에게 달린 리뷰 보기 */
	@Override
	public List<UserReview> selectOtherReviews(int uNo) throws Exception {
		return userReviewMapper.selectOtherReviews(uNo);
	}

	
}
