package com.egemmerce.hc.bookmark.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Bookmark;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.mapper.BookmarkMapper;
import com.egemmerce.hc.repository.mapper.BookmarkRepository;
import com.egemmerce.hc.repository.mapper.ItemRepository;

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
	private final ItemRepository itemRepository;

	@Autowired
	private BookmarkMapper bookmarkMapper;

	/* C :: 북마크 생성 */
	@Override
	public Bookmark insertBookmark(Bookmark bookmark) throws Exception {
		return bookmarkRepository.save(bookmark);
	}

	/* R :: 삽니다 북마크 조회 */
	@Override
	public List<Map<String, Object>> selectBuyBookmark(int uNo) throws Exception {
		return bookmarkMapper.selectBookmarkAndItemBuy(uNo);
	}

	/* R :: 팝니다 북마크 조회 */
	@Override
	public List<Map<String, Object>> selectSellBookmark(int uNo) throws Exception {
		return bookmarkMapper.selectBookmarkAndItemSell(uNo);
	}

	/* D :: 북마크 삭제 */
	@Override
	public int deleteBookmark(int bItemNo, int bUserNo) throws Exception {
		return bookmarkMapper.deleteBybItemNoAndBUserNo(bItemNo, bUserNo);
	}

	/* R :: 찜 목록 상태 조회 */
	@Override
	public Bookmark selectBookmarkStatus(Bookmark bookmark) throws Exception {
		return bookmarkMapper.selectBookmarkStatus(bookmark);
	}

	/* R :: 북마크한 수 조회 */
	@Override
	public int selectBookmarkCount(int uNo) {
		return bookmarkMapper.selectBookmarkCount(uNo);
	}

	@Override
	public List<Item> temp(int uNo, String type) {
		List<Bookmark> book = bookmarkRepository.findAllBybUserNo(uNo);
		List<Item> items = new ArrayList<Item>();
		for (Bookmark bk : book) {
			Item item = itemRepository.findByiNo(bk.getbItemNo());
			if (item.getiType().equals(type)) {
				items.add(item);

			}
		}
		return items;
	}

}
