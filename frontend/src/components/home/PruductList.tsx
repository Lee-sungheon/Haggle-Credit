import { useState, useEffect, useCallback } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { makeStyles } from "@material-ui/core/styles";
import ProductItem from './ProductItem';
import { ITEM } from "styled-components";

interface PruductListProps {
  buy: boolean;
  products: ITEM[];
}

const useStyles = makeStyles(() => ({
  gridList: {
    height: "100%",
  },
}));

const ProductList = ({buy, products}: PruductListProps) => {
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
      {products.length > 0 && products.map((item, idx) => (
        <GridListTile key={idx}>
          <ProductItem item={item} buy={buy}/>
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ProductList;