package com.egemmerce.hc.chat.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemChatting;

/**
 * 
 * @Date : 2021. 5. 13.
 * @Team : Egemmerce
 * @author : 김동빈, 임호빈
 * @deploy : 임호빈
 * @Project : Haggle Credit :: backend
 * @Function : 채팅 관련 서비스 클래스
 * @Description : 채팅과 채팅방 관련 데이터 저장, 조회
 *
 */

public interface ChatService {

	List<ItemChatting> selectChatByicCrNo(int crNo);

	ItemChatting createItemChat(ItemChatting itemChatting);

	ChatRoom createChatRoom(ChatRoom ChatRoom);
	
	ChatRoom selectBycrName(String crName);
	
	List<ChatRoom> selectChatRoomByuNo(int uNo);
	
	ChatRoom selectBycrNo(int crNo);

	int deleteItemChat(int crNo);
}
