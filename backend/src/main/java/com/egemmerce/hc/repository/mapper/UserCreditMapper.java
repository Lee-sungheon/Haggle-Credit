package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.UserCredit;

@Mapper
public interface UserCreditMapper {

	void insert(UserCredit uc);

}
