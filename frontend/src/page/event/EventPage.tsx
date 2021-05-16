import { useEffect } from 'react';
import styled from 'styled-components';
// import ProductList from '../../components/event/PruductList';
// import { ITEM } from "styled-components";

const Container = styled.div`
  padding: 125px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 125px 40px 0 40px;
  }
`;

const IntroContainer = styled.div`
  height: 170px;
  background-color: #fff;
  background-image: url('//beautifulfund.org/wp-content/themes/beautifulfund/img/aboutus/submain05_bg.png');
  background-size: 100%;
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
        <h2>이벤트 기부</h2>
        <IntroContainer>

        </IntroContainer>
        {/* <ProductList buy={true}/> */}
      </ProductArea>
    </Container>
  );
}

export default EventPage;