package com.egemmerce.hc.user.address.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.repository.dto.UserAddress;
import com.egemmerce.hc.user.address.service.UserAddressService;

@RestController
@RequestMapping("/user/address")
public class UserAddressController {
	
	@Autowired
	private UserAddressService userAddressService;
	
	/* C :: 배송지 추가 */
	@PostMapping("/add")
	public ResponseEntity<String> createUserAddress(UserAddress userAddress) throws Exception {
		if(userAddressService.insertAddress(userAddress) != null)
			return new ResponseEntity<String>("배송지 추가 완료", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 추가 실패", HttpStatus.NO_CONTENT);
	}
	
	/* R :: 배송지 조회 */
	@GetMapping("")
	public ResponseEntity<List<UserAddress>> readUserAddress(int uNo) throws Exception {
		return new ResponseEntity<List<UserAddress>>(userAddressService.selectAddressMine(uNo), HttpStatus.OK);
	}
	
	/* U :: 기본 배송지 변경 => 이거 sql문 고쳐야함... */
	@PutMapping("/change/defaultAddress")
	public ResponseEntity<String> updateDefaultUserAddress(@RequestBody UserAddress userAddress) throws Exception {
		if(userAddressService.updateDefaultAddress(userAddress))
			return new ResponseEntity<String>("기본배송지변경 완료", HttpStatus.OK);
		return new 	ResponseEntity<String>("기본배송지변경 실패", HttpStatus.NO_CONTENT);
	}
	
	/* U :: 배송지 정보 변경 */
	@PutMapping("/edit")
	public ResponseEntity<String> updateUserAddress(@RequestBody UserAddress userAddress) throws Exception {
		if(userAddressService.updateUserAddressEdit(userAddress))
			return new ResponseEntity<String>("배송지 정보 변경 성공", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 정보 변경 실패", HttpStatus.NO_CONTENT);
	}
	
	/* D :: 배송지 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUserAddress(int uaNo) throws Exception {
		if(userAddressService.deleteAddress(uaNo))
			return new ResponseEntity<String>("배송지 삭제 완료", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 삭제 실패", HttpStatus.NO_CONTENT);
	}

}
