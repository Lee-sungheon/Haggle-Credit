import styled from 'styled-components';

const Container = styled.div`
  height: 230px;
  margin-left: 20px;
`;

const Title = styled.p`
  text-align: left;
`;

const EditSection = styled.div`
  margin: 0;
  text-align: right;
  margin-top: -20px;
  position: relative;
  zindex: 2;
`;

const EditButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-right: 25px;
  margin-bottom: 10px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  width: 50px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;

const EditCompleteButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-right: 25px;
  margin-bottom: 10px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  width: 80px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`;

const IntroduceTextArea = styled.textarea`
  border: 1px solid black;
  width: 90%;
  height: 60%;
  text-align: left;
  padding: 8px;
`;

const Introduce = () => {
  return (
    <Container>
      <Title>내 소개</Title>
      <EditSection>
        <EditButton>수정</EditButton>
        {/* <EditCompleteButton>수정완료</EditCompleteButton> */}
      </EditSection>
      {/* <div
        style={{
          border: '1px solid black',
          width: '90%',
          height: '60%',
          textAlign: 'left',
          padding: '8px',
        }}
      >
        가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
      </div> */}
      <IntroduceTextArea></IntroduceTextArea>
    </Container>
  );
};

export default Introduce;
