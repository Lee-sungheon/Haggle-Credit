import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss';
import './ImageSlider.css';

interface Props {
  images: string[];
}

const ImageSlider = ({images}: Props) => { 
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  return ( 
    <Swiper 
      style={{
        width:'100%'    
      }}
      slidesPerView={1}
      autoplay={false}
      navigation 
      pagination={{ clickable: true }}
      > 
      {images.map((item, idx: number) => (
        <SwiperSlide key={idx}>
          <div style={{
            width: '100%',
            height: 0,
            position: 'relative',
            padding: '45% 0',
            borderRadius: '3px'
          }}>
            
          </div>
          <img src={item} alt="" style={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}/>
        </SwiperSlide>
      ))}
    </Swiper> 
  );
};

export default ImageSlider;

const ITEMS: string[] = [
  'http://www.tallykumc.org/xe/files/attach/images/185/869/019/6b03a88b5f273a505efec55236eae5b8.jpg',
  'https://xenosium.com/wp-content/uploads/1/4212118951.jpg',
  'https://dnvefa72aowie.cloudfront.net/origin/article/202006/d109dc8a07c507dd2de711125af989aaa568cc3eedec778d9537dc98da9c318c.webp?q=95&s=1440x1440&t=inside',
]