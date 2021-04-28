package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemBuy;

@Mapper
public interface ItemBuyMapper {

	void insertItemBuy(ItemBuy itemBuy);

	void updateHaggle(ItemBuy itemBuy);

	void updateItemBuy(ItemBuy itemBuy);

}
