import { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import { CATEGORYS } from '../../common/data';
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;
const CategoryList = styled.ul`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 10px;
  list-style: none;
  overflow: auto;
  max-height: 40vh;
  background-color: white;
`;
const SubCategoryList = styled.ul`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 10px;
  list-style: none;
  overflow: auto;
  max-height: 40vh;
  background-color: white;
`;
const SubCategoryItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 15px;
  height: 30px;
  font-weight: 600;
  background-color: white;
  :hover {
    color: ${({ theme }) => theme.color.main};
    text-decoration: underline;
  }
`;
const CategoryItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 0 15px;
  height: 30px;
  font-weight: 600;
  background-color: white;
  :hover {
    color: white;
    background-color: ${({ theme }) => theme.color.main};
  }
`;

interface ProductCategoryProps {
  onIsCategoryMain: (name: any) => void;
  onIsCategorySub: (name: any) => void;
}
const ProductCategory = ({
  onIsCategoryMain,
  onIsCategorySub,
}: ProductCategoryProps) => {
  const categoryRef = useRef<HTMLDivElement>(null);

  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  useEffect(() => {
    onIsCategoryMain(mainCategory);
    setSubCategory('');
  }, [mainCategory]);

  useEffect(() => {
    onIsCategorySub(subCategory);
  }, [subCategory]);

  const enterEvent = () => {
    if (null !== categoryRef.current) {
      if (
        categoryRef.current.style.display === '' ||
        categoryRef.current.style.display === 'none'
      ) {
        categoryRef.current.style.display = 'block';
      }
    }
  };
  return (
    <Container id="categorySection">
      <div
        style={{
          width: '20%',
          fontSize: '17px',
          fontWeight: 'bolder',
          minWidth: '130px',
        }}
      >
        카테고리<span style={{ color: 'red' }}>* </span>
      </div>
      <div
        style={{
          width: '80%',
          paddingLeft: '20px',
          minWidth: '650px',
        }}
      >
        <div>
          <div style={{ display: 'flex' }}>
            <div>
              <CategoryList>
                {CATEGORYLIST.map((category, idx) => (
                  <CategoryItem
                    key={idx}
                    onMouseEnter={() => enterEvent()}
                    onClick={() => {
                      setMainCategory(category);
                    }}
                    style={
                      category === mainCategory
                        ? { color: 'white', backgroundColor: '#ffceae' }
                        : {}
                    }
                  >
                    {category.split('-')[0]}
                  </CategoryItem>
                ))}
              </CategoryList>
            </div>
            <div>
              {mainCategory !== '' && (
                <SubCategoryList>
                  {CATEGORYS[mainCategory].map((category, idx) => (
                    <SubCategoryItem
                      key={idx}
                      onClick={() => {
                        setSubCategory(category);
                      }}
                      style={
                        category === subCategory
                          ? { textDecoration: 'underline', color: '#ffceae' }
                          : {}
                      }
                    >
                      {category.split('-')[0]}
                    </SubCategoryItem>
                  ))}
                </SubCategoryList>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCategory;

const CATEGORYLIST: string[] = Object.keys(CATEGORYS);
