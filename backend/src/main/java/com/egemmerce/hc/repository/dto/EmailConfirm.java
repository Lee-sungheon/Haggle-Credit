package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmailConfirm {
	private int eNo;
	private String eEmail;
	private String eConfirm;
	public EmailConfirm() {
		super();
		// TODO Auto-generated constructor stub
	}
	public EmailConfirm(int eNo, String eEmail, String eConfirm) {
		super();
		this.eNo = eNo;
		this.eEmail = eEmail;
		this.eConfirm = eConfirm;
	}
	public int geteNo() {
		return eNo;
	}
	public void seteNo(int eNo) {
		this.eNo = eNo;
	}
	public String geteEmail() {
		return eEmail;
	}
	public void seteEmail(String eEmail) {
		this.eEmail = eEmail;
	}
	public String geteConfirm() {
		return eConfirm;
	}
	public void seteConfirm(String eConfirm) {
		this.eConfirm = eConfirm;
	}
}
