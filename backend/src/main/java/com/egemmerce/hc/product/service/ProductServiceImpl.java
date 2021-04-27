package com.egemmerce.hc.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Product;
import com.egemmerce.hc.repository.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductMapper productMapper;
	
	@Override
	public void insertProduct(Product product) {
		productMapper.insertProduct(product);
	}

	@Override
	public void updateHaggle(Product product) {
		productMapper.updateHaggle(product);
	}

	@Override
	public void updateProduct(Product product) {
		productMapper.updateProduct(product);
	}

	@Override
	public List<Product> searchByName(String name) {
		return 	productMapper.searchByName(name);
	}

	@Override
	public List<Product> searchByCategory(String category) {
		return 	productMapper.searchByCategory(category);
	}

	@Override
	public void deleteProduct(Product product) {
		productMapper.deleteProduct(product);
	}



}
