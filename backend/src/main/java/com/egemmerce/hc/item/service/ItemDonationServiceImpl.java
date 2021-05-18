package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemDonation;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.mapper.ItemDonationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemDonationServiceImpl implements ItemDonationService {
	
	private final ItemDonationRepository itemDonationRepository;

	@Override
	public void add(ItemSell is) {
		ItemDonation itemDonation=ItemDonation.builder().idEndPrice(is.getIsCoolPrice()).idItemNo(is.getIsNo()).idUserNo(is.getIsUserNo()).build();
		itemDonationRepository.save(itemDonation);
	}

	@Override
	public List<ItemDonation> selectItemAll() {
		return itemDonationRepository.findAll();
	}

}
