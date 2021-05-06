package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egemmerce.hc.repository.dto.Item;

public interface ItemRepository extends JpaRepository<Item, Long>{

	List<Item> findByiType(String iType);

	Item findByiNo(int getiNo);

	List<Item> findByiNameContaining(String iName);

}
