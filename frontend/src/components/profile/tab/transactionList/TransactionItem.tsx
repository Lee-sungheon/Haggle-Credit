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

const TransactionItem = ({ item, buy }: ProductItemProps) => {
  const [img, setImg] = useState('../images/no_image/gif');

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    dispatch(userActions.addRecently(item));
    if (item.isNo) {
      history.push({
        pathname: `/detail/${item.ipItemNo}`,
        state: { item, buy },
      });
    }
    // else if (item.ibNo) {
    //   history.push({
    //     pathname: `/detail/${item.ipItemNo}`,
    //     state: { item, buy },
    //   });
    // }
  };
  useEffect(() => {
    if (item.ipValue) {
      setImg(item.ipValue);
    }
  }, [item]);
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
        {item.isNo ? (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.isItemName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>구매가</ItemCategory>
              <span>
                {item.isDealPrice !== undefined &&
                  item.isDealPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
          </CardContent>
        ) : (
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{item.isItemName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>판매가</ItemCategory>
              <span>
                {item.isDealPrice !== undefined &&
                  item.isDealPrice
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
