package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CtgrCountSet {
	private String isCategoryMain;
	private int cnt;
	public CtgrCountSet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CtgrCountSet(String isCategoryMain, int cnt) {
		super();
		this.isCategoryMain = isCategoryMain;
		this.cnt = cnt;
	}
	public String getIsCategoryMain() {
		return isCategoryMain;
	}
	public void setIsCategoryMain(String isCategoryMain) {
		this.isCategoryMain = isCategoryMain;
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	
	
	

}
