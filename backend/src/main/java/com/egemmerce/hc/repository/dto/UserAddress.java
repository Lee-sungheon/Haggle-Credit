package com.egemmerce.hc.repository.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "uaNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class UserAddress {
	
    @Id @GeneratedValue
	private int uaNo;
	private String uaName;
	private int uaUNo;
	private int uaAlias;
	private String uaLnmAddress;
	private String uaRnAddress;
	private String uaZipCode;
	private String uaDefaultSetting;
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
	public int getUaUNo() {
		return uaUNo;
	}
	public void setUaUNo(int uaUNo) {
		this.uaUNo = uaUNo;
	}
	public int getUaAlias() {
		return uaAlias;
	}
	public void setUaAlias(int uaAlias) {
		this.uaAlias = uaAlias;
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
}
