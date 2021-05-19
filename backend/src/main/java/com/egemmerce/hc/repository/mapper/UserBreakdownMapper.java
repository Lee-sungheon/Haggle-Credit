package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.BreakdownBid;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;

@Mapper
public interface UserBreakdownMapper {
	public List<BreakdownBid> selectBidBreakdown(int uNo) throws Exception;
	public List<ItemSellSet> selectSellMine(int uNo) throws Exception;
	public List<ItemBuySet> selectBuyMine(int uNo) throws Exception;
	public ItemSellSet selectItemSellSet(int iNo) throws Exception;
	public ItemBuySet selectItemBuySet(int iNo) throws Exception;
	public List<BreakdownBid> selectBidBreakdownBuy(int uNo);
}
