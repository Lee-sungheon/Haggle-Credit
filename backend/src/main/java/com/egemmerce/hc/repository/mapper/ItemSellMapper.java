package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSellMapper {
	public List<ItemSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemNoSub(SortProcess sortProcess) throws Exception;
	public List<ItemSet> selectItemYesSub(SortProcess sortProcess) throws Exception;
}
