import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import Rating from '@material-ui/lab/Rating';
import { ITEM, STOREINFO, STOREREVIEW, USERINFO } from 'styled-components';
import { callConnetChat } from '../../api/ChatApi';
import {
  callApiStoreInfo,
  callApiGetStoreReview,
  callApiGetStoreReviewCnt,
  callApiUserInfo,
} from '../../api/ProductApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useHistory } from 'react-router-dom';

interface Props {
  item: ITEM;
  buy: boolean;
}

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
  position: relative;
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
  bottom: -120px;
  left: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
`;

const StyledButton = styled.div`
  color: rgb(255, 255, 255);
  flex: 1;
  display: flex;
  justify-content: center;
  height: 56px;
  font-size: 18px;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const StoreInfo = ({ item, buy }: Props) => {
  const history = useHistory();
  const [storeInfoList, setStoreInfo] = useState<STOREINFO[]>([]);
  const [reviewList, setReviewList] = useState<STOREREVIEW[]>([]);
  const [reviewCnt, setReviewCnt] = useState(0);
  const [userInfo, setUserInfo] = useState<USERINFO>({});
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  useEffect(() => {
    const fetchData = async () => {
      let itemUserNo;
      buy ? itemUserNo = item.isUserNo : itemUserNo = item.ibUserNo;
      if (itemUserNo !== undefined) {
        const data = await callApiStoreInfo(itemUserNo);
        setStoreInfo(data);
      }
    };
    const fetchData2 = async () => {
      let itemUserNo;
      buy ? itemUserNo = item.isUserNo : itemUserNo = item.ibUserNo;
      if (itemUserNo !== undefined) {
        const data2 = await callApiUserInfo(itemUserNo);
        setUserInfo(data2);
      }
    };
    fetchData();
    fetchData2();
  }, [buy, item.ibUserNo, item.isUserNo]);
  useEffect(() => {
    const fetchData = async () => {
      if (userInfo.uNo !== undefined) {
        const data = await callApiGetStoreReview(userInfo.uNo);
        const cnt = await callApiGetStoreReviewCnt(userInfo.uNo);
        setReviewCnt(cnt);
        setReviewList(data);
      }
    };
    fetchData();
  }, [userInfo]);
  const goChat = async () => {
    let userNo2;
    buy ? userNo2 = item.isUserNo : userNo2 = item.ibUserNo;
    let itemNo;
    buy ? itemNo = item.isItemNo : itemNo = item.ibItemNo;
    if (userNo === userNo2){
      alert('자기와 대화는 불가능합니다.');
      return;
    }
    const body = {
      crItemNo: itemNo,
      crUserNoOne: userNo,
      crUserNoTwo: userNo2,
    };
    const RoomNo = await callConnetChat(body);
    window.open(
      `../chat/${userNo}/${RoomNo}`,
      '_blank',
      'width=387,height=667'
    );
  };
  return (
    <StoreContainer>
      <StoreTab />
      <StoreArea>
        <StoreTitle>상점정보</StoreTitle>
        <StoreDesc>
          <Avatar>
            <img
              src={userInfo.uImage}
              alt=""
              width="48"
              height="48"
              style={{ borderRadius: '50%' }}
              onClick={() => {
                history.push({
                  pathname: `/userprofile/${userInfo.uNo}`,
                });
              }}
            />
          </Avatar>
          <div style={{ fontSize: '15px', margin: '4px 0px 11px' }}>
            {userInfo.uName}
            <div style={{ display: 'flex' }}>
              <StoreDescItem>상품 {storeInfoList.length}</StoreDescItem>
            </div>
          </div>
        </StoreDesc>
        <ProductArea>
          {storeInfoList.length > 0 &&
            storeInfoList.slice(0, 2).map((item, idx) => (
              <ProductInfo key={idx}>
                { item.itemPhotoes.length > 0 ?
                  <img
                    src={item.itemPhotoes[0].ipValue}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  :
                  <img
                    src={'../images/no_image.gif'}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                }
                <PriceInfo>
                  {item.itemSell.isAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </PriceInfo>
              </ProductInfo>
            ))}
        </ProductArea>
        <MoreArea
          onClick={() => {
            history.push({
              pathname: `/userprofile/${userInfo.uNo}`,
            });
          }}
        >
          <MoreText>
            <span style={{ color: theme.color.main, marginRight: '5px' }}>
              {storeInfoList.length >= 2
                ? storeInfoList.length-2
                : storeInfoList.length}
              개
            </span>
            상품 더보기
            <ChevronRightOutlinedIcon
              style={{ fontSize: '18px', paddingTop: '3px' }}
            />
          </MoreText>
        </MoreArea>
        <ReviewTitle>
          상점후기 <span style={{ color: theme.color.main }}>{reviewCnt}</span>
        </ReviewTitle>
        {reviewList.map((review, idx) => (
          <ReviewArea key={idx}>
            <ReviewItem>
              <Avatar
                onClick={() => {
                  history.push({
                    pathname: `/userprofile/${review.ur_write_user_no}`,
                  });
                }}
              >
                <img
                  src={review.u_image}
                  alt=""
                  width="32"
                  height="32"
                  style={{ borderRadius: '50%' }}
                />
              </Avatar>
              <ReviewBox>
                <ReviewItemTitle>
                  <div
                    onClick={() => {
                      history.push({
                        pathname: `/userprofile/${review.ur_write_user_no}`,
                      });
                    }}
                    style={{
                      cursor: 'pointer',
                    }}
                  >
                    {review.u_name}
                  </div>
                  <div style={{ fontSize: '11px' }}>
                    {review.ur_write_date.slice(0, 10)}
                  </div>
                </ReviewItemTitle>
                <ReviewItemContent>
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.ur_score}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                </ReviewItemContent>
                <ReviewItemContent>{review.ur_content}</ReviewItemContent>
              </ReviewBox>
            </ReviewItem>
          </ReviewArea>
        ))}
        <MoreArea
        >
          <MoreText
            onClick={() => {
              history.push({
                pathname: `/userprofile/${userInfo.uNo}/transactionreview`,
              });
            }}>
            상점후기 더보기
            <ChevronRightOutlinedIcon
              style={{ fontSize: '18px', paddingTop: '3px' }}
            />
          </MoreText>
          <ButtonArea>
            <StyledButton
              style={{ background: 'rgb(255, 164, 37)', marginRight: '5px' }}
              onClick={goChat}
            >
              연락하기
            </StyledButton>
            {buy ? (
              <StyledButton
                style={{ background: theme.color.main, marginLeft: '5px' }}
                onClick={() =>{
                  let itemUserNo;
                  buy ? itemUserNo = item.isUserNo : itemUserNo = item.ibUserNo;
                  if (userNo === itemUserNo){
                    alert('자기 상품은 구매 및 경매할 수 없습니다.');
                    return;
                  }
                  window.open(`../auction/buy/${item.isItemNo}`, '_blank');
                  }
                }
              >
                입찰하기
              </StyledButton>
            ) : (
              <StyledButton
                style={{ background: theme.color.main, marginLeft: '5px' }}
                onClick={() => {
                  let itemUserNo;
                  buy ? itemUserNo = item.isUserNo : itemUserNo = item.ibUserNo;
                  if (userNo === itemUserNo){
                    alert('자기 상품은 구매 및 경매할 수 없습니다.');
                    return;
                  }
                  window.open(`../auction/sell/${item.ibItemNo}`, '_blank');
                  }
                }
              >
                입찰하기
              </StyledButton>
            )}
          </ButtonArea>
        </MoreArea>
      </StoreArea>
    </StoreContainer>
  );
};

export default StoreInfo;
