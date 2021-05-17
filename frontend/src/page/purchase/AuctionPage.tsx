import { useEffect, useState } from 'react';
import styled, { ITEM } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { commonActions } from "../../state/common";
import ItemDescription from '../../components/purchase/ItemDescription';
import Auction from '../../components/purchase/Auction';
import Destination from '../../components/purchase/Destination';
import { RouteComponentProps } from 'react-router-dom';
import { callApiItemDetail } from '../../api/ProductApi';
import { RootState } from '../../common/store';

interface MatchParams {
  id: string;
}

interface LocationParams {
  isModal: boolean;
}

interface HistoryParams {
}

const Container = styled.div`
  min-width: 320px;
  max-width: 640px;
  min-height: 100vh;
  margin: 0px auto;
  box-sizing: border-box;
  padding: 0 12px;
`;

const Header = styled.div`
  position: sticky;
  padding: 5px 0;
  top: 0px;
  min-height: 3.125rem;
  line-height: 3.125rem;
  font-weight: bold;
  text-align: center;
  color: rgb(30, 29, 41);
  background-color: rgb(255, 255, 255);
  z-index: 2;
  border-bottom: 1px solid black;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxwYXRoIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTIxIDcuNzA3bDYuNzc4IDYuNzc3IDYuNzc5LTYuNzc3YTEgMSAwIDAgMSAxLjQxNCAxLjQxNEwxNy4zMTMgMTUuOWw2Ljc3OSA2Ljc3OWExIDEgMCAwIDEtMS40MTQgMS40MTRsLTYuNzc5LTYuNzc5LTYuNzc4IDYuNzc5YTEgMSAwIDEgMS0xLjQxNC0xLjQxNGw2Ljc3Ny02Ljc3OS02Ljc3Ny02Ljc3OGExIDEgMCAxIDEgMS40MTQtMS40MTR6Ii8+Cjwvc3ZnPgo=) center center no-repeat;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const MainArea = styled.div`
  position: relative;
  box-sizing: border-box;
  line-height: 1.5;
`;

const AuctionPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  let isModal: boolean = false;
  const [desc, setDesc] = useState<ITEM>({});
  const [uaNo, setUaNo] = useState(-1);
  const userData = useSelector((state: RootState) => state.user.userData);
  const dispatch = useDispatch();
  const itemNo = parseInt(location.pathname.split('/')[3]);
  location.state === undefined ? isModal = false : isModal = true;

  useEffect(() => {
    const fetchData = async() => {
      const data = await callApiItemDetail(itemNo);
      setDesc(data);
    }
    fetchData();
    dispatch(commonActions.setIsIndex(true));
    dispatch(commonActions.setIsPurchase(true));
    return () => {
      dispatch(commonActions.setIsIndex(false));
      dispatch(commonActions.setIsPurchase(false));
    };
  }, [dispatch, itemNo]);

  return (
    <Container>
      <Header>
        <h3 style={{margin: 0}}>경매입찰</h3>
        <CloseButton onClick={() => window.close()}/>
      </Header>
      <MainArea>
        <ItemDescription desc={desc} buy={true}/>
        <Destination isModal={isModal} userData={userData} setUaNo={setUaNo}/>
        <Auction desc={desc} uaNo={uaNo}/>
      </MainArea>
    </Container>
  );
}
export default AuctionPage;