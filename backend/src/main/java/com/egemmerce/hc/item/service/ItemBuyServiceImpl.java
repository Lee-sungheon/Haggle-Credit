package com.egemmerce.hc.item.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.mapper.ItemBuyMapper;

@Service
public class ItemBuyServiceImpl implements ItemBuyService {
	
	@Autowired
	ItemBuyMapper itemBuyMapper;

	@Override
	public void insertItemBuy(ItemBuy itemBuy) {
		itemBuyMapper.insertItemBuy(itemBuy);
	}

	@Override
	public void updateHaggle(ItemBuy itemBuy) {
		itemBuyMapper.updateHaggle(itemBuy);
	}

	@Override
	public void updateItemBuy(ItemBuy itemBuy) {
		itemBuyMapper.updateItemBuy(itemBuy);
	}
}
