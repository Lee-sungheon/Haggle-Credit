package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemCtgrCnt {
	private String isCategoryMain;
	private int cntMain;
	private String isCategorySub;
	private int cntSub;
	public ItemCtgrCnt() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemCtgrCnt(String isCategoryMain, int cntMain, String isCategorySub, int cntSub) {
		super();
		this.isCategoryMain = isCategoryMain;
		this.cntMain = cntMain;
		this.isCategorySub = isCategorySub;
		this.cntSub = cntSub;
	}
	public String getIsCategoryMain() {
		return isCategoryMain;
	}
	public void setIsCategoryMain(String isCategoryMain) {
		this.isCategoryMain = isCategoryMain;
	}
	public int getCntMain() {
		return cntMain;
	}
	public void setCntMain(int cntMain) {
		this.cntMain = cntMain;
	}
	public String getIsCategorySub() {
		return isCategorySub;
	}
	public void setIsCategorySub(String isCategorySub) {
		this.isCategorySub = isCategorySub;
	}
	public int getCntSub() {
		return cntSub;
	}
	public void setCntSub(int cntSub) {
		this.cntSub = cntSub;
	}
}
