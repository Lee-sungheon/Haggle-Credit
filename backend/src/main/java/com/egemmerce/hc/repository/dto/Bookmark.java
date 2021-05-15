package com.egemmerce.hc.repository.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@EqualsAndHashCode(of = "bNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
public class Bookmark {

	@Id
	private int bNo;
	@Column
	private int bItemNo;
	@Column
	private int bUserNo;

	public int getbItemNo() {
		return bItemNo;
	}

	public void setbItemNo(int bItemNo) {
		this.bItemNo = bItemNo;
	}

	public int getbUserNo() {
		return bUserNo;
	}

	public void setbUserNo(int bUserNo) {
		this.bUserNo = bUserNo;
	}

	public int getbNo() {
		return bNo;
	}

	public void setbNo(int bNo) {
		this.bNo = bNo;
	}

}
