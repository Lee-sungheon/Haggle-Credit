package com.egemmerce.hc.auction.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;
import com.egemmerce.hc.repository.mapper.ReverseAuctionParticipantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReverseAuctionParticipantServiceImpl implements ReverseAuctionParticipantService {
	
	private final ReverseAuctionParticipantRepository reverseAuctionParticipantRepository;
	
	@Override
	public void insert(ReverseAuctionParticipant reverseAuctionParticipant) {
		reverseAuctionParticipantRepository.save(reverseAuctionParticipant);
	}

	@Override
	public List<ReverseAuctionParticipant> findByrapItemNo(int rapItemNo) {
		return reverseAuctionParticipantRepository.findByrapItemNo(rapItemNo);
	}
	@Override
	public List<ReverseAuctionParticipant> findByrapItemNoOrderByDate(int rapItemNo) {
		return reverseAuctionParticipantRepository.findByrapItemNoOrderByRapDate(rapItemNo);
	}

	@Override
	public int countByitemNo(int ipItemNo) {
		return reverseAuctionParticipantRepository.countByrapItemNo(ipItemNo);
	}

}
