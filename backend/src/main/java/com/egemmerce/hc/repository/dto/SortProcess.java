package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SortProcess {
	private int pageNo;
	private String sortName;
	public SortProcess() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SortProcess(int pageNo, String sortName) {
		super();
		this.pageNo = pageNo;
		this.sortName = sortName;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public String getSortName() {
		return sortName;
	}
	public void setSortName(String sortName) {
		this.sortName = sortName;
	}
}
