import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RecentlyBoxItem from './RecentlyBoxItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

const Container = styled.div`
  position: fixed;
  z-index: 10;
  right: 90px;
  top: 190px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const RecentlyContainer = styled.div`
  width: 68px;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 10;
`;

const Title = styled.div`
  font-size: 11px;
  font-weight: 900;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 4px;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(247, 0, 0);
  font-size: 12px;
  font-weight: 900;
  padding-bottom: 4px;
  margin-bottom: 4px;
  border-bottom: 2px dotted rgb(136, 136, 136);
`;

const ItemBox = styled.div`
  width: 100%;
  padding-top: 5px;
`;

const ButtonBox = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNumber = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
  margin: 0px 10px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(229, 229, 229);
`;

const TopBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  font-weight: 600;
  font-size: 13px;
  color: rgb(102, 102, 102);
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const RecentlyBox = () => {
  const [pageNum, setPageNum] = useState(0);
  const recentlyItems = useSelector((state: RootState) => state.user.recentlyItems);
  useEffect(()=>{
    const tmpNum: number = parseInt(String((recentlyItems.length-1)/3))
    if (pageNum > tmpNum){
      setPageNum(tmpNum);
    }
  },[pageNum, recentlyItems.length])

  const goPrev = useCallback(() => {
    if (pageNum !== 0) {
      setPageNum(pageNum-1);
    }
  }, [pageNum])
  const goNext = useCallback(() => {
    if (pageNum < parseInt(String((recentlyItems.length-1)/3))) {
      setPageNum(pageNum+1);
    }
  }, [pageNum, recentlyItems.length])

  return (
    <Container>
      <RecentlyContainer>
        <Title>최근본상품</Title>
        <Count>{recentlyItems.length}</Count>
        {recentlyItems.length > 0 && <><ItemBox>
          {recentlyItems.slice(pageNum*3,pageNum*3+3).map((item, idx) => (
            <RecentlyBoxItem item={item} key={idx}/>
          ))}
        </ItemBox>
        <ButtonBox>
          <StyledButton onClick={goPrev}><ChevronLeftIcon style={{ color: 'grey'}}/></StyledButton>
            <PageNumber>{pageNum+1}/{parseInt(String((recentlyItems.length-1)/3+1))}</PageNumber>
          <StyledButton onClick={goNext}><ChevronRightIcon style={{ color: 'grey'}}/></StyledButton>
        </ButtonBox></>}
      </RecentlyContainer>
      <TopBox onClick={() => window.scrollTo(0, 0)}>
        TOP
      </TopBox>
    </Container>
  );
}

export default RecentlyBox;