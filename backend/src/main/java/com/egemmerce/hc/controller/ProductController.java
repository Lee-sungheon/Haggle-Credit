package com.egemmerce.hc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.product.service.ProductService;
import com.egemmerce.hc.repository.dto.Product;

@RestController
@RequestMapping("/product")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@GetMapping("/insertProduct")
	public void insertProduct(Product product) {
		productService.insertProduct(product);
	}
	
	@GetMapping("/updateHaggle")
	public void updateHaggle(Product product) {
		productService.updateHaggle(product);
	}
	
	@GetMapping("/updateProduct")
	public void updateProduct(Product product) {
		productService.updateProduct(product);
	}
	
	@GetMapping("/searchByName")
	public List<Product> searchByName(String name) {
		return 	productService.searchByName(name);
	}
	
	@GetMapping("/searchByCategory")
	public List<Product> searchByCategory(String category) {
		return 	productService.searchByCategory(category);
	}
	
	@DeleteMapping("deleteProduct")
	public void deleteProduct(Product product) {
		productService.deleteProduct(product);
	}
}
