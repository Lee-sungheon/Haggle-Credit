package com.egemmerce.hc.config;

import org.apache.catalina.startup.SetAllPropertiesRule;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

/**
 * 
 * @Date : 2021. 5. 12.
 * @Team : Egemmerce
 * @author : 임호빈
 * @deploy : 김동빈
 * @Project : Egemmerce :: backend
 * @Function : 웹 소켓 관련 콘피그
 * @Description
 *
 */

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    // 클라이언트가 메시지를 구독할 endpoint를 정의합니다.
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/send");
        
        //test
        config.setApplicationDestinationPrefixes("/pub");
    }

    
    
    @Override
    // connection을 맺을때 CORS 허용합니다.
    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/websocket").setAllowedOrigins("http://localhost:8080").setAllowedOriginPatterns("https://i4d107.p.ssafy.io").setAllowedOriginPatterns("wss://i4d107.p.ssafy.io").withSockJS();
        registry.addEndpoint("/websocket").setAllowedOriginPatterns("*").withSockJS();
    }
}
