import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import ProductTab from './Tab/ProductTab';
import TransactionReviewTab from './Tab/TransactionReviewTab';
import BasketTab from './Tab/BasketTab';
import TenderListTab from './Tab/TenderListTab';
import { Route, Switch } from 'react-router-dom';

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
  const history = useHistory();
  const [tabId, setTabId] = useState(0);
  const clickHandler = (id: string) => {
    history.push(id);
  };
  return (
    <Container>
      <Body>
        {window.location.pathname === '/profile' ? (
          <ActTab onClick={() => clickHandler('/profile')}>
            <p>상품</p>
          </ActTab>
        ) : (
          <Tab style={{}} onClick={() => clickHandler('/profile')}>
            <p>상품</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/transactionreview' ? (
          <ActTab onClick={() => clickHandler('/profile/transactionreview')}>
            <p>거래리뷰</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/transactionreview')}>
            <p>거래 리뷰</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/basket' ? (
          <ActTab onClick={() => clickHandler('/profile/basket')}>
            <p>찜</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/basket')}>
            <p>찜</p>
          </Tab>
        )}
        {window.location.pathname === '/profile/tenderlist' ? (
          <ActTab onClick={() => clickHandler('/profile/tenderlist')}>
            <p>입찰내역</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/tenderlist')}>
            <p>입찰내역</p>
          </Tab>
        )}
      </Body>
      <Route exact path="/profile" component={ProductTab}></Route>
      <Route
        path="/profile/transactionreview"
        component={TransactionReviewTab}
      ></Route>
      <Route path="/profile/basket" component={BasketTab}></Route>
      <Route path="/profile/tenderlist" component={TenderListTab} />
    </Container>
  );
};

export default ProfileTab2;
