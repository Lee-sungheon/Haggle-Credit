package com.egemmerce.hc.repository.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.UserReview;

@Transactional
public interface UserReviewRepository extends JpaRepository<UserReview, Long> {

	UserReview findByurNo(int urNo);

}
