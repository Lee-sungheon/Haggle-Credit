package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.CtgrCountSet;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

public interface ItemSearchService {

	List<ItemSellSet> searchingSellDown(SortProcess sp) throws Exception;

	List<ItemSellSet> searchingSellUp(SortProcess sp) throws Exception;
	
	public List<CtgrCountSet> searchingCount(String word) throws Exception;
	public List<ItemBuySet> searchingBuyDown(SortProcess sp) throws Exception;
	
	public List<ItemBuySet> searchingBuyUp(SortProcess sp) throws Exception;
	public List<CtgrCountSet> searchingCount2(String word) throws Exception;

}