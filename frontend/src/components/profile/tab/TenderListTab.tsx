import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { USERDATA } from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';
import TenderList from './tenderList/TenderList';
import axios from 'axios';
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
interface TenderListTabProps {
  userData: USERDATA;
}
const TenderListTab = ({ userData }: TenderListTabProps) => {
  const [reviewTab, setReviewTab] = useState(1);
  const [sellTenderList, setSellTenderItemList] = useState([]);
  const [buyTenderList, setBuyTenderItemList] = useState([]);

  const onReviewTab1 = () => {
    setReviewTab(1);
  };
  const onReviewTab2 = () => {
    setReviewTab(2);
  };

  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/profile/breakdown/bid?uNo=${userData.uNo}`
      )
      .then((res) => {

        setSellTenderItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/profile/breakdown/bidbuy?uNo=${userData.uNo}`
      )
      .then((res) => {

        setBuyTenderItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {reviewTab === 1 ? (
        <>
          <Body>
            <ReviewTab1 style={{ marginRight: '10px' }} onClick={onReviewTab1}>
              판매글 입찰
            </ReviewTab1>
            <ReviewTab2 style={{ color: '#bdbdbd' }} onClick={onReviewTab2}>
              구매글 입찰
            </ReviewTab2>
          </Body>
          {sellTenderList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 판매글입찰이 없습니다.
            </div>
          ) : (
            <TenderList buy={true} products={sellTenderList} />
          )}
        </>
      ) : (
        <>
          <Body>
            <ReviewTab1
              style={{ marginRight: '10px', color: '#bdbdbd' }}
              onClick={onReviewTab1}
            >
              판매글 입찰
            </ReviewTab1>
            <ReviewTab2 onClick={onReviewTab2}>구매글 입찰</ReviewTab2>
          </Body>
          {buyTenderList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 구매글입찰이 없습니다.
            </div>
          ) : (
            <TenderList buy={false} products={buyTenderList} />
          )}
        </>
      )}
    </>
  );
};

export default TenderListTab;
