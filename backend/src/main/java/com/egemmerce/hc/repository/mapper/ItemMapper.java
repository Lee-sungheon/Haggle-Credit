package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Item;

@Mapper
public interface ItemMapper {

	Item selectLast();
	
	
}
