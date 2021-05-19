package com.egemmerce.hc.chat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.chat.service.ChatService;
import com.egemmerce.hc.imageupload.service.ImageUploadService;
import com.egemmerce.hc.item.service.ItemBuyService;
import com.egemmerce.hc.item.service.ItemSellService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemChatting;
import com.egemmerce.hc.repository.dto.ItemSell;
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

	@Autowired
	private ItemService itemService;

	@Autowired
	private ItemSellService itemSellService;

	@Autowired
	private ItemBuyService itemBuyService;

	/* 해당 채팅방 채팅 불러오기 */
	@GetMapping("/enter")
	public List<ItemChatting> selectChatBycrNo(int crNo) throws Exception {
		return chatservice.selectChatByicCrNo(crNo);
	}

	/* 해당 채팅방 조회 */
	@GetMapping("/roominfo")
	public List<ChatRoom> selectChatRoomBycrNo(int crNo) throws Exception {
		List<ChatRoom> cr = new ArrayList<>();
		cr.add(chatservice.selectBycrNo(crNo));
		return cr;
	}

	/* 사용자의 채팅 방 조회 */
	@GetMapping("/roomlist")
	public List<ChatRoom> selectChatRoom(int uNo) throws Exception {
		return chatservice.selectChatRoomByuNo(uNo);
	}

	/* 해당 채팅방 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<Integer> createChat(@RequestParam int crNo) throws Exception {
		return new ResponseEntity<Integer>(chatservice.deleteItemChat(crNo), HttpStatus.OK);
	}

	/* 채팅방 */
	@PostMapping("/connect")
	public int connectChatRoom(@RequestBody ChatRoom chatRoom) throws Exception {
		String crName = chatRoom.getCrItemNo() + "-" + chatRoom.getCrUserNoOne() + "-" + chatRoom.getCrUserNoTwo();
		if (chatservice.selectBycrName(crName) != null) {
			return chatservice.selectBycrName(crName).getCrNo();
		}
		int one = chatRoom.getCrUserNoOne();
		int two = chatRoom.getCrUserNoTwo();
		chatRoom.setCrName(crName);
		chatRoom.setCrUserOneName(userService.selectUserByuNo(one).getuName());
		chatRoom.setCrUserTwoName(userService.selectUserByuNo(two).getuName());
		chatRoom.setCrUserOneProfile(imageService.selectUserImage(one));
		chatRoom.setCrUserTwoProfile(imageService.selectUserImage(two));

		int iNo = chatRoom.getCrItemNo();
		String type = itemService.selectItem(iNo).getiType();
		if (type.equals("sell")) {
			ItemSell itemSell = itemSellService.selectItemSellbyisItemNo(iNo);
			chatRoom.setCrItemName(itemSell.getIsItemName());
			chatRoom.setCrItemPrice(itemSell.getIsAuctionIngPrice());
		} else {
			ItemBuy itemBuy = itemBuyService.selectItemBuybyibItemNo(iNo);
			chatRoom.setCrItemName(itemBuy.getIbName());
			chatRoom.setCrItemPrice(itemBuy.getIbAuctionIngPrice());
		}
		if (imageService.selectItemPhotoList(iNo).size() > 0)
			chatRoom.setCrItemImage(imageService.selectItemPhotoList(iNo).get(0).getIpValue());
		else
			chatRoom.setCrItemImage(
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJgwdOAjqaZGS7kn35IVm_ZN6E4XFuJ7V_g&usqp=CAU");

		chatservice.createChatRoom(chatRoom);

		return chatservice.selectBycrName(crName).getCrNo();
	}
}