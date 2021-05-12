package com.egemmerce.hc.bookmark.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.Bookmark;

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

public interface BookmarkService {
	/* C :: 북마크 생성 */
	Bookmark insertBookmark(Bookmark bookmark) throws Exception;
	
	/* R :: 북마크 조회 */
	List<Bookmark> selectBookmark(int uNo) throws Exception;
	
	/* D :: 북마크 삭제 */
	boolean deleteBookmark(int bNo) throws Exception;
}
