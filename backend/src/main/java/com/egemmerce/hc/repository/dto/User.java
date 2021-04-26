package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
	private int uNo;
	private String uEmail;
	private String uPassword;
	private String uName;
	private int uPhone;
	private String uBirth;
	private String uSalt;
	private String uJwt;
	private String uProvider;
	private String uAuthority;
	private String uJoindate;
	private int uCredit;
	private int uMoney;
	private String uAuthKey;
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int uNo, String uEmail, String uPassword, String uName, int uPhone, String uBirth, String uSalt,
			String uJwt, String uProvider, String uAuthority, String uJoindate, int uCredit, int uMoney,
			String uAuthKey) {
		super();
		this.uNo = uNo;
		this.uEmail = uEmail;
		this.uPassword = uPassword;
		this.uName = uName;
		this.uPhone = uPhone;
		this.uBirth = uBirth;
		this.uSalt = uSalt;
		this.uJwt = uJwt;
		this.uProvider = uProvider;
		this.uAuthority = uAuthority;
		this.uJoindate = uJoindate;
		this.uCredit = uCredit;
		this.uMoney = uMoney;
		this.uAuthKey = uAuthKey;
	}
	public int getuNo() {
		return uNo;
	}
	public void setuNo(int uNo) {
		this.uNo = uNo;
	}
	public String getuEmail() {
		return uEmail;
	}
	public void setuEmail(String uEmail) {
		this.uEmail = uEmail;
	}
	public String getuPassword() {
		return uPassword;
	}
	public void setuPassword(String uPassword) {
		this.uPassword = uPassword;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public int getuPhone() {
		return uPhone;
	}
	public void setuPhone(int uPhone) {
		this.uPhone = uPhone;
	}
	public String getuBirth() {
		return uBirth;
	}
	public void setuBirth(String uBirth) {
		this.uBirth = uBirth;
	}
	public String getuSalt() {
		return uSalt;
	}
	public void setuSalt(String uSalt) {
		this.uSalt = uSalt;
	}
	public String getuJwt() {
		return uJwt;
	}
	public void setuJwt(String uJwt) {
		this.uJwt = uJwt;
	}
	public String getuProvider() {
		return uProvider;
	}
	public void setuProvider(String uProvider) {
		this.uProvider = uProvider;
	}
	public String getuAuthority() {
		return uAuthority;
	}
	public void setuAuthority(String uAuthority) {
		this.uAuthority = uAuthority;
	}
	public String getuJoindate() {
		return uJoindate;
	}
	public void setuJoindate(String uJoindate) {
		this.uJoindate = uJoindate;
	}
	public int getuCredit() {
		return uCredit;
	}
	public void setuCredit(int uCredit) {
		this.uCredit = uCredit;
	}
	public int getuMoney() {
		return uMoney;
	}
	public void setuMoney(int uMoney) {
		this.uMoney = uMoney;
	}
	public String getuAuthKey() {
		return uAuthKey;
	}
	public void setuAuthKey(String uAuthKey) {
		this.uAuthKey = uAuthKey;
	}
	@Override
	public String toString() {
		return "User [uNo=" + uNo + ", uEmail=" + uEmail + ", uPassword=" + uPassword + ", uName=" + uName + ", uPhone="
				+ uPhone + ", uBirth=" + uBirth + ", uSalt=" + uSalt + ", uJwt=" + uJwt + ", uProvider=" + uProvider
				+ ", uAuthority=" + uAuthority + ", uJoindate=" + uJoindate + ", uCredit=" + uCredit + ", uMoney="
				+ uMoney + ", uAuthKey=" + uAuthKey + "]";
	}
}
