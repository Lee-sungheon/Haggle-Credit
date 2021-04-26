package com.e_gemerce.haggle_credit.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Product {
	private int pNo;
	private String pName;
	private int pUNo;
	private String pCategory;
	private String pSubCategory;
	private int pMainPrice;
	private int pHagglePrice;
	private int pImeediatePrice;
	private int pEndPrice;
	private String pContent;
	private String pDate;
	private String pEndDate;
	public int getpNo() {
		return pNo;
	}
	public void setpNo(int pNo) {
		this.pNo = pNo;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public int getpUNo() {
		return pUNo;
	}
	public void setpUNo(int pUNo) {
		this.pUNo = pUNo;
	}
	public String getpCategory() {
		return pCategory;
	}
	public void setpCategory(String pCategory) {
		this.pCategory = pCategory;
	}
	public String getpSubCategory() {
		return pSubCategory;
	}
	public void setpSubCategory(String pSubCategory) {
		this.pSubCategory = pSubCategory;
	}
	public int getpMainPrice() {
		return pMainPrice;
	}
	public void setpMainPrice(int pMainPrice) {
		this.pMainPrice = pMainPrice;
	}
	public int getpHagglePrice() {
		return pHagglePrice;
	}
	public void setpHagglePrice(int pHagglePrice) {
		this.pHagglePrice = pHagglePrice;
	}
	public int getpImeediatePrice() {
		return pImeediatePrice;
	}
	public void setpImeediatePrice(int pImeediatePrice) {
		this.pImeediatePrice = pImeediatePrice;
	}
	public int getpEndPrice() {
		return pEndPrice;
	}
	public void setpEndPrice(int pEndPrice) {
		this.pEndPrice = pEndPrice;
	}
	public String getpContent() {
		return pContent;
	}
	public void setpContent(String pContent) {
		this.pContent = pContent;
	}
	public String getpDate() {
		return pDate;
	}
	public void setpDate(String pDate) {
		this.pDate = pDate;
	}
	public String getpEndDate() {
		return pEndDate;
	}
	public void setpEndDate(String pEndDate) {
		this.pEndDate = pEndDate;
	}
}
