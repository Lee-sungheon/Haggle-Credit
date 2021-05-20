import styled from 'styled-components';
import { useState, useEffect, useCallback } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import BasketItem from './BasketItem';
interface BasketListProps {
  buy: boolean;
  products: BookMarkList[];
  deleteBookMark: (item: any) => void;
}

interface BookMarkList {
  auctionParticipant: AuctionParticipant[];
  iCompleted: string;
  iNo: number;
  itemBuy: ItemBuy;
  itemSell: ItemSell;

  itemPhoto: ItemPhoto[];
  reverseAuctionParticipant: ReverseAuctionParticipant[];
}
interface ItemBuy {
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
interface AuctionParticipant {
  apAddress: number;
  apBid: number;
  apDate: string;
  apNo: number;
  apUserNo: number;
}
interface ItemPhoto {
  ipItemNo: number;
  ipNo: number;
  ipValue: string;
}
interface ItemSell {
  isItemNo: number;
  isNo: number;
  isUserNo: number;
  isName: string;
  isCategoryMain: string;
  isCategorySub: string;
  isContent: string;
  isStartDate: string;
  isEndDate: string;
  isCoolPrice: number;
  isAuctionInitPrice: number;
  isAuctionIngPrice: number;
  isRegDate: string;
  isDealUserNo: number;
  isDealPrice: number;
  isDealAddress: number;
  isUsedStatus: string;
  isItemName: string;
  isEventAgree: string;
}
interface ReverseAuctionParticipant {}
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

const BasketList = ({ buy, products, deleteBookMark }: BasketListProps) => {
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
    if (itemNum*2*(idx+1) <= products.length ){
      setIdx(idx+1);
    } else {
      setIdx(1000);
    }
  }

  return (
    <>
      <GridList
        cellHeight={'auto'}
        className={classes.gridList}
        cols={itemNum}
        spacing={7}
      >
        {products.length > 0 &&
          products.slice(0, itemNum*2*(idx+1)).map((item, idx) => (
            <GridListTile key={idx}>
              <BasketItem
                item={item}
                buy={buy}
                deleteBookMark={deleteBookMark}
              />
            </GridListTile>
          ))}
          {idx !== 1000 && <MoreButton onClick={moreProduct}>찜 더보기</MoreButton>}
      </GridList>
      {products.length === 0 && (
        <NoneContainer>
          <NoneBox>검색결과가 없습니다.</NoneBox>
        </NoneContainer>
      )}
    </>
  );
};

export default BasketList;
