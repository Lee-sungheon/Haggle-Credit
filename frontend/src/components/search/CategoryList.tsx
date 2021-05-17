import styled from 'styled-components';
import { useHistory } from "react-router";

interface CategoryListProps {
  categoryList: CATEGORY[];
  search: string;
  setCategory: Function;
  itemNum: number;
  setCategoryCnt: Function;
}

interface CATEGORY {
  isCategoryMain: string;
  cnt: number;
}

const Container = styled.div<{ len: number }>`
  margin-top: 20px;
  height: ${({len}) => (len+1) * 48}px;
  width: 100%;
  overflow: hidden;
`;

const CategoryTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0.05%;
  padding: 0px 3%;
  background: rgb(255, 255, 255);
  box-shadow: rgb(238 238 238) 0px 1px 0px 0px;
  font-size: 14px;
  font-weight: bold;
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

const CountText = styled.div`
  color: rgb(204, 204, 204);
  margin-left: 5px;
  flex-shrink: 0;
`;

const CategoryList = ({ categoryList, search, setCategory, itemNum, setCategoryCnt }: CategoryListProps) => {
  const history = useHistory();
  const list = [];
  for (let i=0 ; i<5-categoryList.length%5 - 1 ; i++){
    list.push(i);
  }
  return(
    <Container len={categoryList.length / itemNum + 1}>
      <CategoryListContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        {categoryList !== undefined && categoryList.map((item, idx)=>(
          <ItemArea 
            key={idx}
            onClick={() => {
              history.push(`/search?q=${search}&category=${item.isCategoryMain}`);
              setCategory(item.isCategoryMain);
              setCategoryCnt(item.cnt);
            }}
            >
            {item.isCategoryMain.split('-')[0]}
            <CountText>{item.cnt}</CountText>
          </ItemArea>
        ))}
        {categoryList.length < 5 && list.map((item) => (
        <>
          <ItemArea key={item}/>
        </>))}
      </CategoryListContainer>
    </Container>
  );
} 

export default CategoryList;