package com.egemmerce.hc.repository.mapper;

import java.sql.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemBuy;

@Transactional
public interface ItemBuyRepository extends JpaRepository<ItemBuy, Long>{

	Page<ItemBuy> findByibNameContaining(String ibName, Pageable pageable);

	ItemBuy findByibItemNo(int ibItemNo);

	List<ItemBuy> findByibUserNo(int uNo);

	List<ItemBuy> findByibDealUserNoAndIbEndDateLessThan(int i, Date valueOf);

	List<ItemBuy> findByibUserNoAndIbDealUserNo(int uNo,int i);

}
