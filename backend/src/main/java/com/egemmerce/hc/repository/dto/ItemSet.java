package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemSet {
	private int isNo;
	private int isItemNo;
	private int isUserNo;
	private String isItemName;
	private String isCategoryMain;
	private String isCategorySub;
	private String isContent;
	private String isUsedStatus;
	private int isCoolPrice;
	private int isOriginPrice;
	private int isAuctionPrice;
	private int isDealAddress;
	private int isDealPrice;
	private int isDealUserNo;
	private String isStartDate;
	private String isEndDate;
	private String isEventAgree;
	private String isRegDate;
	private String isName;
	private int ipNo;
	private int ipItemNo;
	private String ipValue;
	public ItemSet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemSet(int isNo, int isItemNo, int isUserNo, String isItemName, String isCategoryMain, String isCategorySub,
			String isContent, String isUsedStatus, int isCoolPrice, int isOriginPrice, int isAuctionPrice,
			int isDealAddress, int isDealPrice, int isDealUserNo, String isStartDate, String isEndDate,
			String isEventAgree, String isRegDate, String isName, int ipNo, int ipItemNo, String ipValue) {
		super();
		this.isNo = isNo;
		this.isItemNo = isItemNo;
		this.isUserNo = isUserNo;
		this.isItemName = isItemName;
		this.isCategoryMain = isCategoryMain;
		this.isCategorySub = isCategorySub;
		this.isContent = isContent;
		this.isUsedStatus = isUsedStatus;
		this.isCoolPrice = isCoolPrice;
		this.isOriginPrice = isOriginPrice;
		this.isAuctionPrice = isAuctionPrice;
		this.isDealAddress = isDealAddress;
		this.isDealPrice = isDealPrice;
		this.isDealUserNo = isDealUserNo;
		this.isStartDate = isStartDate;
		this.isEndDate = isEndDate;
		this.isEventAgree = isEventAgree;
		this.isRegDate = isRegDate;
		this.isName = isName;
		this.ipNo = ipNo;
		this.ipItemNo = ipItemNo;
		this.ipValue = ipValue;
	}
	public int getIsNo() {
		return isNo;
	}
	public void setIsNo(int isNo) {
		this.isNo = isNo;
	}
	public int getIsItemNo() {
		return isItemNo;
	}
	public void setIsItemNo(int isItemNo) {
		this.isItemNo = isItemNo;
	}
	public int getIsUserNo() {
		return isUserNo;
	}
	public void setIsUserNo(int isUserNo) {
		this.isUserNo = isUserNo;
	}
	public String getIsItemName() {
		return isItemName;
	}
	public void setIsItemName(String isItemName) {
		this.isItemName = isItemName;
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
	public String getIsContent() {
		return isContent;
	}
	public void setIsContent(String isContent) {
		this.isContent = isContent;
	}
	public String getIsUsedStatus() {
		return isUsedStatus;
	}
	public void setIsUsedStatus(String isUsedStatus) {
		this.isUsedStatus = isUsedStatus;
	}
	public int getIsCoolPrice() {
		return isCoolPrice;
	}
	public void setIsCoolPrice(int isCoolPrice) {
		this.isCoolPrice = isCoolPrice;
	}
	public int getIsOriginPrice() {
		return isOriginPrice;
	}
	public void setIsOriginPrice(int isOriginPrice) {
		this.isOriginPrice = isOriginPrice;
	}
	public int getIsAuctionPrice() {
		return isAuctionPrice;
	}
	public void setIsAuctionPrice(int isAuctionPrice) {
		this.isAuctionPrice = isAuctionPrice;
	}
	public int getIsDealAddress() {
		return isDealAddress;
	}
	public void setIsDealAddress(int isDealAddress) {
		this.isDealAddress = isDealAddress;
	}
	public int getIsDealPrice() {
		return isDealPrice;
	}
	public void setIsDealPrice(int isDealPrice) {
		this.isDealPrice = isDealPrice;
	}
	public int getIsDealUserNo() {
		return isDealUserNo;
	}
	public void setIsDealUserNo(int isDealUserNo) {
		this.isDealUserNo = isDealUserNo;
	}
	public String getIsStartDate() {
		return isStartDate;
	}
	public void setIsStartDate(String isStartDate) {
		this.isStartDate = isStartDate;
	}
	public String getIsEndDate() {
		return isEndDate;
	}
	public void setIsEndDate(String isEndDate) {
		this.isEndDate = isEndDate;
	}
	public String getIsEventAgree() {
		return isEventAgree;
	}
	public void setIsEventAgree(String isEventAgree) {
		this.isEventAgree = isEventAgree;
	}
	public String getIsRegDate() {
		return isRegDate;
	}
	public void setIsRegDate(String isRegDate) {
		this.isRegDate = isRegDate;
	}
	public String getIsName() {
		return isName;
	}
	public void setIsName(String isName) {
		this.isName = isName;
	}
	public int getIpNo() {
		return ipNo;
	}
	public void setIpNo(int ipNo) {
		this.ipNo = ipNo;
	}
	public int getIpItemNo() {
		return ipItemNo;
	}
	public void setIpItemNo(int ipItemNo) {
		this.ipItemNo = ipItemNo;
	}
	public String getIpValue() {
		return ipValue;
	}
	public void setIpValue(String ipValue) {
		this.ipValue = ipValue;
	}
	
}
