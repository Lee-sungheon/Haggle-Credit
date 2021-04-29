import { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

interface MainCategoryProps {
  category: string;
  categoryList: string[];
}

const MainCategoryArea = styled.div`
  display: flex;
  align-items: center;
`;

const MainCategoryBox = styled.div`
  width: 158px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  height: 28px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  font-size: 12px;
  color: rgb(77, 77, 77);
  background: rgb(255, 255, 255);
`;

const MainCategoryContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px 0px 10px;
  position: relative;
  width: 100%;
`;

const MainCategoryList = styled.div`
  position: absolute;
  top: 27px;
  left: -1px;
  width: 100%;
  background: rgb(255, 255, 255);
  max-height: 280px;
  overflow-y: auto;
  z-index: 3;
  border-left: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  border-right: 1px solid rgb(238, 238, 238);
  display: none;
`;

const MainCategoryItem = styled.div`
  width: 100%;
  height: 28px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #ffceae;
  }
`;

const MainCategory = ({ category, categoryList }: MainCategoryProps) => {
  const history = useHistory();
  const mainRef = useRef<HTMLDivElement>(null);
  
  const mainEnterEvent = useCallback(() => {
    if (null !== mainRef.current) {
      if (
        mainRef.current.style.display === '' ||
        mainRef.current.style.display === 'none'
      ) {
        mainRef.current.style.display = 'block';
      }
    }
  }, []);
  const mainLeaveEvent = useCallback(() => {
    if (null !== mainRef.current) {
      if (mainRef.current.style.display === 'block') {
        mainRef.current.style.display = 'none';
      }
    }
  }, []);

  return (
    <MainCategoryArea>
      <ChevronRightIcon style={{fontSize: '18px', margin: '0 10px'}}/>
      <MainCategoryBox onMouseEnter={mainEnterEvent} onMouseLeave={mainLeaveEvent}>
        <MainCategoryContent>
          {category.split('-')[0]}
          <KeyboardArrowDownIcon 
            style={{ 
              position: 'absolute', 
              right: '5px', 
              top:'50%', 
              transform: 'translateY(-50%)',
            }}
          />
        </MainCategoryContent>
        <MainCategoryList ref={mainRef}>
          {categoryList.length > 0 && categoryList.map((item, idx) => (
            <MainCategoryItem 
              style={item===category ? {color: '#ffceae'}:{}}
              key={idx}
              onClick={() => {
                history.push({
                  pathname: `/category/${item}`,
                });
                mainLeaveEvent();
              }}
              >
              {item.split('-')[0]}
            </MainCategoryItem>
          ))}
        </MainCategoryList>
      </MainCategoryBox>
    </MainCategoryArea>
  )
}

export default MainCategory;