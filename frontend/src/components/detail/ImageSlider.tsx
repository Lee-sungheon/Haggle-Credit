import { useEffect, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { callApiImageList } from '../../api/ProductApi';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'; 
import 'swiper/components/pagination/pagination.scss';
import './ImageSlider.css';

interface Props {
  itemNo: number| undefined;
}

interface IMAGES {
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
}

const ImageSlider = ({itemNo}: Props) => { 
  const [imageList, setImageList] = useState<IMAGES[]>([]);
  useEffect(()=>{
    const fetchData = async() => {
      if (itemNo !== undefined){
        const result = await callApiImageList(itemNo);
        setImageList(result);
      }
    };
    fetchData();
  }, [itemNo])
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
      {imageList.map((item, idx: number) => (
        <SwiperSlide key={idx}>
          <div style={{
            width: '100%',
            height: 0,
            position: 'relative',
            padding: '45% 0',
            borderRadius: '3px'
          }}>
            
          </div>
          <img src={item.ipValue} alt="" style={{
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
      {imageList.length === 0 && 
      <SwiperSlide>
        <div style={{
          width: '100%',
          height: 0,
          position: 'relative',
          padding: '45% 0',
          borderRadius: '3px'
        }}>
          
        </div>
        <img src={'../images/no_image.gif'} alt="" style={{
          objectFit: 'cover',
          position: 'absolute',
          width: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}/>
      </SwiperSlide>}
    </Swiper> 
  );
};

export default ImageSlider;