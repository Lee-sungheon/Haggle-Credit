import { useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './PruductList';
const TabName = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 0 10px;
  text-align: left;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
`;
const ProductTab = () => {
  return (
    <>
      <TabName>상품</TabName>
      <ProductList />
    </>
  );
};

export default ProductTab;
