package com.egemmerce.hc.user.service;

import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.User;

public interface UserService{

	/* 일반 로그인 */
	User login(User user) throws Exception;

	/* 일반 회원 가입 */
	User insertUser(User user) throws Exception;


	public void mailSendWithUserKey(User user) throws Exception;
	public boolean alter_userKey_service(String uEmail, String uAuthKey) throws Exception;
	
	/* 회원 탈퇴 */
	User deleteUser(String uEmail) throws Exception;

	/* 아이디 중복 체크 */
	User checkUEmail(String uEmail) throws Exception;

	/*회원 조회*/
	User selectUserLogin(User user) throws Exception;
	
	/* 회원 정보 수정*/
	User updateUser(User user) throws Exception;

	/* 아이디 찾기 */
	User selectFindUEmail(String uName, int uPhone) throws Exception;

	User selectUEmailByNameAndPhone(String uName, String string) throws Exception;
	/* 3. 발급된 임시 비밀번호 적용시키기 */
	User findUPassword(User user) throws Exception;

	/* 4. 해당 이메일로 메세지 보내기 */
	void sendSimpleMessage(String to) throws Exception;

	User selectUserByEmail(String getuEmail);

	User updatePass(User user);

	/*유저 번호로 조회*/
	User selectUserByuNo(int isUserNo);

	User chargeCredit(int uNo, int credit);

	User withdrawCredit(int uNo, int credit);

	//입찰 실패로 인한 환불
	void updateUserCreditbyFail(int apUserNo, int apBid, int isItemNo);

	//입찰시 유저 포인트 출금
	void updateUserCreditbyAP(User user, int isAuctionPrice, int isItemNo);
	
	User updateUserBank(int uNo, String uBankName, String uBankNo);

	void updateBeforeAndNew(int isUserNo, int isItemNo, int isAuctionPrice);

	void updateUserCreditbyRegistBuy(User user, int ibAuctionInitPrice, int ibItemNo);

	void updateUserCreditbyBuyCool(int ibUserNo, ItemBuy itemBuy);

	int selectMyCredit(int uNo);
	

}