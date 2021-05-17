package com.egemmerce.hc.bookmark.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.bookmark.service.BookmarkService;
import com.egemmerce.hc.repository.dto.Bookmark;
import com.egemmerce.hc.repository.dto.Item;

/**
 * 
 * @Date : 2021. 5. 12.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 북마크 관련 컨트롤러 클래스
 * @Description : 북마크 생성, 조회, 삭제 기능
 *
 */

@RestController
@RequestMapping("/bookmark")
public class BookmarkController {

	@Autowired
	private BookmarkService bookmarkService;

	/* C :: 북마크 생성 */
	@PostMapping("/create")
	public ResponseEntity<String> insertBookmark(@RequestBody Bookmark bookmark) throws Exception {
		if (bookmarkService.insertBookmark(bookmark) != null) {
			return new ResponseEntity<String>("북마크 생성 성공ㅎ", HttpStatus.OK);
		}
		return new ResponseEntity<String>("북마크 생성 실패ㅠ", HttpStatus.NO_CONTENT);
	}

//	/* R :: 북마크 조회 */
//	@GetMapping("/read")
//	public ResponseEntity<List<Map<String, Object>>> selectBookmark(@RequestParam int uNo, @RequestParam String type)
//			throws Exception {
//		if (type.equals("buy"))
//			return new ResponseEntity<List<Map<String, Object>>>(bookmarkService.selectBuyBookmark(uNo), HttpStatus.OK);
//		return new ResponseEntity<List<Map<String, Object>>>(bookmarkService.selectSellBookmark(uNo), HttpStatus.OK);
//	}

	/* R :: 북마크 조회 */
	@GetMapping("/read")
	public ResponseEntity<?> selectBookmark(int uNo, String type) throws Exception {

		return new ResponseEntity<List<Item>>(bookmarkService.temp(uNo,type), HttpStatus.OK);
	}

	/* R :: 북마크한 수 조회 */
	@GetMapping("/count")
	public ResponseEntity<Integer> selectBookmarkCount(@RequestParam int uNo) throws Exception {
		return new ResponseEntity<Integer>(bookmarkService.selectBookmarkCount(uNo), HttpStatus.OK);
	}

	/* D :: 북마크 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<Boolean> deleteBookmark(@RequestParam int bItemNo, @RequestParam int bUserNo)
			throws Exception {
		if (bookmarkService.deleteBookmark(bItemNo, bUserNo) > 0) {
			return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		}
		return new ResponseEntity<Boolean>(false, HttpStatus.NO_CONTENT);
	}

	@GetMapping("/checkedStatus")
	public ResponseEntity<String> selectBookmarkStatus(Bookmark bookmark) throws Exception {
		if (bookmarkService.selectBookmarkStatus(bookmark) != null) {
			System.out.println("찜한 상태");
			return new ResponseEntity<String>("찜된 상태입니다.", HttpStatus.OK);
		}
		return new ResponseEntity<String>("찜되지 않은 상태입니다.", HttpStatus.OK);
	}
}
