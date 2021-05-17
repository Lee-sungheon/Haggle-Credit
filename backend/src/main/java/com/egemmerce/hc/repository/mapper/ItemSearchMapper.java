package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.CtgrCountSet;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSearchMapper {
	
	/* 판매상품 기준 검색 (내림,오름차순)*/
	public List<ItemSellSet> searchingSellDown(SortProcess sortProcess) throws Exception;
	public List<ItemSellSet> searchingSellUp(SortProcess sortProcess) throws Exception;
	
	/* 상품 검색 카테고리 개수 출력 */
	public List<CtgrCountSet> searchingCount(String word) throws Exception;
	
	/* 구매상품 기준 검색 (내림,오름차순)*/
	public List<ItemBuySet> searchingBuyDown(SortProcess sortProcess) throws Exception;
	public List<ItemBuySet> searchingBuyUp(SortProcess sortProcess) throws Exception;
	
	/* 구매상품 검색 카테고리 개수 출력 */
	public List<CtgrCountSet> searchingCount2(String word) throws Exception;
}
