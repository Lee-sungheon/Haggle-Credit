import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import TendItem from './TendItem';

interface TenderListProps {
  buy: boolean;
  products: Products[];
}
interface Products {
  apAddress: number;
  apBid: number;
  apDate: string;
  apItemNo: number;
  apNo: number;
  apUserNo: number;
  iCompleted: string;
  iNo: number;
  iType: string;
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
  itemSellSet: ItemSellSet;
  itemBuySet: ItemBuySet;
  rapBid: number;
}

interface ItemSellSet {
  isNo: number;
  isItemNo: number;
  isUserNo: number;
  isItemName: string;
  isCategoryMain: string;
  isCategorySub: string;
  isContent: string;
  isUsedStatus: string;
  isCoolPrice: number;
  isAuctionInitPrice: number;
  isDealPrice: number;
  isDealUserNo: number;
  isDealAddress: number;
  isStartDate: null;
  isEndDate: string;
  isEventAgree: string;
  isAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
}
interface ItemBuySet {
  ibNo: number;
  ibItemNo: number;
  ibUserNo: number;
  ibName: string;
  ibCategoryMain: string;
  ibCategorySub: string;
  ibContent: string;
  ibUsedStatus: string;
  ibCoolPrice: number;
  ibAuctionInitPrice: number;
  ibDealPrice: number;
  ibDealUserNo: number;
  ibDealAddress: number;
  ibStartDate: null;
  ibEndDate: string;
  ibEventAgree: string;
  ibAuctionIngPrice: number;
  ipNo: number;
  ipItemNo: number;
  ipValue: string;
  apItemNo: number;
  joinerCnt: number;
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

const MoreButton = styled.div`
  cursor: pointer;
  width: 100% !important;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #ffceae;
  border-radius: 4px;
  margin: 3px;
`;

const TenderList = ({ buy, products }: TenderListProps) => {
  const classes = useStyles();
  const [itemNum, setItemNum] = useState(5);
  const [idx, setIdx] = useState(0);
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
  }, [ConfirmWidth]);

  const moreProduct = () => {
    if (itemNum * 2 * (idx + 1) <= products.length) {
      setIdx(idx + 1);
    } else {
      setIdx(1000);
    }
  };

  return (
    <>
      <GridList
        cellHeight={'auto'}
        className={classes.gridList}
        cols={itemNum}
        spacing={7}
      >
        {products.length > 0 &&
          products.slice(0, itemNum * 2 * (idx + 1)).map((item, idx) => (
            <GridListTile key={idx}>
              <TendItem item={item} buy={buy} />
            </GridListTile>
          ))}
        {idx !== 1000 && (
          <MoreButton onClick={moreProduct}>입찰내역 더보기</MoreButton>
        )}
      </GridList>
      {products.length === 0 && (
        <NoneContainer>
          <NoneBox>검색결과가 없습니다.</NoneBox>
        </NoneContainer>
      )}
    </>
  );
};

export default TenderList;
