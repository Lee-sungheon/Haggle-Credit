import { useState } from 'react';
import styled from 'styled-components';
import ProductTab from './Tab/ProductTab';
import TransactionReviewTab from './Tab/TransactionReviewTab';
import BasketTab from './Tab/BasketTab';
import TenderListTab from './Tab/TenderListTab';
const Container = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Body = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  text-align: center;
`;

const ActTab = styled.div`
  height: 50px;
  width: 160px;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  height: 50px;
  width: 160px;
  border: 1px solid #e0e0e0;
  background-color: #f5f5f5;
  color: #bdbdbd;
  border-bottom: 1px solid black;
  :hover {
    cursor: pointer;
    border: 2px solid #e0e0e0;
    border-bottom: 1px solid black;
    font-weight: bolder;
  }
`;

const ProfileTab2 = () => {
  const [tabId, setTabId] = useState(0);
  const clickHandler = (id: number) => {
    setTabId(id);
  };
  return (
    <Container>
      <Body>
        {tabId === 0 ? (
          <ActTab onClick={() => clickHandler(0)}>
            <p>상품</p>
          </ActTab>
        ) : (
          <Tab style={{}} onClick={() => clickHandler(0)}>
            <p>상품</p>
          </Tab>
        )}
        {tabId === 1 ? (
          <ActTab onClick={() => clickHandler(1)}>
            <p>거래리뷰</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler(1)}>
            <p>거래 리뷰</p>
          </Tab>
        )}
        {tabId === 2 ? (
          <ActTab onClick={() => clickHandler(2)}>
            <p>찜</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler(2)}>
            <p>찜</p>
          </Tab>
        )}
        {tabId === 3 ? (
          <ActTab onClick={() => clickHandler(3)}>
            <p>입찰내역</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler(3)}>
            <p>입찰내역</p>
          </Tab>
        )}
        {tabId === 4 ? (
          <ActTab onClick={() => clickHandler(4)}>
            <p>팔로잉</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler(4)}>
            <p>팔로잉</p>
          </Tab>
        )}
        {tabId === 5 ? (
          <ActTab onClick={() => clickHandler(5)}>
            <p>팔로워</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler(5)}>
            <p>팔로워</p>
          </Tab>
        )}
      </Body>
      <div key="1" hidden={tabId !== 0}>
        <ProductTab />
      </div>
      <div key="2" hidden={tabId !== 1}>
        <TransactionReviewTab />
      </div>
      <div key="3" hidden={tabId !== 2}>
        <BasketTab />
      </div>
      <div key="4" hidden={tabId !== 3}>
        <TenderListTab />
      </div>

      <div key="5" hidden={tabId !== 4}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          팔로잉
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          팔로잉이 없습니다.
        </div>
      </div>
      <div key="6" hidden={tabId !== 5}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          팔로워
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          팔로워가 없습니다.
        </div>
      </div>
    </Container>
  );
};

export default ProfileTab2;
