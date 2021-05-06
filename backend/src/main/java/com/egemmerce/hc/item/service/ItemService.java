package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.Item;

public interface ItemService {

	/* C :: 상품 등록 */
	Item insertItem(Item item) throws Exception;

	/* R :: 상품 전체 조회 */
	List<Item> selectItemAll() throws Exception;

	/* R :: 상품 조회(판매/구매) */
	List<Item> selectItemByType(String iType) throws Exception;

	/* U :: 상품 업데이트 (거래 상태) */
	Item updateItemDealCompleted(Item item) throws Exception;

	/* D :: 상품 삭제 */
	boolean deleteItem(int iNo) throws Exception;

	List<Item> selectItemByiName(String iName);

}