package com.egemmerce.hc.item.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.egemmerce.hc.alarm.service.AlarmService;
import com.egemmerce.hc.auction.service.ReverseAuctionParticipantService;
import com.egemmerce.hc.imageupload.service.ImageUploadService;
import com.egemmerce.hc.item.service.ItemBuyService;
import com.egemmerce.hc.item.service.ItemService;
import com.egemmerce.hc.repository.dto.Alarm;
import com.egemmerce.hc.repository.dto.Item;
import com.egemmerce.hc.repository.dto.ItemBuy;
import com.egemmerce.hc.repository.dto.ItemBuySet;
import com.egemmerce.hc.repository.dto.ItemCtgrCnt;
import com.egemmerce.hc.repository.dto.ItemCtgrSearch;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.ItemPhotoSet;
import com.egemmerce.hc.repository.dto.ReverseAuctionParticipant;
import com.egemmerce.hc.repository.dto.SortProcess;
import com.egemmerce.hc.repository.dto.User;
import com.egemmerce.hc.user.service.UserService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/itemBuy")
public class ItemBuyController {

	@Autowired
	private ItemBuyService itemBuyService;
	@Autowired
	private ItemService itemService;
	@Autowired
	private UserService userService;
	@Autowired
	private ReverseAuctionParticipantService reverseAuctionParticipantService;
	@Autowired
	private ImageUploadService imageUploadService;
	@Autowired
	private AlarmService alarmService;

	/* C :: 상품 등록 */
	@ApiOperation(value = "ib_auction_price,ib_category_main,ib_cool_price,ib_deal_address,ib_name,ib_start_date,ib_user_no,ib_end_date")
	@PostMapping("/regist")
	public ResponseEntity<?> createItem(@RequestBody ItemBuy itemBuy) throws Exception {
		Item item = itemService.insert(Item.builder().iType("buy").build());
		System.out.println(item.getiNo());
		itemBuy.setIbItemNo(item.getiNo());
		ItemBuy check = itemBuyService.insertItemBuy(itemBuy);
		User user = userService.selectUserByuNo(check.getIbUserNo());
		userService.updateUserCreditbyRegistBuy(user, check.getIbAuctionInitPrice(), check.getIbItemNo());

		return new ResponseEntity<ItemBuy>(check, HttpStatus.OK);
	}

	/* R :: 상품 전체조회 */
	@GetMapping("/all")
	public ResponseEntity<Page<ItemBuy>> selectItemAll(Pageable pageable) throws Exception {
		return new ResponseEntity<Page<ItemBuy>>(itemBuyService.selectItemBuyAll(pageable), HttpStatus.OK);
	}

	/* R :: 상품명 조회 */
	@GetMapping("/name")
	public ResponseEntity<Page<ItemBuy>> selectItemByiName(String ibName, Pageable pageable) throws Exception {
		return new ResponseEntity<Page<ItemBuy>>(itemBuyService.selectItemBuyByibName(ibName, pageable), HttpStatus.OK);
	}

	/* U :: 상품 업데이트(쿨거래) */
	@ApiOperation(value = "거래완료 변경(쿨거래)")
	@PutMapping("/updateDealCompleted")
	public ResponseEntity<String> updateItem(int ibItemNo, int uNo) throws Exception {
		if (itemService.updateItemDealCompleted(ibItemNo) != null) {
			itemBuyService.updateItemByCool(ibItemNo, uNo);
			ItemBuy itemBuy = itemBuyService.selectItemBuybyibItemNo(ibItemNo);
			userService.updateUserCreditbyBuyCool(itemBuy.getIbUserNo(), itemBuy);
			return new ResponseEntity<String>("거래완료 처리 성공", HttpStatus.OK);

		}
		return new ResponseEntity<String>("거래완료 처리 실패", HttpStatus.NO_CONTENT);
	}

	/* U :: 상품 업데이트(경매 종료) */
	@ApiOperation(value = "거래완료 변경(경매 기간 종료)")
	@PutMapping("/endAuction")
	public ResponseEntity<String> endAuction() throws Exception {

		List<ItemBuy> endItemBuy = itemBuyService.selectOverEndDate();
		if (endItemBuy.size() == 0) {
			return new ResponseEntity<String>("종료된 경매가 없습니다.", HttpStatus.ACCEPTED);
		} else {
			for (ItemBuy ib : endItemBuy) {
				itemService.updateItemDealCompleted(ib.getIbItemNo());
				itemBuyService.updateItembyAuction(ib);

			}
			return new ResponseEntity<String>("종료된 경매 변경 완료", HttpStatus.ACCEPTED);
		}
	}

	/* U :: 상품 업데이트 */
	@PutMapping("/update")
	public ResponseEntity<String> updateItemSell(@RequestBody ItemBuy itemBuy) throws Exception {
		if (itemBuyService.updateItemBuy(itemBuy) != null)
			return new ResponseEntity<String>("Success", HttpStatus.OK);
		return new ResponseEntity<String>("Fail", HttpStatus.NO_CONTENT);
	}

	/* D :: 상품 삭제 */
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteItem(int ibItemNo) throws Exception {
		if (itemBuyService.deleteItemBuy(ibItemNo))
			return new ResponseEntity<String>("상품 삭제 성공", HttpStatus.OK);
		return new ResponseEntity<String>("상품 삭제 실패", HttpStatus.NO_CONTENT);
	}

	/* 경매 입찰 */
	@PutMapping("/auction")
	public ResponseEntity<String> updateReverseAuction(int ibUserNo, int ibItemNo, int ibAuctionPrice)
			throws Exception {
		ItemBuy itemBuy = itemBuyService.selectItemBuybyibItemNo(ibItemNo);
		Item item = itemService.selectItem(ibItemNo);
		if (itemBuy.getIbAuctionIngPrice() < ibAuctionPrice) {
			return new ResponseEntity<String>("기존 경매가보다 큽니다.", HttpStatus.OK);
		}
		ReverseAuctionParticipant rp = ReverseAuctionParticipant.builder().rapBid(ibAuctionPrice).rapItemNo(ibItemNo)
				.rapUserNo(ibUserNo).build();
		rp.generaterapDate();
		if (itemBuyService.updateReverseAuctionPrice(ibItemNo, ibAuctionPrice) != null) {
			List<ReverseAuctionParticipant> raplist = reverseAuctionParticipantService
					.findByrapItemNoOrderByDate(ibItemNo);
			if (raplist.size() != 0) {

				Alarm alarm = Alarm.builder().aContent("등록하신 경매가보다 더 낮은 경매가가 나왔습니다. \r\n" + "상품을 입찰하시길 원하시면 재입찰 해주세요.")
						.aType("buy").aCause("경매유찰").aItemNo(ibItemNo).aRecvUserNo(raplist.get(0).getRapUserNo())
						.aTitle(item.getItemBuy().getIbName())
						.aItemImageValue(item.getItemPhoto().get(0).getIpValue()).build();
				alarm.generateaTime();
				alarmService.createAlarm(alarm);
			}
			ReverseAuctionParticipant reverseAuctionParticipant = ReverseAuctionParticipant.builder()
					.rapItemNo(ibItemNo).rapBid(ibAuctionPrice).rapUserNo(ibUserNo).build();
			reverseAuctionParticipant.generaterapDate();
			reverseAuctionParticipantService.insert(reverseAuctionParticipant);

			return new ResponseEntity<String>("역경매가 업데이트 성공.", HttpStatus.OK);
		}
		return new ResponseEntity<String>("역경매가 업데이트 실패.", HttpStatus.OK);
	}

	/* R :: 내가 올린 상품 */
	@ApiOperation(value = "내가 올린 상품 Restful API")
	@GetMapping("/myitem")
	public ResponseEntity<?> selectMyItem(int uNo) throws Exception {
		List<ItemBuy> items = itemBuyService.selectMyItemByuNoOnlyBuy(uNo);
		List<ItemPhotoSet> itemsphoto = new ArrayList<>();
		for (ItemBuy ib : items) {

			itemsphoto
					.add(new ItemPhotoSet(ib, imageUploadService.selectItemPhotoList(ib.getIbItemNo()), items.size()));
		}
		if (items != null) {
			return new ResponseEntity<List<ItemPhotoSet>>(itemsphoto, HttpStatus.OK);
		}
		return new ResponseEntity<String>("내가 올린 상품이 없음", HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "상품 수 조회")
	@GetMapping("/count")
	public ResponseEntity<Integer> countItemBuy() {
		return new ResponseEntity<Integer>(itemBuyService.countItemBuy(), HttpStatus.OK);
	}

	/////////////////////////
	/* R :: 임시임.. 상품 전체 조회 */
	@ApiOperation(value = "지현 : 상품전체조회")
	@GetMapping("views")
	public ResponseEntity<List<ItemBuySet>> selectItemCtgr(@RequestParam(defaultValue = "1") int pageNo,
			String ctgrMain, String ctgrSub, @RequestParam(defaultValue = "ib_item_no") String sortName,
			@RequestParam(defaultValue = "down") String UD) throws Exception {
		List<ItemBuySet> ItemBuySet = null;
		SortProcess sp = new SortProcess((int) (pageNo - 1) * 100, ctgrMain, ctgrSub, sortName);

		if (UD.equals("up")) { // 오름차순
			if (sp.getCtgrSub() == null) {
				sp.setCtgrSub("");
				SortProcess sortProcess = new SortProcess(sp.getPageNo(), sp.getCtgrMain(), sp.getCtgrSub(),
						sp.getSortName());
				ItemBuySet = itemBuyService.BselectItemNoSub(sortProcess);
				System.out.println("하위카데고리선택하지않음");
			} else {
				SortProcess sortProcess = new SortProcess(sp.getPageNo(), sp.getCtgrMain(), sp.getCtgrSub(),
						sp.getSortName());
				ItemBuySet = itemBuyService.BselectItemYesSub(sortProcess);
				System.out.println("하위까지 카테고리선택함");
			}
		} else { // 내림차순
			if (sp.getCtgrSub() == null) {
				sp.setCtgrSub("");
				SortProcess sortProcess = new SortProcess(sp.getPageNo(), sp.getCtgrMain(), sp.getCtgrSub(),
						sp.getSortName());
				ItemBuySet = itemBuyService.BselectItemNoSubRvsSort(sortProcess);
				System.out.println("하위카데고리선택하지않음");
			} else {
				SortProcess sortProcess = new SortProcess(sp.getPageNo(), sp.getCtgrMain(), sp.getCtgrSub(),
						sp.getSortName());
				ItemBuySet = itemBuyService.BselectItemYesSubRvsSort(sortProcess);
				System.out.println("하위까지 카테고리선택함");
			}
		}

		return new ResponseEntity<List<ItemBuySet>>(ItemBuySet, HttpStatus.OK);
	}

	@ApiOperation(value = "지현 : viewHome 상품전체조회")
	@GetMapping("viewHome")
	public ResponseEntity<List<ItemBuySet>> selectItemAllHome(@RequestParam(defaultValue = "1") int pageNo,
			@RequestParam(defaultValue = "ib_item_no") String sortName, @RequestParam(defaultValue = "down") String UD)
			throws Exception {
		List<ItemBuySet> ItemBuySet = null;
		SortProcess sp = new SortProcess((pageNo - 1) * 100, "", "", sortName);
		if (UD.equals("up")) {
			ItemBuySet = itemBuyService.BselectItemAllHomeUp(sp);	
			for(int i = 0; i < ItemBuySet.size(); i++) {
				ItemBuySet.get(i).setJoinerCnt(itemBuyService.BselectItemCntAP(ItemBuySet.get(i).getIbItemNo()));
			}
		} else {
			ItemBuySet = itemBuyService.BselectItemAllHomeDown(sp);
			for(int i = 0; i < ItemBuySet.size(); i++) {
				ItemBuySet.get(i).setJoinerCnt(itemBuyService.BselectItemCntAP(ItemBuySet.get(i).getIbItemNo()));
			}
		}
		return new ResponseEntity<List<ItemBuySet>>(ItemBuySet, HttpStatus.OK);
	}

	@ApiOperation(value = "지현 : 카테고리별개수")
	@GetMapping("categoryCount")
	public ResponseEntity<Integer> selectCategoryCount(String ctgrMain, String ctgrSub) throws Exception {
		List<ItemCtgrCnt> result = null;
		if (ctgrSub == null) { // 이건 무조건 상위임..
			ctgrSub = "-";
			result = itemBuyService.BselectCountByCtgrSub(new ItemCtgrSearch(ctgrMain, ctgrSub));
			if (result.size() == 0) {
				System.out.println("상위만 입력되었지만, 결과반환되는게 없음..(이름안맞거나, 존재하는게 없을때");
				return new ResponseEntity<Integer>(0, HttpStatus.OK);
			}
			if (result.get(0).getCntMain() == 0) {
				System.out.println("상위만 입력되었지만, 상위카테고리의 아이템 개수 0일때?");
				return new ResponseEntity<Integer>(0, HttpStatus.OK);
			}
			return new ResponseEntity<Integer>(result.get(0).getCntMain(), HttpStatus.OK);
		} else {
			result = itemBuyService.BselectCountByCtgrSub(new ItemCtgrSearch(ctgrMain, ctgrSub));
			if (result.size() == 0) {
				System.out.println("반환이 되는게 없을 때 null!!");
				return new ResponseEntity<Integer>(0, HttpStatus.OK);
			}
//			System.out.println("출력하려는 하위 카테고리=" + result.get(0).getIsCategorySub() + ", 출력할 개수="+result.get(0).getCntSub());
			if (result.get(0).getCntSub() == 0) {
				System.out.println("하위카테고리인데, 해당 아이템 없을 때");
				return new ResponseEntity<Integer>(0, HttpStatus.OK);
			}
			return new ResponseEntity<Integer>(result.get(0).getCntSub(), HttpStatus.OK);
		}
	}

	/* R :: 상세 조회(이미지 따로 부르기) */
	@ApiOperation(value = "지현 : 이미지 상세조회")
	@GetMapping("detail/images")
	public ResponseEntity<List<ItemPhoto>> selectItemImages(int ipItemNo) throws Exception {
		return new ResponseEntity<List<ItemPhoto>>(itemBuyService.BselectItemImages(ipItemNo), HttpStatus.OK);
	}

	@ApiOperation(value = "지현 : 더보기 활용한 인덱싱 처리(내구매상품)")
	@GetMapping("/myItemIndexing")
	public ResponseEntity<?> selectItemListIndexing(int ibUserNo, @RequestParam(defaultValue = "1") int page)
			throws Exception {
		List<ItemBuy> items = itemBuyService.BselectItemListIndexing(ibUserNo, (page - 1) * 100);
		List<ItemPhotoSet> itemsphoto = new ArrayList<>();
		int itemValue = itemBuyService.BselectCountItemBuy(ibUserNo);

		for (ItemBuy ib : items) {
			itemsphoto.add(new ItemPhotoSet(ib, imageUploadService.selectItemPhotoList(ib.getIbItemNo()), itemValue));
		}
		if (items != null) {
			return new ResponseEntity<List<ItemPhotoSet>>(itemsphoto, HttpStatus.OK);
		}
		return new ResponseEntity<String>("상품 없음", HttpStatus.NO_CONTENT);
	}

	@ApiOperation(value = "지현 : 구매 아이템 상세 조회 정보")
	@GetMapping("/detail/inform")
	public ResponseEntity<ItemBuySet> selectItemOne(int ibItemNo) throws Exception {
		ItemBuySet result = itemBuyService.BselectItemOne(ibItemNo);
		System.out.println(result.toString());
		result.setJoinerCnt(itemBuyService.BselectItemCntAP(ibItemNo));
		return new ResponseEntity<ItemBuySet>(result, HttpStatus.OK);
	}
}
