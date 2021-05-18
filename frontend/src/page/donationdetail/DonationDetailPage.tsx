// import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled, { ITEM } from 'styled-components';
import DetailTab from '../../components/donationdetail/DetailTab';
import ProductInfo from '../../components/donationdetail/ProductInfo';

interface MatchParams {
  id: string;
}

interface LocationParams {
  item: ITEM;
  buy: boolean;
}

interface HistoryParams {
}

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const DonationDetailPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  // const [item, setItem] = useState<ITEM>({});
  return (
    <Container>
      <ProductInfo item={tempItem}/>
      <DetailTab item={tempItem}/>
    </Container>
  )
}

export default DonationDetailPage;

const tempItem = {
  "isNo": 6000,
  "isItemNo": 6000,
  "isUserNo": 1,
  "isItemName": "LG 27EA53VQ 용 정보보호액정필름-파인피아[무료배송]",
  "isCategoryMain": "디지털·가전-400",
  "isCategorySub": "PC·모니터·주변기기-40004",
  "isContent": "훌륭한 기기입니다. 연락 편하게주세요",
  "isUsedStatus": "중고",
  "isCoolPrice": 65000,
  "isAuctionInitPrice": 42200,
  "isDealPrice": 0,
  "isDealUserNo": 0,
  "isDealAddress": 0,
  "isStartDate": null,
  "isEndDate": "2021-05-31",
  "isEventAgree": "FALSE",
  "isAuctionIngPrice": 42200,
  "ipNo": 35914,
  "ipItemNo": 6000,
  "ipValue": "//item.ssgcdn.com/30/88/07/item/1000030078830_i1_290.jpg",
  "apItemNo": 0,
  "joinerCnt": 0
}