package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "ucNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCredit {

	@Id
	private int ucNo;

	private int ucApNo;
	private int ucUserNo;
	private String ucClass;
	private int ucCredit;
	private LocalDateTime ucTime;

	public void generateucTime() {
		this.ucTime = LocalDateTime.now();
	}

	public int getUcNo() {
		return ucNo;
	}

	public void setUpNo(int ucNo) {
		this.ucNo = ucNo;
	}

	public int getUcApNo() {
		return ucApNo;
	}

	public void setUcApNo(int ucApNo) {
		this.ucApNo = ucApNo;
	}

	public String getUcClass() {
		return ucClass;
	}

	public void setUcClass(String ucClass) {
		this.ucClass = ucClass;
	}


	public LocalDateTime getUcTime() {
		return ucTime;
	}

	public void setUcTime(LocalDateTime ucTime) {
		this.ucTime = ucTime;
	}

	public int getUcUserNo() {
		return ucUserNo;
	}

	public void setUcUserNo(int ucUserNo) {
		this.ucUserNo = ucUserNo;
	}

	public void setUcNo(int ucNo) {
		this.ucNo = ucNo;
	}

	public int getUcCredit() {
		return ucCredit;
	}

	public void setUcCredit(int ucCredit) {
		this.ucCredit = ucCredit;
	}

}
