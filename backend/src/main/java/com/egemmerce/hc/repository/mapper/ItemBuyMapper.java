package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemBuyMapper {
	public List<ItemBuySet> BselectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemBuySet> BselectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemBuySet> BselectItemNoSub(SortProcess sortProcess) throws Exception;

	public List<ItemBuySet> BselectItemYesSub(SortProcess sortProcess) throws Exception;

	public List<ItemBuySet> BselectItemAllHomeUp(SortProcess sortProcess) throws Exception;

	public List<ItemBuySet> BselectItemAllHomeDown(SortProcess sortProcess) throws Exception;

	public List<ItemCtgrCnt> BselectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception;

	public List<ItemPhoto> BselectItemImages(int ipItemNo) throws Exception;

	public ItemBuySet BselectItemOne(int ibItemNo) throws Exception;
	
	public int BselectItemCntAP(int ibItemNo) throws Exception;

	public List<ItemBuy> BselectItemListIndexing(int ibUserNo, int page) throws Exception;
	
	public int BselectCountItemBuy(int ibUserNo) throws Exception;

}
