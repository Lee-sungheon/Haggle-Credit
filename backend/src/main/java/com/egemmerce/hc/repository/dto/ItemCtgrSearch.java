package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemCtgrSearch {
	private String ctgrMain;
	private String ctgrSub;
	public ItemCtgrSearch() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemCtgrSearch(String ctgrMain, String ctgrSub) {
		super();
		this.ctgrMain = ctgrMain;
		this.ctgrSub = ctgrSub;
	}
	public String getCtgrMain() {
		return ctgrMain;
	}
	public void setCtgrMain(String ctgrMain) {
		this.ctgrMain = ctgrMain;
	}
	public String getCtgrSub() {
		return ctgrSub;
	}
	public void setCtgrSub(String ctgrSub) {
		this.ctgrSub = ctgrSub;
	}
	
	

}
