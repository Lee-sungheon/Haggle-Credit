package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSearchMapper {
	
	/* 판매상품 기준 검색 (내림,오름차순)*/
	public List<ItemSellSet> searchingSellDown(SortProcess sortProcess) throws Exception;
	public List<ItemSellSet> searchingSellUp(SortProcess sortProcess) throws Exception;
	
	/* 구매상품 기준 검색 */

}
