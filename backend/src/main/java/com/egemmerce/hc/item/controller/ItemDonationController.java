package com.egemmerce.hc.item.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.alarm.service.AlarmService;
import com.egemmerce.hc.auction.controller.DonationParticipantService;
import com.egemmerce.hc.item.service.ItemDeliveryService;
import com.egemmerce.hc.item.service.ItemDonationService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.dto.DonationParticipant;
import com.egemmerce.hc.repository.dto.Item;
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
	private ItemDonationService itemDonationService;
	@Autowired
	private DonationParticipantService donationParticipantService;
	@Autowired
	private UserService userService;
	@Autowired
	private UserAddressService userAddressService;
	@Autowired
	private ItemDeliveryService itemDeliveryService;
	@Autowired
	private AlarmService alarmService;
	@Autowired
	private ItemService itemService;

	/* R :: 상품 전체 조회 */
	@GetMapping("/selectall")
	public ResponseEntity<?> selectItemAll() throws Exception {
		List<ItemDonation> itemDonation = itemDonationService.selectItemAll();
		return new ResponseEntity<List<ItemDonation>>(itemDonation, HttpStatus.OK);
	}

	/* R :: 상품 전체 조회 */
	@GetMapping("/selectone")
	public ResponseEntity<?> selectItemoneByiNo(int iNo) throws Exception {
		ItemDonation itemDonation = itemDonationService.selectItemoneByiNo(iNo);
		return new ResponseEntity<ItemDonation>(itemDonation, HttpStatus.OK);
	}

	/* R :: 상품 전체 조회 */
	@GetMapping("/selectalldonation")
	public ResponseEntity<?> selectDonation() throws Exception {
		int participant = donationParticipantService.countDonation();
		int donation = itemDonationService.selectAllDonation();
		Map<String, Integer> result = new HashMap<String, Integer>();
		result.put("participant", participant);
		result.put("donation", donation);
		return new ResponseEntity<Map<String, Integer>>(result, HttpStatus.OK);
	}

	/* R :: 이벤트 경매 참여 */
	@GetMapping("/participant")
	public ResponseEntity<?> updateparticipant(int iNo, int uNo, int bid, int uaNo) throws Exception {

		ItemDonation itemDonation = itemDonationService.updateItemBid(iNo, bid);
		User user = userService.selectUserByuNo(uNo);
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
		DonationParticipant dp = DonationParticipant.builder().dpBid(bid).dpItemNo(iNo).dpUserNo(uNo)
				.dpAddress(userAddress.getUaNo()).build();
		dp.generatedpDate();
		donationParticipantService.insert(dp);
		if (itemDonation.getIdEndPrice() <= itemDonation.getIdIngPrice()) {
			Item item = itemService.selectItem(iNo);
			Random rand = new Random();
			List<DonationParticipant> donation = donationParticipantService.selectByiNo(iNo);
			int num = rand.nextInt(donation.size());
			DonationParticipant donationParticipant = donation.get(num);
			itemDonation.setIdEndDonation("true");
			itemDonation.setIdEndUserNo(donationParticipant.getDpUserNo());
			itemDonation.setIdEndUserAddress(donationParticipant.getDpAddress());
			itemDonationService.update(itemDonation);
			ItemDelivery itemDelivery = ItemDelivery.builder().idItemNo(iNo).idPrice(0)
					.idSendUserNo(itemDonation.getIdUserNo()).idReceiveUserNo(itemDonation.getIdEndUserNo()).build();
			itemDeliveryService.insert(itemDelivery);
			Alarm alarm = Alarm.builder().aContent("기부 물품에 당첨 되셨습니다. 마이 페이지에서 확인해주세요.").aType("sell").aCause("기부낙찰")
					.aItemNo(iNo).aRecvUserNo(itemDonation.getIdEndUserNo()).aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmService.createAlarm(alarm);
			alarm = Alarm.builder().aContent("등록한 기부 물품이 경매 낙찰 되었습니다. 마이페이지에서 확인해주세요.").aType("sell").aCause("기부낙찰")
					.aItemNo(iNo).aRecvUserNo(itemDonation.getIdUserNo()).aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmService.createAlarm(alarm);
			return new ResponseEntity<String>("기부 종료", HttpStatus.OK);
		}
		return new ResponseEntity<String>("성공", HttpStatus.OK);
	}

}
