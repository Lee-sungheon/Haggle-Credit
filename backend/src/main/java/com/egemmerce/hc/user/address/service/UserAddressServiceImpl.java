package com.egemmerce.hc.user.address.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.UserAddress;
import com.egemmerce.hc.repository.mapper.UserAddressRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserAddressServiceImpl implements UserAddressService {

	private final UserAddressRepository userAddressRepository;

	/* C :: 배송지 추가 */
	@Override
	public UserAddress insertAddress(UserAddress userAddress) throws Exception {
		return userAddressRepository.save(userAddress);
	}

	/* R :: 나의 배송지 조회 */
	@Override
	public List<UserAddress> selectAddressMine(int uNo) throws Exception {
		return userAddressRepository.findByuaUserNoOrderByUaDefaultSettingDesc(uNo);
	}

	/* U :: 기본 배송지 변경 */
	@Override
	public boolean updateDefaultAddress(UserAddress userAddress) throws Exception {
		return userAddressRepository.save(userAddress) != null;
	}

	/* U :: 배송지 정보 변경 */
	@Override
	public boolean updateUserAddressEdit(UserAddress userAddress) throws Exception {
		return userAddressRepository.save(userAddress) != null;
	}

	/* D :: 배송지 삭제 */
	@Override
	public boolean deleteAddress(int uaNo) throws Exception {
		userAddressRepository.deleteByuaNo(uaNo);
		if (userAddressRepository.findByuaNo(uaNo) == null) {
			return true;
		}
		return false;
	}

	@Override
	public UserAddress selectDefaultAddress(int uNo) {
		List<UserAddress> userAddress = userAddressRepository.findByuaUserNo(uNo);
		for (UserAddress ua : userAddress) {
			if(ua.getUaDefaultSetting().equals("true")) {
				return ua;
			}
		}
		if(userAddress.size()==0) {
			return null;
		}
		return userAddress.get(0);
	}

	@Override
	public UserAddress selectAddressByuaNo(int uaNo) {
		return userAddressRepository.findByuaNo(uaNo);
	}

	@Override
	public void updateDefaultFalse(int uNo) {
		List<UserAddress> ua=userAddressRepository.findAllByuaUserNo(uNo);
		for (UserAddress userAddress : ua) {
			userAddress.setUaDefaultSetting("false");
			userAddressRepository.save(userAddress);
		}
	}

	@Override
	public boolean updateDefaultTrue(int uaNo) {
		UserAddress ua=userAddressRepository.findByuaNo(uaNo);
		ua.setUaDefaultSetting("true");
		if(userAddressRepository.save(ua)!=null) {
			return true;
		}
		return false;
	}

	@Override
	public UserAddress selectAddressbyaNo(int uaNo) {
		return userAddressRepository.findByuaNo(uaNo);
	}
}
