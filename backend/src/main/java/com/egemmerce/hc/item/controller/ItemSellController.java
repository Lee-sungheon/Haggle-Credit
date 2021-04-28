package com.egemmerce.hc.item.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemSellService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.ItemSell;
@RestController
@RequestMapping("/itemSell")
public class ItemSellController {

	@Autowired
	ItemSellService itemSellService;
	
	@Autowired
	ItemService itemService;
	
//	@Autowired
//	UserService userService;
	
	@GetMapping("/insertItemSell")
	public void insertProductSell(ItemSell itemSell) {
		itemService.insertItem("sell");
		int iNo=itemService.getIno("sell");
		itemSell.setIsINo(iNo);
		itemSellService.insertItemSell(itemSell);
	}
	
	@GetMapping("/updateHaggle")
	public void updateHaggle(ItemSell itemSell) {
		itemSellService.updateHaggle(itemSell);
	}
	
	@GetMapping("/updateItemSell")
	public void updateItemSell(ItemSell itemSell) {
		itemSellService.updateItemSell(itemSell);
	}
	
	@GetMapping("/searchByName")
	public List<ItemSell> searchByName(String name) {
	 	List<Integer> itemSellNo = itemService.searchByType("sell");
	 	List<ItemSell> itemSellList=new ArrayList<ItemSell>();
	 	for (Integer i : itemSellNo) {
			ItemSell itemSell=itemSellService.searchByIsINo(i);
			if(itemSell.getIsName().contains(name)) {
				itemSellList.add(itemSell);
			}
		}
		return itemSellList;
	}
	
	@GetMapping("/searchByCategoryMain")
	public List<ItemSell> searchByCategory(String category) {
	 	List<Integer> itemSellNo = itemService.searchByType("sell");
	 	List<ItemSell> itemSellList=new ArrayList<ItemSell>();
	 	for (Integer i : itemSellNo) {
			ItemSell itemSell=itemSellService.searchByCategoryMain(i);
			if(itemSell.getIsCategoryMain().contains(category)) {
				itemSellList.add(itemSell);
			}
		}
		return 	itemSellList;
	}
	
//	@DeleteMapping("deleteItem")
//	public void deleteItem(ItemSell itemSell) {
//		itemService.deleteItem(itemSell.getIsINo());
//		userService.updateDownCredit(itemSell.getIsINo());
//		userService.updateUpPenalty(itemSell.getIsINo());
//		
//	}
}
