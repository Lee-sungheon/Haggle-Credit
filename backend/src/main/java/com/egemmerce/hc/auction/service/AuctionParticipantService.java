package com.egemmerce.hc.auction.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.AuctionParticipant;

public interface AuctionParticipantService {

	void insert(AuctionParticipant auctionParticipant);

	List<AuctionParticipant> findByapItemNo(int apItemNo);

	AuctionParticipant selectBeforeAP(int isItemNo);

	int countByitemNo(int ipItemNo);

}
