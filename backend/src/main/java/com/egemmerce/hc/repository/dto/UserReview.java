package com.egemmerce.hc.repository.dto;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "ipNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserReview {

	@Id
	private int urNo;
	private int urUserNo;
	private int urItemNo;
	private int urWriteUserNo;
	private int urScore;
	private String urContent;
	private LocalDateTime urWriteDate;

	public int getUrNo() {
		return urNo;
	}

	public void setUrNo(int urNo) {
		this.urNo = urNo;
	}

	public int getUrUserNo() {
		return urUserNo;
	}

	public void setUrUserNo(int urUserNo) {
		this.urUserNo = urUserNo;
	}

	public int getUrItemNo() {
		return urItemNo;
	}

	public void setUrItemNo(int urItemNo) {
		this.urItemNo = urItemNo;
	}

	public int getUrWriteUserNo() {
		return urWriteUserNo;
	}

	public void setUrWriteUserNo(int urWriteUserNo) {
		this.urWriteUserNo = urWriteUserNo;
	}

	public int getUrScore() {
		return urScore;
	}

	public void setUrScore(int urScore) {
		this.urScore = urScore;
	}

	public String getUrContent() {
		return urContent;
	}

	public void setUrContent(String urContent) {
		this.urContent = urContent;
	}

	public LocalDateTime getUrWriteDate() {
		return urWriteDate;
	}

	public void setUrWriteDate(LocalDateTime urWriteDate) {
		this.urWriteDate = urWriteDate;
	}
}
