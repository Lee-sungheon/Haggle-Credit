package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ChatRoom;

@Transactional
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {

	List<ChatRoom> findAllBycrUserNoOne(int uNo);

	List<ChatRoom> findAllBycrUserNoTwo(int uNo);

	ChatRoom findAllBycrName(String crName);

	ChatRoom findAllBycrNo(int crNo);

	int deleteBycrNo(int crNo);
	
}
