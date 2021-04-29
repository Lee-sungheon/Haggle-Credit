import React, { useEffect, useState, useCallback } from 'react'; 
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
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

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
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100%"
                image={Object.values(item)[0]}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {Object.values(item)[1]}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {Object.values(item)[2]}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper> 
  );
};

export default SwiperSlider;

const ITEMS: object[] = [
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item1',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item2',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item3',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item4',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item5',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item6',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item7',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item8',
    price: 50000,
  },
  {
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    title: 'Item9',
    price: 50000,
  }
]