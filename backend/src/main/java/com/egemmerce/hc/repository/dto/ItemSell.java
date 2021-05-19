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

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "isItemNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemSell {

	@Id
	@Column(name = "is_item_no")
	private int isItemNo;

	private int isNo;

	private int isUserNo;
	private String isItemName;

	@ColumnDefault("기타")
	private String isCategoryMain;
	@ColumnDefault("기타")
	private String isCategorySub;
	@ColumnDefault("중고")
	private String isUsedStatus;
	private String isContent;
	private int isCoolPrice;
	private int isAuctionInitPrice;
	@ColumnDefault("0")
	private int isDealAddress;
	@ColumnDefault("0")
	private int isDealPrice;
	@ColumnDefault("0")
	private int isDealUserNo;
	private LocalDateTime isStartDate;
	private Date isEndDate;
	private String isEventAgree;
	private int isAuctionIngPrice;

	@OneToOne
	@JoinColumn(name = "is_item_no")
	@JsonBackReference
	private Item item;

	public void generateStartDate() {
		this.isStartDate = LocalDateTime.now();
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

	public String getIsUsedStatus() {
		return isUsedStatus;
	}

	public void setIsUsedStatus(String isUsedStatus) {
		this.isUsedStatus = isUsedStatus;
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

	public int getIsAuctionInitPrice() {
		return isAuctionInitPrice;
	}

	public void setIsAuctionInitPrice(int isAuctionInitPrice) {
		this.isAuctionInitPrice = isAuctionInitPrice;
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

	public LocalDateTime getIsStartDate() {
		return isStartDate;
	}

	public void setIsStartDate(LocalDateTime isStartDate) {
		this.isStartDate = isStartDate;
	}

	public Date getIsEndDate() {
		return isEndDate;
	}

	public void setIsEndDate(Date isEndDate) {
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

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

}
