import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
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

const EditButton = styled.button`
  font-size: 10px;
  margin: 0;
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

const AccountDiv = styled.div`
  margin-top: -20px;
`;

const Account = () => {
  const [isAccount, setIsAccount] = useState(true);
  const [isChangeAccount, setIsChangeAccount] = useState(true);
  const [changeAccountToggle, setChangeAccountToggle] = useState(true);

  const onChangeAccount = () => {};
  const onchangeAccountToggle = () => {
    setIsChangeAccount(!isChangeAccount);
  };
  return (
    <>
      {isAccount ? (
        <Container>
          <TagP1>연결계좌: 대구은행 508-10-1231231</TagP1>
          <TagP2>
            {!isChangeAccount ? (
              <AccountDiv>
                <input></input>
                <div>
                  <EditButton>변경</EditButton>
                  <EditButton onClick={onchangeAccountToggle}>취소</EditButton>
                </div>
              </AccountDiv>
            ) : (
              <div onClick={onchangeAccountToggle}>연결계좌변경</div>
            )}
          </TagP2>
        </Container>
      ) : (
        <Container>
          <TagP1>연결된계좌 없음</TagP1>
          <TagP2>
            {!isChangeAccount ? (
              <AccountDiv>
                <input></input>
                <div>
                  <EditButton>연결</EditButton>
                  <EditButton onClick={onchangeAccountToggle}>취소</EditButton>
                </div>
              </AccountDiv>
            ) : (
              <div onClick={onchangeAccountToggle}>계좌 연결</div>
            )}
          </TagP2>
        </Container>
      )}
    </>
  );
};

export default Account;
