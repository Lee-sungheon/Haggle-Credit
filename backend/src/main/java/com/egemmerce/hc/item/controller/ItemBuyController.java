package com.egemmerce.hc.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemBuyService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemSell;

@RestController
@RequestMapping("/itemBuy")
public class ItemBuyController {
	
	@Autowired
	private ItemBuyService itemBuyService;
	
	@Autowired
	private ItemService itemService;
	
	/* C :: 상품 등록 */
	@PostMapping("/regist")
	public ResponseEntity<String> createItem(@RequestBody ItemBuy itemBuy) throws Exception {
		Item item=itemService.insert(Item.builder().iType("Buy").build());
		itemBuy.setIbItemNo(item.getiNo());
		if(itemBuyService.insertItemBuy(itemBuy) != null)
			return new ResponseEntity<String>("상품 등록 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 등록 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 상품 전체조회 */
	@GetMapping("/all")
	public ResponseEntity<List<ItemBuy>> reviewItemAll() throws Exception {
		return new ResponseEntity<List<ItemBuy>>(itemBuyService.selectItemBuyAll(), HttpStatus.OK);
	}
	
	
	/* R :: 상품명 조회 */
	@GetMapping("/name")
	public ResponseEntity<List<ItemBuy>> selectItemByiName(String ibName,Pageable pageable) throws Exception {
		return new ResponseEntity<List<ItemBuy>>(itemBuyService.selectItemBuyByibName(ibName,pageable), HttpStatus.OK);
	}
	
	
	
	/* U :: 상품 업데이트(거래완료) */
	@PutMapping("/updateDealCompleted")
	public ResponseEntity<String> updateItem(@RequestBody ItemBuy itemBuy) throws Exception {
		if(itemService.updateItemDealCompleted(itemBuy.getIbItemNo()) != null)
			return new ResponseEntity<String>("거래완료 처리 성공", HttpStatus.OK);
		return new ResponseEntity<String>("거래완료 처리 실패", HttpStatus.NO_CONTENT);
	}
	/* U :: 상품 업데이트 */
	@PutMapping("/update")
	public ResponseEntity<String> updateItemSell(@RequestBody ItemBuy itemBuy) throws Exception {
		if(itemBuyService.updateItemBuy(itemBuy) != null)
			return new ResponseEntity<String>("Success", HttpStatus.OK);
		return new ResponseEntity<String>("Fail", HttpStatus.NO_CONTENT);
	}
	
	/* D :: 상품 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteItem(int ibItemNo) throws Exception {
		if(itemBuyService.deleteItemBuy(ibItemNo))
			return new ResponseEntity<String>("상품 삭제 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 삭제 실패", HttpStatus.NO_CONTENT);
	}
}
