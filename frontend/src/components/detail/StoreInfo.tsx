import styled from 'styled-components';
import { theme } from '../../styles/theme';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import Rating from '@material-ui/lab/Rating';

const StoreContainer = styled.div`
width: 330px;
`;

const StoreTab = styled.div`
height: 50px;
border-bottom: 1px solid rgb(33, 33, 33);
display: flex;
justify-content: flex-end;
align-items: center;
box-sizing: border-box;
`;

const StoreArea = styled.div`
height: calc(100% - 50px);
border-right: 1px solid rgb(238, 238, 238);
padding: 0 32px 10px;
position: relative;
`;

const StoreTitle = styled.div`
font-size: 18px;
padding: 48px 0px 16px;
border-bottom: 1px solid rgb(238, 238, 238);
text-align: left;
`;

const StoreDesc = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  margin-right: 16px;
  cursor: pointer;
`;

const StoreDescItem = styled.div`
  margin-right: 17px;
  position: relative;
  font-size: 13px;
  color: rgb(153, 153, 153);
`;

const ProductArea = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  width: calc(50% - 3px);
  height: 130px;
  position: relative;
  cursor: pointer;
`;

const PriceInfo = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 12px;
  background: rgba(0, 0, 0, 0.25);
`;

const MoreArea = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  cursor: pointer;
`;

const MoreText = styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: rgb(102, 102, 102);
`;

const ReviewTitle = styled.div`
  padding: 30px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
  font-weight: 600;
  text-align: left;
`;

const ReviewArea = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const ReviewItem = styled.div`
  display: flex;
  padding-top: 16px;
`;

const ReviewBox = styled.div`
  padding-bottom: 16px;
  width: 100%;
`;

const ReviewItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(178, 178, 178);
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: 600;
`;

const ReviewItemContent = styled.div`
  font-size: 13px;
  color: rgb(136, 136, 136);
  line-height: 1.4;
  text-align: left;
`;

const ButtonArea = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.div`
  color: rgb(255, 255, 255);
  flex: 1;
  display: flex;
  margin-left: 15px;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const StoreInfo = () => {

  return (
    <StoreContainer>
      <StoreTab />
      <StoreArea>
        <StoreTitle>
          상점정보
        </StoreTitle>
        <StoreDesc>
          <Avatar>
            <img 
              src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
              alt="" 
              width="48" 
              height="48"
              style={{borderRadius: "50%"}}
            />
          </Avatar>
          <div style={{fontSize: "15px", margin: '4px 0px 11px'}}>
            싸피4기취업못함엄마미안해
            <div style={{display: "flex"}}>
              <StoreDescItem>상품 16</StoreDescItem>
            </div>
          </div>
        </StoreDesc>
        <ProductArea>
          <ProductInfo>
            <img 
              src="https://xenosium.com/wp-content/uploads/1/4212118951.jpg" 
              alt=""
              width="100%"
              height="100%"
            />
            <PriceInfo>13,000원</PriceInfo>
          </ProductInfo>
          <ProductInfo>
            <img 
              src="http://www.tallykumc.org/xe/files/attach/images/185/869/019/6b03a88b5f273a505efec55236eae5b8.jpg" 
              alt=""
              width="100%"
              height="100%"
            />
            <PriceInfo>13,000원</PriceInfo>
          </ProductInfo>
        </ProductArea>
        <MoreArea>
          <MoreText>
            <span style={{ color: theme.color.main, marginRight: "5px" }}>14개</span>상품 더보기
            <ChevronRightOutlinedIcon style={{ fontSize: "18px", paddingTop: "3px" }}/>
            </MoreText>
        </MoreArea>
        <ReviewTitle>
          상점후기 <span style={{ color: theme.color.main }}>1</span>
        </ReviewTitle>
        <ReviewArea>
          <ReviewItem>
            <Avatar>
              <img 
                src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
                alt="" 
                width="32" 
                height="32"
                style={{borderRadius: "50%"}}
              />
            </Avatar>
            <ReviewBox>
              <ReviewItemTitle>
                <div>싸피4기취업못함</div>
                <div style={{fontSize: "11px"}}>10달 전</div>
              </ReviewItemTitle>
              <ReviewItemContent>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" />
              </ReviewItemContent>
              <ReviewItemContent>
                가격이 새상품보다 8만원 더 비싼 중고!!! 심지어 거짓말까지 .. 이런...
              </ReviewItemContent>
            </ReviewBox>
          </ReviewItem>
        </ReviewArea>
        <ReviewArea>
          <ReviewItem>
            <Avatar>
              <img 
                src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
                alt="" 
                width="32" 
                height="32"
                style={{borderRadius: "50%"}}
              />
            </Avatar>
            <ReviewBox>
              <ReviewItemTitle>
                <div>싸피4기취업못함</div>
                <div style={{fontSize: "11px"}}>10달 전</div>
              </ReviewItemTitle>
              <ReviewItemContent>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" />
              </ReviewItemContent>
              <ReviewItemContent>
                가격이 새상품보다 8만원 더 비싼 중고!!! 심지어 거짓말까지 .. 이런...
              </ReviewItemContent>
            </ReviewBox>
          </ReviewItem>
        </ReviewArea>
        <ReviewArea>
          <ReviewItem>
            <Avatar>
              <img 
                src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
                alt="" 
                width="32" 
                height="32"
                style={{borderRadius: "50%"}}
              />
            </Avatar>
            <ReviewBox>
              <ReviewItemTitle>
                <div>싸피4기취업못함</div>
                <div style={{fontSize: "11px"}}>10달 전</div>
              </ReviewItemTitle>
              <ReviewItemContent>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" />
              </ReviewItemContent>
              <ReviewItemContent>
                가격이 새상품보다 8만원 더 비싼 중고!!! 심지어 거짓말까지 .. 이런...
              </ReviewItemContent>
            </ReviewBox>
          </ReviewItem>
        </ReviewArea>
        <MoreArea>
          <MoreText>
            상점후기 더보기
            <ChevronRightOutlinedIcon style={{ fontSize: "18px", paddingTop: "3px" }}/>
          </MoreText>
        </MoreArea>
        <ButtonArea>
          <StyledButton style={{ background: 'rgb(255, 164, 37)'}}>연락하기</StyledButton>
          <StyledButton 
            style={{ background: theme.color.main, marginRight: '15px' }}
            onClick={() => window.open(`../auction/buy/${1}`, '_blank')}
          >입찰하기</StyledButton>
        </ButtonArea>
      </StoreArea>
    </StoreContainer>
  );
}

export default StoreInfo;