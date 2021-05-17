import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router";
import { callApiCategoryCount, callApiCategorySellCount } from '../../api/ProductApi';

interface Props {
  category: string;
  subCategory: string;
  buy: boolean;
}

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

const CategoryListItem = ({category, subCategory, buy}: Props) => {
  const history = useHistory();
  const [cnt, setCnt] = useState(0);
  
  useEffect(()=>{
    const fetchData = async() => {
      if (buy) {
        const result = await callApiCategoryCount(category, subCategory);
        setCnt(result);
      } else {
        const result = await callApiCategorySellCount(category, subCategory);
        setCnt(result);
      }
    }
    fetchData();
  }, [buy, category, subCategory]);

  return (
    <ItemArea 
      onClick={() => {
        history.push({
          pathname: `/category/${subCategory}`,
        });
      }}>
      {subCategory.split('-')[0]}
      <CountText>{cnt}</CountText>
    </ItemArea>
  )
}

export default CategoryListItem;