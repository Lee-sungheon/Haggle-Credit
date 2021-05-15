import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Banner from '../../components/home/Banner';
import ProductList from '../../components/home/PruductList';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from "../../state/home";
import { RootState } from '../../common/store';

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const Home = () => {
  const dispatch = useDispatch();
  const SellLists = useSelector((state: RootState) => state.home.sellLists);
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
    window.scrollTo(0, 0);
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    dispatch(homeActions.requestSellList('1'));
    return () => {
      window.removeEventListener('resize', ConfirmWidth);
    }
  }, [ConfirmWidth, dispatch])

  return (
    <Container>
      <Banner/>
      <ProductArea>
        <h2>최근 올라온 상품</h2>
        <ProductList buy={true} products={SellLists} itemNum={itemNum}/>
      </ProductArea>
    </Container>
  );
};

export default Home;