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

const CategoryPage = ({match}: RouteComponentProps<MatchParams>) => {
  const [ category, setCategory ] = useState(match.params.name);
  const [ subCategory, setSubCategory] = useState('');
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
        <ProductList />
      </ProductArea>
    </Container>
  )
}

export default CategoryPage;