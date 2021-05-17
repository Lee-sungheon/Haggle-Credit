import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { userActions } from "../../state/user";
import { useHistory } from "react-router";
import { ITEM } from "styled-components";

interface ProductItemProps {
  item: ITEM;
  buy: boolean;
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
  }
}));

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
`;

const ItemTitle = styled.div`
  height: 36px;
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

const ProductList = ({ item, buy }: ProductItemProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const goDetail = () => {
    if (buy){
      dispatch(userActions.addRecently(item));
    }
    let pathname = ``
    if (buy){
      pathname = `/detail/${item.isItemNo}`
    } else {
      pathname = `/detail/${item.ibItemNo}`
    }
    history.push({
      pathname: pathname,
      state: {item, buy}
    });
  };

  return (
    <Card className={classes.root} onClick={goDetail}>
      <CardActionArea>
        <ImgBox>
          {item.ipValue !== null ?
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={item.ipValue}
          />
          :
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={'../images/no_image.gif'}
          />
          }
        </ImgBox>
        <CardContent style={{ padding : 0 }}>
          <ItemTitle>{buy ? item.isItemName : item.ibName}</ItemTitle>
          <ItemPrice>
            <ItemCategory>현재가</ItemCategory> 
            <span>
              {buy ? 
                item.isAuctionIngPrice !== undefined && item.isAuctionIngPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : item.ibAuctionIngPrice !== undefined && item.ibAuctionIngPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
            </span>
            <ItemCategory>원</ItemCategory>
          </ItemPrice>
          <ItemPrice>
          {buy ? <><ItemCategory>즉구가</ItemCategory> 
            <span>{item.isCoolPrice !== undefined && item.isCoolPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></>
            :
            <><ItemCategory>시작가</ItemCategory> 
            <span>{item.ibAuctionInitPrice !== undefined && item.ibAuctionInitPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></>
            }
            <ItemCategory>원</ItemCategory>
          </ItemPrice>
          <ItemTime>
            <ItemCategory>입찰수</ItemCategory> {item.joinerCnt}
            <span style={{ marginLeft: '6px', marginRight: '3px'}}>⏱</span>{buy ? item.isEndDate : item.ibEndDate}
          </ItemTime>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductList;