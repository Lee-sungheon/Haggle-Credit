package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "apNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class AuctionPaticipant {
	
    @Id @GeneratedValue
	private int apNo;
	private int apANo;
	private int apUNo;
	private int apBid;
	private LocalDateTime apDate;
	public int getApNo() {
		return apNo;
	}
	public void setApNo(int apNo) {
		this.apNo = apNo;
	}
	public int getApANo() {
		return apANo;
	}
	public void setApANo(int apANo) {
		this.apANo = apANo;
	}
	public int getApUNo() {
		return apUNo;
	}
	public void setApUNo(int apUNo) {
		this.apUNo = apUNo;
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
	
	
}
