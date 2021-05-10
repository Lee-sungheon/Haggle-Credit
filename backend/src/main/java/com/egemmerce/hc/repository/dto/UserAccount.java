package com.egemmerce.hc.repository.dto;

import java.util.Arrays;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Getter;

@Getter
public class UserAccount extends User{

    private com.egemmerce.hc.repository.dto.User loginUser;

    public UserAccount(com.egemmerce.hc.repository.dto.User loginUser) {
        super(loginUser.getuEmail(), loginUser.getuPassword(), Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
        this.loginUser = loginUser;
    } 
    
}
