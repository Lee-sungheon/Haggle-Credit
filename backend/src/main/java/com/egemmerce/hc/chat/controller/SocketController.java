package com.egemmerce.hc.chat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.chat.service.ChatService;
import com.egemmerce.hc.repository.dto.ItemChatting;

@RestController
public class SocketController {
	@Autowired
	private ChatService chatservice;

    /* '/receive'를 메시지를 받을 endpoint로 설정 */
    @MessageMapping("/receive")

    /* '/send'로 메시지를 반환 */
    @SendTo("/send")
    
    //SocketHandler는 1) /receive에서 메시지를 받고, /send로 메시지를 보내줍니다.
    // 정의한 SocketVO를 1) 인자값, 2) 반환값으로 사용합니다.
    public ItemChatting SocketHandler(ItemChatting itemChatting) throws Exception {
        // vo에서 getter로 userName을 가져옵니다.
//    	System.out.println(session.getAttributes().toString());
        int mainUNo = itemChatting.getIcMainUserNo();
        int subUNo = itemChatting.getIcSubUserNo();
        // vo에서 setter로 content를 가져옵니다.
        String content = itemChatting.getIcChatContent();
        String icName=itemChatting.getIcItemNo()+"-"+mainUNo+"-"+subUNo;
        //        int uNo=(int) session.getAttribute("uNo");
        // 생성자로 반환값을 생성합니다.
        ItemChatting result = new ItemChatting();
        
        System.out.println(mainUNo);
        System.out.println(subUNo);
        System.out.println(content);
        System.out.println("채팅방 이름 : "+icName);
        
        result.setIcChatContent(content);
        result.setIcMainUserNo(mainUNo);
        result.setIcSubUserNo(subUNo);
        result.setIcName(icName);
        result.generateicDate();
        chatservice.createItemChat(result);
        // 반환
        return result;
    }
}
