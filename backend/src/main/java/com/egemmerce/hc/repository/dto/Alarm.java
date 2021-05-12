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

<<<<<<< HEAD
@Entity
@EqualsAndHashCode(of = "aNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
=======
@Entity @EqualsAndHashCode(of = "aNo")
@Builder @AllArgsConstructor @NoArgsConstructor
@DynamicInsert
@DynamicUpdate
>>>>>>> 47b78be0b5a0b2577e82087df14b18ddcedc896a
public class Alarm {
	@Id
	private int aNo;
	private int aSendUserNo;
	private int aRecvUserNo;
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
<<<<<<< HEAD

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

=======
>>>>>>> 47b78be0b5a0b2577e82087df14b18ddcedc896a
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
<<<<<<< HEAD

=======
	public int getaSendUserNo() {
		return aSendUserNo;
	}
	public void setaSendUserNo(int aSendUserNo) {
		this.aSendUserNo = aSendUserNo;
	}
	public int getaRecvUserNo() {
		return aRecvUserNo;
	}
	public void setaRecvUserNo(int aRecvUserNo) {
		this.aRecvUserNo = aRecvUserNo;
	}
	
	
>>>>>>> 47b78be0b5a0b2577e82087df14b18ddcedc896a
}
