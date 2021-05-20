import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../../state/user';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

interface ProductItemProps {
  item: Products;
  buy: boolean;
  image: ItemPhotoes[];
}
interface Products {
  itemSell: PRODUCTS;
  itemBuy: PRODUCTS;
  itemPhotoes: ItemPhotoes[];
  itemPhoto: string;
  itemCnt: number;
}
interface ItemPhotoes {
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
}
export interface PRODUCTS {
  ipItemNo?: number;
  ipValue?: string;
  isAuctionInitPrice?: number;
  isAuctionIngPrice?: number;
  isCategoryMain?: string;
  isCategorySub?: string;
  isContent?: string;
  isCoolPrice?: number;
  isDealAddress?: number;
  isDealPrice?: number;
  isDealUserNo?: number;
  isEndDate?: string;
  isEventAgree?: string;
  isItemName?: string;
  isItemNo?: number;
  isNo?: number;
  isStartDate?: any;
  isUsedStatus?: string;
  isUserNo?: number;
  joinerCnt?: number;
  ibItemNo: number;
  ibNo: number;
  ibUserNo: number;
  ibName: string;
  ibCategoryMain: string;
  ibCategorySub: string;
  ibContent: string;
  ibStartDate: string;
  ibEndDate: string;
  ibCoolPrice: number;
  ibAuctionInitPrice: number;
  ibAuctionIngPrice: number;
  ibRegDate: string;
  ibDealUserNo: number;
  ibDealPrice: number;
  ibDealAddress: string;
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

const ProductList = ({ item, buy, image }: ProductItemProps) => {
  const [img, setImg] = useState('../images/no_image/gif');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    if (item.itemBuy) {
      const itemBuy = {
        ...item.itemBuy,
        ipValue: item.itemPhotoes[0].ipValue,
      };

      history.push({
        pathname: `/detail/${itemBuy.ibItemNo}`,
        state: { itemBuy, buy },
      });
    } else if (item.itemSell) {
      const itemSell = {
        ...item.itemSell,
        ipValue: item.itemPhotoes[0].ipValue,
      };
      dispatch(userActions.addRecently(itemSell));
      history.push({
        pathname: `/detail/${itemSell.isItemNo}`,
        state: { itemSell, buy },
      });
    }
  };
  useEffect(() => {
    if (image.length > 0) {
      setImg(image[0]?.ipValue);
    }
  }, [image]);
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
        {item.itemSell ? (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.itemSell.isItemName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>현재가</ItemCategory>
              <span>
                {item.itemSell.isAuctionIngPrice !== undefined &&
                  item.itemSell.isAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              <ItemCategory>즉구가</ItemCategory>
              <span>
                {item.itemSell.isCoolPrice !== undefined &&
                  item.itemSell.isCoolPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemTime>
              <ItemCategory>입찰자</ItemCategory> {item.itemSell.joinerCnt}
              <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
              {item.itemSell.isEndDate}
            </ItemTime>
          </CardContent>
        ) : (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.itemBuy.ibName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>현재가</ItemCategory>
              <span>
                {item.itemBuy.ibAuctionIngPrice !== undefined &&
                  item.itemBuy.ibAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              <ItemCategory>시작가</ItemCategory>
              <span>
                {item.itemBuy.ibAuctionInitPrice !== undefined &&
                  item.itemBuy.ibAuctionInitPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemTime>
              <ItemCategory>입찰자</ItemCategory> {item.itemBuy.joinerCnt}
              <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
              {item.itemBuy.isEndDate}
            </ItemTime>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

export default ProductList;
