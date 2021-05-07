package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "ucNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class UserCredit {
	
    @Id @GeneratedValue
	private int ucNo;
    
	private int ucApNo;
	private int ucUNo;
	private String ucClass;
	private int ucPoint;
	private LocalDateTime ucTime;
	
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
	public int getUcUNo() {
		return ucUNo;
	}
	public void setUcUNo(int ucUNo) {
		this.ucUNo = ucUNo;
	}
	public String getUcClass() {
		return ucClass;
	}
	public void setUcClass(String ucClass) {
		this.ucClass = ucClass;
	}
	public int getUcPoint() {
		return ucPoint;
	}
	public void setUcPoint(int ucPoint) {
		this.ucPoint = ucPoint;
	}
	public LocalDateTime getUcTime() {
		return ucTime;
	}
	public void setUcTime(LocalDateTime ucTime) {
		this.ucTime = ucTime;
	}
	
	
}
