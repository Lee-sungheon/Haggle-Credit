package com.egemmerce.hc.item.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.mapper.ItemSellMapper;

@Service
public class ItemSellServiceImpl implements ItemSellService {

	@Autowired
	ItemSellMapper itemSellMapper;
	@Override
	public void insertItemSell(ItemSell itemSell) {
		itemSellMapper.insertItemSell(itemSell);
	}
	@Override
	public void updateHaggle(ItemSell itemSell) {
		itemSellMapper.updateHaggle(itemSell);
	}
	@Override
	public void updateItemSell(ItemSell itemSell) {
		itemSellMapper.updateItemSell(itemSell);
	}
	@Override
	public ItemSell searchByIsINo(Integer i) {
		return itemSellMapper.searchByIsINo(i);
	}
	@Override
	public ItemSell searchByCategoryMain(Integer i) {
		return itemSellMapper.searchByCategoryMain(i);
	}


}
