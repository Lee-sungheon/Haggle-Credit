package com.egemmerce.hc.auction.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.auction.service.AuctionParticipantService;
import com.egemmerce.hc.repository.dto.AuctionParticipant;

@RestController
@RequestMapping("/AuctionParticipant")
public class AuctionParticipantController {

	@Autowired
	private AuctionParticipantService auctionParticipantService;
	
	/* R :: 경매 내역 조회 */
	@GetMapping("/all")
	public ResponseEntity<List<AuctionParticipant>> selectByapItemNo(int apItemNo) throws Exception {
		return new ResponseEntity<List<AuctionParticipant>>(auctionParticipantService.findByapItemNo(apItemNo), HttpStatus.OK);
	}
}
