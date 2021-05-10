package com.egemmerce.hc.chat.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.ItemChatting;

public interface ChatService {

	List<ItemChatting> selectChatByicName(String string);

	ItemChatting createItemChat(ItemChatting itemChatting);

	List<ItemChatting> selectMainChatByicItemNoAndicMainUserNo(int icItemNo, int icMainUserNo);


}
