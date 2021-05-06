import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";

const Container = styled.div`
  min-width: 320px;
  max-width: 640px;
  min-height: 100vh;
  margin: 0px auto;
  box-sizing: border-box;
  padding-top: 70px;
`;

const Header = styled.div`
  position: sticky;
  top: 0px;
  min-height: 3.125rem;
  line-height: 3.125rem;
  font-weight: bold;
  text-align: center;
  color: rgb(30, 29, 41);
  background-color: rgb(255, 255, 255);
  z-index: 2;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTIxIDcuNzA3bDYuNzc4IDYuNzc3IDYuNzc5LTYuNzc3YTEgMSAwIDAgMSAxLjQxNCAxLjQxNEwxNy4zMTMgMTUuOWw2Ljc3OSA2Ljc3OWExIDEgMCAwIDEtMS40MTQgMS40MTRsLTYuNzc5LTYuNzc5LTYuNzc4IDYuNzc5YTEgMSAwIDEgMS0xLjQxNC0xLjQxNGw2Ljc3Ny02Ljc3OS02Ljc3Ny02Ljc3OGExIDEgMCAxIDEgMS40MTQtMS40MTR6Ii8+Cjwvc3ZnPgo=) center center no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const MainArea = styled.div`
  position: relative;
  box-sizing: border-box;
  line-height: 1.5;
`;

const ProductTitle = styled.div`
  position: relative;
  display: flex;
  background: rgb(255, 255, 255);
  padding: 0.5rem;
  border-bottom: 1px solid rgb(220, 219, 228);
`;

const ProductSummaryArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;

const ProductTime = styled.div`
  font-size: 1rem;
  line-height: 1;
  margin-top: 6px;
`;

const ProductName = styled.div`
  font-size: 16px;
  color: rgb(30, 29, 41);
  font-weight: bold;
`;

const DetailItem = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ItemTitle = styled.div`
  position: relative;
  font-size: 14px;
  padding-right: 10px;
  color: rgb(153, 153, 153);
`;

const ItemContent = styled.div`
  font-size: 14px;
  position: relative;
  display: flex;
`;

const PurchasePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    return () => {
      dispatch(commonActions.setIsIndex(false));
    };
  }, [dispatch]);
  return (
    <Container>
      <Header>
        <h3>입찰하기</h3>
        <CloseButton onClick={() => window.close()}/>
      </Header>
      <MainArea>
        <ProductTitle>
          <img src="https://seoul-p-studio.bunjang.net/product/153198314_1_1620022165_w100.jpg" alt="" 
          style={{width: '150px', height: '150px', borderRadius: '2px'}}/>
          <ProductSummaryArea>
            <ProductName>디지털 도어록</ProductName>
            <DetailItem>
              <ItemTitle>· 경매마감일자</ItemTitle><ItemContent>{'2021-05-21 23:59'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 상품상태</ItemTitle><ItemContent>{'중고'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 교환여부</ItemTitle><ItemContent>{'교환불가능'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 배송비</ItemTitle><ItemContent>{'별도'}</ItemContent>
            </DetailItem>
            {/* <ProductPrice>{'120000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              <span style={{marginLeft: '2px', fontSize: '13px'}}>원</span>
            </ProductPrice> */}
          </ProductSummaryArea>
        </ProductTitle>
      </MainArea>
    </Container>
  );
}
export default PurchasePage;