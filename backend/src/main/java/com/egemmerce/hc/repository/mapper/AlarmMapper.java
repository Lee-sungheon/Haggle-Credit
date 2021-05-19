package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Alarm;

@Mapper
public interface AlarmMapper {
	
	void insert(Alarm alarm);
}
