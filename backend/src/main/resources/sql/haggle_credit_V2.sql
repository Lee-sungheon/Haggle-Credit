-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: k4d107.p.ssafy.io    Database: haggle_credit
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alarm`
--

DROP TABLE IF EXISTS `alarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alarm` (
  `a_no` int NOT NULL AUTO_INCREMENT COMMENT '알람 고유 번호',
  `a_send_u_no` int DEFAULT NULL COMMENT '알람 보낸 유저',
  `a_recv_u_no` int DEFAULT NULL COMMENT '알람 받는 유저',
  `a_title` varchar(300) NOT NULL COMMENT '알람 제목',
  `a_content` varchar(3000) NOT NULL COMMENT '알람 내용',
  `a_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '알람 발송 시간',
  `a_link` varchar(3000) DEFAULT NULL COMMENT '알람 관련 링크',
  PRIMARY KEY (`a_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alarm`
--

LOCK TABLES `alarm` WRITE;
/*!40000 ALTER TABLE `alarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `alarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction_participant`
--

DROP TABLE IF EXISTS `auction_participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction_participant` (
  `ap_no` int NOT NULL AUTO_INCREMENT COMMENT '경매 참여 고유 번호',
  `ap_a_no` int NOT NULL COMMENT '상품 고유 번호',
  `ap_u_no` int NOT NULL COMMENT '경매 참여 입찰자 고유 번호',
  `ap_bid` int NOT NULL COMMENT '동일 입찰 가격은 존재하지않음',
  `ap_date` datetime NOT NULL COMMENT '경매 입찰 시각',
  PRIMARY KEY (`ap_no`),
  UNIQUE KEY `UQ_Auction_Participant_1` (`ap_bid`),
  KEY `FK_Auction_Participant_ap_a_no_Item_i_no` (`ap_a_no`),
  KEY `FK_Auction_Participant_ap_u_no_User_u_no` (`ap_u_no`),
  CONSTRAINT `FK_Auction_Participant_ap_a_no_Item_i_no` FOREIGN KEY (`ap_a_no`) REFERENCES `item` (`i_no`),
  CONSTRAINT `FK_Auction_Participant_ap_u_no_User_u_no` FOREIGN KEY (`ap_u_no`) REFERENCES `user` (`u_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='경매면 내림차순의 1순위, 역경매면 오름차순의 1순위가 현재 입찰자및 입찰가로 선정되어야함 (나머진 일정시간뒤 환불해줌)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction_participant`
--

LOCK TABLES `auction_participant` WRITE;
/*!40000 ALTER TABLE `auction_participant` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction_participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `b_i_no` int NOT NULL COMMENT '상품 고유 번호',
  `b_u_no` int NOT NULL COMMENT '상품 유저 고유 번호',
  PRIMARY KEY (`b_i_no`),
  KEY `FK_Bookmark_b_u_no_User_u_no` (`b_u_no`),
  CONSTRAINT `FK_Bookmark_b_i_no_Item_i_no` FOREIGN KEY (`b_i_no`) REFERENCES `item` (`i_no`),
  CONSTRAINT `FK_Bookmark_b_u_no_User_u_no` FOREIGN KEY (`b_u_no`) REFERENCES `user` (`u_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='상품 찜목록';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `i_no` int NOT NULL AUTO_INCREMENT COMMENT '상품 고유 번호',
  `i_reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '상품 거래글 게시 즉시 자동 작성',
  `i_u_no` int NOT NULL COMMENT '판매/구매 글 당사자',
  `i_completed` varchar(30) NOT NULL DEFAULT 'false' COMMENT '판매/구매 거래 완료 여부',
  `i_type` varchar(45) NOT NULL COMMENT '상품 타입(buy, sell)',
  `i_category_main` varchar(300) NOT NULL COMMENT '상품 메인 카테고리',
  `i_category_sub` varchar(300) DEFAULT NULL COMMENT '상품 서브 카테고리',
  `i_used_status` varchar(45) NOT NULL DEFAULT '0' COMMENT '0-관계없음, 1-중고, 2-신품',
  `i_name` varchar(300) NOT NULL COMMENT '상품명',
  `i_content` varchar(3000) DEFAULT NULL COMMENT '거래 게시글 내용',
  `i_cool_price` int NOT NULL DEFAULT '0' COMMENT '상품 쿨 거래가',
  `i_auction_agree` varchar(30) NOT NULL DEFAULT 'false' COMMENT 'false-비동의, true-동의',
  `i_auction_start_date` date DEFAULT NULL COMMENT '동의시, 활성화',
  `i_auction_end_date` date DEFAULT NULL COMMENT '이건 자동 작성됨(시작일 + 2일)',
  `i_auction_bid_price` int DEFAULT NULL COMMENT '경매 시작 입찰가',
  `i_origin_price` int DEFAULT NULL COMMENT '상품명 기반 웹크롤링',
  `i_deal_u_no` int DEFAULT NULL COMMENT '거래 확정자 고유번호',
  `i_deal_price` int DEFAULT NULL COMMENT '거래 확정가',
  PRIMARY KEY (`i_no`),
  KEY `FK_Item_i_u_no_User_u_no` (`i_u_no`),
  CONSTRAINT `FK_Item_i_u_no_User_u_no` FOREIGN KEY (`i_u_no`) REFERENCES `user` (`u_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COMMENT='거래확정자와 확정가는 경매 평균가 매기기 위해 필요';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'2021-05-04 15:00:00',1,'false','sell','100','10020','1','나이키레깅스','한번 사용한 레깅스 팝니다',45000,'false',NULL,NULL,NULL,50000,NULL,NULL),(2,'2021-05-03 19:43:43',1,'false','sell','100','10002','2','샤넬 H-치마','샤넬 신상 H치마팔아요 연락주세요',2000000,'true','2021-05-07','2021-05-10',1500000,1980000,NULL,NULL),(3,'2021-05-04 19:43:43',1,'false','sell','100','10002','2','구찌 H-치마','구찌 신상 치마팝니다용',1000000,'true','2021-05-09','2021-05-12',650000,980000,NULL,NULL),(4,'2021-05-01 14:43:43',1,'false','sell','400','40001','1','아이폰 11','3달 쓴 아이폰 11 싸게 팔아요',400000,'true','2021-05-10','2021-05-13',300000,520000,NULL,NULL),(5,'2021-05-01 18:43:43',1,'false','sell','400','40001','1','아이폰 12 pro','아이폰12 프로 새상품 팝니다',800000,'true','2021-05-10','2021-05-13',700000,890000,NULL,NULL),(6,'2021-05-03 18:43:43',1,'false','buy','400','40001','0','아이폰 12 pro','아이폰12 프로 아무거나 사요',700000,'true','2021-05-10','2021-05-13',890000,890000,NULL,NULL),(7,'2021-05-01 11:43:15',1,'false','buy','800','80002','0','맨유 유니폼','맨유 유니폼 삽니다',40000,'true','2021-05-11','2021-05-14',70000,70000,NULL,NULL),(8,'2021-05-01 19:43:15',1,'false','sell','800','80002','2','유벤투스 유니폼','유벤투스 유니폼 팝니다',70000,'true','2021-05-08','2021-05-11',70000,70000,NULL,NULL);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_chatting`
--

DROP TABLE IF EXISTS `item_chatting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_chatting` (
  `ic_no` int NOT NULL AUTO_INCREMENT COMMENT '상품 채팅 고유 번호',
  `ic_i_no` int NOT NULL COMMENT '상품 고유  번호',
  `ic_u_no` int NOT NULL COMMENT '채팅 참여자',
  `ic_chat_content` varchar(1000) DEFAULT NULL COMMENT '채팅 내용',
  `ic_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '채팅 작성 시간',
  PRIMARY KEY (`ic_no`),
  KEY `FK_Item_Chatting_ic_i_no_Item_i_no` (`ic_i_no`),
  KEY `FK_Item_Chatting_ic_u_no_User_u_no` (`ic_u_no`),
  CONSTRAINT `FK_Item_Chatting_ic_i_no_Item_i_no` FOREIGN KEY (`ic_i_no`) REFERENCES `item` (`i_no`),
  CONSTRAINT `FK_Item_Chatting_ic_u_no_User_u_no` FOREIGN KEY (`ic_u_no`) REFERENCES `user` (`u_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='상품 거래 글 채팅방';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_chatting`
--

LOCK TABLES `item_chatting` WRITE;
/*!40000 ALTER TABLE `item_chatting` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_chatting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_photo`
--

DROP TABLE IF EXISTS `item_photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_photo` (
  `ip_no` int NOT NULL AUTO_INCREMENT COMMENT '상품 사진 고유  번호',
  `ip_i_no` int NOT NULL COMMENT '상품 고유 번호',
  `ip_value` varchar(1000) DEFAULT NULL COMMENT '상품 이미지 값',
  PRIMARY KEY (`ip_no`),
  KEY `FK_Item_photo_ip_i_no_Item_i_no` (`ip_i_no`),
  CONSTRAINT `FK_Item_photo_ip_i_no_Item_i_no` FOREIGN KEY (`ip_i_no`) REFERENCES `item` (`i_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='거래 상품 사진 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_photo`
--

LOCK TABLES `item_photo` WRITE;
/*!40000 ALTER TABLE `item_photo` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `u_no` int NOT NULL AUTO_INCREMENT COMMENT '유저 고유 번호',
  `u_email` varchar(300) NOT NULL COMMENT '유저 이메일',
  `u_password` varchar(300) NOT NULL COMMENT '유저 비밀번호',
  `u_name` varchar(30) NOT NULL COMMENT '유저 이름',
  `u_phone` varchar(30) NOT NULL COMMENT '하이픈생략11자리',
  `u_birth` varchar(300) NOT NULL COMMENT '유저 생년월일',
  `u_join_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '유저 가입일',
  `u_authority` varchar(30) NOT NULL DEFAULT 'client' COMMENT 'client, admin',
  `u_credit` int NOT NULL DEFAULT '0' COMMENT '거래량 비례',
  `u_point` int NOT NULL DEFAULT '0' COMMENT '거래 시 사용',
  `u_penalty` varchar(30) NOT NULL DEFAULT 'false' COMMENT '블랙리스트 여부',
  `u_seller_auth` varchar(30) NOT NULL DEFAULT 'false' COMMENT '휴대폰 인증',
  `u_join_confirm` varchar(30) NOT NULL DEFAULT 'false' COMMENT '이메일 인증',
  `u_bank_name` varchar(300) DEFAULT NULL COMMENT '1인 1계좌',
  `u_bank_no` varchar(300) DEFAULT NULL COMMENT '1인 1계좌',
  `u_salt` varchar(300) DEFAULT NULL COMMENT '시큐리티대체',
  `u_provider` varchar(30) DEFAULT NULL COMMENT 'SNS연동',
  `u_auth_key` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`u_no`),
  UNIQUE KEY `UQ_User_1` (`u_email`,`u_phone`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COMMENT='유저 테이블';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test@hagglecredit.com','faf6bd578fac2f699ae77e707b2a5de078e2a140460e0026cb1cbcc3ee1bde9f','테스터','01066696827','1994-01-12','2021-05-05 05:36:01','client',1000,9999999,'false','false','false','대구은행','508109308909','a2dc6c03bd433c50',NULL,'authKeyConfirm');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_point`
--

DROP TABLE IF EXISTS `user_point`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_point` (
  `up_no` int NOT NULL AUTO_INCREMENT COMMENT '포인트 거래 고유 번호',
  `up_ap_no` int DEFAULT NULL COMMENT '참여 경매 고유 번호',
  `up_u_no` int NOT NULL COMMENT '포인트 유저 고유 번호',
  `up_class` varchar(30) NOT NULL COMMENT 'plus, minus 구분',
  `up_point` int NOT NULL COMMENT '포인트 값',
  `up_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '포인트 증감 시각',
  PRIMARY KEY (`up_no`),
  KEY `FK_User_Point_up_u_no_User_u_no` (`up_u_no`),
  KEY `FK_User_Point_up_ap_no_Auction_Participant_ap_no` (`up_ap_no`),
  CONSTRAINT `FK_User_Point_up_ap_no_Auction_Participant_ap_no` FOREIGN KEY (`up_ap_no`) REFERENCES `auction_participant` (`ap_no`),
  CONSTRAINT `FK_User_Point_up_u_no_User_u_no` FOREIGN KEY (`up_u_no`) REFERENCES `user` (`u_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_point`
--

LOCK TABLES `user_point` WRITE;
/*!40000 ALTER TABLE `user_point` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_point` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'haggle_credit'
--

--
-- Dumping routines for database 'haggle_credit'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-05 17:36:20
