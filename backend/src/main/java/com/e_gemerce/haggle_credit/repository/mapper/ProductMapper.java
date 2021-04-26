package com.e_gemerce.haggle_credit.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.e_gemerce.haggle_credit.repository.dto.Product;

@Mapper
public interface ProductMapper {

	void insertProduct(Product product);

}
