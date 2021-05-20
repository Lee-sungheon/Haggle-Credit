package com.egemmerce.hc.item.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.dto.AuctionParticipant;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemDelivery;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSellSet;
import com.egemmerce.hc.repository.dto.SortProcess;
import com.egemmerce.hc.repository.mapper.AlarmMapper;
import com.egemmerce.hc.repository.mapper.AlarmRepository;
import com.egemmerce.hc.repository.mapper.AuctionParticipantRepository;
import com.egemmerce.hc.repository.mapper.ItemDeliveryRepository;
import com.egemmerce.hc.repository.mapper.ItemRepository;
import com.egemmerce.hc.repository.mapper.ItemSellMapper;
import com.egemmerce.hc.repository.mapper.ItemSellRepository;
import com.egemmerce.hc.repository.mapper.UserRepository;
import com.egemmerce.hc.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemSellServiceImpl implements ItemSellService {

	private final ItemSellRepository itemSellRepository;
	private final UserRepository userRepository;
	private final AuctionParticipantRepository auctionParticipantRepository;
	private final ItemDeliveryRepository itemDeliveryRepository;
	private final ItemRepository itemRepository;
	private final AlarmRepository alarmRepository;
	@Autowired
	private UserService userService;

	@Autowired
	private ItemSellMapper itemSellMapper;

	@Autowired
	private AlarmMapper alarmMapper;
	/* C :: 상품 등록 */
	@Override
	public ItemSell insertItemSell(ItemSell itemSell) {
		itemSell.generateStartDate();
		return itemSellRepository.save(itemSell);
	}

	/* R :: 상품 전체 조회 */
	@Override
	public Page<ItemSell> selectItemSellAll(Pageable pageable) {
		return itemSellRepository.findAll(pageable);
	}

	/* R :: 임시임... 아무튼 상품 전체조회 */
	@Override
	public List<ItemSellSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("##" + sortProcess.toString());
		return itemSellMapper.selectItemNoSubRvsSort(sortProcess);
	}

	@Override
	public List<ItemSellSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemSellMapper.selectItemYesSubRvsSort(sortProcess);
	}

	@Override
	public List<ItemSellSet> selectItemNoSub(SortProcess sortProcess) throws Exception {
		System.out.println("##" + sortProcess.toString());
		return itemSellMapper.selectItemNoSub(sortProcess);
	}

	@Override
	public List<ItemSellSet> selectItemYesSub(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemSellMapper.selectItemYesSub(sortProcess);
	}

	@Override
	public List<ItemSellSet> selectItemAllHomeUp(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemSellMapper.selectItemAllHomeUp(sortProcess);
	}

	@Override
	public List<ItemSellSet> selectItemAllHomeDown(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemSellMapper.selectItemAllHomeDown(sortProcess);
	}

	@Override
	public List<ItemCtgrCnt> selectCountByCtgr(ItemCtgrSearch itemCtgrSearch) throws Exception {
		return itemSellMapper.selectCountByCtgr(itemCtgrSearch);
	}

	@Override
	public List<ItemCtgrCnt> selectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception {
		if (itemSellMapper.selectCountByCtgrSub(itemCtgrSearch) == null)
			return null;
		return itemSellMapper.selectCountByCtgrSub(itemCtgrSearch);
	}

	@Override
	public List<ItemPhoto> selectItemImages(int ipItemNo) throws Exception {
		List<ItemPhoto> result = null;
		result = itemSellMapper.selectItemImages(ipItemNo);
		if (result != null)
			return result;
		return null;
	}

	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItemSell(int isItemNo) {
		itemSellRepository.delete(itemSellRepository.findByisItemNo(isItemNo));
		if (itemSellRepository.findByisItemNo(isItemNo) == null) {
			return true;
		}
		return false;
	}

	@Override
	public Page<ItemSell> selectItemSellByisItemName(String isItemName, Pageable pageable) {
		return itemSellRepository.findByisItemNameContaining(isItemName, pageable);
	}

	/* 상품 업데이트 */
	@Override
	public ItemSell updateItemSell(ItemSell itemSell) {
		return itemSellRepository.save(itemSell);
	}

	/* 아이템 번호로 itemsell 조회 */
	@Override
	public ItemSell selectItemSellbyisItemNo(int isItemNo) {
		return itemSellRepository.findByisItemNo(isItemNo);
	}

	@Override
	public void updateItembyCool(int isItemNo, int uNo, int uaNo) {
		// itemSell 수정
		ItemSell itemSell = itemSellRepository.findByisItemNo(isItemNo);
		itemSell.setIsDealPrice(itemSell.getIsCoolPrice());
		itemSell.setIsDealUserNo(uNo);
		itemSell.setIsDealAddress(uaNo);
		itemSell.setIsEndDate(new Date(20210101));
		itemSellRepository.save(itemSell);
		ItemDelivery itemDelivery = ItemDelivery.builder().idSendUserNo(itemSell.getIsUserNo()).idReceiveUserNo(uNo)
				.idType("sell").idPrice(itemSell.getIsDealPrice()).idItemNo(isItemNo).build();
		System.out.println(itemDeliveryRepository.save(itemDelivery));
	}

	@Override
	public List<ItemSell> selectOverEndDate() {
		List<ItemSell> itemSell = itemSellRepository.findByisDealUserNoAndIsEndDateLessThan(0,Date.valueOf(LocalDate.now()));
		return itemSell;
	}

	@Override
	public void updateItembyAuction(ItemSell is) {
		Item item=itemRepository.findByiNo(is.getIsItemNo());
		List<AuctionParticipant> beforeAP = auctionParticipantRepository.findByapItemNoOrderByApDateDesc(is.getIsItemNo());
		if (beforeAP.size() == 0) {
			Alarm alarm = Alarm.builder()
					.aContent("등록한 물품이 유찰되었습니다. 물품을 팔고자 한다면 다시 등록해주세요.")
					.aType("sell")
					.aCause("경매유찰")
					.aItemNo(is.getIsItemNo())
					.aRecvUserNo(beforeAP.get(0).getApUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
			is.setIsDealPrice(0);
			is.setIsDealAddress(0);
			is.setIsDealUserNo(-1);
			itemSellRepository.save(is);
		} else {
			Alarm alarm = Alarm.builder()
					.aContent("입찰하신 물품이 최종 낙찰 됐습니다. 마이 페이지에서 확인해주세요.")
					.aType("sell")
					.aCause("경매낙찰")
					.aItemNo(is.getIsItemNo())
					.aRecvUserNo(beforeAP.get(0).getApUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmRepository.save(alarm);
			alarm = Alarm.builder()
					.aContent("등록한 물품이 경매 낙찰 되었습니다. 마이페이지에서 확인해주세요.")
					.aType("sell")
					.aCause("경매낙찰")
					.aItemNo(is.getIsItemNo())
					.aRecvUserNo(is.getIsUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
			is.setIsDealPrice(beforeAP.get(0).getApBid());
			is.setIsDealAddress(beforeAP.get(0).getApAddress());
			is.setIsDealUserNo(beforeAP.get(0).getApUserNo());
			itemSellRepository.save(is);
			ItemDelivery itemDelivery = ItemDelivery.builder().idType("sell").idPrice(is.getIsDealPrice())
					.idSendUserNo(is.getIsUserNo()).idReceiveUserNo(is.getIsDealUserNo()).idItemNo(is.getIsItemNo())
					.build();
			itemDeliveryRepository.save(itemDelivery);
		}
	}

	@Override
	public ItemSell updateAuctionPrice(int isItemNo, int isAuctionPrice) {
		ItemSell itemSell = itemSellRepository.findByisItemNo(isItemNo);
		itemSell.setIsAuctionIngPrice(isAuctionPrice);
		return itemSellRepository.save(itemSell);
	}

	@Override
	public List<ItemSell> selectMyItemByuNo(int uNo) {
		return itemSellRepository.findByisUserNo(uNo);
	}

	/* 상품 상세 조회 */
	@Override
	public ItemSellSet selectItemOne(int isItemNo) throws Exception {
		return itemSellMapper.selectItemOne(isItemNo);
	}

	@Override
	public int selectItemCntAP(int isItemNo) throws Exception {
		return itemSellMapper.selectItemCntAP(isItemNo);
	}

	@Override
	public List<ItemSell> selectItemListIndexing(int isUserNo, int page) throws Exception {
		return itemSellMapper.selectItemListIndexing(isUserNo, page);
	}

	@Override
	public int selectCountItemSell(int isUserNo) throws Exception {
		return itemSellMapper.selectCountItemSell(isUserNo);
	}

	@Override
	public List<ItemSell> selectoneImageItemSellByisItemName(String isName) {
		return itemSellRepository.findByisItemNameContaining(isName);
	}

	@Override
	public int countIntemSell() {
		return (int) itemSellRepository.count();
	}

	@Override
	public List<ItemSell> selectOverEndDateAndDonation() {
		return itemSellRepository.findByisEndDateLessThanAndIsEventAgreeAndIsDealUserNo(Date.valueOf(LocalDate.now()),
				"true", -1);
	}

	@Override
	public void updateItembyDonation(ItemSell is) {
		Item item=itemRepository.findByiNo(is.getIsNo());
		Alarm alarm = Alarm.builder()
				.aContent("등록한 물품이 기부 경매에 등록되었습니다. 마이 페이지에서 확인해주세요.")
				.aType("sell")
				.aCause("기부경매등록")
				.aItemNo(is.getIsItemNo())
				.aRecvUserNo(is.getIsUserNo())
				.aTitle(item.getItemSell().getIsItemName())
				.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
		alarm.generateaTime();
		alarmMapper.insert(alarm);
		is.setIsEventAgree("done");
		itemSellRepository.save(is);
	}

	@Override
	public List<ItemSell> selectMyItemByuNoOnlySell(int uNo) {
		return itemSellRepository.findByisUserNoAndIsDealUserNo(uNo,0);
	}
}
