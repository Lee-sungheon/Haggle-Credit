package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.User;

@Mapper
public interface UserMapper {

	void insertCredit(User user);


}
