package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Item {
	private int iNo;
	private int iType;
	public int getiNo() {
		return iNo;
	}
	public void setiNo(int iNo) {
		this.iNo = iNo;
	}
	public int getiType() {
		return iType;
	}
	public void setiType(int iType) {
		this.iType = iType;
	}
	
}
