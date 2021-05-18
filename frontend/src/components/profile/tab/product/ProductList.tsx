import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import ProductItem from './ProductItem';
import { ITEM } from 'styled-components';

interface PruductListProps {
  buy: boolean;
  products: Products[];
}
interface Products {
  itemSell: PRODUCTS;
  itemBuy: PRODUCTS;
  itemPhotoes: ItemPhotoes[];
  itemPhoto: string;
  itemCnt: number;
}

interface ItemPhotoes {
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
}
export interface PRODUCTS {
  ipItemNo?: number;
  ipValue?: string;
  isAuctionInitPrice?: number;
  isAuctionIngPrice?: number;
  isCategoryMain?: string;
  isCategorySub?: string;
  isContent?: string;
  isCoolPrice?: number;
  isDealAddress?: number;
  isDealPrice?: number;
  isDealUserNo?: number;
  isEndDate?: string;
  isEventAgree?: string;
  isItemName?: string;
  isItemNo?: number;
  isNo?: number;
  isStartDate?: any;
  isUsedStatus?: string;
  isUserNo?: number;
  joinerCnt?: number;
  ibItemNo: number;
  ibNo: number;
  ibUserNo: number;
  ibName: string;
  ibCategoryMain: string;
  ibCategorySub: string;
  ibContent: string;
  ibStartDate: string;
  ibEndDate: string;
  ibCoolPrice: number;
  ibAuctionInitPrice: number;
  ibAuctionIngPrice: number;
  ibRegDate: string;
  ibDealUserNo: number;
  ibDealPrice: number;
  ibDealAddress: string;
}
const useStyles = makeStyles(() => ({
  gridList: {
    height: '100%',
  },
}));

const NoneContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0px 8rem;
`;

const NoneBox = styled.div`
  width: 100%;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 35px;
`;

const ProductList = ({ buy, products }: PruductListProps) => {
  const classes = useStyles();
  const [itemNum, setItemNum] = useState(5);
  const ConfirmWidth = useCallback(() => {
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

  useEffect(() => {
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    };
  });

  return (
    <>
      <GridList
        cellHeight={'auto'}
        className={classes.gridList}
        cols={itemNum}
        spacing={7}
      >
        {products.length > 0 &&
          products.map((item, idx) => (
            <GridListTile key={idx}>
              <ProductItem
                item={item}
                image={item.itemPhotoes}
                buy={buy}
              />
            </GridListTile>
          ))}
      </GridList>
      {products.length === 0 && (
        <NoneContainer>
          <NoneBox>검색결과가 없습니다.</NoneBox>
        </NoneContainer>
      )}
    </>
  );
};

export default ProductList;
