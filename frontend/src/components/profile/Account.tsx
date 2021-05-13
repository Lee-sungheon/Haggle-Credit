import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { updateBank } from '../../api/UserApi';
import { userActions } from '../../state/user/index';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  width: 400px;
  height: auto;
  text-align: right;
`;

const TagP1 = styled.div`
  margin: 0;
  position: relative;
  padding-right: 0px;
  // transform: translateY(60%);
`;

const TagP2 = styled.div`
  margin: 0;
  position: relative;
  padding-right: 20px;
  transform: translateY(65%);
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
  const dispatch = useDispatch();

  const [isChangeAccount, setIsChangeAccount] = useState(true);
  const userData = useSelector((state: RootState) => state.user.userData);
  const [inputData, setInputData] = useState({
    bankName: '',
    bankNo: '',
  });
  useEffect(() => {
    if (userData.uBankName && userData.uBankNo) {
      setInputData({
        ...inputData,
        bankName: userData.uBankName,
        bankNo: userData.uBankNo,
      });
    }
  }, []);
  const onchangeAccountToggle = () => {
    setIsChangeAccount(!isChangeAccount);
  };
  const onBankNameHandler = (e: any) => {
    setInputData({ ...inputData, bankName: e.target.value });
  };
  const onBankNoHandler = (e: any) => {
    setInputData({ ...inputData, bankNo: e.target.value });
  };

  const onUpdateBank = () => {
    const body = {
      uNo: userData.uNo,
      uBankName: inputData.bankName,
      uBankNo: inputData.bankNo,
    };
    updateBank(body)
      .then((res) => {
        console.log(res);
        dispatch(userActions.updateBank(res.data));
        onchangeAccountToggle();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {userData.uBankName ? (
        <Container>
          <TagP2>
            {!isChangeAccount ? (
              <AccountDiv>
                <div style={{ width: '240px', display: 'flex' }}>
                  <div style={{ width: '100px' }}>은행이름 : </div>
                  <input
                    value={inputData.bankName}
                    onChange={onBankNameHandler}
                  ></input>
                </div>
                <div style={{ width: '240px', display: 'flex' }}>
                  <div style={{ width: '100px' }}>계좌번호 : </div>
                  <input
                    value={inputData.bankNo}
                    onChange={onBankNoHandler}
                  ></input>
                </div>
                <div>
                  <EditButton onClick={onUpdateBank}>변경</EditButton>
                  <EditButton onClick={onchangeAccountToggle}>취소</EditButton>
                </div>
              </AccountDiv>
            ) : (
              <>
                <TagP1>
                  연결계좌: {userData.uBankName} {userData.uBankNo}
                </TagP1>
                <div onClick={onchangeAccountToggle}>연결계좌변경</div>
              </>
            )}
          </TagP2>
        </Container>
      ) : (
        <Container>
          <TagP2>
            {!isChangeAccount ? (
              <AccountDiv>
                <div style={{ width: '240px', display: 'flex' }}>
                  <div style={{ width: '100px' }}>은행이름 : </div>
                  <input
                    value={inputData.bankName}
                    onChange={onBankNameHandler}
                  ></input>
                </div>
                <div style={{ width: '240px', display: 'flex' }}>
                  <div style={{ width: '100px' }}>계좌번호 : </div>
                  <input
                    value={inputData.bankNo}
                    onChange={onBankNoHandler}
                  ></input>
                </div>
                <div>
                  <EditButton onClick={onUpdateBank}>연결</EditButton>
                  <EditButton onClick={onchangeAccountToggle}>취소</EditButton>
                </div>
              </AccountDiv>
            ) : (
              <>
                <TagP1>연결된계좌 없음</TagP1>
                <div onClick={onchangeAccountToggle}>계좌 연결</div>
              </>
            )}
          </TagP2>
        </Container>
      )}
    </>
  );
};

export default Account;
