import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from "react-router";
import CategoryListItem from "./CategoryListItem";

interface CategoryListProps {
  category: string;
  categoryList: string[];
  buy: boolean;
}

const Container = styled.div`
  margin-top: 20px;
  height: 146px;
  width: 100%;
  overflow: hidden;
`;

const CategoryListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ItemArea = styled.div`
  cursor: pointer;
  height: 48px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(238 238 238) 0px 1px 0px 0px;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 500;
  margin: 0.05%;
    width: 13.9%;
    padding: 0px 3%;
  @media (max-width: 1240px) {
    width: 18.9%;
  }
  @media (max-width: 950px) {
    width: 27.2%;
  }
  @media (max-width: 414px) {
    width: 43.9%;
  }
`;

const CategoryList = ({ category, categoryList, buy }: CategoryListProps) => {
  const history = useHistory();
  return(
    <Container>
      <CategoryListContainer>
        <ItemArea
          onClick={() => {
            history.push({
              pathname: `/category/${category}`,
            });
          }}
          style={{ fontWeight: 900 }}
        >
          전체보기
          <ChevronRightIcon />
        </ItemArea>
        {categoryList !== undefined && categoryList.map((subCategory, idx)=>(
          <CategoryListItem key={idx} category={category} subCategory={subCategory} buy={buy}/>
        ))}
      </CategoryListContainer>
    </Container>
  );
} 

export default CategoryList;