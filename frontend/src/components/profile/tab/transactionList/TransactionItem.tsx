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

interface TransactionItemProps {
  item: TT;
  buy: boolean;
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

const TransactionItem = ({ item, buy }: TransactionItemProps) => {
  const [img, setImg] = useState('../images/no_image/gif');

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    if (item.item.itemBuy) {
      const itemBuy = item.item.itemBuy;
      console.log(itemBuy);
      history.push({
        pathname: `/detail/${itemBuy.ibItemNo}`,
        state: { itemBuy, buy },
      });
    } else if (item.item.itemSell) {
      const itemSell = item.item.itemSell;
      console.log(itemSell);
      dispatch(userActions.addRecently(itemSell));
      history.push({
        pathname: `/detail/${itemSell.isItemNo}`,
        state: { itemSell, buy },
      });
    }
  };
  useEffect(() => {
    if (item.item.itemPhoto) {
      setImg(item.item.itemPhoto[0].ipValue);
    }
  }, [item.item]);
  return (
    <Card className={classes.root} onClick={goDetail}>
      <CardActionArea>
        <ImgBox>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={img}
          />
        </ImgBox>
        {item.idType === 'sell' ? (
          <CardContent style={{ padding: 0 }}>
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
          </CardContent>
        ) : (
          <CardContent style={{ padding: 0 }}>
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
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default TransactionItem;
