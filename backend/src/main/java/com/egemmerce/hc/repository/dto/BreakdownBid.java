package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BreakdownBid {
	private int apNo;
	private int apBid;
	private String apDate;
	private int apAddress;
	private int apItemNo;
	private int apUserNo;
	private int rapNo;
	private int rapBid;
	private String rapDate;
	private int rapAddress;
	private int rapItemNo;
	private int rapUserNo;
	private int iNo;
	private String iType;
	private String iCompleted;
	private int ipNo;
	private int ipItemNo;
	private String ipValue;
	private ItemSellSet itemSellSet;
	private ItemBuySet itemBuySet;
	public BreakdownBid() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BreakdownBid(int apNo, int apBid, String apDate, int apAddress, int apItemNo, int apUserNo, int iNo,
			String iType, String iCompleted, int ipNo, int ipItemNo, String ipValue, ItemSellSet itemSellSet,
			ItemBuySet itemBuySet) {
		super();
		this.apNo = apNo;
		this.apBid = apBid;
		this.apDate = apDate;
		this.apAddress = apAddress;
		this.apItemNo = apItemNo;
		this.apUserNo = apUserNo;
		this.iNo = iNo;
		this.iType = iType;
		this.iCompleted = iCompleted;
		this.ipNo = ipNo;
		this.ipItemNo = ipItemNo;
		this.ipValue = ipValue;
		this.itemSellSet = itemSellSet;
		this.itemBuySet = itemBuySet;
	}
	public int getApNo() {
		return apNo;
	}
	public void setApNo(int apNo) {
		this.apNo = apNo;
	}
	public int getApBid() {
		return apBid;
	}
	public void setApBid(int apBid) {
		this.apBid = apBid;
	}
	public String getApDate() {
		return apDate;
	}
	public void setApDate(String apDate) {
		this.apDate = apDate;
	}
	public int getApAddress() {
		return apAddress;
	}
	public void setApAddress(int apAddress) {
		this.apAddress = apAddress;
	}
	public int getApItemNo() {
		return apItemNo;
	}
	public void setApItemNo(int apItemNo) {
		this.apItemNo = apItemNo;
	}
	public int getApUserNo() {
		return apUserNo;
	}
	public void setApUserNo(int apUserNo) {
		this.apUserNo = apUserNo;
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
	public ItemSellSet getItemSellSet() {
		return itemSellSet;
	}
	public void setItemSellSet(ItemSellSet itemSellSet) {
		this.itemSellSet = itemSellSet;
	}
	public ItemBuySet getItemBuySet() {
		return itemBuySet;
	}
	public void setItemBuySet(ItemBuySet itemBuySet) {
		this.itemBuySet = itemBuySet;
	}
}
