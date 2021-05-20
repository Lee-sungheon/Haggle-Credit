import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductTab from './tab/ProductTab';
import TransactionReviewTab from './tab/TransactionReviewTab';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Body = styled.div`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-flex;
  text-align: center;
`;

const ActTab = styled.div`
  height: 3vw;
  width: 50%;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  height: 3vw;
  width: 50%;
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
  const clickHandler = (url: string) => {
    history.push({
      pathname: url,
    });
  };

  return (
    <Container>
      {userData.uNo && (
        <>
          <Body>
            {window.location.pathname === `/userprofile/${userData.uNo}` ? (
              <ActTab
                onClick={() => clickHandler(`/userprofile/${userData.uNo}`)}
              >
                <p>상품</p>
              </ActTab>
            ) : (
              <Tab
                style={{}}
                onClick={() => clickHandler(`/userprofile/${userData.uNo}`)}
              >
                <p>상품</p>
              </Tab>
            )}
            {window.location.pathname ===
            `/userprofile/${userData.uNo}/transactionreview` ? (
              <ActTab
                onClick={() =>
                  clickHandler(`/userprofile/${userData.uNo}/transactionreview`)
                }
              >
                <p>거래리뷰</p>
              </ActTab>
            ) : (
              <Tab
                onClick={() =>
                  clickHandler(`/userprofile/${userData.uNo}/transactionreview`)
                }
              >
                <p>거래 리뷰</p>
              </Tab>
            )}
          </Body>
          <Route
            exact
            path="/userprofile/:id"
            render={() => <ProductTab userData={userData} />}
          />{' '}
          <Route
            path="/userprofile/:id/transactionreview"
            render={() => <TransactionReviewTab userData={userData} />}
          />
        </>
      )}
    </Container>
  );
};

export default ProfileTab;
