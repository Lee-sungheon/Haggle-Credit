package com.egemmerce.hc.chat.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.ItemChatting;
import com.egemmerce.hc.repository.mapper.ItemChattingRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {
	
	private final ItemChattingRepository itemChattingRepository;

	@Override
	public List<ItemChatting> selectChatByicName(String icName) {
		return itemChattingRepository.findByicName(icName);
	}

	@Override
	public ItemChatting createItemChat(ItemChatting itemChatting) {
		return itemChattingRepository.save(itemChatting);
	}

	@Override
	public List<ItemChatting> selectMainChatByicItemNoAndicMainUserNo(int icItemNo, int icMainUserNo) {
		return itemChattingRepository.findDistinctByIcItemNoAndIcMainUserNo(icItemNo, icMainUserNo);
	}

}
