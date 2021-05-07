import styled from 'styled-components';

const ProductTitle = styled.div`
  position: relative;
  display: flex;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 25px 0;
`;

const ProductSummaryArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
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

const ItemDescription = () => {
  return (
    <ProductTitle>
      <img src="https://seoul-p-studio.bunjang.net/product/153198314_1_1620022165_w100.jpg" alt="" 
      style={{width: '150px', height: '150px', borderRadius: '2px'}}/>
      <ProductSummaryArea>
        <ProductName>디지털 도어록</ProductName>
        <DetailItem>
          <ItemTitle>· 판매마감</ItemTitle><ItemContent>{'2021-05-21 23:59'}</ItemContent>
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
      </ProductSummaryArea>
    </ProductTitle>
  )
}

export default ItemDescription;