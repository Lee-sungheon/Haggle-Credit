package com.egemmerce.hc.chat.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemChatting;
import com.egemmerce.hc.repository.mapper.ChatRoomRepository;
import com.egemmerce.hc.repository.mapper.ItemChattingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
	
	private final ItemChattingRepository itemChattingRepository;
	private final ChatRoomRepository chatRoomRepository;

	@Override
	public List<ItemChatting> selectChatByicCrNo(int crNo) {
		return itemChattingRepository.findByicCrNo(crNo);
	}

	@Override
	public ItemChatting createItemChat(ItemChatting itemChatting) {
		return itemChattingRepository.save(itemChatting);
	}

	@Override
	public List<ItemChatting> selectMainChatByicItemNoAndicMainUserNo(int icItemNo, int icMainUserNo) {
		return itemChattingRepository.findDistinctByIcItemNoAndIcMainUserNo(icItemNo, icMainUserNo);
	}

	@Override
	public ChatRoom createChatRoom(ChatRoom chatRoom) {
		return chatRoomRepository.save(chatRoom);
	}

	@Override
	public ChatRoom selectBycrName(String crName) {
		return chatRoomRepository.findAllBycrName(crName);
	}

	@Override
	public List<ChatRoom> selectChatRoomByuNo(int uNo) {
		List<ChatRoom> one = chatRoomRepository.findAllBycrUserNoOne(uNo);
		List<ChatRoom> two = chatRoomRepository.findAllBycrUserNoOne(uNo);
		List<ChatRoom> sum = new ArrayList<>();
		for(int i = 0; i < one.size(); i++)
			sum.add(one.get(i));
		for(int j = 0; j < two.size(); j++)
			sum.add(two.get(j));
		Collections.sort(sum, Collections.reverseOrder());
		return sum;
	}

	@Override
	public ChatRoom selectBycrNo(int crNo) {
		return chatRoomRepository.findAllBycrNo(crNo);
	}

}
