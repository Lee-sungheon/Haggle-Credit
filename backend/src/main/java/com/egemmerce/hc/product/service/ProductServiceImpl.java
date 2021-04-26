package com.egemmerce.hc.product.service;

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

}
