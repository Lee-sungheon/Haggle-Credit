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
  height: 272px;
  width: 100%;
  background-color: #fff;
  background-image: url('//beautifulfund.org/wp-content/themes/beautifulfund/img/aboutus/submain05_bg.png');
  background-size: 100%;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  color: #757575;
  font-family: 'nanum-square-r','Noto Sans KR',sans-serif !important;
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const TitleArea = styled.h2`
  font-size: 25px;
  padding-bottom: 20px !important;
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
          <DescriptionContainer>
            <TitleArea>
              Haggle Credit은<br />기부문화를 확산하고<br />소외된 이웃과 공익활동을 지원합니다.
            </TitleArea>
          </DescriptionContainer>
        </IntroContainer>
        {/* <ProductList buy={true}/> */}
      </ProductArea>
    </Container>
  );
}

export default EventPage;