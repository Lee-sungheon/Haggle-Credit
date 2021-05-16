package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemSearchResult;
import com.egemmerce.hc.repository.mapper.ItemSearchMapper;

@Service
public class ItemSearchServiceImpl implements ItemSearchService {

	@Autowired
	private ItemSearchMapper itemSearchMapper;
	
//	/* 카테고리로 분류되어 검색 */
//	public List<ItemSearchResult> SelectCategorySearching(String word) throws Exception {
//		return itemSearchMapper.selectCategorySearching(word)
//	}
	
	/* 상품으로 분류되어 판매상품 검색 */
	@Override
	public List<ItemSearchResult> SelectSellSearching(String word) throws Exception {
		return itemSearchMapper.selectSellSearching(word);
	}
	
	/* 상품으로 분류되어 구매상품 검색 */
	@Override
	public List<ItemSearchResult> SelectBuySearching(String word) throws Exception {
		return itemSearchMapper.selectBuySearching(word);
	}
}
