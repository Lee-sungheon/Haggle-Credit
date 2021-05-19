import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Banner from '../../components/home/Banner';
import ProductList from '../../components/home/PruductList';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from "../../state/home";
import { RootState } from '../../common/store';
import { callApiItemSellCnt, callApiItemBuyCnt, callApiEndSell, callApiEndBuy } from '../../api/ProductApi';
import Pagination from '@material-ui/lab/Pagination';

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const FilterArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
`;

const Filter = styled.div`
  font-size: 12px;
  display: flex;
  font-weight: bold;
`;

const FilterItem = styled.div`
  cursor: pointer;
  margin-right: 20px;
  position: relative;
  display: block;
  ::after {
    content: "";
    position: absolute;
    top: 3px;
    right: -10px;
    width: 1px;
    height: 12px;
    border-right: 1px solid rgb(204, 204, 204);
  }
`;

const LastItem = styled.div`
  cursor: pointer;
  position: relative;
  display: block;
`;

const Home = () => {
  const dispatch = useDispatch();
  const SellLists = useSelector((state: RootState) => state.home.sellLists);
  const BuyLists = useSelector((state: RootState) => state.home.buyLists);
  const [itemNum, setItemNum] = useState(5);
  const [pageNum, setPageNum] = useState(1);
  const [itemCnt, setItemCnt] = useState(0);
  const [buy, setBuy] = useState(true);
  const ConfirmWidth = useCallback(()=>{
    const windowInnerWidth = window.innerWidth;
    callApiEndSell();
    callApiEndBuy();
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
    const fetchData = async() => {
      if (buy) {
        const data = await callApiItemBuyCnt();
        setItemCnt(data);
      }
      else {
        const data = await callApiItemSellCnt();
        setItemCnt(data);
      }
    }
    window.scrollTo(0, 0);
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    fetchData();
    if (buy) {
      dispatch(homeActions.requestSellList(pageNum));
    } else {
      dispatch(homeActions.requestBuyList(pageNum));
    }
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    }
  }, [ConfirmWidth, dispatch, pageNum, buy])

  return (
    <Container>
      <Banner/>
      <ProductArea>
        <h2>최근 올라온 상품</h2>
        <FilterArea>
          <Filter>
            <FilterItem style={buy ? {color: '#ffceae'}:{}} onClick={() => {setBuy(true); setPageNum(1);}}>팝니다</FilterItem>
            <LastItem style={buy ? {}:{color: '#ffceae'}} onClick={() => {setBuy(false); setPageNum(1);}}>삽니다</LastItem>
          </Filter>
        </FilterArea>
        {buy ?
        <ProductList buy={true} products={SellLists} itemNum={itemNum}/>
        :
        <ProductList buy={false} products={BuyLists} itemNum={itemNum}/>
        }
        <div style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
          {buy ?
            <Pagination 
            count={parseInt(String(itemCnt/100)) + 1}
            page={pageNum}
            variant="outlined" 
            shape="rounded" 
            color="secondary"
            onChange={(e, page)=>setPageNum(page)}/>
            :
            <Pagination 
            count={parseInt(String(itemCnt/100)) + 1}
            page={pageNum}
            variant="outlined" 
            shape="rounded" 
            color="secondary"
            onChange={(e, page)=>setPageNum(page)}/>
          }
        </div>
      </ProductArea>
    </Container>
  );
};

export default Home;