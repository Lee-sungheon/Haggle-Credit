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

interface BasketItemProps {
  item: BookMarkList;
  buy: boolean;
  deleteBookMark: (item: any) => void;
}

interface BookMarkList {
  auctionParticipant: AuctionParticipant[];
  iCompleted: string;
  iNo: number;
  itemBuy: ItemBuy;
  itemSell: ItemSell;
  itemPhoto: ItemPhoto[];
  reverseAuctionParticipant: ReverseAuctionParticipant[];
}
interface ItemBuy {
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
interface ItemSell {
  isItemNo: number;
  isNo: number;
  isUserNo: number;
  isName: string;
  isCategoryMain: string;
  isCategorySub: string;
  isContent: string;
  isStartDate: string;
  isEndDate: string;
  isCoolPrice: number;
  isAuctionInitPrice: number;
  isAuctionIngPrice: number;
  isRegDate: string;
  isDealUserNo: number;
  isDealPrice: number;
  isDealAddress: number;
  isUsedStatus: string;
  isItemName: string;
  isEventAgree: string;
}
interface AuctionParticipant {
  apAddress: number;
  apBid: number;
  apDate: string;
  apNo: number;
  apUserNo: number;
}
interface ItemPhoto {
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
}
interface ReverseAuctionParticipant {}
const RemoveButton = styled.img`
  position: absolute;
  width: 2vw;
  top: 5%;
  right: 5%;
  :hover {
    cursor: pointer;
  }
`;

const CardBody = styled.div`
  ${RemoveButton} {
    visibility: hidden;
  }
  :hover {
    ${RemoveButton} {
      visibility: visible;
    }
  }
`;
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

const BasketItem = ({ item, buy, deleteBookMark }: BasketItemProps) => {
  const [img, setImg] = useState('../images/no_image.gif');
  const [itemData, setItemData] = useState({} as ITEM);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    if (item.itemBuy) {
      history.push({
        pathname: `/detail/${item.itemBuy.ibItemNo}`,
        state: { item, buy },
      });
    } else if (item.itemSell) {
      const itemSell = { ...item.itemSell, ipValue: item.itemPhoto[0].ipValue };

      history.push({
        pathname: `/detail/${item.itemSell.isItemNo}`,
        state: { item, buy },
      });
    }
  };
  useEffect(() => {
    if (item.itemPhoto.length > 0) {
      setImg(item.itemPhoto[0].ipValue);
    } else {
      setImg('../images/no_image.gif');
    }
  }, [item.itemPhoto]);

  return (
    <Card className={classes.root} style={{ position: 'relative' }}>
      <CardBody>
        <CardActionArea onClick={goDetail}>
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
                <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
                {item.itemBuy.ibEndDate}
              </ItemTime>
            </CardContent>
          )}
        </CardActionArea>
        <RemoveButton
          src={'../images/removeButton.png'}
          onClick={() => {
            deleteBookMark(item);
          }}
        ></RemoveButton>
      </CardBody>
    </Card>
  );
};

export default BasketItem;
