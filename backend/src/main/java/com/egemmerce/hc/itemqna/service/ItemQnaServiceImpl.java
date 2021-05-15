package com.egemmerce.hc.itemqna.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemQna;
import com.egemmerce.hc.repository.dto.ItemQnaResult;
import com.egemmerce.hc.repository.dto.User;
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
	public List<ItemQnaResult> SelectQna(int iqItemNo) throws Exception {
		int sizes = qnaMapper.SelectQna(iqItemNo).size();
		List<ItemQnaResult> result = null;
		result = qnaMapper.SelectQna(iqItemNo);
		for(int i = 0; i < sizes; i++) {
			int user = qnaMapper.SelectQna(iqItemNo).get(i).getIqUserNo();
			User forUser = qnaMapper.forSelectQna(user);
			System.out.println("1:" + forUser.getuImage());
			System.out.println("2:" + forUser.getuName());
			
			result.get(i).setU_image(forUser.getuImage());
			result.get(i).setU_name(forUser.getuName());
		}
		return result;
	}
	
	/* D :: 문의(댓글) 삭제 */
	@Override
	public int DeleteQna(int iqNo) throws Exception {
		return qnaMapper.DeleteQna(iqNo);
	}
}
