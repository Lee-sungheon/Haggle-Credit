package com.egemmerce.hc.bookmark.service;

import java.util.List;
import java.util.Map;

import com.egemmerce.hc.repository.dto.Bookmark;
import com.egemmerce.hc.repository.dto.Item;

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

	/* R :: 삽니다 북마크 조회 */
	List<Map<String, Object>> selectBuyBookmark(int uNo) throws Exception;
	
	/* R :: 팝니다 북마크 조회 */
	List<Map<String, Object>> selectSellBookmark(int uNo) throws Exception;

	/* D :: 북마크 삭제 */
	int deleteBookmark(int bItemNo, int bUserNo) throws Exception;

	/* R :: 좋아요 상태 조회 */
	public Bookmark selectBookmarkStatus(Bookmark bookmark) throws Exception;

	/* R :: 북마크한 수 조회 */
	int selectBookmarkCount(int uNo);

	List<Item> temp(int uNo, String type);

}
