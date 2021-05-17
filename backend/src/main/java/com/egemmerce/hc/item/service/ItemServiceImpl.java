package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.mapper.ItemMapper;
import com.egemmerce.hc.repository.mapper.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService{
	
	
	private final ItemRepository itemRepository;
	
	@Autowired
	private ItemMapper itemMapper;
	
	@Override
	public Item insert(Item item) {
		itemRepository.save(item);
		Item check=itemMapper.selectLast();
		return check;
	}


	@Override
	public Item updateItemDealCompleted(int isItemNo) {
		Item item=itemRepository.findByiNo(isItemNo);
		item.setiCompleted("true");
		return itemRepository.save(item);
	}


	@Override
	public Item selectItem(int iNo) {
		return itemRepository.findByiNo(iNo);
	}


	@Override
	public List<Item> selectAll() {
		return itemRepository.findAll();
	}

}
