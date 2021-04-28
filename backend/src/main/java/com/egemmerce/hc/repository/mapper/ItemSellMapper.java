package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSell;

@Mapper
public interface ItemSellMapper {

	void insertItemSell(ItemSell itemSell);

	void updateItemSell(ItemSell itemSell);

	void updateHaggle(ItemSell itemSell);

	ItemSell searchByIsINo(Integer i);

	ItemSell searchByCategoryMain(Integer i);

}
