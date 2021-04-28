package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.mapper.ItemMapper;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	ItemMapper itemMapper;

	@Override
	public void insertItem(String type) {
		itemMapper.insertItem(type);
	}

	@Override
	public int getIno(String type) {
		return itemMapper.getIno(type);
	}

	@Override
	public List<Integer> searchByType(String type) {
		return itemMapper.searchIno(type);
	}

	@Override
	public void deleteItem(int isINo) {
		itemMapper.deleteItem(isINo);
	}

}
