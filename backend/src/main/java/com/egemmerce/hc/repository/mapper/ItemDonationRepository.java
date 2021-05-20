package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemDonation;

@Transactional
public interface ItemDonationRepository extends JpaRepository<ItemDonation, Long>{

	ItemDonation findByidItemNo(int iNo);

	List<ItemDonation> findAllByidEndDonation(String string);

	List<ItemDonation> findAllByidEndDonationOrderByIdIngPriceDesc(String string);

}
