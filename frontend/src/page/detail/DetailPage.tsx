import { useEffect } from 'react';
import styled from 'styled-components';
import Category from '../../components/category/Category';
import DetailTab from '../../components/detail/DetailTab';
import ProductInfo from '../../components/detail/ProductInfo';
import { RouteComponentProps } from 'react-router-dom';
import { ITEM } from "styled-components";

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

const CategoryBox = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid black;
`;

const DetailPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const item = location.state.item;
  const buy = location.state.buy;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <Container>
      <CategoryBox>
        {item.isCategoryMain !== undefined && item.isCategorySub !== undefined && <Category category={item.isCategoryMain} subCategory={item.isCategorySub} />}
      </CategoryBox>
      <ProductInfo item={item} buy={buy}/>
      <DetailTab item={item} buy={buy}/>
    </Container>
  )
}

export default DetailPage;