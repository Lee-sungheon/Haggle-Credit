package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemQnaResult {
	private int iqNo;
	private int iqItemNo;
	private int iqUserNo;
	private String iqContent;
	private String iqDate;
	private String u_name;
	private String u_image;
	public ItemQnaResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemQnaResult(int iqNo, int iqItemNo, int iqUserNo, String iqContent, String iqDate, String u_name,
			String u_image) {
		super();
		this.iqNo = iqNo;
		this.iqItemNo = iqItemNo;
		this.iqUserNo = iqUserNo;
		this.iqContent = iqContent;
		this.iqDate = iqDate;
		this.u_name = u_name;
		this.u_image = u_image;
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
	public String getU_name() {
		return u_name;
	}
	public void setU_name(String u_name) {
		this.u_name = u_name;
	}
	public String getU_image() {
		return u_image;
	}
	public void setU_image(String u_image) {
		this.u_image = u_image;
	}
	
	
}
