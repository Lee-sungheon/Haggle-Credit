package com.egemmerce.hc.user.address.controller;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;
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

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/user/address")
public class UserAddressController {

	@Autowired
	private UserAddressService userAddressService;

	/* C :: 배송지 추가 */
	@PostMapping("/add")
	public ResponseEntity<String> createUserAddress(UserAddress userAddress) throws Exception {
		if (userAddress.getUaDefaultSetting().equals("true")) {
			userAddressService.updateDefaultFalse(userAddress.getUaUserNo());
		}
		if (userAddressService.insertAddress(userAddress) != null)
			return new ResponseEntity<String>("배송지 추가 완료", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 추가 실패", HttpStatus.NO_CONTENT);
	}

	/* R :: 배송지 조회 */
	@GetMapping("")
	public ResponseEntity<List<UserAddress>> readUserAddress(int uNo) throws Exception {
		return new ResponseEntity<List<UserAddress>>(userAddressService.selectAddressMine(uNo), HttpStatus.OK);
	}
	@GetMapping("selectano")
	public ResponseEntity<?> selectano(int uaNo) throws Exception {
		return new ResponseEntity<UserAddress>(userAddressService.selectAddressbyaNo(uaNo), HttpStatus.OK);
	}

	@ApiOperation(value = "기본 배송지 변경 (ua_no,ua_default_setting)")
	@PutMapping("/change/defaultAddress")
	public ResponseEntity<String> updateDefaultUserAddress(int uNo, int uaNo) throws Exception {
		userAddressService.updateDefaultFalse(uNo);
		if (userAddressService.updateDefaultTrue(uaNo))
			return new ResponseEntity<String>("기본배송지변경 완료", HttpStatus.OK);
		return new ResponseEntity<String>("기본배송지변경 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: 배송지 정보 변경 */
	@ApiOperation(value = "배송 정보 변경")
	@PutMapping("/edit")
	public ResponseEntity<String> updateUserAddress(@RequestBody UserAddress userAddress) throws Exception {
		if (userAddressService.updateUserAddressEdit(userAddress))
			return new ResponseEntity<String>("배송지 정보 변경 성공", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 정보 변경 실패", HttpStatus.NO_CONTENT);
	}

	/* D :: 배송지 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUserAddress(int uaNo) throws Exception {
		if (userAddressService.deleteAddress(uaNo))
			return new ResponseEntity<String>("배송지 삭제 완료", HttpStatus.OK);
		return new ResponseEntity<String>("배송지 삭제 실패", HttpStatus.NO_CONTENT);
	}

}
