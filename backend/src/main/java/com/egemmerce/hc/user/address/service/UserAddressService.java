package com.egemmerce.hc.user.address.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.UserAddress;

public interface UserAddressService {

	/* C :: 배송지 추가 */
	UserAddress insertAddress(UserAddress userAddress) throws Exception;

	/* R :: 나의 배송지 조회 */
	List<UserAddress> selectAddressMine(int uNo) throws Exception;

	/* U :: 기본 배송지 변경 */
	boolean updateDefaultAddress(UserAddress userAddress) throws Exception;

	/* U :: 배송지 정보 변경 */
	boolean updateUserAddressEdit(UserAddress userAddress) throws Exception;

	/* D :: 배송지 추가 */
	boolean deleteAddress(int uaNo) throws Exception;

	UserAddress selectDefaultAddress(int getuNo);

	UserAddress selectAddressByuaNo(int uaNo);

	void updateDefaultFalse(int uNo);

	boolean updateDefaultTrue(int uaNo);

	UserAddress selectAddressbyaNo(int uaNo);

}