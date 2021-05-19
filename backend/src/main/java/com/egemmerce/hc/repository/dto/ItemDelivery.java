package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "idNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemDelivery {
	private int idNo;
	@Id
	private int idItemNo;
	private int idSendUserNo;
	private int idReceiveUserNo;
	@ColumnDefault("0")
	private int idDeliveryNo;
	private LocalDateTime idSendDate;
	@ColumnDefault("false")
	private String idReceive;
	private String idType;
	private int idPrice;
	
	@OneToOne(mappedBy = "itemDelivery")
	@JsonManagedReference
	private Item item;
	
	public void generateidSendDate() {
		this.idSendDate=LocalDateTime.now();
	}

	public int getIdNo() {
		return idNo;
	}

	public void setIdNo(int idNo) {
		this.idNo = idNo;
	}

	public int getIdSendUserNo() {
		return idSendUserNo;
	}

	public void setIdSendUserNo(int idSendUserNo) {
		this.idSendUserNo = idSendUserNo;
	}

	public int getIdReceiveUserNo() {
		return idReceiveUserNo;
	}

	public void setIdReceiveUserNo(int idReceiveUserNo) {
		this.idReceiveUserNo = idReceiveUserNo;
	}

	public int getIdDeliveryNo() {
		return idDeliveryNo;
	}

	public void setIdDeliveryNo(int idDeliveryNo) {
		this.idDeliveryNo = idDeliveryNo;
	}

	public LocalDateTime getIdSendDate() {
		return idSendDate;
	}

	public void setIdSendDate(LocalDateTime idSendDate) {
		this.idSendDate = idSendDate;
	}

	public String getIdReceive() {
		return idReceive;
	}

	public void setIdReceive(String idReceive) {
		this.idReceive = idReceive;
	}

	public int getIdItemNo() {
		return idItemNo;
	}

	public void setIdItemNo(int idItemNo) {
		this.idItemNo = idItemNo;
	}

	public String getIdType() {
		return idType;
	}

	public void setIdType(String idType) {
		this.idType = idType;
	}

	public int getIdPrice() {
		return idPrice;
	}

	public void setIdPrice(int idPrice) {
		this.idPrice = idPrice;
	}

	public Item getItem() {
		return item;
	}

	public void setItem(Item item) {
		this.item = item;
	}
	
	
	
}
