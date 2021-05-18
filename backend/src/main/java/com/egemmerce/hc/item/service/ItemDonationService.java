package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemDonation;
import com.egemmerce.hc.repository.dto.ItemSell;

public interface ItemDonationService {

	void add(ItemSell is);

	List<ItemDonation> selectItemAll();



}
