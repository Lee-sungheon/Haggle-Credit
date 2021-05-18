import styled, {ITEM} from 'styled-components';

interface Props {
  desc: ITEM;
  buy: boolean;
}

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

const ItemDescription = ({desc, buy}: Props) => {
  return (
    <ProductTitle>
      <img src={desc.ipValue !== undefined ? desc.ipValue : '../../images/no_image.gif'} alt="" 
      style={{width: '150px', height: '150px', borderRadius: '2px'}}/>
      <ProductSummaryArea>
        <ProductName>{buy ? desc.isItemName : desc.ibName}</ProductName>
        <DetailItem>
          <ItemTitle>· 판매마감</ItemTitle><ItemContent>{buy ? desc.isEndDate : desc.ibEndDate} 24:00</ItemContent>
        </DetailItem>
        <DetailItem>
          <ItemTitle>· 상품상태</ItemTitle><ItemContent>{buy ? desc.isUsedStatus : '새상품'}</ItemContent>
        </DetailItem>
        <DetailItem>
          <ItemTitle>· 환불여부</ItemTitle><ItemContent>{'환불불가능'}</ItemContent>
        </DetailItem>
        <DetailItem>
          <ItemTitle>· 배송비</ItemTitle><ItemContent>{'별도'}</ItemContent>
        </DetailItem>
      </ProductSummaryArea>
    </ProductTitle>
  )
}

export default ItemDescription;