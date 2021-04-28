import styled from 'styled-components';

const Container = styled.div`
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
  return (
    <Container>
      <Title>찜한 상품</Title>
      <LikeArea>♥ 1</LikeArea>
    </Container>
  );
}

export default LikeBox;