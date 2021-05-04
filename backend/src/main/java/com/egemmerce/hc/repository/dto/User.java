package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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
	private String uJwt;

	private LocalDateTime uAuthKeyGeneratedAt;

	public void generateEuAuthKey() {
		this.uAuthKey = UUID.randomUUID().toString();
		this.uAuthKeyGeneratedAt = LocalDateTime.now();
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

	public String getuJwt() {
		return uJwt;
	}

	public void setuJwt(String uJwt) {
		this.uJwt = uJwt;
	}

	public LocalDateTime getuAuthKeyGeneratedAt() {
		return uAuthKeyGeneratedAt;
	}

	public void setuAuthKeyGeneratedAt(LocalDateTime uAuthKeyGeneratedAt) {
		this.uAuthKeyGeneratedAt = uAuthKeyGeneratedAt;
	}
	
}
