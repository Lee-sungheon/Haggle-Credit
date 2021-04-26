package com.e_gemerce.haggle_credit.product.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.e_gemerce.haggle_credit.repository.dto.Product;
import com.e_gemerce.haggle_credit.repository.mapper.ProductMapper;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductMapper productMapper;
	
	@Override
	public void insertProduct(Product product) {
		productMapper.insertProduct(product);
	}

}
