package com.egemmerce.hc.repository.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder @AllArgsConstructor @NoArgsConstructor
public class ItemPhotoSet {
	private ItemSell itemSell;
	private List<ItemPhoto> itemPhotoes;
	private int itemCnt;
	private ItemPhoto itemPhoto;
	
	public ItemPhotoSet(ItemSell itemSell, ItemPhoto itemPhoto) {
		super();
		this.itemSell = itemSell;
		this.itemPhoto = itemPhoto;
	}

	public ItemPhotoSet(ItemSell itemSell, List<ItemPhoto> itemPhotoes, int itemCnt) {
		super();
		this.itemSell = itemSell;
		this.itemPhotoes = itemPhotoes;
		this.itemCnt = itemCnt;
	}
	
	
}
