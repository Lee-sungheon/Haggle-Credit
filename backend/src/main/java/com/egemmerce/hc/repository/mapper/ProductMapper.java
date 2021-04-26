package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Product;

@Mapper
public interface ProductMapper {

	void insertProduct(Product product);

}
