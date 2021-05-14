package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemQna {
	private int iqNo;
	private int iqItemNo;
	private int iqUserNo;
	private String iqContent;
	private String iqDate;
	public ItemQna() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemQna(int iqNo, int iqItemNo, int iqUserNo, String iqContent, String iqDate) {
		super();
		this.iqNo = iqNo;
		this.iqItemNo = iqItemNo;
		this.iqUserNo = iqUserNo;
		this.iqContent = iqContent;
		this.iqDate = iqDate;
	}
	public int getIqNo() {
		return iqNo;
	}
	public void setIqNo(int iqNo) {
		this.iqNo = iqNo;
	}
	public int getIqItemNo() {
		return iqItemNo;
	}
	public void setIqItemNo(int iqItemNo) {
		this.iqItemNo = iqItemNo;
	}
	public int getIqUserNo() {
		return iqUserNo;
	}
	public void setIqUserNo(int iqUserNo) {
		this.iqUserNo = iqUserNo;
	}
	public String getIqContent() {
		return iqContent;
	}
	public void setIqContent(String iqContent) {
		this.iqContent = iqContent;
	}
	public String getIqDate() {
		return iqDate;
	}
	public void setIqDate(String iqDate) {
		this.iqDate = iqDate;
	}
	
	
}
