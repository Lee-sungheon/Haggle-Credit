package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemBuy;

@Transactional
public interface ItemBuyRepository extends JpaRepository<ItemBuy, Long>{

	List<ItemBuy> findByibNameContaining(String ibName, Pageable pageable);

	ItemBuy findByibItemNo(int ibItemNo);

}
