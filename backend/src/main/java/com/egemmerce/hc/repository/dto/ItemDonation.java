package com.egemmerce.hc.repository.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "idNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class ItemDonation {
	@Id
	private int idNo;
	private int idItemNo;
	private int idUserNo;
	
	
	@OneToMany
	@JoinColumn(name = "dp_Item_donation_no")
	private List<DonationParticipant> donationParticipant;
	
	public int getIdNo() {
		return idNo;
	}
	public void setIdNo(int idNo) {
		this.idNo = idNo;
	}
	public int getIdItemNo() {
		return idItemNo;
	}
	public void setIdItemNo(int idItemNo) {
		this.idItemNo = idItemNo;
	}
	public int getIdUserNo() {
		return idUserNo;
	}
	public void setIdUserNo(int idUserNo) {
		this.idUserNo = idUserNo;
	}
	
	
}
