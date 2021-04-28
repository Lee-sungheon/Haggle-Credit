package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.Product;

@Mapper
public interface ProductMapper {

	void insertProduct(Product product);

	void updateHaggle(Product product);

	void updateProduct(Product product);

	List<Product> searchByName(String name);

	List<Product> searchByCategory(String category);

	void deleteProduct(Product product);

}
