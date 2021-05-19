import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled, { ITEM, DONATION } from 'styled-components';
import DetailTab from '../../components/donationdetail/DetailTab';
import ProductInfo from '../../components/donationdetail/ProductInfo';
import { callApiItemDetail } from '../../api/ProductApi';
import { callApiDetailDonation } from '../../api/DonationApi';

interface MatchParams {
  id: string;
}

interface LocationParams {
  item: ITEM;
  donation: DONATION;
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
  const [item, setItem] = useState<ITEM>({});
  const [donation, setDonation] = useState<DONATION>({});
  useEffect(()=>{
    window.scrollTo(0, 0);
    const fetchData = async() => {
      const data: ITEM = await callApiItemDetail(parseInt(location.pathname.split('/')[2]));
      setItem(data);
      if (data.isItemNo !== undefined) {
        const data2 = await callApiDetailDonation(data.isItemNo);
        setDonation(data2);
      }
    }
    fetchData();
    function listener(event: StorageEvent) {
      if (event.storageArea !== localStorage) return;
      fetchData();
    }
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    }
  }, [location.pathname])
  return (
    <Container>
      <ProductInfo item={item} donation={donation}/>
      <DetailTab item={item}/>
    </Container>
  )
}

export default DonationDetailPage;