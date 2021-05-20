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
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '../../state/home';
import { RootState } from '../../common/store';

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
  },
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
  height: 30px;
  font-weight: 700;
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
  const dispatch = useDispatch();
  const SellLists = useSelector((state: RootState) => state.home.sellLists);

  useEffect(() => {
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    dispatch(homeActions.requestSellList(1));
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    };
  });

  const ConfirmWidth = useCallback(() => {
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
      style={{height:'100%', overflow:'hidden'}} 
      spaceBetween={20} 
      slidesPerView={itemNum} 
      autoplay={true}
    >
      {SellLists.length > 0 &&
        SellLists.map((item, idx: number) => (
          <SwiperSlide key={idx}>
            <Card className={classes.root}>
              <CardActionArea>
                <ImgBox>
                  <CardMedia
                    component="img"
                    className={classes.cardMedia}
                    image={item.ipValue}
                  />
                </ImgBox>
                <CardContent style={{ padding: 0 }}>
                  <ItemTitle>{item.isItemName}</ItemTitle>
                  <ItemPrice>
                    <ItemCategory>현재가</ItemCategory>
                    <span>
                      {item.isAuctionIngPrice !== undefined &&
                        item.isAuctionIngPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    <ItemCategory>원</ItemCategory>
                  </ItemPrice>
                  <ItemPrice>
                    <ItemCategory>즉구가</ItemCategory>
                    <span>
                      {item.isCoolPrice !== undefined &&
                        item.isCoolPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </span>
                    <ItemCategory>원</ItemCategory>
                  </ItemPrice>
                  <ItemTime>
                    <ItemCategory>입찰수</ItemCategory> {item.joinerCnt}
                    <span style={{ marginLeft: '6px', marginRight: '3px' }}>
                      ⏱
                    </span>
                    {item.isEndDate}
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