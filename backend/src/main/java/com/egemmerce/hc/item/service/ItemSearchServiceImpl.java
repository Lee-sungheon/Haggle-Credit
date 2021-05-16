package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
