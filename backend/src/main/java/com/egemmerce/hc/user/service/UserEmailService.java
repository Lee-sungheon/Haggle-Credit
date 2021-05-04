package com.egemmerce.hc.user.service;

import com.egemmerce.hc.repository.dto.EmailMessage;

public interface UserEmailService {

	void sendEmail(EmailMessage emailMessage);
}