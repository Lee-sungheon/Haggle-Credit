package com.egemmerce.hc.chat.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemChatting;

public interface ChatService {

	List<ItemChatting> selectChatByicCrNo(int crNo);

	ItemChatting createItemChat(ItemChatting itemChatting);

	List<ItemChatting> selectMainChatByicItemNoAndicMainUserNo(int icItemNo, int icMainUserNo);

	ChatRoom createChatRoom(ChatRoom ChatRoom);
	
	ChatRoom selectBycrName(String crName);
	
	List<ChatRoom> selectChatRoomByuNo(int uNo);
	
	ChatRoom selectBycrNo(int crNo);
}
