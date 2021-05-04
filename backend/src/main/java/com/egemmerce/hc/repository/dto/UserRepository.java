package com.egemmerce.hc.repository.dto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface UserRepository extends JpaRepository<User, Long>{

	User findByuEmail(String uEmail);

	User findByuName(String uName);

	User findByuPhone(int uPhone);

	void deleteByuEmail(String uEmail);

}
