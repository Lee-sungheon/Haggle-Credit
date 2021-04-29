import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/home/PruductList';
import { RouteComponentProps } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { CATEGORYS, IDXTOCATEGORY } from '../../common/data';
import MainCategory from '../../components/category/MainCategory';
import CategoryList from '../../components/category/CategoryList';

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

const CategoryContainer = styled.div`
  display: flex;
  color: rgb(33, 33, 33);
  align-items: center;
`;

const HomeArea = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  font-size: 12px;
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
        <CategoryContainer>
          <HomeArea>
            <HomeOutlinedIcon style={{fontSize: '18px'}}/>
            홈
          </HomeArea>
          <MainCategory category={category} categoryList={CATEGORYLIST} />
          {subCategory !== '' && <MainCategory category={subCategory} categoryList={CATEGORYS[category]}/>}
        </CategoryContainer>
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

const CATEGORYLIST: string[] = Object.keys(CATEGORYS);