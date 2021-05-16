package com.egemmerce.hc.repository.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSellMapper {
	public List<ItemSellSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemSellSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemSellSet> selectItemNoSub(SortProcess sortProcess) throws Exception;

	public List<ItemSellSet> selectItemYesSub(SortProcess sortProcess) throws Exception;

	public List<ItemSellSet> selectItemAllHomeUp(SortProcess sortProcess) throws Exception;

	public List<ItemSellSet> selectItemAllHomeDown(SortProcess sortProcess) throws Exception;

	public List<ItemCtgrCnt> selectCountByCtgr(ItemCtgrSearch itemCtgrSearch) throws Exception;

	public List<ItemCtgrCnt> selectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception;

	public List<ItemPhoto> selectItemImages(int ipItemNo) throws Exception;

	public ItemSellSet selectItemOne(int isNo) throws Exception;
	
	public int selectItemCntAP(int isItemNo) throws Exception;

	public List<ItemSell> selectItemListIndexing(int isUserNo, int page) throws Exception;

	public int selectCountItemSell(int isUserNo) throws Exception;
}
