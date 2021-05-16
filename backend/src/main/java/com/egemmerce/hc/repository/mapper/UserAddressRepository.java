package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.UserAddress;

@Transactional
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {

	List<UserAddress> findByuaUserNo(int uaUserNo);

	void deleteByuaNo(int uaNo);

	UserAddress findByuaNo(int uaNo);

	List<UserAddress> findAllByuaUserNo(int uNo);

	List<UserAddress> findByuaUserNoOrderByUaDefaultSetting(int uNo);

	List<UserAddress> findByuaUserNoOrderByUaDefaultSettingDesc(int uNo);

}
