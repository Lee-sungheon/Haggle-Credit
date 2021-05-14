package com.egemmerce.hc.itemqna.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemQna;
import com.egemmerce.hc.repository.mapper.ItemQnaMapper;

@Service
public class ItemQnaServiceImpl implements ItemQnaService {
	@Autowired
	private ItemQnaMapper qnaMapper;
	
	/* C :: 문의(댓글) 작성 */
	@Override
	public int InsertQna(ItemQna qna) throws Exception {
		return qnaMapper.InsertQna(qna);
	}
	
	/* R :: 문의(댓글) 조회 */
	@Override
	public List<ItemQna> SelectQna(int iqItemNo) throws Exception {
		return qnaMapper.SelectQna(iqItemNo);
	}
	
	/* D :: 문의(댓글) 삭제 */
	@Override
	public int DeleteQna(int iqUserNo) throws Exception {
		return qnaMapper.DeleteQna(iqUserNo);
	}
}
