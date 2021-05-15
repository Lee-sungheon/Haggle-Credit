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
}
