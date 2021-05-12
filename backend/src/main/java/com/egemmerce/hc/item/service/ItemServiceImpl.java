package com.egemmerce.hc.item.service;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.mapper.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
	
	
	private final ItemRepository itemRepository;
	
	
	@Override
	public Item insert(Item item) {
		return itemRepository.save(item);
	}


	@Override
	public Item updateItemDealCompleted(int isItemNo) {
		Item item=itemRepository.findByiNo(isItemNo);
		item.setiCompleted("true");
		return itemRepository.save(item);
	}

}
