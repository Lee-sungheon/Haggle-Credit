package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSet;
import com.egemmerce.hc.repository.dto.SortProcess;

@Mapper
public interface ItemSellMapper {
	public List<ItemSet> selectItemSellAll_xml_1(int pageNo) throws Exception;
	public List<ItemSet> selectItemSellAll_xml_2(int pageNo) throws Exception;
	public List<ItemSet> selectItemSellAll_xml_3(int pageNo) throws Exception;
}
