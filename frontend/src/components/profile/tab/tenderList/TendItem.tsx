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

interface ProductItemProps {
  item: Products;
  buy: boolean;
}

interface Products {
  apAddress: number;
  apBid: number;
  apDate: string;
  apItemNo: number;
  apNo: number;
  apUserNo: number;
  iCompleted: string;
  iNo: number;
  iType: string;
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
  itemSellSet: ItemSellSet;
  itemBuySet: ItemBuySet;
  rapBid: number;
}

interface ItemSellSet {
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
  isStartDate: null;
  isEndDate: string;
  isEventAgree: string;
  isAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
}
interface ItemBuySet {
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
  ibStartDate: null;
  ibEndDate: string;
  ibEventAgree: string;
  ibAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
}
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    border: '1px solid rgba(0, 0, 0, 0.2)',
  },
  cardMedia: {
    objectFit: 'cover',
    position: 'absolute',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
`;
const ImgBox2 = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
  opacity: 0.4;
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

const TendItem = ({ item, buy }: ProductItemProps) => {
  const [img, setImg] = useState('../images/no_image/gif');
  const [checkAuction, setCheckAuction] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    if (item.itemBuySet) {
      const itemBuy = item.itemBuySet;
      history.push({
        pathname: `/detail/${itemBuy.ibItemNo}`,
        state: { itemBuy, buy },
      });
    } else if (item.itemSellSet) {
      const itemSell = item.itemSellSet;
      history.push({
        pathname: `/detail/${itemSell.isItemNo}`,
        state: { itemSell, buy },
      });
    }
  };
  useEffect(() => {
    if (item.ipValue) {
      setImg(item.ipValue);
    }
  }, [item.ipValue]);
  useEffect(() => {
    if (item.itemSellSet) {
      if (item.itemSellSet.isAuctionIngPrice !== item.apBid) {
        setCheckAuction(false);
      } else {
        setCheckAuction(true);
      }
    } else if (item.itemBuySet) {
      if (item.itemBuySet.ibAuctionIngPrice !== item.rapBid) {
        setCheckAuction(false);
      } else {
        setCheckAuction(true);
      }
    }
  }, [item]);
  return (
    <Card className={classes.root} onClick={goDetail}>
      <CardActionArea>
        {checkAuction ? (
          <ImgBox>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={img}
            />
          </ImgBox>
        ) : (
          <>
            <ImgBox2>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={img}
              />
            </ImgBox2>
            <div
              style={{
                position: 'absolute',
                width: '100%',
                top: '5vw',
                fontSize: '2vw',
              }}
            >
              <p>입찰 실패</p>
            </div>
          </>
        )}
        {item.itemSellSet ? (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.itemSellSet.isItemName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>내 입찰가</ItemCategory>
              <span>
                {item.apBid !== undefined &&
                  item.apBid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              <ItemCategory>현재가</ItemCategory>
              <span>
                {item.itemSellSet.isAuctionIngPrice !== undefined &&
                  item.itemSellSet.isAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              <ItemCategory>즉구가</ItemCategory>
              <span>
                {item.itemSellSet.isCoolPrice !== undefined &&
                  item.itemSellSet.isCoolPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemTime>
              <ItemCategory>입찰자</ItemCategory> {item.itemSellSet.joinerCnt}
              <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
              {item.itemSellSet.isEndDate}
            </ItemTime>
          </CardContent>
        ) : (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.itemBuySet.ibName}</ItemTitle>
            <ItemCategory>내 입찰가</ItemCategory>
            <span>
              {item.rapBid !== undefined &&
                item.rapBid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            <ItemCategory>원</ItemCategory>
            <ItemPrice>
              <ItemCategory>현재가</ItemCategory>
              <span>
                {item.itemBuySet.ibAuctionIngPrice !== undefined &&
                  item.itemBuySet.ibAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              <ItemCategory>시작가</ItemCategory>
              <span>
                {item.itemBuySet.ibAuctionInitPrice !== undefined &&
                  item.itemBuySet.ibAuctionInitPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemTime>
              <ItemCategory>입찰자</ItemCategory> {item.itemBuySet.joinerCnt}
              <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
              {item.itemBuySet.ibEndDate}
            </ItemTime>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default TendItem;
