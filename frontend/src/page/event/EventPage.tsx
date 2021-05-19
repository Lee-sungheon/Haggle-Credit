import { useEffect } from 'react';
import styled from 'styled-components';
import DonationList from '../../components/event/DonationList';
import { callApiUpdateDonation } from '../../api/DonationApi';

const Container = styled.div`
  padding: 95px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 95px 40px 0 40px;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 20px;
  background-image: url(../images/banner3.jpg);
  background-size: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
  color: #757575;
  font-family: 'nanum-square-r','Noto Sans KR',sans-serif !important;
  font-weight: 700;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ContentContainer = styled.ul`
  height: 110px;
  @media (max-width: 1248px) {
    height: 130px;
  }
  @media (max-width: 1024px) {
    height: 240px;
  }
  margin: 0 auto;
  font-size: 15px;
  padding: 20px;
  padding-bottom: 30px !important;
  list-style: none;
`;

const ContentArea = styled.li`
  height: 140px;
  width: 25%;
  @media (max-width: 1248px) {
    height: 160px;
    padding: 20px 10px;
    font-size: 13px;
  }
  @media (max-width: 1024px) {
    width: 50%;
    height: 120px;
    font-size: 14px;
  }
  padding: 20px;
  background-position: 20px 33px;
  font-size: 14px;
  background:rgba(255,255,255,0.8) no-repeat;
  color: #4d4740;
  text-align: left;
  word-break: keep-all;
  line-height: 1.5;
  float: left;
  position: relative;
  min-height: 1px;
  box-sizing: border-box;
  border: 0.5px solid rgba(0,0,0,0.1);
`;

const Number = styled.span`
  font-weight: 700;
  color: #f5a21a;
  line-height: 30px;
  font-size: 20px;
  margin-top: -3px;
  width: 12%;
  display: block;
  float: left;
`;

const Content = styled.span`
  width: 85%;
  display: block;
  float: left;
`;

const TitleArea = styled.h2`
  color: white;
  font-size: 25px;
  padding-bottom: 20px !important;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const EventPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
    callApiUpdateDonation();
  }, [])
  return (
    <Container>
      <ProductArea>
        <IntroContainer>
          <DescriptionContainer>
            <TitleArea>
              Haggle Credit은<br />기부문화를 확산하고<br />소외된 이웃과 공익활동을 지원합니다.
            </TitleArea>
            <div style={{textAlign: 'left', color: '#f5a21a', fontSize: '20px', paddingLeft: '20px'}}>
              What about Haggle's Donation?</div>
            <ContentContainer>
              <ContentArea>
                <Number>1</Number>
                <Content>기부문화 확산을 위한 캠페인 사업을 전개합니다.</Content>
              </ContentArea>
              <ContentArea>
                <Number>2</Number>
                <Content>해당 페이지에서 거래되는 크레딧은 모두 자선단체에 기부됩니다.</Content>
              </ContentArea>
              <ContentArea>
                <Number>3</Number>
                <Content><span style={{color: 'blue'}}>{'<기부자>'}</span> 팔리지 않는 경매물품 기부를 통한 자선활동 참여로 기부자에 이름을 올려보세요.</Content>
              </ContentArea>
              <ContentArea>
                <Number>4</Number>
                <Content><span style={{color: 'crimson'}}>{'<참여자>'}</span>100 크레딧으로 기부에 참여하고 원하는 물건을 얻을 수 있는 기회를 얻어보세요.</Content>
              </ContentArea>
            </ContentContainer>
          </DescriptionContainer>
        </IntroContainer>
      </ProductArea>
      <DonationList />
    </Container>
  );
}

export default EventPage;