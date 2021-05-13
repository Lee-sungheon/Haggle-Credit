import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/home/PruductList';
import { RouteComponentProps } from 'react-router-dom';
import { CATEGORYS } from '../../common/data';
import CategoryList from '../../components/search/CategoryList';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";

interface MatchParams {
  id: string;
}

interface LocationParams {
}

interface HistoryParams {
}

const Container = styled.div`
  padding: 145px 200px 0 200px;
  background-color: rgb(249, 249, 249);
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
`;

const FilterArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

const Filter = styled.div`
  font-size: 12px;
  display: flex;
  font-weight: bold;
`;

const FilterItem = styled.div`
  cursor: pointer;
  margin-right: 20px;
  position: relative;
  display: block;
  ::after {
    content: "";
    position: absolute;
    top: 3px;
    right: -10px;
    width: 1px;
    height: 12px;
    border-right: 1px solid rgb(204, 204, 204);
  }
`;

const LastItem = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
`;

const SearchPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const [buy, setBuy] = useState(true);
  const [filterIdx, setFilterIdx] = useState(0);
  const [search, setSearch] = useState(location.search.split('=')[1]);
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(commonActions.setIsSearch(true));
    return () => {
      dispatch(commonActions.setIsSearch(false));
    };
  }, [dispatch])
  useEffect(()=>{
    setSearch(decodeURI(decodeURIComponent(location.search.split('&')[0].split('=')[1])));
  }, [location])
  
  return (
    <Container>
      <ProductArea>
        <CategoryList search={search} categoryList={Object.keys(CATEGORYS)} />
        <TitleArea>
          <TitleText>
            {decodeURI(decodeURIComponent(search))} 검색결과
          </TitleText>
        </TitleArea>
        <FilterArea>
          <Filter>
            <FilterItem style={buy ? {color: '#ffceae'}:{}} onClick={() => setBuy(true)}>팝니다</FilterItem>
            <LastItem style={buy ? {}:{color: '#ffceae'}} onClick={() => setBuy(false)}>삽니다</LastItem>
          </Filter>
          <Filter>
            <FilterItem style={filterIdx === 0 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(0)}>최신순</FilterItem>
            <FilterItem style={filterIdx === 1 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(1)}>저가순</FilterItem>
            <LastItem style={filterIdx === 2 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(2)}>고가순</LastItem>
          </Filter>
        </FilterArea>
        <ProductList buy={buy} products={[]}/>
      </ProductArea>
    </Container>
  )
}

export default SearchPage;