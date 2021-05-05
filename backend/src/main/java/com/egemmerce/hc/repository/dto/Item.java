package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "iNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Item {	
	
    @Id @GeneratedValue
	private int iNo;
    
	private LocalDateTime iRegDate;
	private int iUNo;
	private String iCompleted;
	private String iType;
	private String iCategoryMain;
	private String iCategorySub;
	private String iUsedStatus;
	private String iName;
	private String iContent;
	private int iCoolPrice;
	private String iAuctionAgree;
	private Date iAuctionStartDate;
	private Date iAuctionEndDate;
	private int iAuctionBidPrice;
	private int iOriginPrice;
	private int iDealUNo;
	private int iDealPrice;
	public int getiNo() {
		return iNo;
	}
	public void setiNo(int iNo) {
		this.iNo = iNo;
	}
	public LocalDateTime getiRegDate() {
		return iRegDate;
	}
	public void setiRegDate(LocalDateTime iRegDate) {
		this.iRegDate = iRegDate;
	}
	public int getiUNo() {
		return iUNo;
	}
	public void setiUNo(int iUNo) {
		this.iUNo = iUNo;
	}
	public String getiCompleted() {
		return iCompleted;
	}
	public void setiCompleted(String iCompleted) {
		this.iCompleted = iCompleted;
	}
	public String getiType() {
		return iType;
	}
	public void setiType(String iType) {
		this.iType = iType;
	}
	public String getiCategoryMain() {
		return iCategoryMain;
	}
	public void setiCategoryMain(String iCategoryMain) {
		this.iCategoryMain = iCategoryMain;
	}
	public String getiCategorySub() {
		return iCategorySub;
	}
	public void setiCategorySub(String iCategorySub) {
		this.iCategorySub = iCategorySub;
	}
	public String getiUsedStatus() {
		return iUsedStatus;
	}
	public void setiUsedStatus(String iUsedStatus) {
		this.iUsedStatus = iUsedStatus;
	}
	public String getiName() {
		return iName;
	}
	public void setiName(String iName) {
		this.iName = iName;
	}
	public String getiContent() {
		return iContent;
	}
	public void setiContent(String iContent) {
		this.iContent = iContent;
	}
	public int getiCoolPrice() {
		return iCoolPrice;
	}
	public void setiCoolPrice(int iCoolPrice) {
		this.iCoolPrice = iCoolPrice;
	}
	public String getiAuctionAgree() {
		return iAuctionAgree;
	}
	public void setiAuctionAgree(String iAuctionAgree) {
		this.iAuctionAgree = iAuctionAgree;
	}
	public Date getiAuctionStartDate() {
		return iAuctionStartDate;
	}
	public void setiAuctionStartDate(Date iAuctionStartDate) {
		this.iAuctionStartDate = iAuctionStartDate;
	}
	public Date getiAuctionEndDate() {
		return iAuctionEndDate;
	}
	public void setiAuctionEndDate(Date iAuctionEndDate) {
		this.iAuctionEndDate = iAuctionEndDate;
	}
	public int getiAuctionBidPrice() {
		return iAuctionBidPrice;
	}
	public void setiAuctionBidPrice(int iAuctionBidPrice) {
		this.iAuctionBidPrice = iAuctionBidPrice;
	}
	public int getiOriginPrice() {
		return iOriginPrice;
	}
	public void setiOriginPrice(int iOriginPrice) {
		this.iOriginPrice = iOriginPrice;
	}
	public int getiDealUNo() {
		return iDealUNo;
	}
	public void setiDealUNo(int iDealUNo) {
		this.iDealUNo = iDealUNo;
	}
	public int getiDealPrice() {
		return iDealPrice;
	}
	public void setiDealPrice(int iDealPrice) {
		this.iDealPrice = iDealPrice;
	}
}
