package com.egemmerce.hc.imageupload.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.User;

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

public interface ImageUploadService {

   public int InsertItemPhoto(ItemPhoto itemphoto) throws Exception;

   public List<ItemPhoto> selectItemPhotoList();

   public int UpdateProfile(User user) throws Exception;

}