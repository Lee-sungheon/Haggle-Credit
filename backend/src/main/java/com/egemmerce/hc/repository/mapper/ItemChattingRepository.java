package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ItemChatting;

@Transactional
public interface ItemChattingRepository extends JpaRepository<ItemChatting, Long>{

	List<ItemChatting> findByicCrNo(int crNo);

}
