package com.egemmerce.hc.bookmark.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.bookmark.service.BookmarkService;
import com.egemmerce.hc.repository.dto.Bookmark;

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
	public ResponseEntity<String> insertBookmark(@RequestParam Bookmark bookmark) throws Exception {
		if (bookmarkService.insertBookmark(bookmark) != null) {
			return new ResponseEntity<String>("북마크 생성 성공ㅎ", HttpStatus.OK);
		}
		return new ResponseEntity<String>("북마크 생성 실패ㅠ", HttpStatus.NO_CONTENT);
	}

	/* R :: 북마크 조회 */
	@GetMapping("/read")
	public ResponseEntity<List<Bookmark>> selectBookmark(@RequestParam int uNo) throws Exception {
		return new ResponseEntity<List<Bookmark>>(bookmarkService.selectBookmark(uNo), HttpStatus.OK);
	}

	/* D :: 북마크 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteBookmark(@RequestParam int bNo) throws Exception {
		if (bookmarkService.deleteBookmark(bNo)) {
			return new ResponseEntity<String>("북마크 삭제 성공ㅎ", HttpStatus.OK);
		}
		return new ResponseEntity<String>("북마크 삭제 실패ㅠ", HttpStatus.NO_CONTENT);
	}
}
