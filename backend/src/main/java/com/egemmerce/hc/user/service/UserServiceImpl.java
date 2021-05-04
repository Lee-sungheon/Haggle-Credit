package com.egemmerce.hc.user.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.EmailMessage;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.UserMapper;
import com.egemmerce.hc.user.controller.SaltSHA256;

import lombok.RequiredArgsConstructor;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : User Service 클래스
 * 	- 일반 / 카카오 로그인
 * 	- 일반 / 카카오 회원가입
 * 	- 회원 탈퇴
 * 	- 회원 정보 조회/변경/id중복체크
 *  - id/pw 찾기
 *
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	
	/* User Mapper 객체 불러오기 */
	@Autowired
	private UserMapper userMapper;
	
	private final UserEmailService emailService;
	
	
	
	/* 일반 로그인 */
	@Override
	public User login(User user) throws Exception {
		// 일단 check라는 객체에 이메일을 통한 회원 정보 저장해두기
		User check = userMapper.selectUserLogin(user);

		// 이메일을 통한 해당 회원의 salt 값 받아오기
		String salt = userMapper.getSaltByUEmail(user.getuEmail());

		// 내가입력한 비밀번호를 위의 salt값과 조합하여 암호화시킨 값으로 다시금 password
		String password = user.getuPassword();
		password = SaltSHA256.getEncrypt(password, salt);
		user.setuPassword(password);
		
		// 비밀번호 일치한지 확인
		if(user.getuPassword().equals(check.getuPassword()))	
			return check;
		else
			return null;
		
	}
	
	/* 카카오로 로그인 */
	@Override
	public User loginKakao(User user) throws Exception {
		User check = userMapper.selectUserLogin(user);
		if(user.getuPassword().equals(check.getuPassword()))
			return check;
		else
			return null;
	}

	/* 일반 회원 가입 */
	@Override
	public int insertUser(User user) throws Exception {
		
		// 1. 가입할 회원의 고유 salt값 생성 및 저장
		String salt = SaltSHA256.generateSalt();
		user.setuSalt(salt);
		
		// 2. 입력된 비밀번호에 생성된 salt값 활용해서 암호화된 passowrd 생성 및 저장(삽입)
		String password = user.getuPassword();
		password = SaltSHA256.getEncrypt(password, salt);
		user.setuPassword(password);

		// 3. 남은 유저 정보들 삽입 처리
		return userMapper.insertUser(user);
	}
	
	// 난수 생성(uAuthKey)
	@Override
	public String init() throws Exception {
		Random rd = new Random();
		StringBuffer sb = new StringBuffer();
		int num = 0;
		do {
			num = rd.nextInt(75) + 48;
			if((num >= 48 && num <= 57) || (num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
				sb.append((char)num);
			} else {
				continue;
			}
		} while (sb.length() < size);
		if(lowerCheck) {
			return sb.toString().toLowerCase();
		}
		return sb.toString();
	}
	private boolean lowerCheck;
	private int size;
	
	// 난수 이용한 키생성(uAuthKey)
	@Override
	public String getKey(boolean lowerCheck, int size) throws Exception {
		this.lowerCheck = lowerCheck;
		this.size = size;
		return init();
	}
	
	/* 가입시, 메일로 인증링크 보내기 */
	@Override
	public void mailSendWithUserKey(User user) throws Exception {
		String mailContent =
				"<h3>안녕하세요. Haggle-Credit 개발팀입니다.</h3><br></br>" +
				"<h3>가입해주셔서 감사합니다. 마지막 절차인 본인 인증만 해주시면 완료 됩니다.</h3><br></br>" +
				"<h2>아래의 인증하기 버튼을 눌러 인증완료 및 로그인 하시길 바랍니다</h2><br></br>" +
				"<a href='http://localhost:8080/haggle-credit/user/key_alter?token=" + user.getuAuthKey() + "&email=" + user.getuEmail() + "'>인증하기</a></p>" +
				"<h6>만약, 잘못 전달된 메일이라면, 해당 이메일을 무시하시면 됩니다.</h6>";
		
        EmailMessage emailMessage = EmailMessage.builder()
                .to(user.getuEmail())
                .subject("안녕하세요 Haggle-Credit입니다. 본인인증을 완료해주세요")
                .message(mailContent)
                .build();
		emailService.sendEmail(emailMessage);
	}
	/*인증확인 유무*/
	@Override
	public boolean alter_userKey_service(String uEmail, String uAuthKey) throws Exception {
		User user=userMapper.getUserByEmail(uEmail);
		if(user.getuAuthKey().equals(uAuthKey)) {
			return true;			
		}else {
			return false;
		}
	}
	
	/* 카카오로 회원 가입 */
	@Override
	public int insertKakaoUser(User user) throws Exception {
		return userMapper.insertKakaoUser(user);
	}
	
	/* 회원 탈퇴 */
	@Override
	public boolean deleteUser(String uEmail) throws Exception {
		return userMapper.deleteUser(uEmail);
	}
	
	/* 아이디 중복 체크 */
	@Override
	public int checkUEmail(String uEmail) throws Exception {
		return userMapper.checkUEmail(uEmail);
	}
	
	/* 회원 정보 조회(로그인) */ //이거 필요없지않나? 컨트롤러에서 애당초 토큰 분석해서 쓰는거같음..
	@Override
	public User selectUserLogin(User user) throws Exception {
		return userMapper.selectUserLogin(user);
	}
	
	/* 회원 정보 수정*/
	@Override
	public boolean updateUser(User user) throws Exception {
		return userMapper.updateUser(user);
	}
	
	/* 아이디 찾기 */
	@Override
	public int selectFindUEmail(String uName, int uPhone) throws Exception {
		return userMapper.selectFindUEmail(uName, uPhone);
	}
	
	@Override
	public String selectUEmailByNameAndPhone(String uName, String uPhone) throws Exception {
		return userMapper.selectUEmailByNameAndPhone(uName, uPhone);
	}
	
	/*1-1. 비밀번호 재발급 생성 */
	public static final String ePw = createKey();
	public static String createKey() {
		StringBuffer key = new StringBuffer();
		Random rnd = new Random();
		
		for(int i = 0; i < 8; i++) {
			int index = rnd.nextInt(3); // 0~2까지 랜덤
			
			switch(index) {
			case 0:
				key.append((char) ((int)(rnd.nextInt(26))+97)); // a~z
				break;
			case 1:
				key.append((char) ((int)(rnd.nextInt(26))+65)); // A~Z
				break;
			case 2:
				key.append((rnd.nextInt(10))); // 0~9
				break;
			}
		}
		return key.toString();
	}

	
	
	/* 3. 발급된 임시 비밀번호 적용시키기 */
	@Override
	public boolean findUPassword(User user) throws Exception {
		user.setuPassword(ePw);
		return userMapper.updateTempPw(user);
	}

	/* 4. 해당 이메일로 메세지 보내기 */
	@Override
	public void sendSimpleMessage(String to) throws Exception {

		String msgg="";
		msgg+= "<div style='margin:100px;'>";
		msgg+= "<h1> 안녕하세요 Haggle-Credit 개발팀입니다. </h1>";
		msgg+= "<br>";
		msgg+= "<p>발급된 아래의 임시비밀번호를 통해 로그인 하시길 바랍니다.<p>";
		msgg+= "<br>";
		msgg+= "<p>감사합니다.<p>";
		msgg+= "<br>";
		msgg+= "<div align='center' style='border:1px solid black; font-family:verdana';>";
		msgg+= "<h3 style='color:blue;'>임시 비밀번호</h3>";
		msgg+= "<div style='font-size:130%'>";
		msgg+= "CODE : <strong>";
		msgg+= ePw+"</strong><div><br/> ";
		msgg+= "</div>";
		
        EmailMessage emailMessage = EmailMessage.builder()
                .to(to)
                .subject("Haggle-Credit에서 임시 비밀번호를 발급해드렸습니다.")
                .message(msgg)
                .build();
		emailService.sendEmail(emailMessage);
	}
	
	

}
