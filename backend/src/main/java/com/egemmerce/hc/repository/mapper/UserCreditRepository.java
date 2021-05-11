package com.egemmerce.hc.repository.mapper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.UserCredit;

@Transactional
public interface UserCreditRepository extends JpaRepository<UserCredit, Long>{



}
