package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "apNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class AuctionParticipant {
	
    @Id
	private int apNo;
    @Column(name="ap_item_no")
	private int apItemNo;
    @Column(name = "ap_user_no")
	private int apUserNo;
	private int apBid;
	private LocalDateTime apDate;
	private int apAddress;
	
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

	public int getApAddress() {
		return apAddress;
	}

	public void setApAddress(int apAddress) {
		this.apAddress = apAddress;
	}


	
	
}
