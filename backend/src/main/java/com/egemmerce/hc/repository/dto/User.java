package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "uNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class User {

	@Id
	private int uNo;
	private String uEmail;
	private String uPassword;
	private String uName;
	private String uPhone;
	private Date uBirth;
	private String uContent;
	private LocalDateTime uJoinDate;

	@OneToMany
	@JoinColumn(name = "ua_user_no")
	private List<UserAddress> userAddress;
	@OneToMany
	@JoinColumn(name = "ap_user_no")
	private List<AuctionParticipant> auctionParticipant;
	@OneToMany
	@JoinColumn(name = "rap_user_no")
	private List<ReverseAuctionParticipant> reverseAuctionParticipant;
	@OneToMany
	@JoinColumn(name = "uc_user_no")
	private List<UserCredit> userCredit;
	@OneToMany
	@JoinColumn(name = "dp_user_no")
	private List<DonationParticipant> donationParticipant;

	@ColumnDefault("client")
	private String uAuthority;

	@ColumnDefault("0")
	private int uCredit;

	@ColumnDefault("false")
	private String uPenalty;

	@ColumnDefault("false")
	private String uSellerAuth;

	@ColumnDefault("false")
	private String uJoinConfirm;
	private String uBankName;
	private String uBankNo;
	private String uAuthKey;
	private String uImage;
	private LocalDateTime uAuthKeyGeneratedAt;

	public void generateEuAuthKey() {
		this.uAuthKey = UUID.randomUUID().toString();
		this.uAuthKeyGeneratedAt = LocalDateTime.now();
		this.uJoinDate = LocalDateTime.now();
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

	public String getuSellerAuth() {
		return uSellerAuth;
	}

	public void setuSellerAuth(String uSellerAuth) {
		this.uSellerAuth = uSellerAuth;
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

	public String getuPenalty() {
		return uPenalty;
	}

	public void setuPenalty(String uPenalty) {
		this.uPenalty = uPenalty;
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

	public String getuBankName() {
		return uBankName;
	}

	public void setuBankName(String uBankName) {
		this.uBankName = uBankName;
	}

	public String getuBankNo() {
		return uBankNo;
	}

	public void setuBankNo(String uBankNo) {
		this.uBankNo = uBankNo;
	}

	public String getuImage() {
		return uImage;
	}

	public void setuImage(String uImage) {
		this.uImage = uImage;
	}

	public String getuContent() {
		return uContent;
	}

	public void setuContent(String uContent) {
		this.uContent = uContent;
	}

	public List<UserAddress> getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(List<UserAddress> userAddress) {
		this.userAddress = userAddress;
	}

	public List<UserCredit> getUserCredit() {
		return userCredit;
	}

	public void setUserCredit(List<UserCredit> userCredit) {
		this.userCredit = userCredit;
	}

	public List<AuctionParticipant> getAuctionParticipant() {
		return auctionParticipant;
	}

	public void setAuctionParticipant(List<AuctionParticipant> auctionParticipant) {
		this.auctionParticipant = auctionParticipant;
	}

	public List<ReverseAuctionParticipant> getReverseAuctionParticipant() {
		return reverseAuctionParticipant;
	}

	public void setReverseAuctionParticipant(List<ReverseAuctionParticipant> reverseAuctionParticipant) {
		this.reverseAuctionParticipant = reverseAuctionParticipant;
	}

	public List<DonationParticipant> getDonationParticipant() {
		return donationParticipant;
	}

	public void setDonationParticipant(List<DonationParticipant> donationParticipant) {
		this.donationParticipant = donationParticipant;
	}

}
