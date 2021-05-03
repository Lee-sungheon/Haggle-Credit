-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- User Table Create SQL
CREATE TABLE User
(
    `u_no`           INT             NOT NULL    AUTO_INCREMENT COMMENT '유저고유번호', 
    `u_authority`    VARCHAR(30)     NOT NULL    DEFAULT 'Client' COMMENT '유저 권한(default:Client)', 
    `u_email`        VARCHAR(300)    NOT NULL    COMMENT '유니크키', 
    `u_password`     VARCHAR(300)    NOT NULL    COMMENT '유저 비밀번호', 
    `u_salt`         VARCHAR(300)    NOT NULL    COMMENT '유저 고유 Salt', 
    `u_name`         VARCHAR(30)     NOT NULL    COMMENT '유저 이름', 
    `u_birth`        DATE            NOT NULL    COMMENT '유저 생일(생년월일)', 
    `u_phone`        VARCHAR(300)    NOT NULL    COMMENT '유니크키', 
    `u_provider`     VARCHAR(30)     NULL        COMMENT '유저 SNS 연동 제공자', 
    `u_join_date`    TIMESTAMP       NOT NULL    COMMENT '유저 가입일', 
    `u_seller_auth`  VARCHAR(300)    NOT NULL    DEFAULT 'False' COMMENT '유저 판매자 권한(Default:False)', 
    `u_unique_key`   VARCHAR(300)    NOT NULL    COMMENT '유저 개인식별 고유키(판매자권한o)', 
    `u_auth_key`     VARCHAR(30)     NOT NULL    DEFAULT 'False' COMMENT '유저 가입 승인 확인(일단이건 나중에)', 
    `u_credit`       INT             NOT NULL    DEFAULT 0 COMMENT '거래이상하면, -1000', 
    `u_point`        INT             NOT NULL    DEFAULT 0 COMMENT '유저 포인트', 
    `u_penalty`      INT             NOT NULL    DEFAULT 0 COMMENT '거래 취소시 1씩 올라감', 
    `u_temp_pw`      VARCHAR(300)    NULL        COMMENT '유저 임시 코드', 
    CONSTRAINT  PRIMARY KEY (u_no)
);

ALTER TABLE User COMMENT '유저 테이블';

CREATE UNIQUE INDEX UQ_User_1
    ON User(u_email, u_phone);


-- User Table Create SQL
CREATE TABLE item
(
    `i_no`             INT             NOT NULL    AUTO_INCREMENT COMMENT '상품 고유 번호', 
    `i_type`           VARCHAR(30)     NOT NULL    COMMENT '상품 거래 타입(buy,sell)', 
    `i_title`          VARCHAR(300)    NULL        COMMENT '상품 글 제목', 
    `i_name`           VARCHAR(300)    NULL        COMMENT '상품명', 
    `i_category_main`  VARCHAR(300)    NOT NULL    COMMENT '상품 메인 카테고리', 
    `i_category_sub`   VARCHAR(300)    NULL        COMMENT '상품 서브 카테고리', 
    `i_is_used`        INT             NOT NULL    DEFAULT 3 COMMENT '상품 중고 상태(0-신품,1-중고,2-관계무', 
    `i_hope_price`     INT             NULL        COMMENT '상품 쿨 거래가', 
    `i_origin_price`   INT             NULL        COMMENT '상품 정가', 
    CONSTRAINT  PRIMARY KEY (i_no)
);

ALTER TABLE item COMMENT '상품 테이블';


-- User Table Create SQL
CREATE TABLE Item_Sell
(
    `is_no`               INT              NOT NULL    AUTO_INCREMENT COMMENT '상품 판매 고유 번호', 
    `is_i_no`             INT              NOT NULL    COMMENT '상품 고유 번호', 
    `is_u_no`             INT              NOT NULL    COMMENT '판매 등록 유저', 
    `is_haggle`           INT              NULL        COMMENT '상품 현재가', 
    `is_nego_possible`    VARCHAR(30)      NOT NULL    DEFAULT 'No' COMMENT '네고 가능 여부(Yes/No)', 
    `is_start_date`       TIMESTAMP        NOT NULL    COMMENT '판매 시작일(게시시작일)', 
    `is_end_date`         DATE             NOT NULL    COMMENT '판매 종료일(자동 경매등록일)', 
    `is_end_action_date`  DATE             NULL        COMMENT '경매 종료일', 
    `is_content`          VARCHAR(3000)    NULL        COMMENT '판매 게시 내용', 
    `is_buy_u_no`         INT              NULL        COMMENT '상품 확정 구매자', 
    `is_buy_price`        INT              NULL        COMMENT '상품 확정가', 
    CONSTRAINT  PRIMARY KEY (is_no)
);

ALTER TABLE Item_Sell COMMENT '상품 판매 테이블';

ALTER TABLE Item_Sell
    ADD CONSTRAINT FK_Item_Sell_is_i_no_item_i_no FOREIGN KEY (is_i_no)
        REFERENCES item (i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Item_Sell
    ADD CONSTRAINT FK_Item_Sell_is_u_no_User_u_no FOREIGN KEY (is_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Item_Sell
    ADD CONSTRAINT FK_Item_Sell_is_buy_u_no_User_u_no FOREIGN KEY (is_buy_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Item_Buy
(
    `ib_no`          INT              NOT NULL    AUTO_INCREMENT COMMENT '상품 구매 고유 번호', 
    `ib_i_no`        INT              NOT NULL    COMMENT '상품 고유 번호', 
    `ib_u_no`        INT              NOT NULL    COMMENT '구매 등록 유저', 
    `ib_start_date`  TIMESTAMP        NOT NULL    COMMENT '구매 희망 시작일(게시시작일)', 
    `ib_end_date`    TIMESTAMP        NULL        COMMENT '구매 종료일', 
    `ib_content`     VARCHAR(3000)    NULL        COMMENT '구매 게시 내용', 
    `ib_haggle`      INT              NULL        COMMENT '현재 판매가', 
    `ib_sell_u_no`   INT              NULL        COMMENT '확정 판매자', 
    `ib_sell_price`  INT              NULL        COMMENT '확정 판매가', 
    CONSTRAINT  PRIMARY KEY (ib_no)
);

ALTER TABLE Item_Buy COMMENT '상품 구매 테이블';

ALTER TABLE Item_Buy
    ADD CONSTRAINT FK_Item_Buy_ib_i_no_item_i_no FOREIGN KEY (ib_i_no)
        REFERENCES item (i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Item_Buy
    ADD CONSTRAINT FK_Item_Buy_ib_u_no_User_u_no FOREIGN KEY (ib_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Item_Buy
    ADD CONSTRAINT FK_Item_Buy_ib_sell_u_no_User_u_no FOREIGN KEY (ib_sell_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Coupon
(
    `c_no`        INT              NOT NULL    AUTO_INCREMENT COMMENT '쿠폰 고유 번호', 
    `c_name`      VARCHAR(300)     NOT NULL    COMMENT '쿠폰 이름', 
    `c_content`   VARCHAR(3000)    NOT NULL    COMMENT '쿠폰 설명', 
    `c_discount`  int              NOT NULL    COMMENT '쿠폰 할인율', 
    CONSTRAINT  PRIMARY KEY (c_no)
);

ALTER TABLE Coupon COMMENT '쿠폰 테이블  [나중에 개발]';


-- User Table Create SQL
CREATE TABLE User_point
(
    `up_no`        INT    NOT NULL    AUTO_INCREMENT COMMENT '포인트 고유 번호', 
    `up_u_no`      INT    NOT NULL    COMMENT '유저 고유 번호', 
    `up_hc_point`  INT    NOT NULL    DEFAULT 0 COMMENT '유저 HC 포인트',
    CONSTRAINT   PRIMARY KEY (up_no)
);

ALTER TABLE User_point COMMENT '유저 포인트의 이동을 통해 거래내역을 조회할 때 사용되는 테이블';

ALTER TABLE User_point
    ADD CONSTRAINT FK_User_point_up_u_no_User_u_no FOREIGN KEY (up_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE User_History_Buy
(
    `uhb_no`    INT    NOT NULL    AUTO_INCREMENT COMMENT '구매 내역 고유 번호', 
    `uhb_i_no`  INT    NULL        COMMENT '구매 상품 고유 번호', 
    CONSTRAINT  PRIMARY KEY (uhb_no)
);

ALTER TABLE User_History_Buy
    ADD CONSTRAINT FK_User_History_Buy_uhb_i_no_Item_Buy_ib_i_no FOREIGN KEY (uhb_i_no)
        REFERENCES Item_Buy (ib_i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE User_History_Sell
(
    `uhs_no`    INT    NOT NULL    AUTO_INCREMENT COMMENT '판매 내역 고유 번호', 
    `uhs_i_no`  INT    NULL        COMMENT '판매 상품 고유 번호', 
    CONSTRAINT  PRIMARY KEY (uhs_no)
);

ALTER TABLE User_History_Sell
    ADD CONSTRAINT FK_User_History_Sell_uhs_i_no_Item_Sell_is_i_no FOREIGN KEY (uhs_i_no)
        REFERENCES Item_Sell (is_i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Coupon_User
(
    `cu_c_no`  INT    NOT NULL    COMMENT '쿠폰 고유 번호', 
    `cu_u_no`  INT    NOT NULL    COMMENT '쿠폰 유저 고유 번호'
);

ALTER TABLE Coupon_User COMMENT '쿠폰 유저 테이블 [나중에 개발]';

ALTER TABLE Coupon_User
    ADD CONSTRAINT FK_Coupon_User_cu_c_no_Coupon_c_no FOREIGN KEY (cu_c_no)
        REFERENCES Coupon (c_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Coupon_User
    ADD CONSTRAINT FK_Coupon_User_cu_u_no_User_u_no FOREIGN KEY (cu_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Alarm
(
    `al_no`         INT              NOT NULL    AUTO_INCREMENT COMMENT '알람 고유 번호', 
    `al_send_u_no`  INT              NULL        COMMENT '알람 보낸 유저(default:hc개발팀)', 
    `al_recv_u_no`  INT              NULL        COMMENT '알람 받는 유저', 
    `al_title`      VARCHAR(300)     NOT NULL    COMMENT '알람 제목', 
    `al_content`    VARCHAR(3000)    NOT NULL    COMMENT '알람 내용', 
    `al_time`       TIMESTAMP        NOT NULL    COMMENT '알람 발송 시간', 
    `al_link`       VARCHAR(3000)    NULL        COMMENT '알람 관련 링크', 
    CONSTRAINT  PRIMARY KEY (al_no)
);

ALTER TABLE Alarm COMMENT '알람 테이블';

ALTER TABLE Alarm
    ADD CONSTRAINT FK_Alarm_al_send_u_no_User_u_no FOREIGN KEY (al_send_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Alarm
    ADD CONSTRAINT FK_Alarm_al_recv_u_no_User_u_no FOREIGN KEY (al_recv_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Item_photo
(
    `ip_no`     INT              NOT NULL    AUTO_INCREMENT COMMENT '상품사진고유번호', 
    `ip_i_no`   INT              NOT NULL    COMMENT '상품 고유 번호', 
    `ip_value`  VARCHAR(1000)    NULL        COMMENT '상품 이미지 값', 
    CONSTRAINT  PRIMARY KEY (ip_no)
);

ALTER TABLE Item_photo COMMENT '상품 이미지';

ALTER TABLE Item_photo
    ADD CONSTRAINT FK_Item_photo_ip_i_no_item_i_no FOREIGN KEY (ip_i_no)
        REFERENCES item (i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Item_Chatting
(
    `ic_no`       INT              NOT NULL    AUTO_INCREMENT COMMENT '상품 채팅 고유 번호', 
    `ic_i_no`     INT              NOT NULL    COMMENT '상품 고유 번호', 
    `ic_u_no`     INT              NOT NULL    COMMENT '채팅 참여자(1:N 대화느낌)', 
    `ic_content`  VARCHAR(1000)    NULL        COMMENT '채팅 내용', 
    `ic_date`     TIMESTAMP        NOT NULL    COMMENT '채팅 작성 시간', 
    CONSTRAINT  PRIMARY KEY (ic_no)
);

ALTER TABLE Item_Chatting COMMENT '상품 채팅방';

ALTER TABLE Item_Chatting
    ADD CONSTRAINT FK_Item_Chatting_ic_i_no_item_i_no FOREIGN KEY (ic_i_no)
        REFERENCES item (i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Bookmark
(
    `b_i_no`  INT    NOT NULL    COMMENT '상품 고유번호', 
    `b_u_no`  INT    NOT NULL    COMMENT '유저 고유번호', 
    CONSTRAINT  PRIMARY KEY (b_i_no, b_u_no)
);

ALTER TABLE Bookmark
    ADD CONSTRAINT FK_Bookmark_b_u_no_User_u_no FOREIGN KEY (b_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Bookmark
    ADD CONSTRAINT FK_Bookmark_b_i_no_item_i_no FOREIGN KEY (b_i_no)
        REFERENCES item (i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Reverse_Auction
(
    `ra_no`     INT          NOT NULL    AUTO_INCREMENT COMMENT '역경매 고유 번호', 
    `ra_i_no`   INT          NOT NULL    COMMENT '역경매 상품 고유 번호', 
    `ra_u_no`   INT          NOT NULL    COMMENT '입찰자', 
    `ra_price`  INT          NOT NULL    COMMENT '역경매 구매 희망 가격', 
    `ra_date`   TIMESTAMP    NULL        COMMENT '입찰 시간', 
    CONSTRAINT  PRIMARY KEY (ra_no)
);

ALTER TABLE Reverse_Auction COMMENT '역경매 테이블 (판매자들이 가격 내려부르는 것)';

ALTER TABLE Reverse_Auction
    ADD CONSTRAINT FK_Reverse_Auction_ra_i_no_Item_Buy_ib_i_no FOREIGN KEY (ra_i_no)
        REFERENCES Item_Buy (ib_i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Reverse_Auction
    ADD CONSTRAINT FK_Reverse_Auction_ra_u_no_User_u_no FOREIGN KEY (ra_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Auction
(
    `a_no`     INT          NOT NULL    AUTO_INCREMENT COMMENT '입찰 고유 번호', 
    `a_i_no`   INT          NOT NULL    COMMENT '경매 상품 고유 번호', 
    `a_price`  INT          NOT NULL    COMMENT '구매 희망 가격(입찰가)', 
    `a_u_no`   INT          NOT NULL    COMMENT '입찰자', 
    `a_time`   TIMESTAMP    NULL        COMMENT '입찰 시간', 
    CONSTRAINT  PRIMARY KEY (a_no)
);

ALTER TABLE Auction COMMENT '경매 테이블 (구매자들이 가격 올려부르는 것)';

ALTER TABLE Auction
    ADD CONSTRAINT FK_Auction_a_u_no_User_u_no FOREIGN KEY (a_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Auction
    ADD CONSTRAINT FK_Auction_a_i_no_Item_Sell_is_i_no FOREIGN KEY (a_i_no)
        REFERENCES Item_Sell (is_i_no) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- User Table Create SQL
CREATE TABLE Place
(
    `p_no`    INT             NOT NULL    AUTO_INCREMENT COMMENT '지역 고유 번호', 
    `p_name`  VARCHAR(300)    NULL        COMMENT '지역명', 
    CONSTRAINT  PRIMARY KEY (p_no)
);

ALTER TABLE Place COMMENT '지역 테이블 [나중에 개발]';


-- User Table Create SQL
CREATE TABLE User_Account
(
    `ac_u_no`     INT             NOT NULL    COMMENT '유저 고유 번호', 
    `ac_account`  VARCHAR(300)    NULL        COMMENT '유저 계좌', 
    `ac_bank`     VARCHAR(100)    NULL        COMMENT '유저 은행', 
    CONSTRAINT  PRIMARY KEY (ac_u_no, ac_account)
);

ALTER TABLE User_Account COMMENT '유저 계좌 등록 (추후 수정가능성 있음)';

ALTER TABLE User_Account
    ADD CONSTRAINT FK_User_Account_ac_u_no_User_u_no FOREIGN KEY (ac_u_no)
        REFERENCES User (u_no) ON DELETE RESTRICT ON UPDATE RESTRICT;

# 유저 추가하셈... 따로..
# id : test@hc.com
# pw : faf6bd578fac2f699ae77e707b2a5de078e2a140460e0026cb1cbcc3ee1bde9f
# salt : a2dc6c03bd433c50
# 나머지 값은 알아서...ㅎㅎㅎ... (아무튼해서 생성되면, test@hc.com 입력하고 test 로 비밀번호 입력하면 정상 로그인 됨.