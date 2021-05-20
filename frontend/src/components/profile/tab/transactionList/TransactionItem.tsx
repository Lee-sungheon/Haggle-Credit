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
  const [img, setImg] = useState('../images/no_image/gif');
  const [isReview, setIsReview] = useState(true);
  const [dNumber, setDNumber] = useState();
  const [receive, setReceive] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState<number | null>(5);
  const [inputreview, setInputReview] = useState();
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
                        <ItemCategory>운송장번호를 입력해주세요.</ItemCategory>
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
                            <button
                              onClick={() =>
                                onDNumberChange(dNumber, item.item.iNo)
                              }
                            >
                              확인
                            </button>
                          </ItemCategory>
                        </ItemPrice>
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
                        <ItemCategory>운송장번호를 입력해주세요.</ItemCategory>
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
                            <button
                              onClick={() =>
                                onDNumberChange(dNumber, item.item.iNo)
                              }
                            >
                              확인
                            </button>
                          </ItemCategory>
                        </ItemPrice>
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
                            <button onClick={onToggleReview}>수령하기</button>
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
                              <ItemCategory>
                                <button
                                  onClick={onToggleReview}
                                  style={{ height: '100%' }}
                                >
                                  수령하기
                                </button>
                              </ItemCategory>
                            </ItemPrice>
                          </>
                        ) : (
                          <>
                            <ItemPrice>
                              <ItemCategory>수령완료</ItemCategory>
                            </ItemPrice>
                            <ItemPrice>
                              <ItemCategory>
                                <button>리뷰작성하기</button>
                              </ItemCategory>
                            </ItemPrice>
                          </>
                        )}
                      </>
                    )}
                  </CardContent>
                )}
              </>
            )}
          </CardActionArea>
        ) : (
          <>
            <div>리뷰쓰기</div>
            <div>
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
            <div>
              <label>거래후기</label>
              <input></input>
            </div>
            <button>작성완료 및 수령완료</button>
          </>
        )}
      </>
    </Card>
  );
};

export default TransactionItem;
