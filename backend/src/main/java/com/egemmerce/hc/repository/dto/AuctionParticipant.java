package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "apNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class AuctionParticipant {
	
    @Id
	private int apNo;
	private int apItemNo;
	private int apUserNo;
	private int apBid;
	private LocalDateTime apDate;
	private String apAddress;
	
	public void generateapDate() {
		this.apDate=LocalDateTime.now();
	}

	public int getApNo() {
		return apNo;
	}

	public void setApNo(int apNo) {
		this.apNo = apNo;
	}

	public int getApItemNo() {
		return apItemNo;
	}

	public void setApItemNo(int apItemNo) {
		this.apItemNo = apItemNo;
	}

	public int getApUserNo() {
		return apUserNo;
	}

	public void setApUserNo(int apUserNo) {
		this.apUserNo = apUserNo;
	}

	public int getApBid() {
		return apBid;
	}

	public void setApBid(int apBid) {
		this.apBid = apBid;
	}

	public LocalDateTime getApDate() {
		return apDate;
	}

	public void setApDate(LocalDateTime apDate) {
		this.apDate = apDate;
	}

	public String getApAddress() {
		return apAddress;
	}

	public void setApAddress(String apAddress) {
		this.apAddress = apAddress;
	}
	
	
	
}
