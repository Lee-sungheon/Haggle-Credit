package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.egemmerce.hc.repository.dto.ItemBuy;

public interface ItemBuyService {

	/* C :: 상품 등록 */
	ItemBuy insertItemBuy(ItemBuy itemBuy);

	/* R :: 상품 전체 조회 */
	Page<ItemBuy> selectItemBuyAll(Pageable pageable);

	/* D :: 상품 삭제 */
	boolean deleteItemBuy(int ibItemNo);

	Page<ItemBuy> selectItemBuyByibName(String ibName, Pageable pageable);

	/* 상품 업데이트 */
	ItemBuy updateItemBuy(ItemBuy itemBuy);

	/* R :: 상품 조회 */
	ItemBuy selectItemBuybyibItemNo(int ibItemNo);

	ItemBuy updateReverseAuctionPrice(int ibItemNo, int ibAuctionPrice);

	List<ItemBuy> selectMyItemByuNo(int uNo);

	void updateItemByCool(int isItemNo, int uNo);

}