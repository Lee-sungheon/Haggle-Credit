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
  b_item_no: number;
  b_no: number;
  b_user_no: number;
  is_content: string;
  is_deal_price: number;
  is_category_main: string;
  is_end_date: string;
  is_user_no: number;
  is_used_status: string;
  is_no: number;
  is_deal_user_no: number;
  is_deal_address: number;
  is_auction_ing_price: number;
  is_cool_price: number;
  is_item_name: string;
  is_item_no: number;
  is_category_sub: string;
  is_event_agree: string;
  is_auction_init_price: number;
  ib_deal_price: number;
  ib_start_date: string;
  ib_item_no: number;
  ib_name: string;
  ib_reg_date: string;
  ib_deal_user_no: number;
  ib_auction_init_price: number;
  ib_content: string;
  ib_no: number;
  ib_user_no: number;
  ib_auction_ing_price: number;
  ib_cool_price: number;
  ib_category_sub: string;
  ib_deal_address: string;
  ib_end_date: string;
  ib_category_main: string;
  ip_value: string;
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

const BasketList = ({ buy, products, deleteBookMark }: BasketListProps) => {
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
              <BasketItem
                item={item}
                image={item.ip_value}
                buy={buy}
                deleteBookMark={deleteBookMark}
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

export default BasketList;
