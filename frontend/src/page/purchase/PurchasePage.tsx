import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { theme } from '../../styles/theme';
import moment from 'moment';

const Container = styled.div`
  min-width: 320px;
  max-width: 640px;
  min-height: 100vh;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0 12px;
`;

const Header = styled.div`
  position: sticky;
  padding: 5px 0;
  top: 0px;
  min-height: 3.125rem;
  line-height: 3.125rem;
  font-weight: bold;
  text-align: center;
  color: rgb(30, 29, 41);
  background-color: rgb(255, 255, 255);
  z-index: 2;
  border-bottom: 1px solid black;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTIxIDcuNzA3bDYuNzc4IDYuNzc3IDYuNzc5LTYuNzc3YTEgMSAwIDAgMSAxLjQxNCAxLjQxNEwxNy4zMTMgMTUuOWw2Ljc3OSA2Ljc3OWExIDEgMCAwIDEtMS40MTQgMS40MTRsLTYuNzc5LTYuNzc5LTYuNzc4IDYuNzc5YTEgMSAwIDEgMS0xLjQxNC0xLjQxNGw2Ljc3Ny02Ljc3OS02Ljc3Ny02Ljc3OGExIDEgMCAxIDEgMS40MTQtMS40MTR6Ii8+Cjwvc3ZnPgo=) center center no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const MainArea = styled.div`
  position: relative;
  box-sizing: border-box;
  line-height: 1.5;
`;

const ProductTitle = styled.div`
  position: relative;
  display: flex;
  background: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 25px 0;
`;

const ProductSummaryArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
`;

const ProductName = styled.div`
  font-size: 16px;
  color: rgb(30, 29, 41);
  font-weight: bold;
`;

const DetailItem = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ItemTitle = styled.div`
  position: relative;
  font-size: 14px;
  padding-right: 10px;
  color: rgb(153, 153, 153);
`;

const ItemContent = styled.div`
  font-size: 14px;
  position: relative;
  display: flex;
`;  

const AuctionArea = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(220, 219, 228);
`;

const AuctionTitle = styled.div`
  font-size: 1rem;
  padding-bottom: 10px;
  font-weight: bold;
`;

const AuctionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

const AuctionInputArea = styled.div` 
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(234, 233, 241);
  height: 3.5rem;
`;

const StyledInput = styled.input`
  width: 100%; 
  box-sizing: border-box;
  background: none;
  border: none;
  text-align: left;
  font-size: 1rem;
  padding-left: 8px;
  outline: 0px;
  font-weight: normal !important;
  appearance: none;
  font-size: 14px;
`;

const ChargingButton = styled.div`
  cursor: pointer;
  margin-left: 1.125rem;
  width: 4.2rem;
  height: 2rem;
  border: none;
  background-color: rgb(234, 233, 241);
  font-size: 0.8125rem;
  color: rgb(94, 92, 107);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const AvailablePoint = styled.div`
  margin-left: 10px;
  font-size: 0.8125rem;
  color: rgb(63, 62, 75);
  padding: 5px 0;
`;

const InputDescription = styled.p`
  padding-left: 10px;
  position: relative;
  margin-top: 0.75rem;
  font-size: 13px;
  color: rgb(114, 112, 127);
`;

const ActionButton = styled.p`
  cursor: pointer;
  border-radius: 2px;
  width: 100%;
  padding: 1.125rem 0;
  background: ${({theme}) => theme.color.main };
  border: 0px;
  color: rgb(255, 255, 255);
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
`;

const PurchasePage = () => {
  const [ credit, setCredit ] = useState("");
  const [ time, setTime ] = useState('');
  const endDate = '2021-05-10 23:00';
  const dispatch = useDispatch();
  const CalTime = useCallback(()=> {
    let t1 = moment(endDate);
    let t2 = moment();
    const duTime = moment.duration(t1.diff(t2)).asSeconds();
    if (duTime < 0) {
      setTime('경매 끝!');
      return
    }
    const day = parseInt(String(duTime / (60*60*24)));
    const hour = parseInt(String((duTime - day*60*60*24) / (60*60)));
    const minute = parseInt(String((duTime - day*60*60*24 - hour*3600) / 60));
    const second = parseInt(String((duTime % 60)));
    const text = day + '일 ' + hour + '시간 ' + minute + '분 ' + second + '초';
    setTime(text);
  }, [])

  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    dispatch(commonActions.setIsPurchase(true));
    const countdown = setInterval(CalTime, 1000);
    return () => {
      clearInterval(countdown);
      dispatch(commonActions.setIsIndex(false));
      dispatch(commonActions.setIsPurchase(false));
    };
  }, [dispatch, CalTime]);

  const confirmValue = () => {
    if (parseInt(credit) % 100 !== 0) {
      alert('크레딧은 100 단위로 입력해주세요.');
      setCredit("");
    }
  }

  return (
    <Container>
      <Header>
        <h3 style={{margin: 0}}>경매입찰</h3>
        <CloseButton onClick={() => window.close()}/>
      </Header>
      <MainArea>
        <ProductTitle>
          <img src="https://seoul-p-studio.bunjang.net/product/153198314_1_1620022165_w100.jpg" alt="" 
          style={{width: '150px', height: '150px', borderRadius: '2px'}}/>
          <ProductSummaryArea>
            <ProductName>디지털 도어록</ProductName>
            <DetailItem>
              <ItemTitle>· 경매마감</ItemTitle><ItemContent>{'2021-05-21 23:59'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 상품상태</ItemTitle><ItemContent>{'중고'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 교환여부</ItemTitle><ItemContent>{'교환불가능'}</ItemContent>
            </DetailItem>
            <DetailItem>
              <ItemTitle>· 배송비</ItemTitle><ItemContent>{'별도'}</ItemContent>
            </DetailItem>
          </ProductSummaryArea>
        </ProductTitle>
        <AuctionArea>
          <AuctionTitle>입찰하기</AuctionTitle>
          <AuctionItem>
            <ItemTitle>현재가</ItemTitle>
            <ItemContent style={{fontSize: "18px"}}><span style={{color: theme.color.main, fontWeight: 'bold'}}>{'120000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            원</ItemContent>
          </AuctionItem>
          <AuctionItem>
            <ItemTitle>즉구가</ItemTitle><ItemContent style={{fontSize: "16px"}}>{'120000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemContent>
          </AuctionItem>
          <AuctionItem>
            <ItemTitle>남은시간</ItemTitle><ItemContent style={{fontSize: "16px"}}>{time}</ItemContent>
          </AuctionItem>
          <AuctionItem style={{flexDirection: 'column'}}>
            <ItemTitle>입찰금액</ItemTitle>
            <div style={{paddingLeft: "100px"}}>
              <InputDescription style={{margin: 0, color: 'black', fontSize: '14px', paddingTop: '20px'}}>
                현재 <span style={{color: theme.color.main, fontWeight: 'bold'}}>
                  {'120000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                </span>부터 입찰하실 수 있습니다.
              </InputDescription>
              <ItemContent>
                <AuctionInputArea>
                  <StyledInput 
                    type="text" 
                    placeholder="입찰금액 입력" 
                    onChange={(e) => setCredit(e.target.value.replace(/[^\d]+/g, ''))}
                    value={credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    onBlur={confirmValue}/>
                  <ChargingButton>충전하기</ChargingButton>
                </AuctionInputArea>
              </ItemContent>
              <AvailablePoint>사용 가능한 크레딧 <span style={{fontWeight: 'bold'}}>0 C</span></AvailablePoint>
              <InputDescription>크레딧은 숫자로 콤마(",") 없이 100원 단위로 입력 가능합니다.</InputDescription>
            </div>
          </AuctionItem>
        </AuctionArea>
        <ActionButton>입찰하기</ActionButton>
      </MainArea>
    </Container>
  );
}
export default PurchasePage;