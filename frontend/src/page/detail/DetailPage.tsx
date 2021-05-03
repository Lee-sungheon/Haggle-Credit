import { useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/category/Category';
import DetailTab from '../../components/detail/DetailTab';
import ProductInfo from '../../components/detail/ProductInfo';
import { RouteComponentProps } from 'react-router-dom';

interface ITEM {
  id: number,
  title: string,
  url: string,
  price: number,
}

interface MatchParams {
  id: string;
}

interface LocationParams {
  item: ITEM;
}

interface HistoryParams {
}

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const CategoryBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid black;
`;

const DetailPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const item = location.state.item;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Container>
      <CategoryBox>
        <Category category={'여성의류-100'} subCategory={''} />
      </CategoryBox>
      <ProductInfo item={item}/>
      <DetailTab />
    </Container>
  )
}

export default DetailPage;