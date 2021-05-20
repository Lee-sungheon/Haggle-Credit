package com.egemmerce.hc.item.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemDelivery;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;
import com.egemmerce.hc.repository.dto.SortProcess;
import com.egemmerce.hc.repository.mapper.AlarmMapper;
import com.egemmerce.hc.repository.mapper.AlarmRepository;
import com.egemmerce.hc.repository.mapper.ItemBuyMapper;
import com.egemmerce.hc.repository.mapper.ItemBuyRepository;
import com.egemmerce.hc.repository.mapper.ItemDeliveryRepository;
import com.egemmerce.hc.repository.mapper.ItemRepository;
import com.egemmerce.hc.repository.mapper.ReverseAuctionParticipantRepository;
import com.egemmerce.hc.repository.mapper.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ItemBuyServiceImpl implements ItemBuyService {

	private final ItemBuyRepository itemBuyRepository;
	private final ItemDeliveryRepository itemDeliveryRepository;
	private final UserRepository userRepository;
	private final ReverseAuctionParticipantRepository reverseAuctionParticipantRepository;
	private final ItemRepository itemRepository;
	private final AlarmRepository alarmRepository;
	@Autowired
	private ItemBuyMapper itemBuyMapper;
	@Autowired
	private AlarmMapper alarmMapper;
	/* C :: 상품 등록 */
	@Override
	public ItemBuy insertItemBuy(ItemBuy itemBuy) {
		itemBuy.generateibRegDate();
		return itemBuyRepository.save(itemBuy);
	}

	/* R :: 상품 전체 조회 */
	@Override
	public Page<ItemBuy> selectItemBuyAll(Pageable pageable) {
		return itemBuyRepository.findAll(pageable);
	}

	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItemBuy(int ibItemNo) {
		itemBuyRepository.delete(itemBuyRepository.findByibItemNo(ibItemNo));
		if (itemBuyRepository.findByibItemNo(ibItemNo) == null) {
			return true;
		}
		return false;
	}

	@Override
	public Page<ItemBuy> selectItemBuyByibName(String ibName, Pageable pageable) {
		return itemBuyRepository.findByibNameContaining(ibName, pageable);
	}

	/* 상품 업데이트 */
	@Override
	public ItemBuy updateItemBuy(ItemBuy itemBuy) {
		return itemBuyRepository.save(itemBuy);
	}

	/* R :: 상품 전체 조회 */
	@Override
	public ItemBuy selectItemBuybyibItemNo(int ibItemNo) {
		return itemBuyRepository.findByibItemNo(ibItemNo);
	}

	@Override
	public ItemBuy updateReverseAuctionPrice(int ibItemNo, int ibAuctionPrice) {
		ItemBuy itemBuy = itemBuyRepository.findByibItemNo(ibItemNo);
		itemBuy.setIbAuctionIngPrice(ibAuctionPrice);
		return itemBuyRepository.save(itemBuy);
	}

	@Override
	public List<ItemBuy> selectMyItemByuNo(int uNo) {
		return itemBuyRepository.findByibUserNo(uNo);
	}

	@Override
	public void updateItemByCool(int ibItemNo, int uNo) {
		ItemBuy itemBuy = itemBuyRepository.findByibItemNo(ibItemNo);
		itemBuy.setIbDealPrice(itemBuy.getIbCoolPrice());
		itemBuy.setIbDealUserNo(uNo);
		itemBuy.setIbEndDate(new Date(20210101));
		itemBuyRepository.save(itemBuy);
		ItemDelivery itemDelivery = ItemDelivery.builder().idType("buy").idPrice(itemBuy.getIbDealPrice())
				.idSendUserNo(uNo).idReceiveUserNo(itemBuy.getIbUserNo()).idItemNo(ibItemNo).build();
		itemDeliveryRepository.save(itemDelivery);
	}

	@Override
	public Integer countItemBuy() {
		return (int) itemBuyRepository.count();
	}

	/////////////////////////////// 아래는 mybatis 처리
	@Override
	public ItemBuySet BselectItemOne(int ibItemNo) throws Exception {
//		System.out.println(itemBuyMapper.BselectItemOne(ibItemNo));
		return itemBuyMapper.BselectItemOne(ibItemNo);
	}

	@Override
	public int BselectItemCntAP(int ibItemNo) throws Exception {
		return itemBuyMapper.BselectItemCntAP(ibItemNo);
	}

	@Override
	public List<ItemBuy> BselectItemListIndexing(int ibUserNo, int page) throws Exception {
		return itemBuyMapper.BselectItemListIndexing(ibUserNo, page);
	}

	///
	@Override
	public List<ItemBuySet> BselectItemNoSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("##" + sortProcess.toString());
		return itemBuyMapper.BselectItemNoSubRvsSort(sortProcess);
	}

	@Override
	public List<ItemBuySet> BselectItemYesSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemBuyMapper.BselectItemYesSubRvsSort(sortProcess);
	}

	@Override
	public List<ItemBuySet> BselectItemNoSub(SortProcess sortProcess) throws Exception {
		System.out.println("##" + sortProcess.toString());
		return itemBuyMapper.BselectItemNoSub(sortProcess);
	}

	@Override
	public List<ItemBuySet> BselectItemYesSub(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemBuyMapper.BselectItemYesSub(sortProcess);
	}

	@Override
	public List<ItemBuySet> BselectItemAllHomeUp(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemBuyMapper.BselectItemAllHomeUp(sortProcess);
	}

	@Override
	public List<ItemBuySet> BselectItemAllHomeDown(SortProcess sortProcess) throws Exception {
		System.out.println("###" + sortProcess.toString());
		return itemBuyMapper.BselectItemAllHomeDown(sortProcess);
	}

	@Override
	public List<ItemCtgrCnt> BselectCountByCtgrSub(ItemCtgrSearch itemCtgrSearch) throws Exception {
		if (itemBuyMapper.BselectCountByCtgrSub(itemCtgrSearch) == null)
			return null;
		return itemBuyMapper.BselectCountByCtgrSub(itemCtgrSearch);
	}

	@Override
	public int BselectCountItemBuy(int ibUserNo) throws Exception {
		return itemBuyMapper.BselectCountItemBuy(ibUserNo);
	}

	@Override
	public List<ItemPhoto> BselectItemImages(int ipItemNo) throws Exception {
		List<ItemPhoto> result = null;
		result = itemBuyMapper.BselectItemImages(ipItemNo);
		if (result != null)
			return result;
		return null;
	}

	@Override
	public List<ItemBuy> BselectMyItemByuNo(int uNo) {
		return itemBuyRepository.findByibUserNo(uNo);
	}

	@Override
	public List<ItemBuy> selectOverEndDate() {
		List<ItemBuy> itemBuy = itemBuyRepository.findByibDealUserNoAndIbEndDateLessThan(0,
				Date.valueOf(LocalDate.now()));
		return itemBuy;
	}

	@Override
	public void updateItembyAuction(ItemBuy ib) {
		List<ReverseAuctionParticipant> beforeRAP = reverseAuctionParticipantRepository.findByrapItemNoOrderByRapDateDesc(ib.getIbItemNo());
		Item item=itemRepository.findByiNo(ib.getIbItemNo());
		if (beforeRAP.size() == 0) {
			Alarm alarm = Alarm.builder()
					.aContent("등록한 물품이 유찰되었습니다. 물품을 사고자 한다면 다시 등록해주세요.")
					.aType("buy")
					.aCause("경매유찰")
					.aItemNo(ib.getIbItemNo())
					.aRecvUserNo(ib.getIbUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
			ib.setIbDealPrice(0);
			ib.setIbDealUserNo(-1);
			itemBuyRepository.save(ib);
		} else {
			ib.setIbDealPrice(beforeRAP.get(0).getRapBid());
			ib.setIbDealUserNo(beforeRAP.get(0).getRapUserNo());
			itemBuyRepository.save(ib);
			Alarm alarm = Alarm.builder()
					.aContent("등록한 물품이 경매 낙찰 되었습니다. 마이페이지에서 확인해주세요.")
					.aType("buy")
					.aCause("경매낙찰")
					.aItemNo(ib.getIbItemNo())
					.aRecvUserNo(ib.getIbUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
			alarm = Alarm.builder()
					.aContent("입찰하신 물품이 최종 낙찰 됐습니다. 마이 페이지에서 확인해주세요.")
					.aType("buy")
					.aCause("경매낙찰")
					.aItemNo(ib.getIbItemNo())
					.aRecvUserNo(beforeRAP.get(0).getRapUserNo())
					.aTitle(item.getItemSell().getIsItemName())
					.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
			alarm.generateaTime();
			alarmMapper.insert(alarm);
			ItemDelivery itemDelivery = ItemDelivery.builder().idType("buy").idPrice(ib.getIbDealPrice())
					.idSendUserNo(ib.getIbDealUserNo()).idReceiveUserNo(ib.getIbUserNo()).idItemNo(ib.getIbItemNo())
					.build();
			itemDeliveryRepository.save(itemDelivery);
			}
	}

	@Override
	public List<ItemBuy> selectMyItemByuNoOnlyBuy(int uNo) {
		return itemBuyRepository.findByibUserNoAndIbDealUserNo(uNo,0);
	}
	
}
