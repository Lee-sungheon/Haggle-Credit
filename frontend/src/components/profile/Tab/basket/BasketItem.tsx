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
  image: string;
  deleteBookMark: (item: any) => void;
}
interface BookMarkList {
  b_item_no: number;
  b_no: number;
  b_user_no: number;
  is_content: string;
  is_deal_price: number;
  is_category_main: string;
  is_end_date: string;
  is_user_no: number;
  is_used_status: string;
  is_no: number;
  is_deal_user_no: number;
  is_deal_address: number;
  is_auction_ing_price: number;
  is_cool_price: number;
  is_item_name: string;
  is_item_no: number;
  is_category_sub: string;
  is_event_agree: string;
  is_auction_init_price: number;
  ib_deal_price: number;
  ib_start_date: string;
  ib_item_no: number;
  ib_name: string;
  ib_reg_date: string;
  ib_deal_user_no: number;
  ib_auction_init_price: number;
  ib_content: string;
  ib_no: number;
  ib_user_no: number;
  ib_auction_ing_price: number;
  ib_cool_price: number;
  ib_category_sub: string;
  ib_deal_address: string;
  ib_end_date: string;
  ib_category_main: string;
  ip_value: string;
}

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

const BasketItem = ({ item, buy, image, deleteBookMark }: BasketItemProps) => {
  const [img, setImg] = useState('../images/no_image/gif');
  const [itemData, setItemData] = useState({} as ITEM);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    dispatch(userActions.addRecently(itemData));
    history.push({
      pathname: `/detail/${item.b_item_no}`,
      state: { item, buy },
    });
  };
  useEffect(() => {
    if (image) {
      setImg(image);
    }
  }, [image]);
  useEffect(() => {
    if (item.ib_no) {
      setItemData({
        ...itemData,
        ipItemNo: item.is_item_no,
        isContent: item.is_content,
        isDealPrice: item.is_deal_price,
        isCategoryMain: item.is_category_main,
        isUserNo: item.is_user_no,
        isEndDate: item.is_end_date,
        ipValue: item.ip_value,
        isUsedStatus: item.is_used_status,
        isNo: item.is_no,
        isDealUserNo: item.is_deal_user_no,
        isDealAddress: item.is_deal_address,
        isAuctionIngPrice: item.is_auction_ing_price,
        isCoolPrice: item.is_cool_price,
        isItemName: item.is_item_name,
        isItemNo: item.is_item_no,
        isCategorySub: item.is_category_sub,
        isEventAgree: item.is_event_agree,
        isAuctionInitPrice: item.is_auction_init_price,
      });
    } else if (item.ib_no) {
      setItemData({
        ...itemData,
        ipItemNo: item.ib_item_no,
        isContent: item.ib_content,
        isDealPrice: item.ib_deal_price,
        isCategoryMain: item.ib_category_main,
        isUserNo: item.ib_user_no,
        isEndDate: item.ib_end_date,
        ipValue: item.ip_value,
        isNo: item.ib_no,
        isDealUserNo: item.ib_deal_user_no,
        isAuctionIngPrice: item.ib_auction_ing_price,
        isCoolPrice: item.ib_cool_price,
        isItemNo: item.ib_item_no,
        isCategorySub: item.ib_category_sub,
        isAuctionInitPrice: item.ib_auction_init_price,
      });
    }
  }, []);
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
          <CardContent style={{ padding: 0 }}>
            <ItemTitle>{itemData.isItemName}</ItemTitle>
            <ItemPrice>
              <ItemCategory>현재가</ItemCategory>
              <span>
                {itemData.isAuctionIngPrice !== undefined &&
                  itemData.isAuctionIngPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemPrice>
              {buy ? (
                <>
                  <ItemCategory>즉구가</ItemCategory>
                  <span>
                    {itemData.isCoolPrice !== undefined &&
                      itemData.isCoolPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </>
              ) : (
                <>
                  <ItemCategory>시작가</ItemCategory>
                  <span>
                    {itemData.isAuctionInitPrice !== undefined &&
                      itemData.isAuctionInitPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </>
              )}
              <ItemCategory>원</ItemCategory>
            </ItemPrice>
            <ItemTime>
              <ItemCategory>입찰자</ItemCategory> {itemData.joinerCnt}
              <span style={{ marginLeft: '6px', marginRight: '3px' }}>⏱</span>
              {itemData.isEndDate}
            </ItemTime>
          </CardContent>
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
