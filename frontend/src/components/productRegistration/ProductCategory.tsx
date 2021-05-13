import { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';
import { CATEGORYS } from '../../common/data';

const CategoryList = styled.ul`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 20px;
  list-style: none;
  overflow: auto;
  max-height: 40vh;
  background-color: white;
`;
const SubCategoryList = styled.ul`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 20px;
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
  padding-left: 15px;
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
    <div
      id="categorySection"
      style={{
        display: 'flex',
        padding: '25px 0',
        borderBottom: '1px solid gray',
      }}
    >
      <div
        style={{
          width: '180px',
          fontSize: '17px',
          fontWeight: 'bolder',
        }}
      >
        <p>
          카테고리<span style={{ color: 'red' }}>* </span>
        </p>
      </div>
      <div>
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
    </div>
  );
};

export default ProductCategory;

const CATEGORYLIST: string[] = Object.keys(CATEGORYS);
