package com.egemmerce.hc.repository.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.egemmerce.hc.repository.dto.User;

@Mapper
public interface UserMapper {
	/*salt값 반환*/
	public String getSaltByUEmail(String uEmail) throws Exception;
	
	/*일반 로그인*/
	/*카카오 로그인*/
	public User selectUserLogin(User user) throws Exception;
	
	/*일반 회원 가입*/
	public int insertUser(User user) throws Exception;
	
	/*카카오 회원 가입*/
	public int insertKakaoUser(User user) throws Exception;
	
	/*회원 탈퇴*/
	public boolean deleteUser(String uEmail) throws Exception;
	
	/*아이디 중복 체크*/
	public int checkUEmail(String uEmail) throws Exception;
	
	/*회원정보수정*/
	public boolean updateUser(User user) throws Exception;
	
	/*아이디 찾기*/
	public int selectFindUEmail(String uName, int uPhone) throws Exception;
	
	public String selectUEmailByNameAndPhone(String uName, int uPhone) throws Exception;
	/*비밀번호 찾기(재발급)*/
	public boolean updateTempPw(User user) throws Exception;
}
