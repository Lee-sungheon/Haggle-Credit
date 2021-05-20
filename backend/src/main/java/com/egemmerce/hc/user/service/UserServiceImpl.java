package com.egemmerce.hc.user.service;

import java.util.Arrays;
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

import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.dto.AuctionParticipant;
import com.egemmerce.hc.repository.dto.EmailMessage;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.dto.UserAccount;
import com.egemmerce.hc.repository.dto.UserCredit;
import com.egemmerce.hc.repository.mapper.AlarmMapper;
import com.egemmerce.hc.repository.mapper.AlarmRepository;
import com.egemmerce.hc.repository.mapper.AuctionParticipantRepository;
import com.egemmerce.hc.repository.mapper.ItemRepository;
import com.egemmerce.hc.repository.mapper.UserCreditMapper;
import com.egemmerce.hc.repository.mapper.UserCreditRepository;
import com.egemmerce.hc.repository.mapper.UserMapper;
import com.egemmerce.hc.repository.mapper.UserRepository;

import lombok.RequiredArgsConstructor;

/**
 * 
 * @Date 2021. 4. 27.
 * @Title Haggle-Credit Backend
 * @Description : User Service 클래스
 * 	- 회원 탈퇴
 * 	- 회원 정보 조회/변경/id중복체크
 *  - id/pw 찾기
 *
 */
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, UserDetailsService {
	

	private final UserEmailService emailService;
	private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
	private final UserCreditRepository userCreditRepository;
	private final AuctionParticipantRepository auctionParticipantRepository;
	private final ItemRepository itemRepository;
	private final AlarmRepository alarmRepository;
	
	@Autowired
	private UserCreditMapper userCreditMapper;
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private AlarmMapper alarmMapper;
	
	/* 일반 로그인 */
	@Override
	public User login(User user) throws Exception {
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                new UserAccount(user),
                user.getuPassword(),
//                List.of(new SimpleGrantedAuthority("ROLE_USER")));
                Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
        SecurityContextHolder.getContext().setAuthentication(token);
        User check=userRepository.findByuEmail(user.getuEmail());
        if(passwordEncoder.matches(user.getuPassword(), check.getuPassword())) {
        	System.out.println(token);
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
				"<a href='https://www.hagglecredit.com/user/key_alter?token=" + user.getuAuthKey() + "&email=" + user.getuEmail() + "'>인증하기</a></p>" +
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
	public User updateUser(User user) throws Exception {
		return userRepository.save(user);
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
	public User updatePass(User user) {
		User check=userRepository.findByuNo(user.getuNo());
		check.setuPassword(passwordEncoder.encode(user.getuPassword()));
		return userRepository.save(check);
	}

    @Override
    public UserDetails loadUserByUsername(String uEmail) throws UsernameNotFoundException {
        User user = userRepository.findByuEmail(uEmail);
        
        if (user == null) {
            throw new UsernameNotFoundException(uEmail);
        }

        return new UserAccount(user);
    }

	@Override
	public User selectUserByuNo(int uNo) {
		User user = userRepository.findByuNo(uNo);
		return user;
	}
	
	/* 크레딧 충전 */
	@Override
	public User chargeCredit(int uNo, int credit) {
		User check = userRepository.findByuNo(uNo);
		check.setuCredit(check.getuCredit() + credit);
		UserCredit uCredit=UserCredit.builder().ucClass("plus").ucUserNo(check.getuNo()).ucCredit(check.getuCredit()).build();
		uCredit.generateucTime();
		userCreditRepository.save(uCredit);
		return userRepository.save(check);
	}
	/* 크레딧 출금 */
	@Override
	public User withdrawCredit(int uNo, int credit) {
		User check = userRepository.findByuNo(uNo);
		check.setuCredit(check.getuCredit() - credit);
		UserCredit uCredit=UserCredit.builder().ucClass("minus").ucUserNo(uNo).ucCredit(check.getuCredit()).build();
		uCredit.generateucTime();
		userCreditRepository.save(uCredit);
		return userRepository.save(check);
	}
	//입찰 실패로 인한 환불
	@Override
	public void updateUserCreditbyFail(int apUserNo, int apBid,int isItemNo) {
		User user=userRepository.findByuNo(apUserNo);
		user.setuCredit(user.getuCredit()+apBid);
		UserCredit uCredit=UserCredit.builder().ucClass("plus").ucUserNo(apUserNo).ucCredit(user.getuCredit()).ucApNo(isItemNo).build();
		uCredit.generateucTime();
		userCreditMapper.insert(uCredit);
		userRepository.save(user);
	}
	//입찰시 유저 크레딧 출금
	@Override
	public void updateUserCreditbyAP(User user, int isAuctionPrice,int isItemNo) {
		user.setuCredit(user.getuCredit()-isAuctionPrice);
		UserCredit uCredit=UserCredit.builder().ucClass("minus").ucUserNo(user.getuNo()).ucCredit(user.getuCredit()).ucApNo(isItemNo).build();
		uCredit.generateucTime();
		userCreditRepository.save(uCredit);
		userRepository.save(user);
	}

	@Override
	public User updateUserBank(int uNo, String uBankName, String uBankNo) {
		User user=userRepository.findByuNo(uNo);
		user.setuBankName(uBankName);
		user.setuBankNo(uBankNo);
		
		return userRepository.save(user);
	}

	@Override
	public void updateBeforeAndNew(int isUserNo, int isItemNo, int isAuctionPrice) {
		List<AuctionParticipant> beforelist=auctionParticipantRepository.findByapItemNoOrderByApDateDesc(isItemNo);
		User user=null;
		UserCredit uc=null;
		Item item=itemRepository.findByiNo(isItemNo);
		if(beforelist.size()!=0) {
			AuctionParticipant before=beforelist.get(0);
			user=userRepository.findByuNo(before.getApUserNo());
			user.setuCredit(user.getuCredit()+before.getApBid());
			uc=UserCredit.builder().ucClass("plus").ucUserNo(user.getuNo()).ucCredit(user.getuCredit()).ucApNo(isItemNo).build();
			uc.generateucTime();
			userCreditRepository.save(uc);
			userRepository.save(user);
			Alarm alarm = Alarm.builder()
					.aContent("등록하신 경매가보다 더 높은 경매가가 나왔습니다. 상품을 입찰하시길 원하시면 재입찰 해주세요.")
					.aType("sell")
					.aCause("경매유찰")
					.aItemNo(isItemNo)
					.aRecvUserNo(before.getApUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
		}
		
		user=userRepository.findByuNo(isUserNo);
		user.setuCredit(user.getuCredit()-isAuctionPrice);
		uc=UserCredit.builder().ucClass("minus").ucUserNo(isUserNo).ucCredit(user.getuCredit()).ucApNo(isItemNo).build();
		uc.generateucTime();
//		userCreditRepository.save(uc);
		userRepository.save(user);
		userCreditMapper.insert(uc);
//		userMapper.insertCredit(user);
	}

	@Override
	public void updateUserCreditbyRegistBuy(User user, int ibAuctionInitPrice, int ibItemNo) {
		user.setuCredit(user.getuCredit()-ibAuctionInitPrice);
		UserCredit uCredit=UserCredit.builder().ucClass("minus").ucUserNo(user.getuNo()).ucCredit(user.getuCredit()).ucApNo(ibItemNo).build();
		uCredit.generateucTime();
		userCreditRepository.save(uCredit);
		userRepository.save(user);
	}

	@Override
	public void updateUserCreditbyBuyCool(int ibUserNo, ItemBuy itemBuy) {
		User user=userRepository.findByuNo(ibUserNo);
		user.setuCredit(user.getuCredit()+itemBuy.getIbAuctionInitPrice()-itemBuy.getIbCoolPrice());
		UserCredit uCredit=UserCredit.builder().ucClass("plus").ucUserNo(user.getuNo()).ucCredit(user.getuCredit()).ucApNo(itemBuy.getIbItemNo()).build();
		uCredit.generateucTime();
		userCreditRepository.save(uCredit);
		userRepository.save(user);
	}

	@Override
	public int selectMyCredit(int uNo) {
		User user=userRepository.findByuNo(uNo);
		return user.getuCredit();
	}

}
