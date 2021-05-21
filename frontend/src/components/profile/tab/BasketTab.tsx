import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';
import BasketList from './basket/BasketList';
import { USERDATA } from 'styled-components';

const Body = styled.div`
  margin-top: 30px;
  padding-left: 30px;
  text-align: left;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
`;
const ReviewTab1 = styled.div`
  :hover {
    cursor: pointer;
  }
`;
const ReviewTab2 = styled.div`
  :hover {
    cursor: pointer;
  }
`;

interface BookMarkList {
  auctionParticipant: AuctionParticipant[];
  iCompleted: string;
  iNo: number;
  itemBuy: ItemBuy;
  itemSell: ItemSell;
  itemPhoto: ItemPhoto[];
  reverseAuctionParticipant: ReverseAuctionParticipant[];
}

interface AuctionParticipant {
  apAddress: number;
  apBid: number;
  apDate: string;
  apNo: number;
  apUserNo: number;
}
interface ItemPhoto {
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
}
interface ReverseAuctionParticipant {}
interface ItemBuy {
  ibItemNo: number;
  ibNo: number;
  ibUserNo: number;
  ibName: string;
  ibCategoryMain: string;
  ibCategorySub: string;
  ibContent: string;
  ibStartDate: string;
  ibEndDate: string;
  ibCoolPrice: number;
  ibAuctionInitPrice: number;
  ibAuctionIngPrice: number;
  ibRegDate: string;
  ibDealUserNo: number;
  ibDealPrice: number;
  ibDealAddress: string;
}
interface ItemSell {
  isItemNo: number;
  isNo: number;
  isUserNo: number;
  isName: string;
  isCategoryMain: string;
  isCategorySub: string;
  isContent: string;
  isStartDate: string;
  isEndDate: string;
  isCoolPrice: number;
  isAuctionInitPrice: number;
  isAuctionIngPrice: number;
  isRegDate: string;
  isDealUserNo: number;
  isDealPrice: number;
  isDealAddress: number;
  isUsedStatus: string;
  isItemName: string;
  isEventAgree: string;
}
interface BasketTabProps {
  userData: USERDATA;
}
const BasketTab = ({ userData }: BasketTabProps) => {
  const [reviewTab, setReviewTab] = useState(1);

  const [sellBookMarkList, setSellBookMarkList] = useState(
    [] as BookMarkList[]
  );
  const [buyBookMarkList, setBuyBookMarkList] = useState([] as BookMarkList[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/bookmark/read?type=sell&uNo=${userData.uNo}`
      )
      .then((res) => {
        setSellBookMarkList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/bookmark/read?type=buy&uNo=${userData.uNo}`
      )
      .then((res) => {

        setBuyBookMarkList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const deleteBookMark = (item: any) => {
    axios
      .delete(
        `https://k4d107.p.ssafy.io/haggle-credit/bookmark/delete?bItemNo=${item.b_item_no}&bUserNo=${item.b_user_no}`
      )
      .then((res) => {
        axios
          .get(
            `https://k4d107.p.ssafy.io/haggle-credit/bookmark/read?type=sell&uNo=${userData.uNo}`
          )
          .then((res) => {
            setSellBookMarkList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        axios
          .get(
            `https://k4d107.p.ssafy.io/haggle-credit/bookmark/read?type=buy&uNo=${userData.uNo}`
          )
          .then((res) => {
            setBuyBookMarkList(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onReviewTab1 = () => {
    setReviewTab(1);
  };
  const onReviewTab2 = () => {
    setReviewTab(2);
  };
  return (
    <>
      {reviewTab === 1 ? (
        <>
          <Body>
            <ReviewTab1 style={{ marginRight: '10px' }} onClick={onReviewTab1}>
              판매글
            </ReviewTab1>
            <ReviewTab2 style={{ color: '#bdbdbd' }} onClick={onReviewTab2}>
              구매글
            </ReviewTab2>
          </Body>
          {sellBookMarkList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 찜목록이 없습니다.
            </div>
          ) : (
            <BasketList
              buy={true}
              products={sellBookMarkList}
              deleteBookMark={deleteBookMark}
            />
          )}
        </>
      ) : (
        <>
          <Body>
            <ReviewTab1
              style={{ marginRight: '10px', color: '#bdbdbd' }}
              onClick={onReviewTab1}
            >
              판매글
            </ReviewTab1>
            <ReviewTab2 onClick={onReviewTab2}>구매글</ReviewTab2>
          </Body>
          {buyBookMarkList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 찜목록이 없습니다.
            </div>
          ) : (
            <BasketList
              buy={false}
              products={buyBookMarkList}
              deleteBookMark={deleteBookMark}
            />
          )}
        </>
      )}
    </>
  );
};

export default BasketTab;
