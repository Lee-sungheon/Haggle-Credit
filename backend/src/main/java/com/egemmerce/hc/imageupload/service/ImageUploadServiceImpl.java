package com.egemmerce.hc.imageupload.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.ItemPhotoRepository;
import com.egemmerce.hc.repository.mapper.UserRepository;

import lombok.RequiredArgsConstructor;

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
@RequiredArgsConstructor
public class ImageUploadServiceImpl implements ImageUploadService {


   private ItemPhotoRepository itemPhotoRepository;
   private UserRepository userRepository;
   
   @Override
   public ItemPhoto InsertItemPhoto(ItemPhoto itemPhoto) throws Exception {
      return itemPhotoRepository.save(itemPhoto);
   }

   @Override
   public List<ItemPhoto> selectItemPhotoList() {
      return itemPhotoRepository.findAll();
   }

   @Override
   public User UpdateProfile(User user) throws Exception {
	   User check=userRepository.findByuEmail(user.getuEmail());
	   check.setuImage(user.getuImage());
      return userRepository.save(check);
   }

}