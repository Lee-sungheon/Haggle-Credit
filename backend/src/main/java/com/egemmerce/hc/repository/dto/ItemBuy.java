package com.egemmerce.hc.repository.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ItemBuy {
	
	private int ibNo;
	private int ibINo;
	private String ibTitle;
	private String ibName;
	private String ibCategoryMain;
	private String ibCategorySub;
	private int ibPrice;
	private int ibUNo;
	private String ibHopePrice;
	private String ibStartDate;
	private String ibEndDate;
	private String ibContent;
	private String ibUsed;
	private int ibHaggle;
	private int ibSellUNo;
	private int ibSellPrice;

}
