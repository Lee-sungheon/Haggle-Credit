import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      text: string;
      background: string;
      grey_text: string;
      input_text: string;
    };
  }
  export interface ITEM {
    ipItemNo: number;
    ipValue: string;
    isAuctionInitPrice: number;
    isAuctionIngPrice: number;
    isCategoryMain: string;
    isCategorySub: string;
    isContent: string;
    isCoolPrice: number;
    isDealAddress: number;
    isDealPrice: number;
    isDealUserNo: number;
    isEndDate: string;
    isEventAgree: string;
    isItemName: string;
    isItemNo: number;
    isNo: number;
    isStartDate: any;
    isUsedStatus: string;
    isUserNo: number;
    joinerCnt: number;
  }
  export interface ROOMINFO {
    crItemNo: number;
    crItemPrice: number;
    crItemName: string;
    crItemImage: string;
    crLatestMessage: string;
    crLatestMessageTime: string;
    crName: string;
    crNo: number;
    crUserNoOne: number;
    crUserNoTwo: number;
    crUserOneName: string;
    crUserOneProfile: string;
    crUserTwoName: string;
    crUserTwoProfile: string;
  }
  export interface CHAT {
    icNo: number;
    icCrNo: number;
    icUserNo: number;
    icChatContent: string;
    icDate: string;
  }
  export interface PHOTO {
    ipNo: number;
    ipItemNo: number;
    ipValue: string;
  }
  export interface STOREINFO {
    itemSell: STOREITEM;
    itemPhotoes: PHOTO[];
    itemCnt: number;
  }
  export interface STOREITEM {
    isItemNo: number;
    isNo: number;
    isUserNo: number;
    isItemName: string;
    isCategoryMain: string;
    isCategorySub: string;
    isUsedStatus: string;
    isCoolPrice: number;
    isAuctionInitPrice: number;
    isDealAddress: number;
    isDealPrice: number;
    isDealUserNo: number;
    isStartDate: string;
    isEndDate: string;
    isEventAgree: string;
    isAuctionIngPrice: number;
  }
  export interface STOREREVIEW {
    u_name: string;
    u_image: string;
    ur_write_user_no: number;
    ur_no: number;
    ur_user_no: number;
    ur_item_no: number;
    ur_content: string;
    ur_write_date: string;
    ur_score: number;
  }
  export interface USERINFO {
    uImage?: string;
    uNo?: number;
    uEmail?: string;
    uPassword?: string;
    uName?: string;
    uPhone?: string;
    uBirth?: string;
    uJoinDate?: string;
    uAuthorit?: string;
    uCredit?: number;
    uPenalty?: string;
    uSellerAuth?: string;
    uJoinConfirm?: string;
    uBankName?: string;
    uBankNo?: string;
    uAuthKey?: string;
    uAuthKeyGeneratedAt?: string;
    uContent?: string;
  }
}