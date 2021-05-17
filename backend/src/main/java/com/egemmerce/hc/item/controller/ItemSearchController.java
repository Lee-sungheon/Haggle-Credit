package com.egemmerce.hc.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemSearchService;
import com.egemmerce.hc.repository.dto.CtgrCountSet;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/searching")
public class ItemSearchController {

	@Autowired
	private ItemSearchService itemSearchService;
	
	@GetMapping("")
	public ResponseEntity<?> searchingResult(@RequestParam(defaultValue="")String word, @RequestParam(defaultValue="1")int pageNo, @RequestParam(defaultValue="")String ctgrMain, @RequestParam(defaultValue="")String ctgrSub, @RequestParam(defaultValue="is_no")String sortName, @RequestParam(defaultValue="down")String UD) throws Exception {
		if(word.equals(""))
			return new ResponseEntity<String>("검색어 미입력", HttpStatus.OK);
		
//		word, pageNo, ctgrMain, ctgrSub, sortName, UD
		
		/*
		 * word : 입력한 값
		 * pageNo : 페이지 번호.. (default는 1로 입력됌)
		 * ctgrMain, cdtgrSub : 카테고리 메인/서브 (default = "")
		 * sortName : 정렬 기준(default는 최신이기에, is_no)
		 * UD : up, down 정렬방식... (default는 down으로 내림차순..)
		*/
		SortProcess sp = new SortProcess((int) (pageNo - 1) * 100, ctgrMain, ctgrSub, sortName, word);
		
		//내림차순
		if(UD.equals("down")) {
			return new ResponseEntity<List<ItemSellSet>>(itemSearchService.searchingSellDown(sp), HttpStatus.OK);
		}
		//오름차순
		else {
			return new ResponseEntity<List<ItemSellSet>>(itemSearchService.searchingSellUp(sp), HttpStatus.OK);
		}
	}
	
	@GetMapping("ctgrCnt")
	public ResponseEntity<List<CtgrCountSet>> searchingCtgrCount(String word) throws Exception {
		return new ResponseEntity<List<CtgrCountSet>>(itemSearchService.searchingCount(word),HttpStatus.OK);
	}
	
	//
	@ApiOperation(value="지현:검색")
	@GetMapping("/buy")
	public ResponseEntity<?> searchingResultBuy(@RequestParam(defaultValue="")String word, @RequestParam(defaultValue="1")int pageNo, @RequestParam(defaultValue="")String ctgrMain, @RequestParam(defaultValue="")String ctgrSub, @RequestParam(defaultValue="ib_no")String sortName, @RequestParam(defaultValue="down")String UD) throws Exception {
		if(word.equals(""))
			return new ResponseEntity<String>("검색어 미입력", HttpStatus.OK);
		
//		word, pageNo, ctgrMain, ctgrSub, sortName, UD
		
		/*
		 * word : 입력한 값
		 * pageNo : 페이지 번호.. (default는 1로 입력됌)
		 * ctgrMain, cdtgrSub : 카테고리 메인/서브 (default = "")
		 * sortName : 정렬 기준(default는 최신이기에, is_no)
		 * UD : up, down 정렬방식... (default는 down으로 내림차순..)
		*/
		SortProcess sp = new SortProcess((int) (pageNo - 1) * 100, ctgrMain, ctgrSub, sortName, word);
		
		//내림차순
		if(UD.equals("down")) {
			return new ResponseEntity<List<ItemBuySet>>(itemSearchService.searchingBuyDown(sp), HttpStatus.OK);
		}
		//오름차순
		else {
			return new ResponseEntity<List<ItemBuySet>>(itemSearchService.searchingBuyUp(sp), HttpStatus.OK);
		}
	}
	
	@ApiOperation(value="지현:검색개수")
	@GetMapping("ctgrCnt/buy")
	public ResponseEntity<List<CtgrCountSet>> searchingCtgrCount2(String word) throws Exception {
		return new ResponseEntity<List<CtgrCountSet>>(itemSearchService.searchingCount2(word),HttpStatus.OK);
	}

}
