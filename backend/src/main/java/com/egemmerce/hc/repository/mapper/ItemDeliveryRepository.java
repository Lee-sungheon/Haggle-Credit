package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemDelivery;

@Transactional
public interface ItemDeliveryRepository extends JpaRepository<ItemDelivery, Long>{

	List<ItemDelivery> findByidSendUserNo(int idSendUserNo);

	ItemDelivery findByidItemNo(int idItemNo);

	List<ItemDelivery> findByidReceiveUserNo(int idReceiveUserNo);

}
