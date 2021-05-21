package com.egemmerce.hc.imageupload.controlloer;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.egemmerce.hc.imageupload.service.ImageUploadService;
import com.egemmerce.hc.repository.dto.ItemPhoto;
import com.egemmerce.hc.repository.dto.User;

/**
 * 
 * @Date : 2021. 5. 7.
 * @Team : Egemmerce
 * @author : 김동빈
 * @deploy : 김동빈
 * @Project : Haggle Credit :: backend
 * @Function : 이미지 업로드 관련 컨트롤러 클래스
 * @Description : 프로필 사진, 상품, 리뷰 사진 업로드
 *
 */

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/image")
public class ImageUploadController {

	@Value("${upload-images-path}")
	String path;

	@Autowired
	private ImageUploadService imageUploadService;

//	/* base64로 인코딩해서 저장하는 방식 */
//	@PostMapping("/itemPhotoUpload")
//	public String InsertItemPhoto(@RequestBody ItemPhoto itemPhoto) throws Exception {
//		ItemPhoto ip = new ItemPhoto();
//		ip.setIpItemNo(itemPhoto.getIpItemNo());
//		ip.setIpValue(itemPhoto.getIpValue());
//
//		return imageUploadService.InsertItemPhoto(ip) != null ? "OK" : "FAIL";
//	}

	/* 파일로 저장하는 방식 */
	@PostMapping("/itemPhotoUpload")
	public ResponseEntity<String> InsertItemPhoto(@RequestParam("File") MultipartFile file, @RequestParam int iNo,
			@RequestParam String check) throws Exception {
		if (check.equals("true")) {
			String ipValue = path + "/" + iNo + "-" + file.getOriginalFilename();
			File dest = new File(ipValue);
			file.transferTo(dest);

			/* 로컬에서 테스트시 아래 주석으로 코드 수정 바랍니다. */
//			ipValue = "C:/" + iNo + "-" + file.getOriginalFilename();
			ipValue = "https://k4d107.p.ssafy.io/upload-images/" + iNo + "-" + file.getOriginalFilename();

			ItemPhoto ip = new ItemPhoto();
			ip.setIpItemNo(iNo);
			ip.setIpValue(ipValue);

			if (imageUploadService.InsertItemPhoto(ip) != null)
				return new ResponseEntity<>(HttpStatus.OK);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} else {
			ItemPhoto ip = new ItemPhoto();
			ip.setIpItemNo(iNo);
			ip.setIpValue("../images/no_image.gif");

			if (imageUploadService.InsertItemPhoto(ip) != null)
				return new ResponseEntity<>(HttpStatus.OK);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	@GetMapping("/getItemPhotoList")
	public ResponseEntity<List<ItemPhoto>> getItemPhotoList(@RequestParam int ipItemNo) throws Exception {
		return new ResponseEntity<List<ItemPhoto>>(imageUploadService.selectItemPhotoList(ipItemNo), HttpStatus.OK);
	}

	@GetMapping("/getUserProfile")
	public ResponseEntity<String> getUserProfile(@RequestParam int uNo) throws Exception {
		String basicImg = "https://i.pinimg.com/474x/83/fc/4c/83fc4c6dca8298dc8e03ba63d35a9cae.jpg";
		if (imageUploadService.selectUserImage(uNo) != null) {
			return new ResponseEntity<String>(imageUploadService.selectUserImage(uNo), HttpStatus.OK);
		}
		return new ResponseEntity<String>(basicImg, HttpStatus.OK);
	}

	@PutMapping("/profileUpload")
	public ResponseEntity<User> UpdateProfile(@RequestParam("File") MultipartFile file,
			@RequestParam("UserEmail") String userEmail) throws Exception {
		String uImage = path + "/" + userEmail + "-" + file.getOriginalFilename();
		File dest = new File(uImage);
		file.transferTo(dest);

		/* 로컬에서 테스트시 아래 주석으로 코드 수정 바랍니다. */
//		uImage = "C:/" + userEmail + "-" + file.getOriginalFilename();
		uImage = "https://k4d107.p.ssafy.io/upload-images/" + userEmail + "-" + file.getOriginalFilename();

		User user = new User();
		user.setuImage(uImage);
		user.setuEmail(userEmail);

		User check = imageUploadService.UpdateProfile(user);
		if (check != null)
			return new ResponseEntity<User>(check, HttpStatus.OK);

		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	@PostMapping("/uploadSSG")
	public ResponseEntity<ItemPhoto> updateSSG() throws Exception {
		for (int i = 4; i <= 6002; i++) {
			if (i == 5 || i == 7)
				continue;
			ItemPhoto ip = new ItemPhoto();
			ip.setIpItemNo(i);
			ip.setIpValue("https://k4d107.p.ssafy.io/upload-images/" + i + "item.jpg");
			imageUploadService.uploadSSG(ip);
		}
		return new ResponseEntity<ItemPhoto>(HttpStatus.OK);
	}
}
