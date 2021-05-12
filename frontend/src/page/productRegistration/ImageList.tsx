import { useEffect } from 'react';
import styled from 'styled-components';

interface IMGLIST {
  url?: string;
}
interface ProductUrlProps {
  item: IMGLIST;
  key: number;
}

const ImageList = ({ item, key }: ProductUrlProps) => {
  useEffect(() => {
    console.log(item, key);
  });
  return (
    <div style={{ width: '100px', height: '100px' }}>
      <img
        key={key}
        src={item.url}
        style={{ width: '100%', height: '100%' }}
      ></img>
    </div>
  );
};

export default ImageList;
