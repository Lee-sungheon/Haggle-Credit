import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from '../detail/ImageSlider';
import { ITEM, DONATION } from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface ProductInfoProps {
  item: ITEM;
  donation: DONATION;
}

const StyledLinearProgress = withStyles({
  root: {
    height: 6,
  },
  colorPrimary: {
    backgroundColor: "grey"
  },
  barColorPrimary: {
    backgroundColor: "#f5a21a"
  },
})(LinearProgress);

const Container = styled.div`
  display: flex;
  padding: 30px 0px;
`;

const ImgBox = styled.div`
  margin-right: 5%;
  flex-shrink: 0;
  width: 45%;
  height: 45%;
  border: 1px solid rgb(238, 238, 238);
  padding: 2px;
`;

const ProductInfoBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoArea = styled.div`
`;

const InfoTitlePrice = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
  width: 100%;
`;

const InfoTitle = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 600;
  line-height: 1.4;
`;

const InfoPrice = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const InfoText = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const DetailBox = styled.div`
  text-align: left;
  padding-top: 15px;
  color: rgb(33, 33, 33);
  letter-spacing: -0.5px;
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const ItemTitle = styled.div`
  position: relative;
  font-size: 14px;
  width: 90px;
  padding-left: 5px;
  color: rgb(153, 153, 153);
`;

const ItemContent = styled.div`
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  cursor: pointer;
  background-color: grey;
  color: white;
  position: relative;
  flex: 1 1 0%;
  font-weight: 600;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
`;

const ProductInfo = ({item, donation}: ProductInfoProps) => {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(()=>{
    if (donation?.idIngPrice && donation?.idEndPrice){
      setPercent(parseInt(String(donation.idIngPrice / donation.idEndPrice * 100)))
    }
  }, [donation.idEndPrice, donation.idIngPrice])

  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === percent) {
          return percent;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, percent);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [percent]);

  return (
    <Container>
      <ImgBox>
        <ImageSlider itemNo={item.isItemNo}/>
      </ImgBox>
      <ProductInfoBox>
        <InfoArea>
          <InfoTitlePrice>
            <InfoTitle>
              {item.isItemName}
            </InfoTitle>
            <InfoPrice>
              <InfoText>현재기부액 : </InfoText>
              <span style={{ color: 'red' }}>
                {String(donation?.idIngPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <InfoText>원</InfoText>
            </InfoPrice>
            <InfoPrice>
              <InfoText>{'목표기부액 : '}</InfoText>
              <span>{String(donation?.idEndPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              <InfoText>원</InfoText></span>
            </InfoPrice>
          </InfoTitlePrice>
        </InfoArea>
        <DetailBox style={{borderBottom: '1px solid rgb(238, 238, 238)'}}>
          <DetailItem>
            <ItemTitle>· 기부 참여수</ItemTitle><ItemContent>{String(donation.donationParticipant?.length).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명</ItemContent>
          </DetailItem>
          <DetailItem>
            <ItemTitle>· 목표 달성률</ItemTitle>
            <ItemContent>
              <StyledLinearProgress variant="determinate" value={progress} style={{width: '150px'}} />
              <span style={{color: '#f5a21a', paddingLeft: '7px', fontWeight: 700 }}>{percent}%</span>
            </ItemContent>
          </DetailItem>
        </DetailBox>
        <DetailBox>
          <DetailItem>
            <ItemTitle>· 상품상태</ItemTitle><ItemContent>{item.isUsedStatus}</ItemContent>
          </DetailItem>
          <DetailItem>
            <ItemTitle>· 환불여부</ItemTitle><ItemContent>환불불가능</ItemContent>
          </DetailItem>
          <DetailItem>
            <ItemTitle>· 배송비</ItemTitle><ItemContent>별도</ItemContent>
          </DetailItem>
        </DetailBox>
        <ButtonBox>
          <StyledButton 
            style={{ backgroundColor: '#f5a21a' }}
            onClick={() => window.open(`../donation/${item.isItemNo}`, '_blank')}
          >
            기부 참여 (100C)
          </StyledButton>
        </ButtonBox>
      </ProductInfoBox>
    </Container>
  )
}

export default ProductInfo;
