package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.Alarm;

@Transactional
public interface AlarmRepository extends JpaRepository<Alarm, Long> {
	List<Alarm> findAllByaRecvUserNo(int aRecvUserNo);

	int deleteByaNo(int aNo);
}
