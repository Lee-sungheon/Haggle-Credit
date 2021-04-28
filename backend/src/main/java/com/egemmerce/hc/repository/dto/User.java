package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class User {
	private int uNo;
	private String uAuthority;
	private String uEmail;
	private String uPassword;
	private String uSalt;
	private String uName;
	private String uBirth;
	private String uPhone;
	private String uProvider;
	private String uJoinDate;
	private String uSellerAuth;
	private String uUniqueKey;
	private String uAuthKey;
	private int uCredit;
	private int uPoint;
	private int uPenalty;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int uNo, String uAuthority, String uEmail, String uPassword, String uSalt, String uName, String uBirth,
			String uPhone, String uProvider, String uJoinDate, String uSellerAuth, String uUniqueKey, String uAuthKey,
			int uCredit, int uPoint, int uPenalty) {
		super();
		this.uNo = uNo;
		this.uAuthority = uAuthority;
		this.uEmail = uEmail;
		this.uPassword = uPassword;
		this.uSalt = uSalt;
		this.uName = uName;
		this.uBirth = uBirth;
		this.uPhone = uPhone;
		this.uProvider = uProvider;
		this.uJoinDate = uJoinDate;
		this.uSellerAuth = uSellerAuth;
		this.uUniqueKey = uUniqueKey;
		this.uAuthKey = uAuthKey;
		this.uCredit = uCredit;
		this.uPoint = uPoint;
		this.uPenalty = uPenalty;
	}
	public int getuNo() {
		return uNo;
	}
	public void setuNo(int uNo) {
		this.uNo = uNo;
	}
	public String getuAuthority() {
		return uAuthority;
	}
	public void setuAuthority(String uAuthority) {
		this.uAuthority = uAuthority;
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
	public String getuSalt() {
		return uSalt;
	}
	public void setuSalt(String uSalt) {
		this.uSalt = uSalt;
	}
	public String getuName() {
		return uName;
	}
	public void setuName(String uName) {
		this.uName = uName;
	}
	public String getuBirth() {
		return uBirth;
	}
	public void setuBirth(String uBirth) {
		this.uBirth = uBirth;
	}
	public String getuPhone() {
		return uPhone;
	}
	public void setuPhone(String uPhone) {
		this.uPhone = uPhone;
	}
	public String getuProvider() {
		return uProvider;
	}
	public void setuProvider(String uProvider) {
		this.uProvider = uProvider;
	}
	public String getuJoinDate() {
		return uJoinDate;
	}
	public void setuJoinDate(String uJoinDate) {
		this.uJoinDate = uJoinDate;
	}
	public String getuSellerAuth() {
		return uSellerAuth;
	}
	public void setuSellerAuth(String uSellerAuth) {
		this.uSellerAuth = uSellerAuth;
	}
	public String getuUniqueKey() {
		return uUniqueKey;
	}
	public void setuUniqueKey(String uUniqueKey) {
		this.uUniqueKey = uUniqueKey;
	}
	public String getuAuthKey() {
		return uAuthKey;
	}
	public void setuAuthKey(String uAuthKey) {
		this.uAuthKey = uAuthKey;
	}
	public int getuCredit() {
		return uCredit;
	}
	public void setuCredit(int uCredit) {
		this.uCredit = uCredit;
	}
	public int getuPoint() {
		return uPoint;
	}
	public void setuPoint(int uPoint) {
		this.uPoint = uPoint;
	}
	public int getuPenalty() {
		return uPenalty;
	}
	public void setuPenalty(int uPenalty) {
		this.uPenalty = uPenalty;
	}

	
	
}
