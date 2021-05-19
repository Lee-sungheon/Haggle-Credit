package com.egemmerce.hc.item.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemDelivery;

public interface ItemDeliveryService {

	List<ItemDelivery> selectByidSendUserNo(int idSendUserNo);

	List<ItemDelivery> selectAllByidSendUserNo(int idSendUserNo);

	ItemDelivery updateSend(int idItemNo, int idDeliveryNo);

	ItemDelivery updateReceive(int idItemNo);

	List<ItemDelivery> selectAllByidReceiveUserNo(int idReceiveUserNo);

	List<ItemDelivery> selectByidReceiveUserNo(int idReceiveUserNo);

	void insert(ItemDelivery itemDelivery);

}
