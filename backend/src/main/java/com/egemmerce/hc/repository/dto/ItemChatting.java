package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
@Entity @EqualsAndHashCode(of = "icNo")
@Builder @AllArgsConstructor @NoArgsConstructor

public class ItemChatting {
	@Id @GeneratedValue
	private int icNo;
	
	private int icINo;
	private int icUNo;
	private String icChatContent;
	private LocalDateTime icDate;
	public int getIcNo() {
		return icNo;
	}
	public void setIcNo(int icNo) {
		this.icNo = icNo;
	}
	public int getIcINo() {
		return icINo;
	}
	public void setIcINo(int icINo) {
		this.icINo = icINo;
	}
	public int getIcUNo() {
		return icUNo;
	}
	public void setIcUNo(int icUNo) {
		this.icUNo = icUNo;
	}
	public String getIcChatContent() {
		return icChatContent;
	}
	public void setIcChatContent(String icChatContent) {
		this.icChatContent = icChatContent;
	}
	public LocalDateTime getIcDate() {
		return icDate;
	}
	public void setIcDate(LocalDateTime icDate) {
		this.icDate = icDate;
	}
	
	
}
