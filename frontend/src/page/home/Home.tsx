import { useEffect } from 'react';
import styled from 'styled-components';
import Banner from '../../components/home/Banner';
import ProductList from '../../components/home/PruductList';

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <Container>
      <Banner/>
      <ProductArea>
        <h2>오늘의 상품 추천</h2>
        <ProductList buy={true}/>
      </ProductArea>
    </Container>
  );
};

export default Home;