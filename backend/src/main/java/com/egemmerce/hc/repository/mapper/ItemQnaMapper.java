package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemQna;

@Mapper
public interface ItemQnaMapper {
	/* C :: 문의(댓글) 작성 */
	public int InsertQna(ItemQna qna) throws Exception;
	/* R :: 문의(댓글) 조회 */
	public List<ItemQna> SelectQna(int iqItemNo) throws Exception;
	/* D :: 문의(댓글) 삭제 */
	public int DeleteQna(int iqUserNo) throws Exception;
}
