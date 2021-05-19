package com.egemmerce.hc.alarm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.mapper.AlarmMapper;
import com.egemmerce.hc.repository.mapper.AlarmRepository;

import lombok.RequiredArgsConstructor;

/**
 * 
 * @Date : 2021. 5. 11.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 알람 관련 서비스 클래스
 * @Description : 알람 생성, 조회, 삭제 기능
 *
 */

@Service
@RequiredArgsConstructor
public class AlarmServiceImpl implements AlarmService {

	private final AlarmRepository alarmRepository;

	@Autowired
	private AlarmMapper AlarmMapper;
	
	/* C :: 알람 1줄 생성 */
	@Override
	public Alarm createAlarm(Alarm alarm) throws Exception {
		AlarmMapper.insert(alarm);
		return alarmRepository.findAll().get(0);
	}

	/* R :: 사용자의 알람 전체 조회 */
	@Override
	public List<Alarm> reviewAlarm(int uNo) throws Exception {
		return alarmRepository.findAllByaRecvUserNo(uNo);
	}

	/* D :: 사용자의 알람 삭제 */
	@Override
	public int deleteAlarm(int aNo) throws Exception {
		return alarmRepository.deleteByaNo(aNo);
	}
}
