package com.egemmerce.hc.repository.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "bINo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Bookmark {
	
    @Id
	private int bINo;
	private int bUNo;
	
	public int getbINo() {
		return bINo;
	}
	public void setbINo(int bINo) {
		this.bINo = bINo;
	}
	public int getbUNo() {
		return bUNo;
	}
	public void setbUNo(int bUNo) {
		this.bUNo = bUNo;
	}
	
	
}
