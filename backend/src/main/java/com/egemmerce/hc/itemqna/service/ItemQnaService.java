package com.egemmerce.hc.itemqna.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemQna;

public interface ItemQnaService {

	/* C :: 문의(댓글) 작성 */
	int InsertQna(ItemQna qna) throws Exception;

	/* R :: 문의(댓글) 조회 */
	List<ItemQna> SelectQna(int iqItemNo) throws Exception;

	/* D :: 문의(댓글) 삭제 */
	int DeleteQna(int iqUserNo) throws Exception;

}