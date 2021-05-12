package com.egemmerce.hc.alarm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.alarm.service.AlarmService;
import com.egemmerce.hc.repository.dto.Alarm;

/**
 * 
 * @Date : 2021. 5. 11.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 알람 관련 컨트롤러 클래스
 * @Description : 알람 생성, 조회, 삭제 기능
 *
 */

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/alarm")
public class AlarmController {

	@Autowired
	private AlarmService alarmService;

	/* C :: 알람 1줄 생성 */
	@PostMapping("/create")
	public ResponseEntity<String> createAlarm(@RequestBody Alarm alarm) throws Exception {
		System.out.println(alarm.toString());
		if (alarmService.createAlarm(alarm) != null) {
			return new ResponseEntity<String>("알람 생성 성공", HttpStatus.OK);
		}
		return new ResponseEntity<String>("알람 생성 실패", HttpStatus.NO_CONTENT);
	}

	/* R :: 사용자의 알람 전체 조회 */
	@GetMapping("/read")
	public ResponseEntity<List<Alarm>> reviewAlarm(@RequestParam int uNo) throws Exception {
		return new ResponseEntity<List<Alarm>>(alarmService.reviewAlarm(uNo), HttpStatus.OK);
	}

	/* D :: 사용자의 알람 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteAlarm(int aNo) throws Exception {
		if (alarmService.deleteAlarm(aNo) > 0) {
			return new ResponseEntity<String>("알람 삭제 성공", HttpStatus.OK);
		}
		return new ResponseEntity<String>("알람 삭제 실패", HttpStatus.NO_CONTENT);
	}
}
