import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../../state/user';
import { useHistory } from 'react-router';
import { ITEM } from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../common/store';
interface TransactionItemProps {
  item: TT;
  buy: boolean;
  onReceive: (iNo: any) => void;
  onDNumberChange: (dNumber: any, iNo: any) => void;
}
interface TT {
  idDeliveryNo: number;
  idItemNo: number;
  idNo: number;
  idPrice: number;
  idReceive: string;
  idReceiveUserNo: number;
  idSendDate: string;
  idSendUserNo: number;
  idType: string;
  item: Products;
}
interface Products {
  auctionParticipant: AuctionParticipant[];
  iCompleted: string;
  iNo: number;
  iType: string;
  itemBuy: ItemBuy;
  itemPhoto: ItemPhoto[];
  itemSell: ItemSell;
  reverseAuctionParticipant: ReverseAuctionParticipant[];
}
interface ItemPhoto {
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
}
interface ItemSell {
  isNo: number;
  isItemNo: number;
  isUserNo: number;
  isItemName: string;
  isCategoryMain: string;
  isCategorySub: string;
  isContent: string;
  isUsedStatus: string;
  isCoolPrice: number;
  isAuctionInitPrice: number;
  isDealPrice: number;
  isDealUserNo: number;
  isDealAddress: number;
  isStartDate: string;
  isEndDate: string;
  isEventAgree: string;
  isAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
}
interface ItemBuy {
  ibNo: number;
  ibItemNo: number;
  ibUserNo: number;
  ibName: string;
  ibCategoryMain: string;
  ibCategorySub: string;
  ibContent: string;
  ibUsedStatus: string;
  ibCoolPrice: number;
  ibAuctionInitPrice: number;
  ibDealPrice: number;
  ibDealUserNo: number;
  ibDealAddress: number;
  ibStartDate: string;
  ibEndDate: string;
  ibEventAgree: string;
  ibAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
}
interface AuctionParticipant {
  apAddress: number;
  apBid: number;
  apDate: string;
  apItemNo: number;
  apNo: number;
  apUserNo: number;
}
interface ReverseAuctionParticipant {
  rapAddress: number;
  rapBid: number;
  rapDate: string;
  rapItemNo: number;
  rapNo: number;
  rapUserNo: number;
}
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    border: '1px solid rgba(0, 0, 0, 0.2)',
    cursor: 'default',
  },
  cardMedia: {
    objectFit: 'cover',
    position: 'absolute',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    cursor: 'pointer',
  },
  cardContent: {
    cursor: 'default',
  },
}));

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
`;

const ItemTitle = styled.div`
  height: 52px;
  font-size: 14px;
  margin: 0;
  padding: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 5px;
  font-weight: 700;
`;

const ItemTime = styled.p`
  font-size: 11px;
  margin: 0;
  padding: 5px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.8);
`;

const ItemCategory = styled.span`
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 4px;
`;

const TransactionItem = ({
  item,
  buy,
  onReceive,
  onDNumberChange,
}: TransactionItemProps) => {
  const userData = useSelector((state: RootState) => state.user.userData);

  const [img, setImg] = useState('../images/no_image/gif');
  const [isReview, setIsReview] = useState(true);
  const [dNumber, setDNumber] = useState();
  const [receive, setReceive] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState<number | null>(5);
  const [inputreview, setInputReview] = useState();
  const [moreData, setMoreData] = useState(false);
  const [deliveryData, setDeleveryData] = useState({
    uaNo: 0,
    uaName: '',
    uaUserNo: 34,
    uaLnmAddress: '',
    uaRnAddress: null,
    uaZipCode: null,
    uaDefaultSetting: '',
    uaRecvUserName: '',
    uaRecvUserNo: null,
    uaRecvUserPhone: '',
    uaRequest: '',
  });

  useEffect(() => {
    if (item.item.itemBuy) {
      const uaNo = item.item.itemBuy.ibDealAddress;
      axios
        .get(
          `https://k4d107.p.ssafy.io/haggle-credit/user/address/selectano?uaNo=${uaNo}`
        )
        .then((res) => {
          setDeleveryData(res.data);
        });
    } else if (item.item.itemSell) {
      const uaNo = item.item.itemSell.isDealAddress;
      axios
        .get(
          `https://k4d107.p.ssafy.io/haggle-credit/user/address/selectano?uaNo=${uaNo}`
        )
        .then((res) => {
          setDeleveryData(res.data);
        });
    }
  }, []);
  const goDetail = () => {
    if (item.item.itemBuy) {
      let buy = true;
      if (item.idType === 'buy') {
        buy = false;
      }
      const itemBuy = item.item.itemBuy;
      history.push({
        pathname: `/detail/${itemBuy.ibItemNo}`,
        state: { itemBuy, buy },
      });
    } else if (item.item.itemSell) {
      let buy = false;
      if (item.idType === 'sell') {
        buy = true;
      }
      const itemSell = item.item.itemSell;
      history.push({
        pathname: `/detail/${itemSell.isItemNo}`,
        state: { itemSell, buy },
      });
    }
  };
  const onToggleMoreData = () => {
    setMoreData(!moreData);
  };
  const submitReview = () => {
    onToggleReview();
    if (item.item.itemSell) {
      const body = {
        urContent: inputreview,
        urItemNo: item.idItemNo,
        urScore: value,
        urUserNo: item.item.itemSell.isUserNo,
        urWriteUserNo: userData.uNo,
      };
      if (value && inputreview) {
        axios
          .post(
            'https://k4d107.p.ssafy.io/haggle-credit/review/writing',
            body,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            onReceive(item.idItemNo);
          });
      }
    } else {
      const body = {
        urContent: inputreview,
        urItemNo: item.idItemNo,
        urScore: value,
        urUserNo: item.item.itemBuy.ibUserNo,
        urWriteUserNo: userData.uNo,
      };
      if (value && inputreview) {
        axios
          .post(
            'https://k4d107.p.ssafy.io/haggle-credit/review/writing',
            body,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            onReceive(item.idItemNo);
          });
      }
    }
  };
  const onInputReview = (e: any) => {
    setInputReview(e.target.value);
  };
  const onToggleReview = () => {
    setIsReview(!isReview);
  };
  const onDNuber = (e: any) => {
    const dn = e.target.value.replace(/[^0-9.]/g, '');
    setDNumber(dn);
  };
  useEffect(() => {
    if (item.item.itemPhoto) {
      setImg(item.item.itemPhoto[0].ipValue);
    }
  }, [item.item]);
  return (
    <>
      <Card className={classes.root}>
        <>
          {isReview ? (
            <CardActionArea>
              <ImgBox>
                <CardMedia
                  component="img"
                  className={classes.cardMedia}
                  image={img}
                  onClick={goDetail}
                />
              </ImgBox>
              {!buy ? (
                // 구매아이템 내가판거
                <>
                  {item.item.itemBuy ? (
                    <CardContent
                      style={{ padding: 0 }}
                      className={classes.cardContent}
                    >
                      <ItemTitle>{item.item.itemBuy.ibName}</ItemTitle>
                      <ItemPrice>
                        <ItemCategory>판매가</ItemCategory>
                        <span>
                          {item.item.itemBuy.ibDealPrice !== undefined &&
                            item.item.itemBuy.ibDealPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        <ItemCategory>원</ItemCategory>
                      </ItemPrice>
                      {item.idDeliveryNo === 0 ? (
                        <>
                          <ItemCategory>
                            운송장번호를 입력해주세요.
                          </ItemCategory>
                          <ItemPrice>
                            <ItemCategory>
                              <input
                                placeholder="'-'없이 입력해주세요"
                                value={dNumber}
                                onChange={onDNuber}
                              ></input>
                            </ItemCategory>
                          </ItemPrice>
                          <ItemPrice>
                            <ItemCategory>
                              <div
                                onClick={() =>
                                  onDNumberChange(dNumber, item.item.iNo)
                                }
                                style={{
                                  margin: 'auto',
                                  cursor: 'pointer',
                                  border: '1px solid black',
                                  width: '20%',
                                  marginBottom: '-8px',

                                  color: 'rgb(136, 136, 136)',
                                  fontWeight: 'bold',
                                  borderRadius: '4px',
                                }}
                              >
                                확인
                              </div>
                            </ItemCategory>
                          </ItemPrice>
                          <ItemPrice></ItemPrice>
                        </>
                      ) : (
                        <>
                          {item.idReceive === 'false' ? (
                            <>
                              <ItemPrice>
                                <ItemCategory>배송중</ItemCategory>
                                <span>
                                  {item.idSendDate !== undefined &&
                                    item.idSendDate.slice(0, 10)}
                                </span>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory>운송장 번호</ItemCategory>
                                <span>
                                  {item.idDeliveryNo !== undefined &&
                                    item.idDeliveryNo}
                                </span>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                            </>
                          ) : (
                            <>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory>수령완료</ItemCategory>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                            </>
                          )}
                        </>
                      )}
                    </CardContent>
                  ) : (
                    //판매아이템 내가판거
                    <CardContent
                      style={{ padding: 0 }}
                      className={classes.cardContent}
                    >
                      <ItemTitle>{item.item.itemSell.isItemName}</ItemTitle>
                      <ItemPrice>
                        <ItemCategory>판매가</ItemCategory>
                        <span>
                          {item.item.itemSell.isDealPrice !== undefined &&
                            item.item.itemSell.isDealPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        <ItemCategory>원</ItemCategory>
                      </ItemPrice>
                      {item.idDeliveryNo === 0 ? (
                        <>
                          <ItemCategory>
                            운송장번호를 입력해주세요.
                          </ItemCategory>
                          <ItemPrice>
                            <ItemCategory>
                              <input
                                placeholder="'-'없이 입력해주세요"
                                value={dNumber}
                                onChange={onDNuber}
                              ></input>
                            </ItemCategory>
                          </ItemPrice>
                          <ItemPrice>
                            <ItemCategory>
                              <div
                                onClick={() =>
                                  onDNumberChange(dNumber, item.item.iNo)
                                }
                                style={{
                                  margin: 'auto',
                                  cursor: 'pointer',
                                  border: '1px solid black',
                                  width: '20%',
                                  marginBottom: '-8px',

                                  color: 'rgb(136, 136, 136)',
                                  fontWeight: 'bold',
                                  borderRadius: '4px',
                                }}
                              >
                                확인
                              </div>
                            </ItemCategory>
                          </ItemPrice>
                          <ItemPrice></ItemPrice>
                        </>
                      ) : (
                        <>
                          {item.idReceive === 'false' ? (
                            <>
                              <ItemPrice>
                                <ItemCategory>배송중</ItemCategory>
                                <span>
                                  {item.idSendDate !== undefined &&
                                    item.idSendDate.slice(0, 10)}
                                </span>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory>운송장 번호</ItemCategory>
                                <span>
                                  {item.idDeliveryNo !== undefined &&
                                    item.idDeliveryNo}
                                </span>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                            </>
                          ) : (
                            <>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory>수령완료</ItemCategory>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory></ItemCategory>
                              </ItemPrice>
                            </>
                          )}
                        </>
                      )}
                    </CardContent>
                  )}
                </>
              ) : (
                //구매아이템 내가 구매
                <>
                  {item.item.itemBuy ? (
                    <CardContent
                      style={{ padding: 0 }}
                      className={classes.cardContent}
                    >
                      <ItemTitle>{item.item.itemBuy.ibName}</ItemTitle>
                      <ItemPrice>
                        <ItemCategory>구매가</ItemCategory>
                        <span>
                          {item.item.itemBuy.ibDealPrice !== undefined &&
                            item.item.itemBuy.ibDealPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        <ItemCategory>원</ItemCategory>
                      </ItemPrice>
                      {item.idDeliveryNo === 0 ? (
                        <ItemPrice>
                          <ItemCategory>배송준비중</ItemCategory>
                        </ItemPrice>
                      ) : (
                        <>
                          <ItemPrice>
                            <ItemCategory>배송중</ItemCategory>
                            <span>
                              {item.idSendDate !== undefined &&
                                item.idSendDate.slice(0, 10)}
                            </span>
                          </ItemPrice>
                          <ItemPrice>
                            <ItemCategory>운송장 번호</ItemCategory>
                            <span>
                              {item.idDeliveryNo !== undefined &&
                                item.idDeliveryNo}
                            </span>
                          </ItemPrice>
                          {item.idReceive === 'false' ? (
                            <>
                              <ItemPrice>
                                <ItemCategory>
                                  물건을 수령하신후 버튼을 눌러주세요
                                </ItemCategory>
                              </ItemPrice>
                              <ItemPrice>
                                <ItemCategory style={{ textAlign: 'center' }}>
                                  <div
                                    onClick={onToggleReview}
                                    style={{
                                      margin: 'auto',
                                      cursor: 'pointer',
                                      border: '1px solid black',
                                      width: '60%',
                                      marginBottom: '-8px',
                                    }}
                                  >
                                    리뷰작성하기
                                  </div>
                                </ItemCategory>
                              </ItemPrice>{' '}
                            </>
                          ) : (
                            <ItemPrice>
                              <ItemCategory>수령완료</ItemCategory>
                            </ItemPrice>
                          )}
                        </>
                      )}
                    </CardContent>
                  ) : (
                    // 판매아이템 내가구매
                    <CardContent
                      style={{ padding: 0 }}
                      className={classes.cardContent}
                    >
                      <ItemTitle>{item.item.itemSell.isItemName}</ItemTitle>
                      <ItemPrice>
                        <ItemCategory>구매가</ItemCategory>
                        <span>
                          {item.item.itemSell.isDealPrice !== undefined &&
                            item.item.itemSell.isDealPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </span>
                        <ItemCategory>원</ItemCategory>
                      </ItemPrice>
                      {item.idDeliveryNo === 0 ? (
                        <>
                          <ItemPrice>
                            <ItemCategory></ItemCategory>
                          </ItemPrice>
                          <ItemPrice></ItemPrice>
                          <ItemPrice>
                            <ItemCategory>배송준비중</ItemCategory>
                          </ItemPrice>
                          <ItemPrice>
                            <ItemCategory></ItemCategory>
                          </ItemPrice>
                        </>
                      ) : (
                        <>
                          <ItemPrice>
                            <ItemCategory>배송중</ItemCategory>
                            <span>
                              {item.idSendDate !== undefined &&
                                item.idSendDate.slice(0, 10)}
                            </span>
                          </ItemPrice>
                          <ItemPrice>
                            <ItemCategory>운송장 번호</ItemCategory>
                            <span>
                              {item.idDeliveryNo !== undefined &&
                                item.idDeliveryNo}
                            </span>
                          </ItemPrice>
                          {item.idReceive === 'false' ? (
                            <>
                              <ItemPrice>
                                <ItemCategory style={{ textAlign: 'center' }}>
                                  <div
                                    onClick={onToggleReview}
                                    style={{
                                      margin: 'auto',
                                      cursor: 'pointer',
                                      border: '1px solid black',
                                      width: '60%',
                                      marginBottom: '-8px',
                                    }}
                                  >
                                    리뷰작성하기
                                  </div>
                                </ItemCategory>
                              </ItemPrice>
                            </>
                          ) : (
                            <>
                              <ItemPrice>
                                <ItemCategory>수령완료</ItemCategory>
                              </ItemPrice>
                            </>
                          )}
                        </>
                      )}
                    </CardContent>
                  )}
                </>
              )}
              {deliveryData && (
                <div
                  style={{
                    cursor: 'pointer',
                    border: '1px solid black',
                    width: '120px',
                    margin: 'auto',
                    marginBottom: '10px',
                    color: 'rgb(136, 136, 136)',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                  }}
                  onClick={onToggleMoreData}
                >
                  배송정보 더보기
                </div>
              )}
            </CardActionArea>
          ) : (
            <>
              <div style={{ textAlign: 'center' }}>
                <ImgBox>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={img}
                    onClick={goDetail}
                  />
                </ImgBox>
                <div>리뷰쓰기</div>
                <div style={{ height: '70px' }}>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">별점</Typography>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </div>
                <div>거래후기</div>
                <div>
                  <textarea
                    value={inputreview}
                    onChange={onInputReview}
                    style={{ width: '80%', resize: 'none' }}
                  ></textarea>
                </div>
                <div
                  onClick={submitReview}
                  style={{
                    margin: 'auto',
                    height: '100%',
                    width: '60%',
                    cursor: 'pointer',
                    border: '1px solid black',
                    marginBottom: '8px',
                  }}
                >
                  작성완료 및 수령완료
                </div>
                <div
                  style={{
                    margin: 'auto',
                    height: '100%',
                    width: '60%',
                    cursor: 'pointer',
                    border: '1px solid black',
                    marginBottom: '8px',
                  }}
                  onClick={onToggleReview}
                >
                  취소
                </div>
              </div>
            </>
          )}
        </>
      </Card>
      {moreData && deliveryData && (
        <div
          style={{
            margin: 'auto',
            position: 'absolute',
            top: '10%',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            style={{
              margin: '10px auto',
              width: '80%',
              minHeight: '80%',
              border: '1px solid black',
              backgroundColor: 'white',
              borderRadius: '10px',
            }}
          >
            <div style={{ height: '10%' }}>
              <p>배송정보</p>
            </div>
            <div style={{ height: '10%' }}>
              <p>구매자 : {deliveryData.uaRecvUserName}</p>
            </div>
            <div style={{ minHeight: '10%' }}>
              <p>배송지이름 : {deliveryData.uaName}</p>
            </div>
            <div style={{ height: '10%' }}>
              <p>배송지주소 : {deliveryData.uaLnmAddress}</p>
            </div>
            <div style={{ height: '10%' }}>
              <p>전화번호 : {deliveryData.uaRecvUserPhone}</p>
            </div>
            <div style={{ height: '10%' }}>
              <p>요청사항 : {deliveryData.uaRequest}</p>
            </div>
            <div
              style={{
                width: '20%',
                height: '10%',
                cursor: 'pointer',
                border: '1px solid black',
                margin: 'auto',

                color: 'rgb(136, 136, 136)',
                fontWeight: 'bold',
                borderRadius: '4px',
              }}
              onClick={onToggleMoreData}
            >
              닫기
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransactionItem;
