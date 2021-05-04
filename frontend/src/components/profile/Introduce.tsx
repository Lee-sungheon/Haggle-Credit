import { useState } from 'react';
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
  border: 2px solid black;
  width: 90%;
  height: 60%;
  text-align: left;
  padding: 8px;
  resize: none;
`;

const Introduce = () => {
  const [toggle, setToggle] = useState(true);
  const [introduce, setIntroduce] = useState('안녕하세요');

  const onToggleHandler = () => {
    setToggle(!toggle);
  };

  const onChangeIntroduce = (e: any) => {
    setIntroduce(e.target.value);
  };
  return (
    <Container>
      <Title>내 소개</Title>
      <EditSection>
        {toggle ? (
          <EditButton onClick={onToggleHandler}>수정</EditButton>
        ) : (
          <EditCompleteButton onClick={onToggleHandler}>
            수정완료
          </EditCompleteButton>
        )}
      </EditSection>
      {toggle ? (
        <textarea
          style={{
            border: '1px solid gray',
            width: '90%',
            height: '60%',
            textAlign: 'left',
            padding: '8px',
            // marginLeft: '25px',
            // marginTop: '3px',
          }}
          spellCheck="false"
          value={introduce}
        ></textarea>
      ) : (
        <IntroduceTextArea
          value={introduce}
          onChange={onChangeIntroduce}
        ></IntroduceTextArea>
      )}
    </Container>
  );
};

export default Introduce;
