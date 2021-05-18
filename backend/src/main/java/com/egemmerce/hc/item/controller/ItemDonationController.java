package com.egemmerce.hc.item.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemDonationService;

@RestController
@RequestMapping("/itemdonation")
public class ItemDonationController {

	@Autowired
	ItemDonationService itemDonationService;
	
	/*기부하는 전체 상품*/
}
