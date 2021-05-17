package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "ibItemNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemBuy {

	@Id
	@Column(name = "ib_item_no")
	private int ibItemNo;
	private int ibNo;
	private int ibUserNo;
	private String ibName;
	@ColumnDefault("기타")
	private String ibCategoryMain;
	@ColumnDefault("기타")
	private String ibCategorySub;
	private String ibContent;
	private LocalDateTime ibStartDate;
	private Date ibEndDate;
	private int ibCoolPrice;
	private int ibAuctionInitPrice;
	private int ibAuctionIngPrice;
	private LocalDateTime ibRegDate;
	@ColumnDefault("0")
	private int ibDealUserNo;
	@ColumnDefault("0")
	private int ibDealPrice;
	private String ibDealAddress;

	@OneToOne
	@JoinColumn(name = "ib_item_no")
	private Item item;
	public void generateibRegDate() {
		this.ibRegDate = LocalDateTime.now();
		this.ibStartDate = LocalDateTime.now();
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

	public LocalDateTime getIbRegDate() {
		return ibRegDate;
	}

	public void setIbRegDate(LocalDateTime ibRegDate) {
		this.ibRegDate = ibRegDate;
	}

	public int getIbDealPrice() {
		return ibDealPrice;
	}

	public void setIbDealPrice(int ibDealPrice) {
		this.ibDealPrice = ibDealPrice;
	}

	public int getIbNo() {
		return ibNo;
	}

	public void setIbNo(int ibNo) {
		this.ibNo = ibNo;
	}

	public int getIbDealUserNo() {
		return ibDealUserNo;
	}

	public void setIbDealUserNo(int ibDealUserNo) {
		this.ibDealUserNo = ibDealUserNo;
	}

	public String getIbDealAddress() {
		return ibDealAddress;
	}

	public void setIbDealAddress(String ibDealAddress) {
		this.ibDealAddress = ibDealAddress;
	}

	public LocalDateTime getIbStartDate() {
		return ibStartDate;
	}

	public void setIbStartDate(LocalDateTime ibStartDate) {
		this.ibStartDate = ibStartDate;
	}

	public int getIbAuctionInitPrice() {
		return ibAuctionInitPrice;
	}

	public void setIbAuctionInitPrice(int ibAuctionInitPrice) {
		this.ibAuctionInitPrice = ibAuctionInitPrice;
	}

	public int getIbAuctionIngPrice() {
		return ibAuctionIngPrice;
	}

	public void setIbAuctionIngPrice(int ibAuctionIngPrice) {
		this.ibAuctionIngPrice = ibAuctionIngPrice;
	}

}
