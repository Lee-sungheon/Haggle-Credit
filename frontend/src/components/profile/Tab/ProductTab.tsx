import { useEffect } from 'react';
import styled from 'styled-components';
import ProductList from './PruductList';
const Container = styled.div``;

const ProductTab = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: '30px',
          marginBottom: '10px',
          padding: '0 10px',

          textAlign: 'left',
          height: '50px',
          borderBottom: '1px solid #bdbdbd',
        }}
      >
        상품
      </div>

      <ProductList />
    </Container>
  );
};

export default ProductTab;
