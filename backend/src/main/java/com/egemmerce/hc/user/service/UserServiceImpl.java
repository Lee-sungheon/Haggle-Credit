package com.egemmerce.hc.user.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.EmailMessage;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.dto.UserAccount;
import com.egemmerce.hc.repository.mapper.UserMapper;
import com.egemmerce.hc.repository.mapper.UserRepository;

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
public class UserServiceImpl implements UserService, UserDetailsService {
	
	/* User Mapper 객체 불러오기 */
	@Autowired
	private UserMapper userMapper;
	
	private final UserEmailService emailService;
	private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
	
	
	/* 일반 로그인 */
	@Override
	public User login(User user) throws Exception {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                new UserAccount(user),
                user.getuPassword(),
                List.of(new SimpleGrantedAuthority("ROLE_USER")));
        SecurityContextHolder.getContext().setAuthentication(token);
        User check=userRepository.findByuEmail(user.getuEmail());
        if(passwordEncoder.matches(user.getuPassword(), check.getuPassword())) {
        	return check;
        }
		return null;
		
	}

	/* 일반 회원 가입 */
	@Override
	public User insertUser(User user) throws Exception {
		
		user.setuPassword(passwordEncoder.encode(user.getuPassword()));
		user.generateEuAuthKey();
		// 3. 남은 유저 정보들 삽입 처리
		return userRepository.save(user);
	}
	
	/* 가입시, 메일로 인증링크 보내기 */
	@Override
	@Transactional
	public void mailSendWithUserKey(User user) throws Exception {
		String mailContent =
				"<h3>안녕하세요. Haggle-Credit 개발팀입니다.</h3><br></br>" +
				"<h3>가입해주셔서 감사합니다. 마지막 절차인 본인 인증만 해주시면 완료 됩니다.</h3><br></br>" +
				"<h2>아래의 인증하기 버튼을 눌러 인증완료 및 로그인 하시길 바랍니다</h2><br></br>" +
				"<a href='http://localhost:8000/haggle-credit/user/key_alter?token=" + user.getuAuthKey() + "&email=" + user.getuEmail() + "'>인증하기</a></p>" +
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
		User user=userRepository.findByuEmail(uEmail);
		if(user.getuAuthKey().equals(uAuthKey)) {
			user.setuJoinConfirm("true");
			userRepository.save(user);
			return true;			
		}else {
			return false;
		}
	}
	
	/* 카카오로 회원 가입 */
	@Override
	public User insertKakaoUser(User user) throws Exception {
		user.generateEuAuthKey();
		return userRepository.save(user);
	}
	
	/* 회원 탈퇴 */
	@Override
	public User deleteUser(String uEmail) throws Exception {
		userRepository.deleteByuEmail(uEmail);
		
		return userRepository.findByuEmail(uEmail);
	}
	
	/* 아이디 중복 체크 */
	@Override
	public User checkUEmail(String uEmail) throws Exception {
		return userRepository.findByuEmail(uEmail);
	}
	
	/* 회원 정보 조회(로그인) */ //이거 필요없지않나? 컨트롤러에서 애당초 토큰 분석해서 쓰는거같음..
	@Override
	public User selectUserLogin(User user) throws Exception {
		return userRepository.findByuEmail(user.getuEmail());
	}
	
	/* 회원 정보 수정*/
	@Override
	public boolean updateUser(User user) throws Exception {
		return userRepository.save(user)!=null;
	}
	
	/* 아이디 찾기 */
	@Override
	public User selectFindUEmail(String uName, int uPhone) throws Exception {
		User user=userRepository.findByuName(uName);
		if(user==null) {
			user=userRepository.findByuPhone(uPhone);
		}
		return user;
	}
	
	@Override
	public User selectUEmailByNameAndPhone(String uName, String uPhone) throws Exception {
		return userRepository.findByuName(uName);
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
	public User findUPassword(User user) throws Exception {
		User check=userRepository.findByuEmail(user.getuEmail());
		createKey();
		check.setuPassword(ePw);
		System.out.println(ePw);
		return userRepository.save(check);
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

	@Override
	public User selectUserByEmail(String uEmail) {
		User user=userRepository.findByuEmail(uEmail);
		return user;

	}

	@Override
	public boolean updatePass(User user) {
		User check=userRepository.findByuEmail(user.getuEmail());
		check.setuPassword(passwordEncoder.encode(user.getuPassword()));
		return userRepository.save(check) != null;
	}

    @Override
    public UserDetails loadUserByUsername(String uEmail) throws UsernameNotFoundException {
        User user = userRepository.findByuEmail(uEmail);
        
        if (user == null) {
            throw new UsernameNotFoundException(uEmail);
        }

        return new UserAccount(user);
    }
	
	

}
