import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';
import BasketList from './basket/BasketList';

const Container = styled.div``;
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
  b_item_no: number;
  b_no: number;
  b_user_no: number;
  is_content: string;
  is_deal_price: number;
  is_category_main: string;
  is_end_date: string;
  is_user_no: number;
  is_used_status: string;
  is_no: number;
  is_deal_user_no: number;
  is_deal_address: number;
  is_auction_ing_price: number;
  is_cool_price: number;
  is_item_name: string;
  is_item_no: number;
  is_category_sub: string;
  is_event_agree: string;
  is_auction_init_price: number;
  ib_deal_price: number;
  ib_start_date: string;
  ib_item_no: number;
  ib_name: string;
  ib_reg_date: string;
  ib_deal_user_no: number;
  ib_auction_init_price: number;
  ib_content: string;
  ib_no: number;
  ib_user_no: number;
  ib_auction_ing_price: number;
  ib_cool_price: number;
  ib_category_sub: string;
  ib_deal_address: string;
  ib_end_date: string;
  ib_category_main: string;
}
interface BuyBookMarkList {}
const BasketTab = () => {
  const userData = useSelector((state: RootState) => state.user.userData);
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
        console.log(res);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onReviewTab1 = () => {
    setReviewTab(1);
  };
  const onReviewTab2 = () => {
    setReviewTab(2);
  };
  return (
    // <Container>
    //   <div
    //     style={{
    //       marginTop: '30px',
    //       marginLeft: '30px',
    //       textAlign: 'left',
    //       height: '50px',
    //       borderBottom: '1px solid #bdbdbd',
    //     }}
    //   >
    //     찜
    //   </div>
    //   {sellBookMarkList ? (
    //     <>
    //       <div
    //         style={{
    //           paddingTop: '30px',
    //         }}
    //       >
    //         등록된 찜목록이 없습니다.
    //       </div>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </Container>
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
              등록된 판매글이 없습니다.
            </div>
          ) : // <BasketList buy={true} products={sellBookMarkList} />
          null}
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
              등록된 구매글이 없습니다.
            </div>
          ) : // <BasketList buy={true} products={buyBookMarkList} />
          null}
        </>
      )}
    </>
  );
};

export default BasketTab;
