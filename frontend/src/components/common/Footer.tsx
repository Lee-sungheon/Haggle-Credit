import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

const Container = styled.div<{ isPurchase: boolean }>`
  margin-top: 50px;
  padding: 30px 200px;
  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-family: "Noto Sans KR", sans-serif;
  display: ${({ isPurchase }) => (isPurchase ? 'none' : 'block')};
`;

const Header = styled.div`
  margin-bottom: 36px;
`;

const HeaderTitle = styled.div`
  margin-bottom: 4px;
`;

const HeaderContent = styled.div`
  line-height: 1.57;
  letter-spacing: -0.8px;
  font-weight: 600;
  padding-top: 10px;
  padding-left: 5px;
`;

const ContentArea = styled.div`
  font-size: 13px;
  color: rgb(153, 153, 153);
`;

const Footer = () => {
  const isPurchase = useSelector((state: RootState) => state.common.isPurchase);
  return (
    <Container isPurchase={isPurchase}>
      <Header>
        <HeaderTitle>
          <img
            src={'../images/logo3.png'}
            style={{ height: '44px', marginRight: '10px' }}
            alt="logo"
          />
        </HeaderTitle>
        <HeaderContent>
          Haggle Credit으로 중고 거래를 쉽고 즐겁게
        </HeaderContent>
      </Header>
      <ContentArea>
        <p>Egemmerce : 김동빈 | 김지현 | 손동민 | 이성헌 | 임호빈</p>
        <p style={{paddingTop: '15px'}}>고객/판매자 센터: 1234-5678 | FAX: 054-123-4567</p>
        <p>운영시간: 전화문의: 9시~18시(주말/공휴일 제외)</p>
        <p>E-MAIL: help@ssafy.com</p>
        <p style={{paddingTop: '15px'}}>모든 상품들에 대하여, Haggle Credit은 통신판매중개자로서 중고거래마켓 Haggle Credit의 거래 당사자가 아니며, 입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.</p>
        <p style={{paddingTop: '15px'}}>Copyright ⓒ HaggleCredit Inc. All rights reserved.</p>
      </ContentArea>
    </Container>
  )
}

export default Footer;