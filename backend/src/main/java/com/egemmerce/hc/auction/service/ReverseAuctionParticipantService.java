package com.egemmerce.hc.auction.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;

public interface ReverseAuctionParticipantService {

	void insert(ReverseAuctionParticipant reverseAuctionParticipant);

	List<ReverseAuctionParticipant> findByrapItemNo(int rapItemNo);

	List<ReverseAuctionParticipant> findByrapItemNoOrderByDate(int ibItemNo);

	int countByitemNo(int ipItemNo);

}
