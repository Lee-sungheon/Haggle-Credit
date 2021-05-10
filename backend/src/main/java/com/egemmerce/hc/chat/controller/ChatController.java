package com.egemmerce.hc.chat.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.chat.service.ChatService;
import com.egemmerce.hc.repository.dto.ItemChatting;

@RestController
@RequestMapping("/chat")
public class ChatController {
	
	/* 챗 서비스 객체 불러오기 */
	@Autowired
	private ChatService chatservice;
	
	/* 해당 약속방의 채팅 불러오기 */
	@GetMapping("/open")
	public List<ItemChatting> selectChatByRno(int iNo,int mainNo, int subNo) throws Exception{
		System.out.println("방에 입장 : "+iNo+"-"+mainNo+"-"+subNo);
		return chatservice.selectChatByicName(iNo+"-"+mainNo+"-"+subNo);
	}
	/* Main의 채팅 방 조회 */
	@GetMapping("/selectMain")
	public Set<Integer> selectMainChatByiNoandmainNo(int icItemNo,int icMainUserNo) throws Exception{
		List<ItemChatting> check=chatservice.selectMainChatByicItemNoAndicMainUserNo(icItemNo,icMainUserNo);
		Set<Integer> subNo=new HashSet<Integer>();
		for (ItemChatting ic : check) {
			subNo.add(ic.getIcSubUserNo());
		}
		return subNo;
	}
	
	/* 해당 약속방의 채팅 생성 */
	@PostMapping("/create")
	public ItemChatting createChat(@RequestBody ItemChatting itemChatting)throws Exception{
		itemChatting.setIcName(itemChatting.getIcItemNo()+"-"+itemChatting.getIcMainUserNo()+"-"+itemChatting.getIcSubUserNo());
		itemChatting.generateicDate();
		System.out.println(itemChatting.getIcChatContent());
		System.out.println(itemChatting.getIcMainUserNo());
		System.out.println(itemChatting.getIcSubUserNo());
		return chatservice.createItemChat(itemChatting);
	}

}
