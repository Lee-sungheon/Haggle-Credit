import React, { useEffect, useState, useCallback } from 'react'; 
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
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
});

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

const SwiperSlider: React.FC = () => { 
  const classes = useStyles();
  const [itemNum, setItemNum] = useState(6);
  
  useEffect(()=>{
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    }
  });

  const ConfirmWidth = useCallback(()=>{
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1280) {
      setItemNum(5);
    } else if (windowInnerWidth > 1023) {
      setItemNum(4);
    } else if (windowInnerWidth > 414) {
      setItemNum(3);
    } else {
      setItemNum(2);
    }
  }, []);

  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return ( 
    <Swiper 
      style={{height:'100%'}} 
      spaceBetween={20} 
      slidesPerView={itemNum} 
      autoplay={true}
      > 
      {ITEMS.map((item, idx: number) => (
        <SwiperSlide key={idx}>
          <Card className={classes.root}>
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
                <ItemPrice>
                  <ItemCategory>현재가</ItemCategory> 
                  <span>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                  <ItemCategory>원</ItemCategory>
                </ItemPrice>
                <ItemPrice>
                <ItemCategory>즉구가</ItemCategory> 
                  <span>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                  <ItemCategory>원</ItemCategory>
                </ItemPrice>
                <ItemTime>
                  <ItemCategory>입찰자</ItemCategory> 0 
                  <span style={{ marginLeft: '6px', marginRight: '3px'}}>⏱</span>{'05.21 23:59'}
                </ItemTime>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper> 
  );
};

export default SwiperSlider;

interface ITEM {
  id: string;
  url: string;
  title: string;
  price: number;
}

const ITEMS: ITEM[] = [
  {
    id: '1',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item1',
    price: 50000,
  },
  {
    id: '2',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item2',
    price: 50000,
  },
  {
    id: '3',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item3',
    price: 50000,
  },
  {
    id: '4',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item4',
    price: 50000,
  },
  {
    id: '5',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item5',
    price: 50000,
  },
  {
    id: '6',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item6',
    price: 50000,
  },
  {
    id: '7',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item7',
    price: 50000,
  },
  {
    id: '8',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item8',
    price: 50000,
  },
  {
    id: '9',
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item9',
    price: 50000,
  }
]