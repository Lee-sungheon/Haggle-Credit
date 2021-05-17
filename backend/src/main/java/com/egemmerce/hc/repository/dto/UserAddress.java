package com.egemmerce.hc.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "uaNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class UserAddress {

	@Id
	private int uaNo;
	private String uaName;
	@Column(name="ua_user_no")
	private int uaUserNo;
	private String uaLnmAddress;
	private String uaRnAddress;
	private String uaZipCode;
	@ColumnDefault(value = "false")
	private String uaDefaultSetting;
	private String uaRecvUserName;
	private String uaRecvUserNo;
	private String uaRecvUserPhone;
	private String uaRequest;

	public int getUaNo() {
		return uaNo;
	}

	public void setUaNo(int uaNo) {
		this.uaNo = uaNo;
	}

	public String getUaName() {
		return uaName;
	}

	public void setUaName(String uaName) {
		this.uaName = uaName;
	}

	public String getUaLnmAddress() {
		return uaLnmAddress;
	}

	public void setUaLnmAddress(String uaLnmAddress) {
		this.uaLnmAddress = uaLnmAddress;
	}

	public String getUaRnAddress() {
		return uaRnAddress;
	}

	public void setUaRnAddress(String uaRnAddress) {
		this.uaRnAddress = uaRnAddress;
	}

	public String getUaZipCode() {
		return uaZipCode;
	}

	public void setUaZipCode(String uaZipCode) {
		this.uaZipCode = uaZipCode;
	}

	public String getUaDefaultSetting() {
		return uaDefaultSetting;
	}

	public void setUaDefaultSetting(String uaDefaultSetting) {
		this.uaDefaultSetting = uaDefaultSetting;
	}

	public int getUaUserNo() {
		return uaUserNo;
	}

	public void setUaUserNo(int uaUserNo) {
		this.uaUserNo = uaUserNo;
	}

	public String getUaRecvUserNo() {
		return uaRecvUserNo;
	}

	public void setUaRecvUserNo(String uaRecvUserNo) {
		this.uaRecvUserNo = uaRecvUserNo;
	}

	public String getUaRecvUserPhone() {
		return uaRecvUserPhone;
	}

	public void setUaRecvUserPhone(String uaRecvUserPhone) {
		this.uaRecvUserPhone = uaRecvUserPhone;
	}

	public String getUaRecvUserName() {
		return uaRecvUserName;
	}

	public void setUaRecvUserName(String uaRecvUserName) {
		this.uaRecvUserName = uaRecvUserName;
	}

	public String getUaRequest() {
		return uaRequest;
	}

	public void setUaRequest(String uaRequest) {
		this.uaRequest = uaRequest;
	}
}
