package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Bookmark;

@Mapper
public interface BookmarkMapper {
	public Bookmark selectBookmarkStatus(Bookmark bookmark) throws Exception;
	
	public int deleteBybItemNoAndBUserNo(int bItemNo, int bUserNo) throws Exception;
}
