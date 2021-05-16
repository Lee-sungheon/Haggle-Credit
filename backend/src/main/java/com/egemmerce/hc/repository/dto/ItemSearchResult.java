package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemSearchResult {
	private int iNo;
	private String iType;
	private String iCompleted;
	private int isNo;
	private int isItemNo;
	private int isUserNo;
	private String isItemName;
	private String isCategoryMain;
	private String isCategorySub;
	private String isContent;
	private String isUsedStatus;
	private int iCoolPrice;
	private int iAuctionInitPrice;
	private int isDealAddress;
	private int isDealPrice;
	private int isDealUserNo;
	private String isStartDate;
	private String iEndDate;
	private String isEventAgree;
	private int iAuctionIngPrice;
	private int ipNo;
	private int ipItemNo;
	private String ipValue;
	public ItemSearchResult() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemSearchResult(int iNo, String iType, String iCompleted, int isNo, int isItemNo, int isUserNo,
			String isItemName, String isCategoryMain, String isCategorySub, String isContent, String isUsedStatus,
			int iCoolPrice, int iAuctionInitPrice, int isDealAddress, int isDealPrice, int isDealUserNo,
			String isStartDate, String iEndDate, String isEventAgree, int iAuctionIngPrice, int ipNo, int ipItemNo,
			String ipValue) {
		super();
		this.iNo = iNo;
		this.iType = iType;
		this.iCompleted = iCompleted;
		this.isNo = isNo;
		this.isItemNo = isItemNo;
		this.isUserNo = isUserNo;
		this.isItemName = isItemName;
		this.isCategoryMain = isCategoryMain;
		this.isCategorySub = isCategorySub;
		this.isContent = isContent;
		this.isUsedStatus = isUsedStatus;
		this.iCoolPrice = iCoolPrice;
		this.iAuctionInitPrice = iAuctionInitPrice;
		this.isDealAddress = isDealAddress;
		this.isDealPrice = isDealPrice;
		this.isDealUserNo = isDealUserNo;
		this.isStartDate = isStartDate;
		this.iEndDate = iEndDate;
		this.isEventAgree = isEventAgree;
		this.iAuctionIngPrice = iAuctionIngPrice;
		this.ipNo = ipNo;
		this.ipItemNo = ipItemNo;
		this.ipValue = ipValue;
	}
	public int getiNo() {
		return iNo;
	}
	public void setiNo(int iNo) {
		this.iNo = iNo;
	}
	public String getiType() {
		return iType;
	}
	public void setiType(String iType) {
		this.iType = iType;
	}
	public String getiCompleted() {
		return iCompleted;
	}
	public void setiCompleted(String iCompleted) {
		this.iCompleted = iCompleted;
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
	public int getiCoolPrice() {
		return iCoolPrice;
	}
	public void setiCoolPrice(int iCoolPrice) {
		this.iCoolPrice = iCoolPrice;
	}
	public int getiAuctionInitPrice() {
		return iAuctionInitPrice;
	}
	public void setiAuctionInitPrice(int iAuctionInitPrice) {
		this.iAuctionInitPrice = iAuctionInitPrice;
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
	public String getiEndDate() {
		return iEndDate;
	}
	public void setiEndDate(String iEndDate) {
		this.iEndDate = iEndDate;
	}
	public String getIsEventAgree() {
		return isEventAgree;
	}
	public void setIsEventAgree(String isEventAgree) {
		this.isEventAgree = isEventAgree;
	}
	public int getiAuctionIngPrice() {
		return iAuctionIngPrice;
	}
	public void setiAuctionIngPrice(int iAuctionIngPrice) {
		this.iAuctionIngPrice = iAuctionIngPrice;
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