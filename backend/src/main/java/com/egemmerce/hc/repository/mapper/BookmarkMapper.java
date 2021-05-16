package com.egemmerce.hc.repository.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Bookmark;

@Mapper
public interface BookmarkMapper {
	public Bookmark selectBookmarkStatus(Bookmark bookmark) throws Exception;

	public int deleteBybItemNoAndBUserNo(int bItemNo, int bUserNo) throws Exception;

	/* R :: 삽니다 북마크 조회 */
	public List<Map<String, Object>> selectBookmarkAndItemBuy(int uNo);
	
	/* R :: 팝니다 북마크 조회 */
	public List<Map<String, Object>> selectBookmarkAndItemSell(int uNo);

	/* R :: 북마크한 수 조회 */
	public int selectBookmarkCount(int uNo);
	
}
