package com.egemmerce.hc.item.service;

import com.egemmerce.hc.repository.dto.Item;

public interface ItemService {

	Item insert(Item item);

	Item updateItemDealCompleted(int isItemNo);
	
	Item selectItem(int iNo);

}
