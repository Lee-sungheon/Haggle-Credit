package com.egemmerce.hc.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemDonationService;
import com.egemmerce.hc.repository.dto.ItemDonation;

@RestController
@RequestMapping("/itemdonation")
public class ItemDonationController {

	@Autowired
	ItemDonationService itemDonationService;
	
	/* R :: 상품 전체 조회 */
	@GetMapping("/selectall")
	public ResponseEntity<?> selectItemAll() throws Exception {
		List<ItemDonation> itemDonation=itemDonationService.selectItemAll();
		return new ResponseEntity<List<ItemDonation>>(itemDonation, HttpStatus.OK);
	}
}
