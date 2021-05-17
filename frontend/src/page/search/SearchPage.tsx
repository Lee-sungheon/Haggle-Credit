import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/home/PruductList';
import { RouteComponentProps } from 'react-router-dom';
import CategoryList from '../../components/search/CategoryList';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { callApiSearchProductList, callApiSearchCount, callApiSearchSellProductList, callApiSearchSellCount } from '../../api/ProductApi';
import LoadingList from '../../components/common/LoadingList';
import { ITEM } from "styled-components";
import Pagination from '@material-ui/lab/Pagination';

interface CATEGORY {
  isCategoryMain: string;
  cnt: number;
}

interface MatchParams {
  id: string;
}

interface LocationParams {
}

interface HistoryParams {
}

const Container = styled.div`
  padding: 145px 200px 0 200px;
  background-color: rgb(249, 249, 249);
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const ProductArea = styled.div`
  padding: 30px 0;
`;

const TitleArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
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

const SearchPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const [category, setCategory] = useState('');
  const [buy, setBuy] = useState(true);
  const [filterIdx, setFilterIdx] = useState(0);
  const [search, setSearch] = useState(location.search.split('=')[1]);
  const [itemNum, setItemNum] = useState(5);
  const [products, setProducts] = useState<ITEM[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const [categoryCnt, setCategoryCnt] = useState(0);
  const [categoryList, setCategoryList] = useState<CATEGORY[]>([]);
  const dispatch = useDispatch();
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
  
  useEffect(()=> {
    dispatch(commonActions.setIsSearch(true));
    ConfirmWidth();
    window.addEventListener('resize', ConfirmWidth);
    return () => {
      dispatch(commonActions.setIsSearch(false));
      window.removeEventListener('resize', ConfirmWidth);
    };
  }, [ConfirmWidth, dispatch])

  useEffect(()=>{
    setSearch(decodeURI(decodeURIComponent(location.search.split('&')[0].split('=')[1])));
    setProducts([]);
    const fetchData = async() => {
      setIsLoading(true);
      if (location.search.split('&')[1] !== undefined) {
        setCategory(decodeURI(decodeURIComponent(location.search.split('&')[1].split('=')[1])));
      }
      if (buy){
        if(filterIdx === 0){
          const result = await callApiSearchProductList('down', category, String(pageNum), 'is_no', search);
          setProducts(result);
        } else if(filterIdx === 1){
          const result = await callApiSearchProductList('up', category, String(pageNum), 'is_auction_ing_price', search);
          setProducts(result);
        } else if(filterIdx === 2){
          const result = await callApiSearchProductList('down', category, String(pageNum), 'is_auction_ing_price', search);
          setProducts(result);
        }
        const result = await callApiSearchCount(search);
        setCategoryList(result);
        let cnt = 0;
        for (let cate of result){
          cnt += cate.cnt;
          setCategoryCnt(cnt);
        }
      } else {
        if(filterIdx === 0){
          const result = await callApiSearchSellProductList('down', category, String(pageNum), 'ib_no', search);
          setProducts(result);
        } else if(filterIdx === 1){
          const result = await callApiSearchSellProductList('up', category, String(pageNum), 'ib_auction_ing_price', search);
          setProducts(result);
        } else if(filterIdx === 2){
          const result = await callApiSearchSellProductList('down', category, String(pageNum), 'ib_auction_ing_price', search);
          setProducts(result);
        }
        const result = await callApiSearchSellCount(search);
        setCategoryList(result);
        let cnt = 0;
        for (let cate of result){
          cnt += cate.cnt;
          setCategoryCnt(cnt);
        }
      }
      setIsLoading(false);
    }
    fetchData();
  }, [category, filterIdx, location, pageNum, buy, search])
  
  return (
    <Container>
      <ProductArea>
        <CategoryList search={search} categoryList={categoryList} setCategory={setCategory} itemNum={itemNum} setCategoryCnt={setCategoryCnt}/>
        <TitleArea>
          <TitleText>
            <span style={{color: "red", paddingRight: "5px"}}>{decodeURI(decodeURIComponent(search))}</span> 검색결과
          </TitleText>
        </TitleArea>
        <FilterArea>
          <Filter>
            <FilterItem style={buy ? {color: '#ffceae'}:{}} onClick={() => setBuy(true)}>팝니다</FilterItem>
            <LastItem style={buy ? {}:{color: '#ffceae'}} onClick={() => setBuy(false)}>삽니다</LastItem>
          </Filter>
          <Filter>
            <FilterItem style={filterIdx === 0 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(0)}>최신순</FilterItem>
            <FilterItem style={filterIdx === 1 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(1)}>저가순</FilterItem>
            <LastItem style={filterIdx === 2 ? {color: '#ffceae'}:{}} onClick={() => setFilterIdx(2)}>고가순</LastItem>
          </Filter>
        </FilterArea>
        {isLoading ? 
          <LoadingList itemNum={itemNum}/> :
          <ProductList buy={buy} products={products} itemNum={itemNum}/>
        }
        {category!=="" &&
        <div style={{display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
          <Pagination 
          count={parseInt(String(categoryCnt/100)+1)} 
          variant="outlined" 
          shape="rounded" 
          color="secondary" 
          onChange={(e, page)=>setPageNum(page)}/>
        </div>
        }
      </ProductArea>
    </Container>
  )
}

export default SearchPage;