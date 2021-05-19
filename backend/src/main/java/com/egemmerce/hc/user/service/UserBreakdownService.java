package com.egemmerce.hc.user.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.BreakdownBid;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;

public interface UserBreakdownService {

	List<BreakdownBid> selectBidBreakdown(int uNo) throws Exception;

	List<ItemSellSet> selectSellMine(int uNo) throws Exception;

	List<ItemBuySet> selectBuyMine(int uNo) throws Exception;
	ItemBuySet selectItemBuySet(int iNo) throws Exception;
	ItemSellSet selectItemSellSet(int iNo) throws Exception;

	List<BreakdownBid> selectBidBreakdownBuy(int uNo);
}