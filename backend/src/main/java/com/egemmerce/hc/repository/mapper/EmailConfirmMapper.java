package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.EmailConfirm;
@Mapper
public interface EmailConfirmMapper {
	public void insertEmailConfirm(EmailConfirm emailConfirm) throws Exception;
	public EmailConfirm selectEmailConfirm(EmailConfirm emailConfirm) throws Exception;
}
