package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.CtgrCountSet;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;
import com.egemmerce.hc.repository.mapper.ItemSearchMapper;

@Service
public class ItemSearchServiceImpl implements ItemSearchService {


	@Autowired
	private ItemSearchMapper mapper;
	
	
	@Override
	public List<ItemSellSet> searchingSellDown(SortProcess sp) throws Exception {
		return mapper.searchingSellDown(sp);
	}
	
	@Override
	public List<ItemSellSet> searchingSellUp(SortProcess sp) throws Exception {
		return mapper.searchingSellUp(sp);
	}
	
	@Override
	public List<CtgrCountSet> searchingCount(String word) throws Exception {
		return mapper.searchingCount(word);
	}
	
	@Override
	public List<ItemBuySet> searchingBuyDown(SortProcess sp) throws Exception {
		return mapper.searchingBuyDown(sp);
	}
	
	@Override
	public List<ItemBuySet> searchingBuyUp(SortProcess sp) throws Exception {
		return mapper.searchingBuyUp(sp);
	}
	
	@Override
	public List<CtgrCountSet> searchingCount2(String word) throws Exception {
		return mapper.searchingCount2(word);
	}
}
