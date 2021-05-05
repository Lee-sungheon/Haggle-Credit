package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "uNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class User {
	
    @Id @GeneratedValue
	private int uNo;
    
	private String uAuthority;
	private String uEmail;
	private String uPassword;
	private String uSalt;
	private String uName;
	private Date uBirth;
	private String uPhone;
	private String uProvider;
	private LocalDateTime uJoinDate;
	private String uSellerAuth;
	private String uUniqueKey;
	private String uAuthKey;
	private int uCredit;
	private int uPoint;
	private int uPenalty;
	private String uJwt;
	private String uJoinConfirm;
	private LocalDateTime uAuthKeyGeneratedAt;
	
	public void generateEuAuthKey() {
		this.uAuthKey = UUID.randomUUID().toString();
		this.uAuthKeyGeneratedAt = LocalDateTime.now();
		this.uJoinDate=LocalDateTime.now();
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

	public LocalDateTime getuJoinDate() {
		return uJoinDate;
	}

	public void setuJoinDate(LocalDateTime uJoinDate) {
		this.uJoinDate = uJoinDate;
	}

	public String getuJoinConfirm() {
		return uJoinConfirm;
	}

	public void setuJoinConfirm(String uJoinConfirm) {
		this.uJoinConfirm = uJoinConfirm;
	}

	public Date getuBirth() {
		return uBirth;
	}

	public void setuBirth(Date uBirth) {
		this.uBirth = uBirth;
	}


	
}
