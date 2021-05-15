package com.egemmerce.hc.bookmark.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Bookmark;
import com.egemmerce.hc.repository.mapper.BookmarkMapper;
import com.egemmerce.hc.repository.mapper.BookmarkRepository;

import lombok.RequiredArgsConstructor;

/**
 * 
 * @Date : 2021. 5. 12.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 북마크 관련 서비스 클래스
 * @Description : 북마크 생성, 조회, 삭제 기능
 *
 */

@Service
@RequiredArgsConstructor
public class BookmarkServiceImpl implements BookmarkService {
	
	private final BookmarkRepository bookmarkRepository;
	
	@Autowired
	private BookmarkMapper bookmarkMapper;

	/* C :: 북마크 생성 */
	@Override
	public Bookmark insertBookmark(Bookmark bookmark) throws Exception {
		return bookmarkRepository.save(bookmark);
	}

	/* R :: 북마크 조회 */
	@Override
	public List<Bookmark> selectBookmark(int uNo) throws Exception {
		return bookmarkRepository.findAllBybUserNo(uNo);
	}

	/* D :: 북마크 삭제 */
	@Override
	public int deleteBookmark(int bNo) throws Exception {
		return bookmarkRepository.deleteBybNo(bNo);
	}
	
	/* R :: 찜 목록 상태 조회 */
	@Override
	public Bookmark selectBookmarkStatus(Bookmark bookmark) throws Exception {
		return bookmarkMapper.selectBookmarkStatus(bookmark);
	}

}
