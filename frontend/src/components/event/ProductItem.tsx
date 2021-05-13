import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
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

const ItemTitle = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 5px;
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
    dispatch(commonActions.addRecently(item));
    history.push({
      pathname: `/detail/${item.ipItemNo}`,
      state: {item, buy}
    });
  };

  return (
    <Card className={classes.root} onClick={goDetail}>
      {/* <CardActionArea>
        <ImgBox>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={item.url}
          />
        </ImgBox>
        <CardContent style={{ padding : 0 }}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>
           <ItemCategory style={{color: 'crimson'}}>
             20% 할인 <span style={{color: 'grey'}}>| </span> 
             <span style={{textDecoration: 'line-through', color: 'grey'}}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            </ItemCategory>
          </ItemPrice>
          <ItemPrice>
            <ItemCategory>시작가</ItemCategory> 
            <span>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            <ItemCategory>원</ItemCategory>
          </ItemPrice>
          <ItemPrice>
            <ItemCategory>현재가</ItemCategory> 
            <span>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
            <ItemCategory>원</ItemCategory>
          </ItemPrice>
          <ItemTime>
            <ItemCategory>입찰자</ItemCategory> 0 
            <span style={{ marginLeft: '6px', marginRight: '3px'}}>⏱</span>{'05.21 23:59'}
          </ItemTime>
        </CardContent>
      </CardActionArea> */}
    </Card>
  )
}

export default ProductList;