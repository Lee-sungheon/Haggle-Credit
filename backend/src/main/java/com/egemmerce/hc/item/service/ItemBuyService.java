package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.SortProcess;

public interface ItemBuyService {

	/* C :: 상품 등록 */
	ItemBuy insertItemBuy(ItemBuy itemBuy);

	/* R :: 상품 전체 조회 */
	Page<ItemBuy> selectItemBuyAll(Pageable pageable);

	/* D :: 상품 삭제 */
	boolean deleteItemBuy(int ibItemNo);

	Page<ItemBuy> selectItemBuyByibName(String ibName, Pageable pageable);

	/* 상품 업데이트 */
	ItemBuy updateItemBuy(ItemBuy itemBuy);

	/* R :: 상품 전체 조회 */
	ItemBuy selectItemBuybyibItemNo(int ibItemNo);

	ItemBuy updateReverseAuctionPrice(int ibItemNo, int ibAuctionPrice);

	List<ItemBuy> selectMyItemByuNo(int uNo);

	void updateItemByCool(int ibItemNo, int uNo);

	/////////////////////////////// 아래는 mybatis 처리
	ItemBuySet BselectItemOne(int ibItemNo) throws Exception;

	int BselectItemCntAP(int ibItemNo) throws Exception;

	List<ItemBuy> BselectItemListIndexing(int ibUserNo, int page) throws Exception;

	///
	List<ItemBuySet> BselectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;

	List<ItemBuySet> BselectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;

	List<ItemBuySet> BselectItemNoSub(SortProcess sortProcess) throws Exception;

	List<ItemBuySet> BselectItemYesSub(SortProcess sortProcess) throws Exception;

	List<ItemBuySet> BselectItemAllHomeUp(SortProcess sortProcess) throws Exception;

	List<ItemBuySet> BselectItemAllHomeDown(SortProcess sortProcess) throws Exception;

	List<ItemCtgrCnt> BselectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception;

	List<ItemPhoto> BselectItemImages(int ipItemNo) throws Exception;

	public int BselectCountItemBuy(int ibUserNo) throws Exception;


	List<ItemBuy> BselectMyItemByuNo(int uNo);
	Integer countItemBuy();

	List<ItemBuy> selectOverEndDate();

	void updateItembyAuction(ItemBuy ib);

	List<ItemBuy> selectMyItemByuNoOnlyBuy(int uNo);

}