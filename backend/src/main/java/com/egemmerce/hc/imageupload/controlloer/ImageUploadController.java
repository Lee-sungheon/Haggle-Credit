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

	@PostMapping("/itemPhotoUpload")
	public String InsertItemPhoto(@RequestParam("File") MultipartFile file, @RequestParam("mrNo") int ipINo)
			throws Exception {
		String ipValue = path + "/" + "mr-" + ipINo + "-" + file.getOriginalFilename();

		File dest = new File(ipValue);
		file.transferTo(dest);

		ipValue = "https://i4d107.p.ssafy.io/images/" + "mr-" + ipINo + "-" + file.getOriginalFilename();

		ItemPhoto itemphoto = new ItemPhoto();
		itemphoto.setIpItemNo(ipINo);
		itemphoto.setIpValue(ipValue);

		return imageUploadService.InsertItemPhoto(itemphoto) != null ? "OK" : "FAIL";
	}

	@GetMapping("/getItemPhotoList")
	public List<ItemPhoto> getItemPhotoList() {
		return imageUploadService.selectItemPhotoList();
	}

	@PutMapping("/profileUpload")
	public ResponseEntity<?> UpdateProfile(@RequestParam("File") MultipartFile file,
			@RequestParam("UserEmail") String userEmail) throws Exception {
		String uImage = path + "/" + userEmail + "-" + file.getOriginalFilename();

		File dest = new File(uImage);
		file.transferTo(dest);

		uImage = "https://i4d107.p.ssafy.io/images/" + userEmail + "-" + file.getOriginalFilename();

		User user = new User();
		user.setuImage(uImage);
		user.setuEmail(userEmail);

		if (imageUploadService.UpdateProfile(user) != null)
			return new ResponseEntity<User>(user, HttpStatus.OK);

		return new ResponseEntity<User>(user, HttpStatus.NO_CONTENT);
	}

}
