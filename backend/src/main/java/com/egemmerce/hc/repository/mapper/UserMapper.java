package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

	void updateDownCredit(int isINo);

	void updateUpPenalty(int isINo);

}
