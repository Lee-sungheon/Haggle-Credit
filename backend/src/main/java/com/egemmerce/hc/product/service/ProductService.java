package com.egemmerce.hc.product.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.Product;

public interface ProductService {

	void insertProduct(Product product);

	void updateHaggle(Product product);

	void updateProduct(Product product);

	List<Product> searchByName(String name);

	List<Product> searchByCategory(String category);

	void deleteProduct(Product product);

}
