package com.egemmerce.hc.repository.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "bItemNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Bookmark {
	
    @Id
	private int bItemNo;
	private int bUserNo;
	public int getbItemNo() {
		return bItemNo;
	}
	public void setbItemNo(int bItemNo) {
		this.bItemNo = bItemNo;
	}
	public int getbUserNo() {
		return bUserNo;
	}
	public void setbUserNo(int bUserNo) {
		this.bUserNo = bUserNo;
	}
	

}
