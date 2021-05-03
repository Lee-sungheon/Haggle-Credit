import styled from 'styled-components';

const Container = styled.div`
  text-align: left;
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
  height: calc(100% - 50px);
`;

const ProductTitle = styled.div`
  font-size: 18px;
  padding: 48px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const ProductContent = styled.div`
  white-space: pre-wrap;
  margin: 40px 0px;
  line-height: 1.5;
`;

const ProductDetail = () => {
  return (
    <Container>
      <ProductTitle>
        상품정보
      </ProductTitle>
      <ProductContent      >
        모델명 : NT551EBE <br />
        cpu : i3 8145U <br />
        램 : 4GB <br />
        gpu : uhd 620 <br />
        저장공간 : ssd 100GB <br />
        하드나 메모리 추가로 달수있습니다 <br />
        윈도우 10 home 정품인증해드립니다! <br />
        구성품은 다있습니다 (충전기 , 가방 그외) <br />
        추가로 HDMI 포트로 TV에 꽂아서 영화같은거 보실분은 HDMI 포트 챙겨드리겠습니다~! <br />
        마우스도 원하시면 블랙,화이트 드리겠습니다~ <br />
        wifi 블루투스 다정상작동됩니다~
      </ProductContent>
    </Container>
  )
}

export default ProductDetail;