package com.egemmerce.hc.user.service;

import com.egemmerce.hc.repository.dto.User;

public interface UserService {

	/* 일반 로그인 */
	User login(User user) throws Exception;

	/* 카카오로 로그인 */
	User loginKakao(User user) throws Exception;

	/* 일반 회원 가입 */
	int insertUser(User user) throws Exception;

	/* 카카오로 회원 가입 */
	int insertKakaoUser(User user) throws Exception;

	/* 회원 탈퇴 */
	boolean deleteUser(String uEmail) throws Exception;

	/* 아이디 중복 체크 */
	int checkUEmail(String uEmail) throws Exception;

	/*회원 조회*/
	User selectUserLogin(User user) throws Exception;
	
	/* 회원 정보 수정*/
	boolean updateUser(User user) throws Exception;

	/* 아이디 찾기 */
	int selectFindUEmail(String uName, int uPhone) throws Exception;

	String selectUEmailByNameAndPhone(String uName, int uPhone) throws Exception;
	/* 3. 발급된 임시 비밀번호 적용시키기 */
	boolean findUPassword(User user) throws Exception;

	/* 4. 해당 이메일로 메세지 보내기 */
	void sendSimpleMessage(String to) throws Exception;

}