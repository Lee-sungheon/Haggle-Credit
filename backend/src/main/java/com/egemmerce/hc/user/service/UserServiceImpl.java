package com.egemmerce.hc.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	UserMapper userMapper;
	@Override
	public void updateDownCredit(int isINo) {
		userMapper.updateDownCredit(isINo);
	}
	@Override
	public void updateUpPenalty(int isINo) {
		userMapper.updateUpPenalty(isINo);
	}

}
