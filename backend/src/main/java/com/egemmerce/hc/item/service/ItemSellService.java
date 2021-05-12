package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.egemmerce.hc.repository.dto.ItemSell;

public interface ItemSellService {

	/* C :: 상품 등록 */
	ItemSell insertItemSell(ItemSell itemSell);

	/* R :: 상품 전체 조회 */
	Page<ItemSell> selectItemSellAll(Pageable pageable);

	/* D :: 상품 삭제 */
	boolean deleteItemSell(int isItemNo);

	Page<ItemSell> selectItemSellByisName(String isName, Pageable pageable);

	/*상품 업데이트*/
	ItemSell updateItemSell(ItemSell itemSell);

	/*itemsell 조회*/
	ItemSell selectItemSellbyisItemNo(int isItemNo);

	ItemSell updateAuctionPrice(ItemSell itemSell);






}