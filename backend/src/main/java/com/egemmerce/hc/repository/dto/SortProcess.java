package com.egemmerce.hc.repository.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Data
public class SortProcess {
	private int pageNo;
	private String ctgrMain;
	private String ctgrSub;
	private String sortName;
	public SortProcess() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SortProcess(int pageNo, String ctgrMain, String ctgrSub, String sortName) {
		super();
		this.pageNo = pageNo;
		this.ctgrMain = ctgrMain;
		this.ctgrSub = ctgrSub;
		this.sortName = sortName;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
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
	public String getSortName() {
		return sortName;
	}
	public void setSortName(String sortName) {
		this.sortName = sortName;
	}
	
}
