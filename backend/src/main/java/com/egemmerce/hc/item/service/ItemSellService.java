package com.egemmerce.hc.item.service;

import com.egemmerce.hc.repository.dto.ItemSell;

public interface ItemSellService {

	void insertItemSell(ItemSell itemSell);

	void updateHaggle(ItemSell itemSell);

	void updateItemSell(ItemSell itemSell);

	ItemSell searchByIsINo(Integer i);

	ItemSell searchByCategoryMain(Integer i);

}
