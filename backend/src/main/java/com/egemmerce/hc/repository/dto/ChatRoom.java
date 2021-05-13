package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "crNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ChatRoom {
	@Id
	private int crNo;

	private String crName;
	private int crItemNo;
	private int crUNoOne;
	private int crUNoTwo;
	private String crLatestMessage;
	private LocalDateTime crLatestMessageTime;

	public int getCrNo() {
		return crNo;
	}

	public void setCrNo(int crNo) {
		this.crNo = crNo;
	}

	public String getCrName() {
		return crName;
	}

	public void setCrName(String crName) {
		this.crName = crName;
	}

	public int getCrItemNo() {
		return crItemNo;
	}

	public void setCrItemNo(int crItemNo) {
		this.crItemNo = crItemNo;
	}

	public int getCrUNoOne() {
		return crUNoOne;
	}

	public void setCrUNoOne(int crUNoOne) {
		this.crUNoOne = crUNoOne;
	}

	public int getCrUNoTwo() {
		return crUNoTwo;
	}

	public void setCrUNoTwo(int crUNoTwo) {
		this.crUNoTwo = crUNoTwo;
	}

	public String getCrLatestMessage() {
		return crLatestMessage;
	}

	public void setCrLatestMessage(String crLatestMessage) {
		this.crLatestMessage = crLatestMessage;
	}

	public LocalDateTime getCrLatestMessageTime() {
		return crLatestMessageTime;
	}

	public void setCrLatestMessageTime(LocalDateTime crLatestMessageTime) {
		this.crLatestMessageTime = crLatestMessageTime;
	}
}
