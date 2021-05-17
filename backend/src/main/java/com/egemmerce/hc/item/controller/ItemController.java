package com.egemmerce.hc.item.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Item;

@RestController
@RequestMapping("/item")
public class ItemController {

	@Autowired
	private ItemService itemService;
	
	/* R :: 상품 조회 */
	@GetMapping("/selectByiNo")
	public ResponseEntity<?> selectItem(int iNo) throws Exception {
		Item item=itemService.selectItem(iNo);
		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}
}
