import styled from 'styled-components';
import Banner from '../../components/home/Banner';
import ProductList from '../../components/home/PruductList'

const Container = styled.div`
  padding: 145px 200px 0 200px;
  font-family: Bazzi;
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const Home = () => {
  return (
    <Container>
      <Banner/>
      <ProductArea>
        <h2>오늘의 상품 추천</h2>
        <ProductList />
      </ProductArea>
    </Container>
  );
};

export default Home;