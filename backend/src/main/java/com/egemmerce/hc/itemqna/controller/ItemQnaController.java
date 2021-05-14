package com.egemmerce.hc.itemqna.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.itemqna.service.ItemQnaService;
import com.egemmerce.hc.repository.dto.ItemQna;

@RestController
@RequestMapping("item/qna")
public class ItemQnaController {
	@Autowired
	private ItemQnaService qnaService;
	
	/* C :: 문의(댓글) 작성 */
	@PostMapping("write")
	public ResponseEntity<String> CreateQna(@RequestBody ItemQna qna) throws Exception {
		if(qnaService.InsertQna(qna) > 0)
			return new ResponseEntity<String>("문의 작성 완료", HttpStatus.OK);
		return new ResponseEntity<String>("문의 작성 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 문의(댓글) 조회 */
	@GetMapping("")
	public ResponseEntity<List<ItemQna>> ReadQna(int iqItemNo) throws Exception {
		return new ResponseEntity<List<ItemQna>>(qnaService.SelectQna(iqItemNo), HttpStatus.OK);
	}
	
	/* D :: 문의(댓글) 삭제 */
	@DeleteMapping("delete")
	public ResponseEntity<String> DeleteQna(int iqUserNo) throws Exception {
		if(qnaService.DeleteQna(iqUserNo) > 0)
			return new ResponseEntity<String>("문의 삭제 성공", HttpStatus.OK);
		return new ResponseEntity<String>("문의 삭제 실패", HttpStatus.NO_CONTENT);
	}
}
