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

// interface BookMarkList {
//   b_item_no: number;
//   b_no: number;
//   b_user_no: number;
//   is_content: string;
//   is_deal_price: number;
//   is_category_main: string;
//   is_end_date: string;
//   is_user_no: number;
//   is_used_status: string;
//   is_no: number;
//   is_deal_user_no: number;
//   is_deal_address: number;
//   is_auction_ing_price: number;
//   is_cool_price: number;
//   is_item_name: string;
//   is_item_no: number;
//   is_category_sub: string;
//   is_event_agree: string;
//   is_auction_init_price: number;
//   ib_deal_price: number;
//   ib_start_date: string;
//   ib_item_no: number;
//   ib_name: string;
//   ib_reg_date: string;
//   ib_deal_user_no: number;
//   ib_auction_init_price: number;
//   ib_content: string;
//   ib_no: number;
//   ib_user_no: number;
//   ib_auction_ing_price: number;
//   ib_cool_price: number;
//   ib_category_sub: string;
//   ib_deal_address: string;
//   ib_end_date: string;
//   ib_category_main: string;
//   ip_value: string;
// }
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
  isDealAddress: string;
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
    dispatch(userActions.addRecently(itemData));
    if (item.itemBuy) {
      history.push({
        pathname: `/detail/${item.itemBuy.ibItemNo}`,
        state: { item, buy },
      });
    } else if (item.itemSell) {
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
  // useEffect(() => {
  //   if (item.itemSell) {
  //     setItemData({
  //       ...itemData,
  //       ipItemNo: item.itemSell.isItemNo,
  //       isContent: item.itemSell.isContent,
  //       isDealPrice: item.itemSell.isDealPrice,
  //       isCategoryMain: item.itemSell.isCategoryMain,
  //       isUserNo: item.itemSell.isUserNo,
  //       isEndDate: item.itemSell.isEndDate,
  //       ipValue: item.itemPhoto.ipValue,
  //       isUsedStatus: item.itemSell.isUsedStatus,
  //       isNo: item.itemSell.isNo,
  //       isDealUserNo: item.itemSell.isDealUserNo,
  //       isDealAddress: item.itemSell.isDealAddress,
  //       isAuctionIngPrice: item.itemSell.isAuctionIngPrice,
  //       isCoolPrice: item.itemSell.isCoolPrice,
  //       isItemName: item.itemSell.isItemName,
  //       isItemNo: item.itemSell.isItemNo,
  //       isCategorySub: item.itemSell.isCategorySub,
  //       isEventAgree: item.itemSell.isEventAgree,
  //       isAuctionInitPrice: item.itemSell.isAuctionInitPrice,
  //     });
  //   } else if (item.itemBuy) {
  //     setItemData({
  //       ...itemData,
  //       ipItemNo: item.ib_item_no,
  //       isContent: item.ib_content,
  //       isDealPrice: item.ib_deal_price,
  //       isCategoryMain: item.ib_category_main,
  //       isUserNo: item.ib_user_no,
  //       isEndDate: item.ib_end_date,
  //       ipValue: item.ip_value,
  //       isNo: item.ib_no,
  //       isDealUserNo: item.ib_deal_user_no,
  //       isAuctionIngPrice: item.ib_auction_ing_price,
  //       isCoolPrice: item.ib_cool_price,
  //       isItemNo: item.ib_item_no,
  //       isCategorySub: item.ib_category_sub,
  //       isAuctionInitPrice: item.ib_auction_init_price,
  //     });
  //   }
  // }, []);
  // const deleteBookMark = () => {
  //   axios
  //     .delete(
  //       `https://k4d107.p.ssafy.io/haggle-credit/bookmark/delete?bItemNo=${item.b_item_no}&bUserNo=${item.b_user_no}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
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
              {/* <ItemTime>
                <ItemCategory>입찰자</ItemCategory> {item.joinerCnt}
                <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
                {item.is_end_date}
              </ItemTime> */}
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
              {/* <ItemTime>
                <ItemCategory>입찰자</ItemCategory> {item.joinerCnt}
                <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
                {item.isEndDate}
              </ItemTime> */}
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
