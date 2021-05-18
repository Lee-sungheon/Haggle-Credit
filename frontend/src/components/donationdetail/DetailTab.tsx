import { useState, useRef } from 'react';
import styled from 'styled-components';
import ProductDetail from '../detail/ProductDetail';
import ProductQuestion from '../detail/ProductQuestion';
import StoreInfo from './StoreInfo';
import { ITEM } from "styled-components";

interface Props {
  item: ITEM;
}
const Container = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
  padding-bottom: 50px;
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

const DetailTab = ({item}: Props) => {
  const [tabId, setTabId] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const clickDetailHandler = (id: number) => {
    setTabId(id);
    if(null !== detailRef.current){
      window.scrollTo(0, detailRef.current.offsetTop - 140);
    }
  };
  const clickQuestionHandler = (id: number) => {
    setTabId(id);
    if(null !== questionRef.current){
      window.scrollTo(0, questionRef.current.offsetTop - 140);
    }
  };
  return (
    <Container>
      <TabContianer>
        <TabArea>
          {tabId === 0 ? (
            <ActTab onClick={() => clickDetailHandler(0)}>
              <p>상품정보</p>
            </ActTab>
          ) : (
            <Tab onClick={() => clickDetailHandler(0)}>
              <p>상품정보</p>
            </Tab>
          )}
          {tabId === 1 ? (
            <ActTab onClick={() => clickQuestionHandler(1)}>
              <p>상품문의</p>
            </ActTab>
          ) : (
            <Tab onClick={() => clickQuestionHandler(1)}>
              <p>상품문의</p>
            </Tab>
          )}
        </TabArea>
        <div ref={detailRef}>
          <ProductDetail item={item} buy={true}/>
        </div>
        <div ref={questionRef}>
          <ProductQuestion itemNo={item.isItemNo} />
        </div>
      </TabContianer>
      <StoreInfo item={item}/>
    </Container>
  );
};

export default DetailTab;
