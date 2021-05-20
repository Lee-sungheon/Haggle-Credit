import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { callApiGetZzim } from '../../api/ProductApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useHistory } from 'react-router';

const Container = styled.div`
  cursor: pointer;
  position: fixed;
  width: 68px;
  height: 31px;
  padding: 10px;
  margin-bottom: 6px;
  border: 1px solid black;
  background-color: white;
  z-index: 10;
  right: 90px;
  top: 130px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 11px;
  font-weight: 900;
  color: rgb(102, 102, 102);
  text-align: center;
  margin-bottom: 4px;
`;

const LikeArea = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(247, 0, 0);
  font-size: 12px;
  font-weight: 600;
`;

const LikeBox = () => {
  const [zzim, setZzim] = useState(0);
  const isLike = useSelector((state: RootState) => state.common.isLike);
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  const history = useHistory();

  useEffect(()=>{
    const fetchData = async() => {
      if (userNo !== undefined){
        const data = await callApiGetZzim(userNo);
        setZzim(() => {return data});
      }
    };
    fetchData();
  }, [isLike, userNo])
  
  return (
    <Container onClick={() => history.push('../profile/basket')}>
      <Title>찜한 상품</Title>
      <LikeArea>♥ {zzim}</LikeArea>
    </Container>
  );
}

export default LikeBox;