package com.egemmerce.hc.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.BreakdownBid;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.user.service.UserBreakdownService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("profile/breakdown")
public class UserBreakdownController {

	@Autowired
	private UserBreakdownService service;
	
	@ApiOperation(value="입찰 내역(거래 진행중인 상황(판매/구매 구분안함)")
	@GetMapping("bid")
	public ResponseEntity<List<BreakdownBid>> ReadMyBid(int uNo) throws Exception {
		List<BreakdownBid> result = service.selectBidBreakdown(uNo);
		System.out.println("처리 : " + result.toString());
		for(int i = 0; i < result.size(); i++) {
			System.out.println(result.get(i));
			if(result.get(i).getiType().equals("buy")) {
				result.get(i).setItemBuySet(service.selectItemBuySet(result.get(i).getIpItemNo()));
			} else {
				result.get(i).setItemSellSet(service.selectItemSellSet(result.get(i).getIpItemNo()));
			}
		}
		return new ResponseEntity<List<BreakdownBid>>(result, HttpStatus.OK);
	}
	
	@ApiOperation(value="판매 상품 중 내가 산 아이템(즉 나의 구매 내역임)")
	@GetMapping("sell")
	public ResponseEntity<List<ItemSellSet>> ReadMySell(int uNo) throws Exception {
		return new ResponseEntity<List<ItemSellSet>>(service.selectSellMine(uNo), HttpStatus.OK);
	}
	
	@ApiOperation(value="구매 상품 중 내가 판 아이템(즉 나의 판매 내역임)")
	@GetMapping("buy")
	public ResponseEntity<List<ItemBuySet>> ReadMyBuy(int uNo) throws Exception {
		return new ResponseEntity<List<ItemBuySet>>(service.selectBuyMine(uNo), HttpStatus.OK);
	}
}
