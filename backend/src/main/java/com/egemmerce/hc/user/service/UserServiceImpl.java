package com.egemmerce.hc.user.service;

import java.util.Random;

import javax.mail.Message.RecipientType;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.UserMapper;
import com.egemmerce.hc.user.controller.SaltSHA256;

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
public class UserServiceImpl implements UserService {
	
	/* User Mapper 객체 불러오기 */
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	JavaMailSender emailSender;
	
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
	public String selectUEmailByNameAndPhone(String uName, int uPhone) throws Exception {
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

	/* 2. 메일 양식에 맞추서 작성하는 메소드 (임시비밀번호 담기) */
	private MimeMessage createMessage(String to) throws Exception {
		MimeMessage message = emailSender.createMimeMessage();
		
		// 메일 - 받는이
		message.addRecipients(RecipientType.TO, to);
		
		// 메일 - 제목
		message.setSubject("Haggle-Credit에서 임시 비밀번호를 발급해드렸습니다.");
		
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
		
		//메일 - 보낼 내용
		message.setText(msgg, "utf-8", "html");
		
		// 메일 - 보낸이
		message.setFrom(new InternetAddress("khyun7621@naver.com","Haggle-Credit"));
		return message;
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
		MimeMessage message = createMessage(to);
		try {
			emailSender.send(message);
		} catch(MailException e) {
			e.printStackTrace();
			throw new IllegalArgumentException();
		}
	}
	
	

}
