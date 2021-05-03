import { useState } from 'react';
import styled from 'styled-components';
import ProductDetail from './ProductDetail';

const Container = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
`;

const TabContianer = styled.div`
  width: 100%;
  flex: 1 1 0%;
`;

const TabArea = styled.div`
  display: flex;
  height: 50px;
`;

const ActTab = styled.div`
cursor: pointer;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  display: flex;
  border-left: 1px solid rgb(33, 33, 33);
  border-top: 1px solid rgb(33, 33, 33);
  border-right: 1px solid rgb(33, 33, 33);
  border-bottom: 1px solid rgb(255, 255, 255);
  background: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  font-weight: 600;
`;

const Tab = styled.div`   
  cursor: pointer;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 1px solid rgb(238, 238, 238);
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(33, 33, 33);
  background: rgb(250, 250, 250);
  color: rgb(136, 136, 136);
  font-weight: 600;
`;

const StoreContainer = styled.div`
  width: 330px;
`;

const StoreTab = styled.div`
  height: 50px;
  border-bottom: 1px solid rgb(33, 33, 33);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
`;

const StoreArea = styled.div`
  height: calc(100% - 50px);
  border-right: 1px solid rgb(238, 238, 238);
  padding: 0px 32px 118px;
  position: relative;
`;

const StoreTitle = styled.div`
  font-size: 18px;
  padding: 48px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
  text-align: left;
`;

const DetailTab = () => {
  const [tabId, setTabId] = useState(0);
  const clickHandler = (id: number) => {
    setTabId(id);
  };
  return (
    <Container>
      <TabContianer>
        <TabArea>
          {tabId === 0 ? (
            <ActTab onClick={() => clickHandler(0)}>
              <p>상품정보</p>
            </ActTab>
          ) : (
            <Tab onClick={() => clickHandler(0)}>
              <p>상품정보</p>
            </Tab>
          )}
          {tabId === 1 ? (
            <ActTab onClick={() => clickHandler(1)}>
              <p>상품문의</p>
            </ActTab>
          ) : (
            <Tab onClick={() => clickHandler(1)}>
              <p>상품문의</p>
            </Tab>
          )}
        </TabArea>
        <div>
          <ProductDetail />
        </div>
        <div>
          <div>
            상품문의
          </div>
          <div>
            등록된 문의가 없습니다.
          </div>
        </div>
      </TabContianer>
      <StoreContainer>
        <StoreTab />
        <StoreArea>
          <StoreTitle>
            상점정보
          </StoreTitle>
        </StoreArea>
      </StoreContainer>
    </Container>
  );
};

export default DetailTab;
