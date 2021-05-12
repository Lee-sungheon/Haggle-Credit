package com.egemmerce.hc.repository.dto;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity @EqualsAndHashCode(of = "iNo")
@Builder @AllArgsConstructor @NoArgsConstructor
public class Item {
	
    @Id
	private int iNo;
    private String iType;
	@ColumnDefault("false")
    private String iCompleted;
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
    
    

}
