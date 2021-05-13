package com.egemmerce.hc.item.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSet;
import com.egemmerce.hc.repository.dto.SortProcess;

public interface ItemSellService {

	/* C :: 상품 등록 */
	ItemSell insertItemSell(ItemSell itemSell);

	/* R :: 상품 전체 조회 */
	Page<ItemSell> selectItemSellAll(Pageable pageable);

	/* R :: 임시임.. 상품 전체 조회 */
	public List<ItemSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemNoSub(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemYesSub(SortProcess sortProcess) throws Exception;
	
	
	/* D :: 상품 삭제 */
	boolean deleteItemSell(int isItemNo);

	Page<ItemSell> selectItemSellByisName(String isName, Pageable pageable);

	/*상품 업데이트*/
	ItemSell updateItemSell(ItemSell itemSell);

	/*itemsell 조회*/
	ItemSell selectItemSellbyisItemNo(int isItemNo);


	void updateItembyCool(int isItemNo, int uNo, int uaNo);

	List<ItemSell> selectOverEndDate();

	void updateItembyAuction(ItemSell is);

	ItemSell updateAuctionPrice(int isItemNo, int isAuctionPrice);






}