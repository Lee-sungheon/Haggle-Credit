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

import com.egemmerce.hc.item.service.ItemSellService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemSell;

@RestController
@RequestMapping("/itemSell")
public class ItemSellController {
	
	@Autowired
	private ItemSellService itemSellService;
	
	@Autowired
	private ItemService itemService;
	
	/* C :: 상품 등록 */
	@PostMapping("/regist")
	public ResponseEntity<String> createItem(@RequestBody ItemSell itemSell) throws Exception {
		Item item=itemService.insert(Item.builder().iType("Sell").build());
		itemSell.setIsItemNo(item.getiNo());
		if(itemSellService.insertItemSell(itemSell) != null)
			return new ResponseEntity<String>("상품 등록 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 등록 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 상품 전체조회 */
	@GetMapping("/all")
	public ResponseEntity<List<ItemSell>> reviewItemAll() throws Exception {
		return new ResponseEntity<List<ItemSell>>(itemSellService.selectItemSellAll(), HttpStatus.OK);
	}
	
	
	/* R :: 상품명 조회 */
	@GetMapping("/name")
	public ResponseEntity<List<ItemSell>> selectItemByiName(String isName,Pageable pageable) throws Exception {
		return new ResponseEntity<List<ItemSell>>(itemSellService.selectItemSellByisName(isName,pageable), HttpStatus.OK);
	}
	
	
	
	/* U :: 상품 업데이트(거래완료) */
	@PutMapping("/updateDealCompleted")
	public ResponseEntity<String> updateItem(@RequestBody ItemSell itemSell) throws Exception {
		if(itemService.updateItemDealCompleted(itemSell.getIsItemNo()) != null)
			return new ResponseEntity<String>("거래완료 처리 성공", HttpStatus.OK);
		return new ResponseEntity<String>("거래완료 처리 실패", HttpStatus.NO_CONTENT);
	}
	/* U :: 상품 업데이트 */
	@PutMapping("/update")
	public ResponseEntity<String> updateItemSell(@RequestBody ItemSell itemSell) throws Exception {
		if(itemSellService.updateItemSell(itemSell) != null)
			return new ResponseEntity<String>("Success", HttpStatus.OK);
		return new ResponseEntity<String>("Fail", HttpStatus.NO_CONTENT);
	}
	
	/* D :: 상품 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteItem(int isItemNo) throws Exception {
		if(itemSellService.deleteItemSell(isItemNo))
			return new ResponseEntity<String>("상품 삭제 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 삭제 실패", HttpStatus.NO_CONTENT);
	}
}
