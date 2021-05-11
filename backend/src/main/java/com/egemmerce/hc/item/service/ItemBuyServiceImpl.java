package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.mapper.ItemBuyRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemBuyServiceImpl implements ItemBuyService {

	private final ItemBuyRepository itemBuyRepository;
	/* C :: 상품 등록 */
	@Override
	public ItemBuy insertItemBuy(ItemBuy itemBuy) {
		return itemBuyRepository.save(itemBuy);
	}
	
	/* R :: 상품 전체 조회 */
	@Override
	public 	List<ItemBuy> selectItemBuyAll() {
		return itemBuyRepository.findAll();
	}

	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItemBuy(int ibItemNo) {
		itemBuyRepository.delete(itemBuyRepository.findByibItemNo(ibItemNo));
		if(itemBuyRepository.findByibItemNo(ibItemNo)==null) {
			return true;
		}
		return false;
	}

	@Override
	public List<ItemBuy> selectItemBuyByibName(String ibName, Pageable pageable) {
		return itemBuyRepository.findByibNameContaining(ibName, pageable);
	}

	/*상품 업데이트*/
	@Override
	public ItemBuy updateItemBuy(ItemBuy itemBuy) {
		return itemBuyRepository.save(itemBuy);
	}
}
