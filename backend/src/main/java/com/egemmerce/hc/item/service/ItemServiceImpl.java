package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.mapper.ItemMapper;

@Service
public class ItemServiceImpl implements ItemService {
	@Autowired
	private ItemMapper itemMapper;
	
	/* C :: 상품 등록 */
	@Override
	public int insertItem(Item item) throws Exception {
		return itemMapper.insertItem(item);
	}
	
	/* R :: 상품 전체 조회 */
	@Override
	public List<Item> selectItemAll() throws Exception {
		return itemMapper.selectItemAll();
	}
	
	/* R :: 상품 조회(판매/구매) */
	@Override
	public List<Item> selectItemByType(String iType) throws Exception {
		return itemMapper.selectItemListByType(iType);
	}
	
	/* U :: 상품 업데이트 */
	@Override
	public boolean updateItemDealCompleted(Item item) throws Exception {
		if(itemMapper.updateItemDealCompleted(item)) {
			System.out.println("상품 거래 완료 처리 완료");
			return true;
		} else {
			return false;
		}
	}
	
	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItem(int iNo) throws Exception {
		if(itemMapper.deleteItem(iNo))
			return true;
		return false;
	}
}
