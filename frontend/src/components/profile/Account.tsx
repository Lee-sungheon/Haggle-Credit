import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: auto;
  text-align: right;
`;

const TagP1 = styled.p`
  margin: 0;
  position: relative;
  padding-right: 20px;
  transform: translateY(60%);
`;

const TagP2 = styled.p`
  margin: 0;
  position: relative;
  padding-right: 20px;
  transform: translateY(80%);
  :hover {
    cursor: pointer;
  }
`;

const Account = () => {
  return (
    <>
      {/* <Container>
        <TagP1>계좌연결 완료</TagP1>
        <TagP2>연결계좌변경</TagP2>
      </Container> */}
      <Container>
        <TagP1>연결된계좌 없음</TagP1>
        <TagP2>계좌 연결</TagP2>
      </Container>
    </>
  );
};

export default Account;
