package com.egemmerce.hc.auction.controller;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.DonationParticipant;
import com.egemmerce.hc.repository.mapper.DonationParticipantRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DonationParticipantServiceImpl implements DonationParticipantService {
	
	private final DonationParticipantRepository donationParticipantRepository;

	@Override
	public void insert(DonationParticipant dp) {
		donationParticipantRepository.save(dp);
	}

	@Override
	public List<DonationParticipant> selectByiNo(int iNo) {
		return donationParticipantRepository.findAllBydpItemNo(iNo);
	}

	@Override
	public int countDonation() {
		return (int) donationParticipantRepository.count();
	}



}
