package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSet;

@Transactional
public interface ItemSellRepository extends JpaRepository<ItemSell, Long> {

	Page<ItemSell> findByisNameContaining(String isName, Pageable pageable);
	Page<ItemSell> findAll(Pageable pageable);

	ItemSell findByisItemNo(int isItemNo);

	List<ItemSell> findByisDealUserNo(int isDealUserNo);

}
