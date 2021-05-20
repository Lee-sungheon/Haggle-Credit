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
		ItemDonation itemDonation = ItemDonation.builder().idEndPrice(is.getIsCoolPrice()).idItemNo(is.getIsNo())
				.idUserNo(is.getIsUserNo()).build();
		itemDonationRepository.save(itemDonation);
	}

	@Override
	public List<ItemDonation> selectItemAll() {
		return itemDonationRepository.findAllByidEndDonationOrderByIdIngPriceDesc("false");
	}

	@Override
	public ItemDonation selectItemoneByiNo(int iNo) {
		return itemDonationRepository.findByidItemNo(iNo);
	}

	@Override
	public ItemDonation updateItemBid(int iNo, int bid) {
		ItemDonation itemDonation = itemDonationRepository.findByidItemNo(iNo);
		itemDonation.setIdIngPrice(itemDonation.getIdIngPrice() + bid);
		return itemDonationRepository.save(itemDonation);
	}

	@Override
	public void update(ItemDonation itemDonation) {
		itemDonationRepository.save(itemDonation);
	}

	@Override
	public int selectAllDonation() {
		List<ItemDonation> itemDonation = itemDonationRepository.findAll();
		int sum = 0;
		for (ItemDonation id : itemDonation) {
			sum += id.getIdIngPrice();
		}
		return sum;
	}

}
