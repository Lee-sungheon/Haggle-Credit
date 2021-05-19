package com.egemmerce.hc.repository.dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(of = "iNo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Item {

	@Id
	private int iNo;
	private String iType;
	@ColumnDefault("false")
	private String iCompleted;

	@OneToMany
	@JoinColumn(name = "ap_item_no")
	private List<AuctionParticipant> auctionParticipant;
	@OneToMany
	@JoinColumn(name = "rap_item_no")
	private List<ReverseAuctionParticipant> reverseAuctionParticipant;
	@OneToMany
	@JoinColumn(name = "ip_item_no")
	private List<ItemPhoto> itemPhoto;

	@OneToOne(mappedBy = "item")
	private ItemBuy itemBuy;
	@OneToOne(mappedBy = "item")
	@JsonManagedReference
	private ItemSell itemSell;
//	@OneToOne
//	@JoinColumn(name = "i_no")
//	@JsonBackReference
//	private ItemDonation itemDonation;
	@OneToOne
	@JoinColumn(name = "i_no")
	@JsonBackReference
	private ItemDelivery itemDelivery;
	public int getiNo() {
		return iNo;
	}

	public void setiNo(int iNo) {
		this.iNo = iNo;
	}

	public String getiCompleted() {
		return iCompleted;
	}

	public void setiCompleted(String iCompleted) {
		this.iCompleted = iCompleted;
	}

	public String getiType() {
		return iType;
	}

	public void setiType(String iType) {
		this.iType = iType;
	}

	public List<AuctionParticipant> getAuctionParticipant() {
		return auctionParticipant;
	}

	public void setAuctionParticipant(List<AuctionParticipant> auctionParticipant) {
		this.auctionParticipant = auctionParticipant;
	}

	public List<ItemPhoto> getItemPhoto() {
		return itemPhoto;
	}

	public void setItemPhoto(List<ItemPhoto> itemPhoto) {
		this.itemPhoto = itemPhoto;
	}

	public List<ReverseAuctionParticipant> getReverseAuctionParticipant() {
		return reverseAuctionParticipant;
	}

	public void setReverseAuctionParticipant(List<ReverseAuctionParticipant> reverseAuctionParticipant) {
		this.reverseAuctionParticipant = reverseAuctionParticipant;
	}

	public ItemBuy getItemBuy() {
		return itemBuy;
	}

	public void setItemBuy(ItemBuy itemBuy) {
		this.itemBuy = itemBuy;
	}

	public ItemSell getItemSell() {
		return itemSell;
	}

	public void setItemSell(ItemSell itemSell) {
		this.itemSell = itemSell;
	}

}
