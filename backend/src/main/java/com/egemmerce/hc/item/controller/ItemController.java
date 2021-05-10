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

import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Item;

@RestController
@RequestMapping("/item")
public class ItemController {
	
	@Autowired
	private ItemService itemService;
	
	/* C :: 상품 등록 */
	@PostMapping("/regist")
	public ResponseEntity<String> createItem(@RequestBody Item item) throws Exception {
		if(itemService.insertItem(item) != null)
			return new ResponseEntity<String>("상품 등록 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 등록 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 상품 전체조회 */
	@GetMapping("/all")
	public ResponseEntity<List<Item>> reviewItemAll() throws Exception {
		return new ResponseEntity<List<Item>>(itemService.selectItemAll(), HttpStatus.OK);
	}
	
	/* R :: 상품 조회(판매/구매) */
	@GetMapping("/type")
	public ResponseEntity<List<Item>> reviewItemByType(String iType) throws Exception {
		return new ResponseEntity<List<Item>>(itemService.selectItemByType(iType), HttpStatus.OK);
	}
	
	
	/* R :: 상품명 조회 */
	@GetMapping("/name")
	public ResponseEntity<List<Item>> selectItemByiName(String iName,Pageable pageable) throws Exception {
		return new ResponseEntity<List<Item>>(itemService.selectItemByiName(iName,pageable), HttpStatus.OK);
	}
	
	
	
	/* U :: 상품 업데이트(거래완료) */
	@PutMapping("/updateDealCompleted")
	public ResponseEntity<String> updateItem(@RequestBody Item item) throws Exception {
		if(itemService.updateItemDealCompleted(item) != null)
			return new ResponseEntity<String>("거래완료 처리 성공", HttpStatus.OK);
		return new ResponseEntity<String>("거래완료 처리 실패", HttpStatus.NO_CONTENT);
	}
	
	/* D :: 상품 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteItem(int iNo) throws Exception {
		if(itemService.deleteItem(iNo))
			return new ResponseEntity<String>("상품 삭제 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 삭제 실패", HttpStatus.NO_CONTENT);
	}
}
