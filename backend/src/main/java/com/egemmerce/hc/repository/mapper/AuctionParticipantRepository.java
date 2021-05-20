package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.AuctionParticipant;

@Transactional
public interface AuctionParticipantRepository extends JpaRepository<AuctionParticipant, Long>{

	List<AuctionParticipant> findByapItemNo(int apItemNo);

	List<AuctionParticipant> findByapItemNoOrderByApDateDesc(int apItemNo);

	int countByApItemNo(int ipItemNo);


}
