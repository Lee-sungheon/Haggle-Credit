package com.egemmerce.hc.repository.mapper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.Item;

@Transactional
public interface ItemRepository extends JpaRepository<Item, Long>{

	Item findByiNo(int iNo);

}
