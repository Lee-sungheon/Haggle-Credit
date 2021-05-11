package com.egemmerce.hc.repository.mapper;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.User;

@Transactional
public interface UserRepository extends JpaRepository<User, Long>{

	User findByuEmail(String uEmail);

	User findByuName(String uName);

	User findByuPhone(int uPhone);

	void deleteByuEmail(String uEmail);

	User findByuNo(int uNo);

}
