package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.User;

@Mapper
public interface ImageMapper {
	/* C :: 이미지 추가 */
	public int insertItemPhoto(ItemPhoto itemphoto) throws Exception;

	public List<ItemPhoto> selectItemPhotoList();

	public int updateProfile(User user) throws Exception;
	
}
