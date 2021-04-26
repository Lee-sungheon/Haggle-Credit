package com.e_gemerce.haggle_credit.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.e_gemerce.haggle_credit.product.service.ProductService;
import com.e_gemerce.haggle_credit.repository.dto.Product;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping("/insertProduct")
	public void insertProduct(Product product) {
		productService.insertProduct(product);
	}
}
