import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ProductTab from './tabb/ProductTab';
import TransactionReviewTab from './tabb/TransactionReviewTab';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { USERDATA } from 'styled-components';

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
  height: 3vw;
  width: 13vw;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

const Tab = styled.div`
  height: 3vw;
  width: 13vw;
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

  useEffect(() => {
    console.log(window.location.pathname);
    console.log(`/userProfile/${userData.uNo}`);
  }, [userData]);
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
          <Route exact path="/userprofile/:id" component={ProductTab}></Route>
          <Route
            path="/userprofile/:id/transactionreview"
            component={TransactionReviewTab}
          ></Route>
        </>
      )}
    </Container>
  );
};

export default ProfileTab;
