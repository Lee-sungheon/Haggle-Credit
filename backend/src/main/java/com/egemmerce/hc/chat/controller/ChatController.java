package com.egemmerce.hc.chat.controller;

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
import com.egemmerce.hc.imageupload.service.ImageUploadService;
import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemChatting;
import com.egemmerce.hc.user.service.UserService;

/**
 * 
 * @Date : 2021. 5. 13.
 * @Team : Egemmerce
 * @author : 김동빈, 임호빈
 * @deploy : 임호빈
 * @Project : Haggle Credit :: backend
 * @Function : 채팅 관련 컨트롤러 클래스
 * @Description : 채팅과 채팅방 관련 데이터 저장, 조회
 *
 */

@RestController
@RequestMapping("/chat")
public class ChatController {

	/* 챗 서비스 객체 불러오기 */
	@Autowired
	private ChatService chatservice;

	@Autowired
	private ImageUploadService imageService;

	@Autowired
	private UserService userService;

	/* 해당 채팅방 채팅 불러오기 */
	@GetMapping("/enter")
	public List<ItemChatting> selectChatBycrNo(int crNo) throws Exception {
//		System.out.println(crNo + "번방에 입장");
		return chatservice.selectChatByicCrNo(crNo);
	}
	
	/* 해당 채팅방 조회 */
	@GetMapping("/roominfo")
	public List<ChatRoom> selectChatRoomBycrNo(int crNo) throws Exception {
		return chatservice.selectBycrNo(crNo);
	}

	/* 사용자의 채팅 방 조회 */
	@GetMapping("/roomlist")
	public List<ChatRoom> selectChatRoom(int uNo) throws Exception {
		return chatservice.selectChatRoomByuNo(uNo);
	}

	/* Main의 채팅 방 조회 */
	@GetMapping("/selectMain")
	public Set<Integer> selectMainChatByiNoandmainNo(int icItemNo, int icMainUserNo) throws Exception {
		List<ItemChatting> check = chatservice.selectMainChatByicItemNoAndicMainUserNo(icItemNo, icMainUserNo);
		Set<Integer> subNo = new HashSet<Integer>();
		for (ItemChatting ic : check) {
			subNo.add(ic.getIcSubUserNo());
		}
		return subNo;
	}

	/* 해당 채팅방의 채팅 생성 */
	@PostMapping("/create")
	public ItemChatting createChat(@RequestBody ItemChatting itemChatting) throws Exception {
		itemChatting.generateicDate();
		System.out.println(itemChatting.getIcChatContent());
		System.out.println(itemChatting.getIcMainUserNo());
		System.out.println(itemChatting.getIcSubUserNo());
		return chatservice.createItemChat(itemChatting);
	}

	/* 채팅방 */
	@PostMapping("/connect")
	public int connectChatRoom(@RequestBody ChatRoom chatRoom) throws Exception {
		String crName = chatRoom.getCrItemNo() + "-" + chatRoom.getCrUserNoOne() + "-" + chatRoom.getCrUserNoTwo();
		if(chatservice.selectBycrName(crName) != null) {
			return chatservice.selectBycrName(crName).getCrNo(); 
		}
		int one = chatRoom.getCrUserNoOne();
		int two = chatRoom.getCrUserNoTwo();
		chatRoom.setCrName(crName);
		chatRoom.setCrUserOneName(userService.selectUserByuNo(one).getuName());
		chatRoom.setCrUserTwoName(userService.selectUserByuNo(two).getuName());
		chatRoom.setCrUserOneProfile(imageService.selectUserImage(one));
		chatRoom.setCrUserTwoProfile(imageService.selectUserImage(two));
		return chatservice.createChatRoom(chatRoom).getCrNo();
	}
}
