package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.ItemPhoto;

@Mapper
public interface ItemPhotoMapper {
	
	void SSGupload(ItemPhoto ip);

}
