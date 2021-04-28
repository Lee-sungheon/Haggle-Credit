package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ItemMapper {

	void insertItem(String type);

	int getIno(String type);

	List<Integer> searchIno(String type);

	void deleteItem(int isINo);


}
