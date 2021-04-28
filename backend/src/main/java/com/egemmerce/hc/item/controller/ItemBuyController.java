package com.egemmerce.hc.item.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemBuyService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.ItemBuy;

@RestController
@RequestMapping("/itemBuy")
public class ItemBuyController {

	@Autowired
	ItemBuyService itemBuyService;
	
	@Autowired
	ItemService itemService;
	
	
	@GetMapping("/insertItemBuy")
	public void insertProductSell(ItemBuy itemBuy) {
		itemService.insertItem("buy");
		int iNo=itemService.getIno("buy");
		itemBuy.setIbINo(iNo);
		itemBuyService.insertItemBuy(itemBuy);
	}
	
	@GetMapping("/updateHaggle")
	public void updateHaggle(ItemBuy itemBuy) {
		itemBuyService.updateHaggle(itemBuy);
	}
	
	@GetMapping("/updateItemBuy")
	public void updateItemBuy(ItemBuy itemBuy) {
		itemBuyService.updateItemBuy(itemBuy);
	}
}
