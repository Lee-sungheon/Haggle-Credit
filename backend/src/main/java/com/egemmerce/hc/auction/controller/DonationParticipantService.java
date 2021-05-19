package com.egemmerce.hc.auction.controller;

import java.util.List;

import com.egemmerce.hc.repository.dto.DonationParticipant;

public interface DonationParticipantService {

	void insert(DonationParticipant dp);

	List<DonationParticipant> selectByiNo(int iNo);

	int countDonation();

}
