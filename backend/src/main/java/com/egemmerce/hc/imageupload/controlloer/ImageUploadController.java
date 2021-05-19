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
import org.springframework.web.bind.annotation.RequestBody;
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

	@PostMapping("/itemPhotoUpload")
//	public String InsertItemPhoto(@RequestParam("File") MultipartFile file, @RequestParam("mrNo") int ipINo)
	public String InsertItemPhoto(@RequestBody ItemPhoto itemPhoto) throws Exception {
//		String ipValue = path + "/" + "mr-" + ipINo + "-" + file.getOriginalFilename();
//
//		File dest = new File(ipValue);
//		file.transferTo(dest);
//
//		ipValue = "https://k4d107.p.ssafy.io/images/" + "mr-" + ipINo + "-" + file.getOriginalFilename();

		ItemPhoto ip = new ItemPhoto();
		ip.setIpItemNo(itemPhoto.getIpItemNo());
		ip.setIpValue(itemPhoto.getIpValue());

		return imageUploadService.InsertItemPhoto(ip) != null ? "OK" : "FAIL";
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
	public ResponseEntity<?> UpdateProfile(@RequestParam("File") MultipartFile file,
			@RequestParam("UserEmail") String userEmail) throws Exception {
		String uImage = path + "/" + userEmail + "-" + file.getOriginalFilename();
		System.out.println(file.getOriginalFilename());
		System.out.println(uImage);

		File dest = new File(uImage);
		file.transferTo(dest);

		uImage = "https://k4d107.p.ssafy.io/images/" + userEmail + "-" + file.getOriginalFilename();

		User user = new User();
		user.setuImage(uImage);
		user.setuEmail(userEmail);

		if (imageUploadService.UpdateProfile(user) != null)
			return new ResponseEntity<>(HttpStatus.OK);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
