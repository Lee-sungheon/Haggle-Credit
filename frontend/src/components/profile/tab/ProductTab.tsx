import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ProductList from './product/ProductList';
import axios from 'axios';
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
interface ProductTabProps {
  userData: USERDATA;
}
const ProductTab = ({ userData }: ProductTabProps) => {
  const [reviewTab, setReviewTab] = useState(1);

  const [sellItemList, setSellItemList] = useState([]);
  const [buyItemList, setBuyItemList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/itemSell/myitem?uNo=${userData.uNo}`
      )
      .then((res) => {
        setSellItemList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/itemBuy/myitem?uNo=${userData.uNo}`
      )
      .then((res) => {

        setBuyItemList(res.data);
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
          {sellItemList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 판매글이 없습니다.
            </div>
          ) : (
            <ProductList buy={true} products={sellItemList} />
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
          {buyItemList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 구매글이 없습니다.
            </div>
          ) : (
            <ProductList buy={false} products={buyItemList} />
          )}
        </>
      )}
    </>
  );
};

export default ProductTab;
