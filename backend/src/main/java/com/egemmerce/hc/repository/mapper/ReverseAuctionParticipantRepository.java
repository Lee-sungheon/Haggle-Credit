package com.egemmerce.hc.repository.mapper;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;

@Transactional
public interface ReverseAuctionParticipantRepository extends JpaRepository<ReverseAuctionParticipant, Long>{

	List<ReverseAuctionParticipant> findByrapItemNo(int rapItemNo);

	List<ReverseAuctionParticipant> findByrapItemNoOrderByRapDateDesc(int ibItemNo);

	List<ReverseAuctionParticipant> findByrapItemNoOrderByRapDate(int rapItemNo);

	int countByrapItemNo(int ipItemNo);


}
