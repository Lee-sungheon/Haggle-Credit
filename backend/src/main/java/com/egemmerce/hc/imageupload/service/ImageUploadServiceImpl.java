package com.egemmerce.hc.imageupload.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.ImageMapper;

/**
 * 
 * @Date : 2021. 5. 7.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 이미지 업로드 관련 서비스 클래스
 * @Description : 프로필 사진, 상품, 리뷰 사진 업로드
 *
 */

@Service
public class ImageUploadServiceImpl implements ImageUploadService {
	@Autowired
	private ImageMapper mapper;

	@Override
	public int InsertItemPhoto(ItemPhoto itemphoto) throws Exception {
		return mapper.insertItemPhoto(itemphoto);
	}

	@Override
	public List<ItemPhoto> selectItemPhotoList() {
		return mapper.selectItemPhotoList();
	}

	@Override
	public int UpdateProfile(User user) throws Exception {
		return mapper.updateProfile(user);
	}

}
