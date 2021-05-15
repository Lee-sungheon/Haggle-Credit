package com.egemmerce.hc.repository.dto;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "urNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class UserReview {

	@Id
	private int urNo;
	@Column
	private int urUserNo;
	private int urItemNo;
	private int urWriteUserNo;
	private int urScore;
	private String urContent;
	private LocalDateTime urWriteDate;

	public void generateurWriteDate() {
		this.urWriteDate = LocalDateTime.now();
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

	public int getUrNo() {
		return urNo;
	}

	public void setUrNo(int urNo) {
		this.urNo = urNo;
	}

}
