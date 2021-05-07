package com.egemmerce.hc.user.address.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.UserAddress;
import com.egemmerce.hc.repository.mapper.UserAddressMapper;

@Service
public class UserAddressServiceImpl implements UserAddressService {
	@Autowired
	private UserAddressMapper userAddressMapper;
	
	/* C :: 배송지 추가 */
	@Override
	public int insertAddress(UserAddress userAddress) throws Exception {
		return userAddressMapper.insertAddress(userAddress);
	}

	/* R :: 나의 배송지 조회 */
	@Override
	public List<UserAddress> selectAddressMine(int uNo) throws Exception {
		return userAddressMapper.selectAddressMine(uNo);
	}

	/* U :: 기본 배송지 변경 */
	@Override
	public boolean updateDefaultAddress(UserAddress userAddress) throws Exception {
		return userAddressMapper.updateDefaultAddress(userAddress);
	}
	
	/* U :: 배송지 정보 변경 */
	@Override
	public boolean updateUserAddressEdit(UserAddress userAddress) throws Exception {
		return userAddressMapper.updateUserAddressEdit(userAddress);
	}
	
	/* D :: 배송지 추가 */
	@Override
	public boolean deleteAddress(int uaNo) throws Exception {
		return userAddressMapper.deleteUserAddress(uaNo);
	}
}
