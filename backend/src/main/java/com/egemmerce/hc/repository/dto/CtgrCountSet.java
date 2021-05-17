package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CtgrCountSet {
	private String ibCategoryMain;
	private int cnt;
	public CtgrCountSet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CtgrCountSet(String ibCategoryMain, int cnt) {
		super();
		this.ibCategoryMain = ibCategoryMain;
		this.cnt = cnt;
	}
	public String getIsCategoryMain() {
		return ibCategoryMain;
	}
	public void setIsCategoryMain(String ibCategoryMain) {
		this.ibCategoryMain = ibCategoryMain;
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	
	
	

}
