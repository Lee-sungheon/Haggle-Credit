package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemSell;

@Mapper
public interface ItemMapper {
	/* C :: 상품 등록 */
	public int insertItem(ItemSell item) throws Exception;
	
	/* R :: 상품 전체조회 */
	public List<ItemSell> selectItemAll() throws Exception;

	/* R :: 상품 조회(판매/구매) */
	public List<ItemSell> selectItemListByType(String iType) throws Exception;
	
	/* U :: 상품 업데이트(거래완료) */
	public boolean updateItemDealCompleted(ItemSell item) throws Exception;
	
	/* D :: 상품 삭제 */
	public boolean deleteItem(int iNo) throws Exception;
}
