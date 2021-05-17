import styled from 'styled-components';
import { ITEM } from "styled-components";

interface Props {
  item: ITEM;
  buy: boolean;
}

const Container = styled.div`
  text-align: left;
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
`;

const ProductTitle = styled.div`
  font-size: 18px;
  padding: 48px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const ProductContent = styled.div`
  white-space: pre-wrap;
  padding: 40px 0px;
  line-height: 1.5;
`;

const ProductDetail = ({item, buy}: Props) => {
  return (
    <Container>
      <ProductTitle>
        상품정보
      </ProductTitle>
      <ProductContent>
        {buy ? item.isContent : item.ibContent}
      </ProductContent>
    </Container>
  )
}

export default ProductDetail;