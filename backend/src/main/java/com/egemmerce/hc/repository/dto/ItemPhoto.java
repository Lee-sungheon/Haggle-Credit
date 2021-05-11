package com.egemmerce.hc.repository.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "ipNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class ItemPhoto {
	
    @Id
	private int ipNo;
	private int ipINo;
	private String ipValue;
	public int getIpNo() {
		return ipNo;
	}
	public void setIpNo(int ipNo) {
		this.ipNo = ipNo;
	}
	public int getIpINo() {
		return ipINo;
	}
	public void setIpINo(int ipINo) {
		this.ipINo = ipINo;
	}
	public String getIpValue() {
		return ipValue;
	}
	public void setIpValue(String ipValue) {
		this.ipValue = ipValue;
	}
	
	
}
