package com.egemmerce.hc.item.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.item.service.ItemDeliveryService;
import com.egemmerce.hc.repository.dto.ItemDelivery;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/itemDelivery")
public class ItemDeliveryController {

	@Autowired
	private ItemDeliveryService itemDeliveryService;

	/* R :: 판매완료한 전체 상품 */
	@ApiOperation(value = "판매완료한 전체 상품 조회")
	@GetMapping("/selectSendAll")
	public ResponseEntity<?> selectSendAll(int idSendUserNo) throws Exception {
		List<ItemDelivery> itemDelivery = itemDeliveryService.selectAllByidSendUserNo(idSendUserNo);

		return new ResponseEntity<List<ItemDelivery>>(itemDelivery, HttpStatus.OK);
	}
	/* R :: 구매한 전체 상품 */
	@ApiOperation(value = "구매한 전체 상품 조회")
	@GetMapping("/selectReceiveAll")
	public ResponseEntity<?> selectReceiveAll(int idReceiveUserNo) throws Exception {
		List<ItemDelivery> itemDelivery = itemDeliveryService.selectAllByidReceiveUserNo(idReceiveUserNo);
		
		return new ResponseEntity<List<ItemDelivery>>(itemDelivery, HttpStatus.OK);
	}

	/* R :: 배송 보내야 할 상품 */
	@ApiOperation(value = "배송 보내야 할 상품")
	@GetMapping("/selectSend")
	public ResponseEntity<List<ItemDelivery>> selectSend(int idSendUserNo) throws Exception {
		return new ResponseEntity<List<ItemDelivery>>(itemDeliveryService.selectByidSendUserNo(idSendUserNo),
				HttpStatus.OK);
	}
	/* R :: 배송 받아야 할 상품 */
	@ApiOperation(value = "배송 받아야 할 상품")
	@GetMapping("/selectRecive")
	public ResponseEntity<List<ItemDelivery>> selectReceive(int idReceiveUserNo) throws Exception {
		return new ResponseEntity<List<ItemDelivery>>(itemDeliveryService.selectByidReceiveUserNo(idReceiveUserNo),
				HttpStatus.OK);
	}

	/* U :: 배송 완료 */
	@ApiOperation(value = "발송")
	@GetMapping("/send")
	public ResponseEntity<String> updateSend(int idItemNo, int idDeliveryNo) throws Exception {
		if (itemDeliveryService.updateSend(idItemNo, idDeliveryNo) != null) {
			return new ResponseEntity<String>("배송 완료", HttpStatus.OK);
		}
		return new ResponseEntity<String>("배송 실패", HttpStatus.OK);
	}
	/* U :: 수령 완료 */
	@ApiOperation(value = "수령")
	@GetMapping("/receive")
	public ResponseEntity<String> updateReceive(int idItemNo) throws Exception {
		if (itemDeliveryService.updateReceive(idItemNo) != null) {
			return new ResponseEntity<String>("수령 완료", HttpStatus.OK);
		}
		return new ResponseEntity<String>("수령 실패", HttpStatus.OK);
	}
}
