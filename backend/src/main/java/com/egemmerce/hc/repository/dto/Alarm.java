package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "aNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Alarm {
    @Id
	private int aNo;
	private int aSendUNo;
	private int aRecvUNo;
	private String aTitle;
	private String aContent;
	private LocalDateTime aTime;
	private String aLink;
	
	public int getaNo() {
		return aNo;
	}
	public void setaNo(int aNo) {
		this.aNo = aNo;
	}
	public int getaSendUNo() {
		return aSendUNo;
	}
	public void setaSendUNo(int aSendUNo) {
		this.aSendUNo = aSendUNo;
	}
	public int getaRecvUNo() {
		return aRecvUNo;
	}
	public void setaRecvUNo(int aRecvUNo) {
		this.aRecvUNo = aRecvUNo;
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
	public String getaLink() {
		return aLink;
	}
	public void setaLink(String aLink) {
		this.aLink = aLink;
	}
	
	
}
