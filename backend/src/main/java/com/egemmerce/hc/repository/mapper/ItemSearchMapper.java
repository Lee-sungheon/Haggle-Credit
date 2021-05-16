package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSearchResult;

@Mapper
public interface ItemSearchMapper {
//	public List<ItemSearchResult> selectCategorySearching(String word) throws Exception;
	public List<ItemSearchResult> selectSellSearching(String word) throws Exception;
	public List<ItemSearchResult> selectBuySearching(String word) throws Exception;
}
