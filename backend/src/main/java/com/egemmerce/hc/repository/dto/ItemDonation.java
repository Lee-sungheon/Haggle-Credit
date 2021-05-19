package com.egemmerce.hc.repository.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	private int idNo;
	@Id
	private int idItemNo;
	private int idUserNo;
	private int idEndPrice;
	@ColumnDefault("0")
	private int idIngPrice;
	@ColumnDefault("false")
	private String idEndDonation;
	private int idEndUserNo;
	private int idEndUserAddress;
	@OneToMany
	@JoinColumn(name = "dp_item_no")
	private List<DonationParticipant> donationParticipant;

//	@OneToOne(mappedBy = "itemDonation")
//	@JsonManagedReference
//	private Item item;

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

	public int getIdEndPrice() {
		return idEndPrice;
	}

	public void setIdEndPrice(int idEndPrice) {
		this.idEndPrice = idEndPrice;
	}

	public int getIdIngPrice() {
		return idIngPrice;
	}

	public void setIdIngPrice(int idIngPrice) {
		this.idIngPrice = idIngPrice;
	}

	public List<DonationParticipant> getDonationParticipant() {
		return donationParticipant;
	}

	public void setDonationParticipant(List<DonationParticipant> donationParticipant) {
		this.donationParticipant = donationParticipant;
	}

	public String getIdEndDonation() {
		return idEndDonation;
	}

	public void setIdEndDonation(String idEndDonation) {
		this.idEndDonation = idEndDonation;
	}

	public int getIdEndUserNo() {
		return idEndUserNo;
	}

	public void setIdEndUserNo(int idEndUserNo) {
		this.idEndUserNo = idEndUserNo;
	}

	public int getIdEndUserAddress() {
		return idEndUserAddress;
	}

	public void setIdEndUserAddress(int idEndUserAddress) {
		this.idEndUserAddress = idEndUserAddress;
	}

}
