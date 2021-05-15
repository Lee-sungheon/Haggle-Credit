import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductTab from './Tab/ProductTab';
import TransactionReviewTab from './Tab/TransactionReviewTab';
import BasketTab from './Tab/BasketTab';
import TenderListTab from './Tab/TenderListTab';
import { Route } from 'react-router-dom';
import { USERDATA } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useEffect, useState } from 'react';

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
  const userData = useSelector((state: RootState) => state.user.joinUserData);
  const [pathname, setPathName] = useState();
  const clickHandler = (url: string) => {
    history.push({
      pathname: url,
    });
  };
  useEffect(() => {
    history.push({
      pathname: `/userProfile/${userData.uNo}`,
    });
  }, [userData]);
  return (
    <Container>
      {userData && (
        <>
          <Body>
            {window.location.pathname === `/userProfile/${userData.uNo}` ? (
              <ActTab
                onClick={() => clickHandler(`/userProfile/${userData.uNo}`)}
              >
                <p>상품</p>
              </ActTab>
            ) : (
              <Tab
                style={{}}
                onClick={() => clickHandler(`/userProfile/${userData.uNo}`)}
              >
                <p>상품</p>
              </Tab>
            )}
            {window.location.pathname ===
            `/userProfile/${userData.uNo}/transactionreview` ? (
              <ActTab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/transactionreview`)
                }
              >
                <p>거래리뷰</p>
              </ActTab>
            ) : (
              <Tab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/transactionreview`)
                }
              >
                <p>거래 리뷰</p>
              </Tab>
            )}
            {window.location.pathname ===
            `/userProfile/${userData.uNo}/basket` ? (
              <ActTab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/basket`)
                }
              >
                <p>찜</p>
              </ActTab>
            ) : (
              <Tab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/basket`)
                }
              >
                <p>찜</p>
              </Tab>
            )}
            {window.location.pathname ===
            `/userProfile/${userData.uNo}/basket/tenderlist` ? (
              <ActTab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/basket/tenderlist`)
                }
              >
                <p>입찰내역</p>
              </ActTab>
            ) : (
              <Tab
                onClick={() =>
                  clickHandler(`/userProfile/${userData.uNo}/basket/tenderlist`)
                }
              >
                <p>입찰내역</p>
              </Tab>
            )}
          </Body>
          <Route exact path="/userProfile/:id" component={ProductTab}></Route>
          <Route
            path="/userProfile/:id/transactionreview"
            component={TransactionReviewTab}
          ></Route>
          <Route path="/userProfile/:id/basket" component={BasketTab}></Route>
          <Route path="/userProfile/:id/tenderlist" component={TenderListTab} />
        </>
      )}
    </Container>
  );
};

export default ProfileTab2;
