package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.UserAddress;

@Mapper
public interface UserAddressMapper {
	
	/* C :: 배송지 추가 */
	public int insertAddress(UserAddress userAddress) throws Exception;
	/* R :: 내 배송지 조회 */
	public List<UserAddress> selectAddressMine(int uNo) throws Exception;
	/* U :: 기본 배송지 변경 */
	public boolean updateDefaultAddress(UserAddress userAddress) throws Exception;
	/* U :: 배송지 정보 변경 */
	public boolean updateUserAddressEdit(UserAddress userAddress) throws Exception;
	/* D :: 배송지 삭제 */
	public boolean deleteUserAddress(int uaNo) throws Exception;
}
