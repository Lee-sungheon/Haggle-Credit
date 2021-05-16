package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemSellSet {
	private int isNo;
	private int isItemNo;
	private int isUserNo;
	private String isItemName;
	private String isCategoryMain;
	private String isCategorySub;
	private String isContent;
	private String isUsedStatus;
	private int isCoolPrice;
	private int isAuctionInitPrice;
	private int isDealPrice;
	private int isDealUserNo;
	private int isDealAddress;
	private String isStartDate;
	private String isEndDate;
	private String isEventAgree;
	private int isAuctionIngPrice;
	private int ipNo;
	private int ipItemNo;
	private String ipValue;
	private int apItemNo;
	private int joinerCnt;
	public ItemSellSet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemSellSet(int isNo, int isItemNo, int isUserNo, String isItemName, String isCategoryMain, String isCategorySub,
			String isContent, String isUsedStatus, int isCoolPrice, int isAuctionInitPrice, int isDealPrice,
			int isDealUserNo, int isDealAddress, String isStartDate, String isEndDate, String isEventAgree,
			int isAuctionIngPrice, int ipNo, int ipItemNo, String ipValue, int apItemNo, int joinerCnt) {
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
		this.isAuctionInitPrice = isAuctionInitPrice;
		this.isDealPrice = isDealPrice;
		this.isDealUserNo = isDealUserNo;
		this.isDealAddress = isDealAddress;
		this.isStartDate = isStartDate;
		this.isEndDate = isEndDate;
		this.isEventAgree = isEventAgree;
		this.isAuctionIngPrice = isAuctionIngPrice;
		this.ipNo = ipNo;
		this.ipItemNo = ipItemNo;
		this.ipValue = ipValue;
		this.apItemNo = apItemNo;
		this.joinerCnt = joinerCnt;
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
	public int getIsAuctionInitPrice() {
		return isAuctionInitPrice;
	}
	public void setIsAuctionInitPrice(int isAuctionInitPrice) {
		this.isAuctionInitPrice = isAuctionInitPrice;
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
	public int getIsDealAddress() {
		return isDealAddress;
	}
	public void setIsDealAddress(int isDealAddress) {
		this.isDealAddress = isDealAddress;
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
	public int getIsAuctionIngPrice() {
		return isAuctionIngPrice;
	}
	public void setIsAuctionIngPrice(int isAuctionIngPrice) {
		this.isAuctionIngPrice = isAuctionIngPrice;
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
	public int getApItemNo() {
		return apItemNo;
	}
	public void setApItemNo(int apItemNo) {
		this.apItemNo = apItemNo;
	}
	public int getJoinerCnt() {
		return joinerCnt;
	}
	public void setJoinerCnt(int joinerCnt) {
		this.joinerCnt = joinerCnt;
	}

	
}
