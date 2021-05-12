package com.egemmerce.hc.alarm.service;

import java.util.List;

import com.egemmerce.hc.repository.dto.Alarm;

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

public interface AlarmService {

	/* C :: 알람 생성 */
	Alarm createAlarm(Alarm alarm) throws Exception;

	/* R :: 사용자의 알람 전체 조회 */
	List<Alarm> reviewAlarm(int uNo) throws Exception;

	/* D :: 사용자의 알람 삭제 */
	int deleteAlarm(int aNo) throws Exception;

}