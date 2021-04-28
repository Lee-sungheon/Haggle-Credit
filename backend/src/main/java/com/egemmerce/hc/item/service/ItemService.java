package com.egemmerce.hc.item.service;

import java.util.List;

public interface ItemService {

	public void insertItem(String type);

	public int getIno(String type);

	public List<Integer> searchByType(String type);

	public void deleteItem(int isINo);

}
