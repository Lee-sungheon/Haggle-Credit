package com.egemmerce.hc.chat.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.chat.service.ChatService;
import com.egemmerce.hc.repository.dto.ChatRoom;
import com.egemmerce.hc.repository.dto.ItemChatting;

/**
 * 
 * @Date : 2021. 5. 13.
 * @Team : Egemmerce
 * @author : 김동빈, 임호빈
 * @deploy : 임호빈
 * @Project : Haggle Credit :: backend
 * @Function : 소켓통신, 채팅 관련 컨트롤러 클래스
 * @Description : 소켓통신과 채팅 데이터를 db에 저장
 *
 */

@RestController
public class SocketController {
	@Autowired
	private ChatService chatservice;

	/* '/receive'를 메시지를 받을 endpoint로 설정 */
	@MessageMapping("/receive")

	/* '/send'로 메시지를 반환 */
	@SendTo("/send")

	// SocketHandler는 1) /receive에서 메시지를 받고, /send로 메시지를 보내줍니다.
	// 정의한 SocketVO를 1) 인자값, 2) 반환값으로 사용합니다.
	public ItemChatting SocketHandler(ItemChatting itemChatting) throws Exception {
		// vo에서 getter로 userName을 가져옵니다.
//    	System.out.println(session.getAttributes().toString());
		int icUserNo = itemChatting.getIcUserNo();
		int icCrNo = itemChatting.getIcCrNo();
		// vo에서 setter로 content를 가져옵니다.
		String content = itemChatting.getIcChatContent();
		// int uNo=(int) session.getAttribute("uNo");
		// 생성자로 반환값을 생성합니다.
		ItemChatting result = new ItemChatting();

//		String icName = itemChatting.getIcItemNo() + "-" + mainUNo + "-" + subUNo;

		result.setIcChatContent(content);
		result.setIcUserNo(icUserNo);
		result.setIcCrNo(icCrNo);
		
		// 시간
		Date now = new Date();
		result.setIcDate(now);
		chatservice.createItemChat(result);
		
		// 채팅방 최신 대화, 시간 갱신
		ChatRoom cr = chatservice.selectBycrNo(icCrNo); 
		cr.setCrLatestMessageTime(result.getIcDate());
		cr.setCrLatestMessage(result.getIcChatContent());
		chatservice.createChatRoom(cr);
		System.out.println(result.getIcDate());
		
		// 반환
		return result;
	}
}
