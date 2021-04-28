import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";


interface ITEM {
  id: number,
  title: string,
  url: string,
  price: number,
}

interface ProductItemProps {
  item: ITEM;
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
  color: rgba(0, 0, 0, 0.5);
`;

const ProductList = ({ item }: ProductItemProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const goDetail = () => {
    dispatch(commonActions.addRecently(item));
  };
  return (
    <Card className={classes.root} onClick={goDetail}>
      <CardActionArea>
        <ImgBox>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={item.url}
          />
        </ImgBox>
        <CardContent style={{ padding : 0 }}>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ItemPrice>
          <ItemTime>{'2021.05.21 23:59:59 마감'}</ItemTime>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductList;