package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "aNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Alarm {
	@Id
	private int aNo;
	private int aItemNo;
	private String aItemImageValue;
	private String aType;
	private int aRecvUserNo;
	private String aTitle;
	private String aContent;
	private LocalDateTime aTime;
	private String aCause;
	
	public void generateaTime() {
		this.aTime=LocalDateTime.now();
	}

	public int getaNo() {
		return aNo;
	}

	public void setaNo(int aNo) {
		this.aNo = aNo;
	}



	public int getaRecvUserNo() {
		return aRecvUserNo;
	}

	public void setaRecvUserNo(int aRecvUserNo) {
		this.aRecvUserNo = aRecvUserNo;
	}

	public String getaTitle() {
		return aTitle;
	}

	public void setaTitle(String aTitle) {
		this.aTitle = aTitle;
	}

	public String getaContent() {
		return aContent;
	}

	public void setaContent(String aContent) {
		this.aContent = aContent;
	}

	public LocalDateTime getaTime() {
		return aTime;
	}

	public void setaTime(LocalDateTime aTime) {
		this.aTime = aTime;
	}

	public int getaItemNo() {
		return aItemNo;
	}

	public void setaItemNo(int aItemNo) {
		this.aItemNo = aItemNo;
	}

	public String getaType() {
		return aType;
	}

	public void setaType(String aType) {
		this.aType = aType;
	}

	public String getaCause() {
		return aCause;
	}

	public void setaCause(String aCause) {
		this.aCause = aCause;
	}

	public String getaItemImageValue() {
		return aItemImageValue;
	}

	public void setaItemImageValue(String aItemImageValue) {
		this.aItemImageValue = aItemImageValue;
	}


}
