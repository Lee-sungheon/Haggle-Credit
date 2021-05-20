import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductTab from './tab/ProductTab';
import TransactionReviewTab from './tab/TransactionReviewTab';
import TransactionListTab from './tab/TransactionListTab';
import BasketTab from './tab/BasketTab';
import TenderListTab from './tab/TenderListTab';
import { Route } from 'react-router-dom';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex
  text-align: center;
`;

const ActTab = styled.div`
  height: 3vw;
  width: 19.5%;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  height: 3vw;
  width: 19.5%;
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
interface ProfileTabProps {
  userData: USERDATA;
}
const ProfileTab = ({ userData }: ProfileTabProps) => {
  const history = useHistory();
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
        {window.location.pathname === '/profile/transactionlist' ? (
          <ActTab onClick={() => clickHandler('/profile/transactionlist')}>
            <p>거래내역</p>
          </ActTab>
        ) : (
          <Tab onClick={() => clickHandler('/profile/transactionlist')}>
            <p>거래내역</p>
          </Tab>
        )}
      </Body>
      <Route
        exact
        path="/profile"
        render={() => <ProductTab userData={userData} />}
      />
      <Route
        path="/profile/transactionreview"
        render={() => <TransactionReviewTab userData={userData} />}
      />
      <Route
        path="/profile/basket"
        render={() => <BasketTab userData={userData} />}
      />
      <Route
        path="/profile/tenderlist"
        render={() => <TenderListTab userData={userData} />}
      />
      <Route
        path="/profile/transactionlist"
        render={() => <TransactionListTab userData={userData} />}
      />
    </Container>
  );
};

export default ProfileTab;
