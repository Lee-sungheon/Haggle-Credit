package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "upNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class UserPoint {
	
    @Id @GeneratedValue
	private int upNo;
    
	private int upApNo;
	private int upUNo;
	private String upClass;
	private int upPoint;
	private LocalDateTime upTime;
	
	public int getUpNo() {
		return upNo;
	}
	public void setUpNo(int upNo) {
		this.upNo = upNo;
	}
	public int getUpApNo() {
		return upApNo;
	}
	public void setUpApNo(int upApNo) {
		this.upApNo = upApNo;
	}
	public int getUpUNo() {
		return upUNo;
	}
	public void setUpUNo(int upUNo) {
		this.upUNo = upUNo;
	}
	public String getUpClass() {
		return upClass;
	}
	public void setUpClass(String upClass) {
		this.upClass = upClass;
	}
	public int getUpPoint() {
		return upPoint;
	}
	public void setUpPoint(int upPoint) {
		this.upPoint = upPoint;
	}
	public LocalDateTime getUpTime() {
		return upTime;
	}
	public void setUpTime(LocalDateTime upTime) {
		this.upTime = upTime;
	}
	
	
}
