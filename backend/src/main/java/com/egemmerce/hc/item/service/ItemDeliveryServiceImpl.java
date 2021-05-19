package com.egemmerce.hc.item.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemDelivery;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.ItemDeliveryRepository;
import com.egemmerce.hc.repository.mapper.ItemSellRepository;
import com.egemmerce.hc.repository.mapper.UserRepository;
import com.egemmerce.hc.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemDeliveryServiceImpl implements ItemDeliveryService {

	private final ItemDeliveryRepository itemDeliveryRepository;
	private final ItemSellRepository itemSellRepository;
	private final UserRepository userRepository;
	
	@Autowired
	private UserService userService;

	@Override
	public List<ItemDelivery> selectByidSendUserNo(int idSendUserNo) {
		List<ItemDelivery> allItem=itemDeliveryRepository.findByidSendUserNo(idSendUserNo);
		List<ItemDelivery> itemDelivery=new ArrayList<ItemDelivery>();
		for (ItemDelivery id : allItem) {
			if(id.getIdDeliveryNo()==0) {
				itemDelivery.add(id);
			}
		}
		return itemDelivery;
	}

	@Override
	public List<ItemDelivery> selectAllByidSendUserNo(int idSendUserNo) {
		return itemDeliveryRepository.findByidSendUserNo(idSendUserNo);
	}

	@Override
	public ItemDelivery updateSend(int idItemNo, int idDeliveryNo) {
		ItemDelivery itemDelivery=itemDeliveryRepository.findByidItemNo(idItemNo);
		itemDelivery.setIdDeliveryNo(idDeliveryNo);
		itemDelivery.generateidSendDate();
		return itemDeliveryRepository.save(itemDelivery);
	}

	@Override
	public ItemDelivery updateReceive(int idItemNo) {
		ItemDelivery itemDelivery=itemDeliveryRepository.findByidItemNo(idItemNo);
		itemDelivery.setIdReceive("true");
		
		userService.updateUserCreditbyFail(itemDelivery.getIdSendUserNo(), itemDelivery.getIdPrice(), idItemNo);
		return itemDeliveryRepository.save(itemDelivery);
	}

	@Override
	public List<ItemDelivery> selectAllByidReceiveUserNo(int idReceiveUserNo) {
		return itemDeliveryRepository.findByidReceiveUserNo(idReceiveUserNo);
	}

	@Override
	public List<ItemDelivery> selectByidReceiveUserNo(int idReceiveUserNo) {
		List<ItemDelivery> itemDeliveryAll=itemDeliveryRepository.findByidReceiveUserNo(idReceiveUserNo);
		List<ItemDelivery> itemDelivery=new ArrayList<ItemDelivery>();
		for (ItemDelivery id : itemDeliveryAll) {
			if(id.getIdReceive().equals("false")) {
				itemDelivery.add(id);
			}
		}
		return itemDelivery;
	}

	@Override
	public void insert(ItemDelivery itemDelivery) {
		itemDeliveryRepository.save(itemDelivery);
	}

}
