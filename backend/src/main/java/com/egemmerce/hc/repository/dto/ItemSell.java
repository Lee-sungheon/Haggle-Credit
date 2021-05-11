package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "isItemNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class ItemSell {	
	
    @Id
    private int isItemNo;

    private int isUserNo;
    
	private LocalDateTime isRegDate;
	private String isCategoryMain;
	private String isCategorySub;
	private String isUsedStatus;
	private String isName;
	private String isContent;
	private int isCoolPrice;
	private Date isStartDate;
	private Date isEndDate;
	private int isAuctionPrice;
	private int isOriginPrice;
	private int isDealUserNo;
	private int isDealPrice;
	private String isDealAddress;
	
	public void generateisRegDate() {
		this.isRegDate=LocalDateTime.now();
	}

	public int getIsUserNo() {
		return isUserNo;
	}

	public void setIsUserNo(int isUserNo) {
		this.isUserNo = isUserNo;
	}

	public LocalDateTime getIsRegDate() {
		return isRegDate;
	}

	public void setIsRegDate(LocalDateTime isRegDate) {
		this.isRegDate = isRegDate;
	}

	public String getIsCategoryMain() {
		return isCategoryMain;
	}

	public void setIsCategoryMain(String isCategoryMain) {
		this.isCategoryMain = isCategoryMain;
	}

	public String getIsCategorySub() {
		return isCategorySub;
	}

	public void setIsCategorySub(String isCategorySub) {
		this.isCategorySub = isCategorySub;
	}

	public String getIsUsedStatus() {
		return isUsedStatus;
	}

	public void setIsUsedStatus(String isUsedStatus) {
		this.isUsedStatus = isUsedStatus;
	}

	public String getIsName() {
		return isName;
	}

	public void setIsName(String isName) {
		this.isName = isName;
	}

	public String getIsContent() {
		return isContent;
	}

	public void setIsContent(String isContent) {
		this.isContent = isContent;
	}

	public int getIsCoolPrice() {
		return isCoolPrice;
	}

	public void setIsCoolPrice(int isCoolPrice) {
		this.isCoolPrice = isCoolPrice;
	}

	public Date getIsStartDate() {
		return isStartDate;
	}

	public void setIsStartDate(Date isStartDate) {
		this.isStartDate = isStartDate;
	}

	public Date getIsEndDate() {
		return isEndDate;
	}

	public void setIsEndDate(Date isEndDate) {
		this.isEndDate = isEndDate;
	}

	public int getIsAuctionPrice() {
		return isAuctionPrice;
	}

	public void setIsAuctionPrice(int isAuctionPrice) {
		this.isAuctionPrice = isAuctionPrice;
	}

	public int getIsOriginPrice() {
		return isOriginPrice;
	}

	public void setIsOriginPrice(int isOriginPrice) {
		this.isOriginPrice = isOriginPrice;
	}

	public int getIsDealUserNo() {
		return isDealUserNo;
	}

	public void setIsDealUserNo(int isDealUserNo) {
		this.isDealUserNo = isDealUserNo;
	}

	public int getIsDealPrice() {
		return isDealPrice;
	}

	public void setIsDealPrice(int isDealPrice) {
		this.isDealPrice = isDealPrice;
	}

	public String getIsDealAddress() {
		return isDealAddress;
	}

	public void setIsDealAddress(String isDealAddress) {
		this.isDealAddress = isDealAddress;
	}

	public int getIsItemNo() {
		return isItemNo;
	}

	public void setIsItemNo(int isItemNo) {
		this.isItemNo = isItemNo;
	}
	
	
}
