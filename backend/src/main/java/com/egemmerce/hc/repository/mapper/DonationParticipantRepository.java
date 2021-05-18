package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.DonationParticipant;

@Transactional
public interface DonationParticipantRepository extends JpaRepository<DonationParticipant, Long>{

	List<DonationParticipant> findAllBydpItemNo(int iNo);


}
