import { useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/event/PruductList';

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const EventPage = () => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <Container>
      <ProductArea>
        <h2>이벤트 상품</h2>
        <ProductList buy={true}/>
      </ProductArea>
    </Container>
  );
}

export default EventPage;