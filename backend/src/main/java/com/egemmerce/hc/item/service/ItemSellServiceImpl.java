package com.egemmerce.hc.item.service;


import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.egemmerce.hc.repository.dto.AuctionParticipant;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemDelivery;
import com.egemmerce.hc.repository.dto.ItemSell;
import com.egemmerce.hc.repository.dto.ItemSet;
import com.egemmerce.hc.repository.dto.SortProcess;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.repository.mapper.AuctionParticipantRepository;
import com.egemmerce.hc.repository.mapper.ItemDeliveryRepository;
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
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ItemSellMapper itemSellMapper;
	
	/* C :: 상품 등록 */
	@Override
	public ItemSell insertItemSell(ItemSell itemSell) {
		itemSell.generateStartDate();
		return itemSellRepository.save(itemSell);
	}
	
	/* R :: 상품 전체 조회 */
	@Override
	public 	Page<ItemSell> selectItemSellAll(Pageable pageable) {
		return itemSellRepository.findAll(pageable);
	}
	
	/* R :: 임시임... 아무튼 상품 전체조회 */
	@Override
	public List<ItemSet> selectItemNoSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("##"+sortProcess.toString());
		return itemSellMapper.selectItemNoSubRvsSort(sortProcess);
	}
	
	@Override
	public List<ItemSet> selectItemYesSubRvsSort(SortProcess sortProcess) throws Exception {
		System.out.println("###"+sortProcess.toString());
		return itemSellMapper.selectItemYesSubRvsSort(sortProcess);
	}
	@Override
	public List<ItemSet> selectItemNoSub(SortProcess sortProcess) throws Exception {
		System.out.println("##"+sortProcess.toString());
		return itemSellMapper.selectItemNoSub(sortProcess);
	}
	
	@Override
	public List<ItemSet> selectItemYesSub(SortProcess sortProcess) throws Exception {
		System.out.println("###"+sortProcess.toString());
		return itemSellMapper.selectItemYesSub(sortProcess);
	}
	
	@Override
	public List<ItemSet> selectItemAllHomeUp(SortProcess sortProcess) throws Exception {
		System.out.println("###"+sortProcess.toString());
		return itemSellMapper.selectItemAllHomeUp(sortProcess);
	}
	@Override
	public List<ItemSet> selectItemAllHomeDown(SortProcess sortProcess) throws Exception {
		System.out.println("###"+sortProcess.toString());
		return itemSellMapper.selectItemAllHomeDown(sortProcess);
	}
	@Override
	public List<ItemCtgrCnt> selectCountByCtgr(ItemCtgrSearch itemCtgrSearch) throws Exception {
		return itemSellMapper.selectCountByCtgr(itemCtgrSearch);
	}

	/* D :: 상품 삭제 */
	@Override
	public boolean deleteItemSell(int isItemNo) {
		itemSellRepository.delete(itemSellRepository.findByisItemNo(isItemNo));
		if(itemSellRepository.findByisItemNo(isItemNo)==null) {
			return true;
		}
		return false;
	}

	@Override
	public Page<ItemSell> selectItemSellByisItemName(String isItemName, Pageable pageable) {
		return itemSellRepository.findByisItemNameContaining(isItemName, pageable);
	}

	/*상품 업데이트*/
	@Override
	public ItemSell updateItemSell(ItemSell itemSell) {
		return itemSellRepository.save(itemSell);
	}

	/*아이템 번호로 itemsell 조회*/
	@Override
	public ItemSell selectItemSellbyisItemNo(int isItemNo) {
		return itemSellRepository.findByisItemNo(isItemNo);
	}


	@Override
	public void updateItembyCool(int isItemNo, int uNo, int uaNo) {
		//itemSell 수정
		ItemSell itemSell=itemSellRepository.findByisItemNo(isItemNo);
		itemSell.setIsDealPrice(itemSell.getIsCoolPrice());
		itemSell.setIsDealUserNo(uNo);
		itemSell.setIsDealAddress(uaNo);
		itemSell.setIsEndDate(new Date(20210101));
		itemSellRepository.save(itemSell);
		
		//User 수정
		User user=userRepository.findByuNo(uNo);
		userService.updateUserCreditbyAP(user, itemSell.getIsCoolPrice(), isItemNo);
		
		//UserCredit 수정
		AuctionParticipant beforeAP = auctionParticipantRepository.findByapItemNoOrderByApDateDesc(isItemNo).get(0);
		userService.updateUserCreditbyFail(beforeAP.getApUserNo(), beforeAP.getApBid(), isItemNo);
	}

	@Override
	public List<ItemSell> selectOverEndDate() {
		List<ItemSell> itemSelltemp=itemSellRepository.findByisDealUserNo(0);
		List<ItemSell> itemSell=new ArrayList<>();
		for (ItemSell is : itemSelltemp) {
			if(is.getIsEndDate().before(Date.valueOf(LocalDate.now()))) {
				itemSell.add(is);
			}
		}
		return itemSell;
	}

	@Override
	public void updateItembyAuction(ItemSell is) {
		AuctionParticipant beforeAP = auctionParticipantRepository.findByapItemNoOrderByApDateDesc(is.getIsItemNo()).get(0);
		if(beforeAP==null) {
			is.setIsDealPrice(0);
			is.setIsDealAddress(0);
			is.setIsUserNo(is.getIsUserNo());
			itemSellRepository.save(is);
		}else {
			is.setIsDealPrice(beforeAP.getApBid());
			is.setIsDealAddress(beforeAP.getApAddress());
			is.setIsUserNo(beforeAP.getApNo());
			itemSellRepository.save(is);
			ItemDelivery itemDelivery=ItemDelivery.builder().idSendUserNo(is.getIsUserNo()).idReceiveUserNo(is.getIsDealUserNo()).idItemNo(is.getIsItemNo()).build();
			itemDeliveryRepository.save(itemDelivery);
		}
	}

	@Override
	public ItemSell updateAuctionPrice(int isItemNo, int isAuctionPrice) {
		ItemSell itemSell=itemSellRepository.findByisItemNo(isItemNo);
		itemSell.setIsAuctionIngPrice(isAuctionPrice);
		return itemSellRepository.save(itemSell);
	}
}
