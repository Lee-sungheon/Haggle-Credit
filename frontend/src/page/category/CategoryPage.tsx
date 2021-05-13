import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/home/PruductList';
import { RouteComponentProps } from 'react-router-dom';
import { CATEGORYS, IDXTOCATEGORY } from '../../common/data';
import CategoryList from '../../components/category/CategoryList';
import Category from '../../components/category/Category';

interface MatchParams {
  name: string;
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

const CategoryPage = ({match}: RouteComponentProps<MatchParams>) => {
  const [category, setCategory] = useState(match.params.name);
  const [subCategory, setSubCategory] = useState('');
  const [buy, setBuy] = useState(true);
  const [filterIdx, setFilterIdx] = useState(0);

  useEffect(()=>{
    window.scrollTo(0, 0);
    const idx: number = parseInt(match.params.name.split('-')[1]);
    if (idx <= 1200) {
      setCategory(match.params.name);
      setSubCategory('');
    } else {
      if (idx >= 100000) {
        setCategory(IDXTOCATEGORY[String(idx).slice(0,4)]);
      } else {
        setCategory(IDXTOCATEGORY[String(idx).slice(0,3)]);
      }
      setSubCategory(match.params.name);
    }
  }, [match.params.name])
  return (
    <Container>
      <ProductArea>
        <Category category={category} subCategory={subCategory} />
        {subCategory === '' && <CategoryList category={category} categoryList={CATEGORYS[category]} />}
        <TitleArea>
          <TitleText>
            {subCategory === '' ? category.split('-')[0] : subCategory.split('-')[0]} 상품 추천
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

export default CategoryPage;