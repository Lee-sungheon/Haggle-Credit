package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "icNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemChatting {
	@Id
	private int icNo;
	
	private int icItemNo;
	private int icMainUserNo;
	private int icSubUserNo;
	private String icName;
	private String icChatContent;
	private LocalDateTime icDate;
	public int getIcNo() {
		return icNo;
	}
	public void setIcNo(int icNo) {
		this.icNo = icNo;
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
	
	public void generateicDate() {
		this.icDate=LocalDateTime.now();
	}

	public String getIcName() {
		return icName;
	}
	public void setIcName(String icName) {
		this.icName = icName;
	}

	public int getIcMainUserNo() {
		return icMainUserNo;
	}
	public void setIcMainUserNo(int icMainUserNo) {
		this.icMainUserNo = icMainUserNo;
	}
	public int getIcSubUserNo() {
		return icSubUserNo;
	}
	public void setIcSubUserNo(int icSubUserNo) {
		this.icSubUserNo = icSubUserNo;
	}
	public int getIcItemNo() {
		return icItemNo;
	}
	public void setIcItemNo(int icItemNo) {
		this.icItemNo = icItemNo;
	}
	
	
}
