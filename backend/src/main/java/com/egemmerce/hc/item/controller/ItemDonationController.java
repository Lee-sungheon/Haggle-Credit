package com.egemmerce.hc.item.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.auction.controller.DonationParticipantService;
import com.egemmerce.hc.item.service.ItemDeliveryService;
import com.egemmerce.hc.item.service.ItemDonationService;
import com.egemmerce.hc.repository.dto.DonationParticipant;
import com.egemmerce.hc.repository.dto.ItemDelivery;
import com.egemmerce.hc.repository.dto.ItemDonation;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.dto.UserAddress;
import com.egemmerce.hc.user.address.service.UserAddressService;
import com.egemmerce.hc.user.service.UserService;

@RestController
@RequestMapping("/itemdonation")
public class ItemDonationController {

	@Autowired
	ItemDonationService itemDonationService;
	@Autowired
	DonationParticipantService donationParticipantService;
	@Autowired
	UserService userService;
	@Autowired
	UserAddressService userAddressService;
	@Autowired
	ItemDeliveryService itemDeliveryService;
	/* R :: 상품 전체 조회 */
	@GetMapping("/selectall")
	public ResponseEntity<?> selectItemAll() throws Exception {
		List<ItemDonation> itemDonation=itemDonationService.selectItemAll();
		return new ResponseEntity<List<ItemDonation>>(itemDonation, HttpStatus.OK);
	}
	/* R :: 상품 전체 조회 */
	@GetMapping("/selectone")
	public ResponseEntity<?> selectItemoneByiNo(int iNo) throws Exception {
		ItemDonation itemDonation=itemDonationService.selectItemoneByiNo(iNo);
		return new ResponseEntity<ItemDonation>(itemDonation, HttpStatus.OK);
	}
	/* R :: 이벤트 경매 참여 */
	@GetMapping("/participant")
	public ResponseEntity<?> updateparticipant(int iNo,int uNo,int bid,int uaNo) throws Exception {
		ItemDonation itemDonation=itemDonationService.updateItemBid(iNo,bid);
		User user=userService.selectUserByuNo(uNo);
		userService.updateUserCreditbyAP(user, bid, iNo);
		// 유저 배송지 가져오기
		UserAddress userAddress = null;
		if (uaNo > 0) {
			userAddress = userAddressService.selectAddressByuaNo(uaNo);
		} else {
			userAddress = userAddressService.selectDefaultAddress(uNo);
			if (userAddress == null) {
				return new ResponseEntity<String>("배송지가 없습니다.", HttpStatus.OK);
			}
		}
		DonationParticipant dp=DonationParticipant.builder().dpBid(bid).dpItemNo(iNo).dpUserNo(uNo).dpAddress(userAddress.getUaNo()).build();
		dp.generatedpDate();
		donationParticipantService.insert(dp);
		if(itemDonation.getIdEndPrice()<=itemDonation.getIdIngPrice()) {
			Random rand=new Random();
			List<DonationParticipant> donation=donationParticipantService.selectByiNo(iNo);
			int num=rand.nextInt(donation.size());
			DonationParticipant donationParticipant=donation.get(num);
			itemDonation.setIdEndDonation("true");
			itemDonation.setIdEndUserNo(donationParticipant.getDpUserNo());
			itemDonation.setIdEndUserAddress(donationParticipant.getDpAddress());
			itemDonationService.update(itemDonation);
			ItemDelivery itemDelivery=ItemDelivery.builder().idItemNo(iNo).idPrice(itemDonation.getIdIngPrice()).idSendUserNo(itemDonation.getIdUserNo()).idReceiveUserNo(itemDonation.getIdEndUserNo()).build();
			itemDeliveryService.insert(itemDelivery);
			
		}
		return new ResponseEntity<ItemDonation>(itemDonation, HttpStatus.OK);
	}
	
}
