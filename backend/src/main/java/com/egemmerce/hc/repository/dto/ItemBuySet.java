package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemBuySet {
	int ibNo;
	int ibItemNo;
	int ibUserNo;
	String ibName;
	String ibCategoryMain;
	String ibCategorySub;
	String ibContent;
	int ibCoolPrice;
	String ibDealAddress;
	int ibDealPrice;
	String ibEndDate;
	String ibStartDate;
	int ibDealUserNo;
	String ibRegDate;
	int ibAuctionIngPrice;
	int ibAuctionInitPrice;
	int ipNo;
	int ipItemNo;
	String ipValue;
	private int rapItemNo;
	private int joinerCnt;
	public ItemBuySet() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ItemBuySet(int ibNo, int ibItemNo, int ibUserNo, String ibName, String ibCategoryMain, String ibCategorySub,
			String ibContent, int ibCoolPrice, String ibDealAddress, int ibDealPrice, String ibEndDate,
			String ibStartDate, int ibDealUserNo, String ibRegDate, int ibAuctionIngPrice, int ibAuctionInitPrice,
			int ipNo, int ipItemNo, String ipValue, int rapItemNo, int joinerCnt) {
		super();
		this.ibNo = ibNo;
		this.ibItemNo = ibItemNo;
		this.ibUserNo = ibUserNo;
		this.ibName = ibName;
		this.ibCategoryMain = ibCategoryMain;
		this.ibCategorySub = ibCategorySub;
		this.ibContent = ibContent;
		this.ibCoolPrice = ibCoolPrice;
		this.ibDealAddress = ibDealAddress;
		this.ibDealPrice = ibDealPrice;
		this.ibEndDate = ibEndDate;
		this.ibStartDate = ibStartDate;
		this.ibDealUserNo = ibDealUserNo;
		this.ibRegDate = ibRegDate;
		this.ibAuctionIngPrice = ibAuctionIngPrice;
		this.ibAuctionInitPrice = ibAuctionInitPrice;
		this.ipNo = ipNo;
		this.ipItemNo = ipItemNo;
		this.ipValue = ipValue;
		this.rapItemNo = rapItemNo;
		this.joinerCnt = joinerCnt;
	}
	public int getIbNo() {
		return ibNo;
	}
	public void setIbNo(int ibNo) {
		this.ibNo = ibNo;
	}
	public int getIbItemNo() {
		return ibItemNo;
	}
	public void setIbItemNo(int ibItemNo) {
		this.ibItemNo = ibItemNo;
	}
	public int getIbUserNo() {
		return ibUserNo;
	}
	public void setIbUserNo(int ibUserNo) {
		this.ibUserNo = ibUserNo;
	}
	public String getIbName() {
		return ibName;
	}
	public void setIbName(String ibName) {
		this.ibName = ibName;
	}
	public String getIbCategoryMain() {
		return ibCategoryMain;
	}
	public void setIbCategoryMain(String ibCategoryMain) {
		this.ibCategoryMain = ibCategoryMain;
	}
	public String getIbCategorySub() {
		return ibCategorySub;
	}
	public void setIbCategorySub(String ibCategorySub) {
		this.ibCategorySub = ibCategorySub;
	}
	public String getIbContent() {
		return ibContent;
	}
	public void setIbContent(String ibContent) {
		this.ibContent = ibContent;
	}
	public int getIbCoolPrice() {
		return ibCoolPrice;
	}
	public void setIbCoolPrice(int ibCoolPrice) {
		this.ibCoolPrice = ibCoolPrice;
	}
	public String getIbDealAddress() {
		return ibDealAddress;
	}
	public void setIbDealAddress(String ibDealAddress) {
		this.ibDealAddress = ibDealAddress;
	}
	public int getIbDealPrice() {
		return ibDealPrice;
	}
	public void setIbDealPrice(int ibDealPrice) {
		this.ibDealPrice = ibDealPrice;
	}
	public String getIbEndDate() {
		return ibEndDate;
	}
	public void setIbEndDate(String ibEndDate) {
		this.ibEndDate = ibEndDate;
	}
	public String getIbStartDate() {
		return ibStartDate;
	}
	public void setIbStartDate(String ibStartDate) {
		this.ibStartDate = ibStartDate;
	}
	public int getIbDealUserNo() {
		return ibDealUserNo;
	}
	public void setIbDealUserNo(int ibDealUserNo) {
		this.ibDealUserNo = ibDealUserNo;
	}
	public String getIbRegDate() {
		return ibRegDate;
	}
	public void setIbRegDate(String ibRegDate) {
		this.ibRegDate = ibRegDate;
	}
	public int getIbAuctionIngPrice() {
		return ibAuctionIngPrice;
	}
	public void setIbAuctionIngPrice(int ibAuctionIngPrice) {
		this.ibAuctionIngPrice = ibAuctionIngPrice;
	}
	public int getIbAuctionInitPrice() {
		return ibAuctionInitPrice;
	}
	public void setIbAuctionInitPrice(int ibAuctionInitPrice) {
		this.ibAuctionInitPrice = ibAuctionInitPrice;
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
	public int getRapItemNo() {
		return rapItemNo;
	}
	public void setRapItemNo(int rapItemNo) {
		this.rapItemNo = rapItemNo;
	}
	public int getJoinerCnt() {
		return joinerCnt;
	}
	public void setJoinerCnt(int joinerCnt) {
		this.joinerCnt = joinerCnt;
	}
	
	
}
