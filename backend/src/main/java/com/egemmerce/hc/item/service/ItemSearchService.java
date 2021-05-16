package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

public interface ItemSearchService {

	List<ItemSellSet> searchingSellDown(SortProcess sp) throws Exception;

	List<ItemSellSet> searchingSellUp(SortProcess sp) throws Exception;

}