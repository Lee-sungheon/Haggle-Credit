package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.Bookmark;

@Transactional
public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
	
	List<Bookmark> findAllBybUserNo(int uNo);
	
	
	
}
