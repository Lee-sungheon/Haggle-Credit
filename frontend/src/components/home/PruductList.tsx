import { useState, useEffect, useCallback } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import ProductItem from './ProductItem';

const useStyles = makeStyles(() => ({
  gridList: {
    height: "100%",
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const [itemNum, setItemNum] = useState(5);
  const ConfirmWidth = useCallback(()=>{
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1280) {
      setItemNum(5);
    } else if (windowInnerWidth > 1023) {
      setItemNum(4);
    } else if (windowInnerWidth > 700) {
      setItemNum(3);
    } else if (windowInnerWidth > 410) {
      setItemNum(2);
    } else {
      setItemNum(1);
    }
  }, []);

  useEffect(()=>{
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    }
  });
  
  return (
    <GridList
    cellHeight={"auto"}
    className={classes.gridList}
    cols={itemNum}
    spacing={7}
    >
      {ITEMS.length > 0 && ITEMS.map((item, idx) => (
        <GridListTile key={idx}>
          <ProductItem item={item} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ProductList;

interface ITEM {
  id: number,
  title: string,
  url: string,
  price: number,
}

const ITEMS :ITEM[] = [
  {
    id: 1,
    title: 'ITEM1',
    url: 'http://www.tallykumc.org/xe/files/attach/images/185/869/019/6b03a88b5f273a505efec55236eae5b8.jpg',
    price: 200000,
  },
  {
    id: 2,
    title: 'ITEM2',
    url: 'https://xenosium.com/wp-content/uploads/1/4212118951.jpg',
    price: 200000,
  },
  {
    id: 3,
    title: 'ITEM3',
    url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202006/d109dc8a07c507dd2de711125af989aaa568cc3eedec778d9537dc98da9c318c.webp?q=95&s=1440x1440&t=inside',
    price: 200000,
  },
  {
    id: 4,
    title: 'ITEM4',
    url: 'http://www.ant-news.co.kr/news/photo/202008/12237_12920_4942.jpg',
    price: 200000,
  },
  {
    id: 5,
    title: 'ITEM5',
    url: 'https://dnvefa72aowie.cloudfront.net/origin/article/202101/832dfd4dcefea765d27d04e221906c139fd06d1358cacf7b3df46cba0480f5f8.webp?q=95&s=1440x1440&t=inside',
    price: 200000,
  },
]

for (let i=6 ; i < 40 ; i++) {
  ITEMS.push({
    id: i,
    title: `ITEM${i}`,
    url: 'https://www.itworld.co.kr/files/itworld/2020/11_01/iphone-12-versus-11-100864213-large.jpg',
    price: 10000,
  })
}