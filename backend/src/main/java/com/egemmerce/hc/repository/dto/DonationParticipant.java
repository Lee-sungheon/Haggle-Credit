package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "dpNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class DonationParticipant {
	@Id
	private int dpNo;
	@Column(name = "dp_user_no")
	private int dpUserNo;
	@Column(name = "dp_item_no")
	private int dpItemNo;
	private LocalDateTime dpDate;
	private int dpBid;
	private int dpAddress;
	
	public void generatedpDate() {
		this.dpDate=LocalDateTime.now();
	}

	public int getDpNo() {
		return dpNo;
	}

	public void setDpNo(int dpNo) {
		this.dpNo = dpNo;
	}

	public int getDpUserNo() {
		return dpUserNo;
	}

	public void setDpUserNo(int dpUserNo) {
		this.dpUserNo = dpUserNo;
	}

	public LocalDateTime getDpDate() {
		return dpDate;
	}

	public void setDpDate(LocalDateTime dpDate) {
		this.dpDate = dpDate;
	}


	public int getDpAddress() {
		return dpAddress;
	}

	public void setDpAddress(int dpAddress) {
		this.dpAddress = dpAddress;
	}

	public int getDpItemNo() {
		return dpItemNo;
	}

	public void setDpItemNo(int dpItemNo) {
		this.dpItemNo = dpItemNo;
	}

	public int getDpBid() {
		return dpBid;
	}

	public void setDpBid(int dpBid) {
		this.dpBid = dpBid;
	}

}
