package com.egemmerce.hc.repository.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSellMapper {
	public List<ItemSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;

	public List<ItemSet> selectItemNoSub(SortProcess sortProcess) throws Exception;

	public List<ItemSet> selectItemYesSub(SortProcess sortProcess) throws Exception;

	public List<ItemSet> selectItemAllHomeUp(SortProcess sortProcess) throws Exception;

	public List<ItemSet> selectItemAllHomeDown(SortProcess sortProcess) throws Exception;

	public List<ItemCtgrCnt> selectCountByCtgr(ItemCtgrSearch itemCtgrSearch) throws Exception;

	public List<ItemCtgrCnt> selectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception;

	public List<ItemPhoto> selectItemImages(int ipItemNo) throws Exception;

	public Map<String, Object> selectItemOne(int isNo) throws Exception;

	public List<ItemSell> selectItemListIndexing(int isUserNo, int page) throws Exception;

	public int selectCountItemSell(int isUserNo) throws Exception;
}
