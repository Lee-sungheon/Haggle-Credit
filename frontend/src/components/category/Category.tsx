import styled from 'styled-components';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MainCategory from './MainCategory';
import { CATEGORYS } from '../../common/data';

interface CategoryProps {
  category: string;
  subCategory: string;
}

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

const Category = ({category, subCategory}: CategoryProps) => {

  return (
    <CategoryContainer>
      <HomeArea>
        <HomeOutlinedIcon style={{fontSize: '18px'}}/>
        홈
      </HomeArea>
      <MainCategory category={category} categoryList={CATEGORYLIST} />
      {subCategory !== '' && <MainCategory category={subCategory} categoryList={CATEGORYS[category]}/>}
    </CategoryContainer>
  )
}

export default Category;

const CATEGORYLIST: string[] = Object.keys(CATEGORYS);