package com.egemmerce.hc.item.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemSearchService;
import com.egemmerce.hc.repository.dto.ItemSearchResult;

@RestController
@RequestMapping("/searching")
public class ItemSearchController {

	@Autowired
	private ItemSearchService itemSearchService;
	
	@GetMapping("")
	public ResponseEntity<List<ItemSearchResult>> ReadSearchingResult(@RequestParam(defaultValue="")String word) throws Exception {
		List<ItemSearchResult> sellResult = null;
		List<ItemSearchResult> buyResult = null;
		List<ItemSearchResult> result = new ArrayList<ItemSearchResult>();
		if(word.equals(""))
			return new ResponseEntity<List<ItemSearchResult>>(result, HttpStatus.NO_CONTENT);
		sellResult = itemSearchService.SelectSellSearching(word);
		buyResult = itemSearchService.SelectBuySearching(word);
		result.addAll(sellResult);
		result.addAll(buyResult);
		
		return new ResponseEntity<List<ItemSearchResult>>(result, HttpStatus.OK);
		
	}
}
