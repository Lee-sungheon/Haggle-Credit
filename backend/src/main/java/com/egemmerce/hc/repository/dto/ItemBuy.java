package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "ibNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class ItemBuy {	
	
    @Id
	private int ibNo;
    private int ibItemNo;
    private int ibUserNo;
    private String ibName;
    private String ibCategoryMain;
    private String ibCategorySub;
    private String ibTitle;
    private String ibContent;
    private Date ibStartDate;
    private Date ibEndDate;
    private int ibCoolPrice;
    private int ibAuctionPrice;
	private LocalDateTime ibRegDate;
	private int ibOriginPrice;
	private int ibDealUNo;
	private int ibDealPrice;
	private int ibDealAddress;
	
	public void generateibRegDate() {
		this.ibRegDate = LocalDateTime.now();
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

	public String getIbTitle() {
		return ibTitle;
	}

	public void setIbTitle(String ibTitle) {
		this.ibTitle = ibTitle;
	}

	public String getIbContent() {
		return ibContent;
	}

	public void setIbContent(String ibContent) {
		this.ibContent = ibContent;
	}

	public Date getIbStartDate() {
		return ibStartDate;
	}

	public void setIbStartDate(Date ibStartDate) {
		this.ibStartDate = ibStartDate;
	}

	public Date getIbEndDate() {
		return ibEndDate;
	}

	public void setIbEndDate(Date ibEndDate) {
		this.ibEndDate = ibEndDate;
	}

	public int getIbCoolPrice() {
		return ibCoolPrice;
	}

	public void setIbCoolPrice(int ibCoolPrice) {
		this.ibCoolPrice = ibCoolPrice;
	}

	public int getIbAuctionPrice() {
		return ibAuctionPrice;
	}

	public void setIbAuctionPrice(int irAuctionPrice) {
		this.ibAuctionPrice = irAuctionPrice;
	}

	public LocalDateTime getIbRegDate() {
		return ibRegDate;
	}

	public void setIbRegDate(LocalDateTime ibRegDate) {
		this.ibRegDate = ibRegDate;
	}

	public int getIbOriginPrice() {
		return ibOriginPrice;
	}

	public void setIbOriginPrice(int ibOriginPrice) {
		this.ibOriginPrice = ibOriginPrice;
	}

	public int getIbDealUNo() {
		return ibDealUNo;
	}

	public void setIbDealUNo(int ibDealUNo) {
		this.ibDealUNo = ibDealUNo;
	}

	public int getIbDealPrice() {
		return ibDealPrice;
	}

	public void setIbDealPrice(int ibDealPrice) {
		this.ibDealPrice = ibDealPrice;
	}

	public int getIbDealAddress() {
		return ibDealAddress;
	}

	public void setIbDealAddress(int ibDealAddress) {
		this.ibDealAddress = ibDealAddress;
	}
	
	
}
