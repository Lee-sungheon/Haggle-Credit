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
	@Column(name = "dp_Item_donation_no")
	private int dpItemDonationNo;
	@Column(name = "dp_user_no")
	private int dpUserNo;
	private int dpItemNo;
	private LocalDateTime dpDate;
	private int dpbid;
	private int dpAddress;

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

	public int getDpbid() {
		return dpbid;
	}

	public void setDpbid(int dpbid) {
		this.dpbid = dpbid;
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

}
