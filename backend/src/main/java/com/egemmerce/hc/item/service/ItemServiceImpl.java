package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.mapper.ItemMapper;
import com.egemmerce.hc.repository.mapper.ItemRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
	@Autowired
	private ItemMapper itemMapper;
	
	private final ItemRepository itemRepository;
	/* C :: 상품 등록 */
	@Override
	public Item insertItem(Item item) throws Exception {
		return itemRepository.save(item);
	}
	
	/* R :: 상품 전체 조회 */
	@Override
	public List<Item> selectItemAll() throws Exception {
		return itemRepository.findAll();
	}
	
	/* R :: 상품 조회(판매/구매) */
	@Override
	public List<Item> selectItemByType(String iType) throws Exception {
		return itemRepository.findByiType(iType);
	}
	
	/* U :: 상품 업데이트 (거래상태)*/
	@Override
	public Item updateItemDealCompleted(Item item) throws Exception {
		Item fixItem=itemRepository.findByiNo(item.getiNo());
		fixItem.setiCompleted(item.getiCompleted());
		return itemRepository.save(fixItem);
	}
	
	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItem(int iNo) throws Exception {
		itemRepository.delete(itemRepository.findByiNo(iNo));
		if(itemRepository.findByiNo(iNo)==null) {
			return true;
		}
		return false;
	}

	@Override
	public List<Item> selectItemByiName(String iName) {
		return itemRepository.findByiNameContaining(iName);
	}
}
