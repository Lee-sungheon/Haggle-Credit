package com.egemmerce.hc.user.service;

import com.egemmerce.hc.repository.dto.EmailConfirm;

public interface UserEmailService {

	void sendSimpleMessage(String to) throws Exception;

	EmailConfirm selectEmailConfirm(EmailConfirm emailConfirm) throws Exception;

}