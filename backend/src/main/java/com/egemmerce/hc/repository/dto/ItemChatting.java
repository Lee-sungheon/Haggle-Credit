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

@Entity
@EqualsAndHashCode(of = "icNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemChatting {
	@Id
	private int icNo;

	private int icCrNo;
	private int icItemNo;
	private int icUserNo;
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
		this.icDate = LocalDateTime.now();
	}

	public int getIcUserNo() {
		return icUserNo;
	}

	public void setIcUserNo(int icUserNo) {
		this.icUserNo = icUserNo;
	}

	public int getIcItemNo() {
		return icItemNo;
	}

	public void setIcItemNo(int icItemNo) {
		this.icItemNo = icItemNo;
	}

	public int getIcCrNo() {
		return icCrNo;
	}

	public void setIcCrNo(int icCrNo) {
		this.icCrNo = icCrNo;
	}

}
