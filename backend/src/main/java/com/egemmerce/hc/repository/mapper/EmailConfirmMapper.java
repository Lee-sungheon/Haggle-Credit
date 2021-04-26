package com.egemmerce.hc.repository.mapper;

import com.egemmerce.hc.repository.dto.EmailConfirm;

public interface EmailConfirmMapper {

	public void insertEmailConfirm(EmailConfirm emailConfirm);

	public EmailConfirm selectEmailConfirm(EmailConfirm emailConfirm);

}
