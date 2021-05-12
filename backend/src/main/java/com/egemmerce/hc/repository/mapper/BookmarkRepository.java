package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egemmerce.hc.repository.dto.Bookmark;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
	
	List<Bookmark> findAllBybUserNo(int uNo);
	
	Boolean deleteBybNo(int bNo);
	
}
