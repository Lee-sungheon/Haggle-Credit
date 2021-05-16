package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemSearchResult;

public interface ItemSearchService {

	/* 상품으로 분류되어 판매상품 검색 */
	List<ItemSearchResult> SelectSellSearching(String word) throws Exception;

	/* 상품으로 분류되어 구매상품 검색 */
	List<ItemSearchResult> SelectBuySearching(String word) throws Exception;

}