package com.egemmerce.hc.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "ipNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemPhoto {
	
    @Id
	private int ipNo;
    @Column(name="ip_item_no")
	private int ipItemNo;
	private String ipValue;
	public int getIpNo() {
		return ipNo;
	}
	public void setIpNo(int ipNo) {
		this.ipNo = ipNo;
	}
	
	public String getIpValue() {
		return ipValue;
	}
	public void setIpValue(String ipValue) {
		this.ipValue = ipValue;
	}
	public int getIpItemNo() {
		return ipItemNo;
	}
	public void setIpItemNo(int ipItemNo) {
		this.ipItemNo = ipItemNo;
	}
	
	
}
