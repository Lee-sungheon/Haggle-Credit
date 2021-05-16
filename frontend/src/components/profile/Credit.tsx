import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RequestPayParams } from 'iamport-typings';
import { RequestPayResponse } from 'iamport-typings';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { changeCredit } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
const Container = styled.div`
  width: 450px;
  height: auto;
  text-align: left;
`;

const TagP = styled.div`
  margin: 0;
  position: relative;
  padding-left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  display: flex;
`;

const TogglePaymentButton = styled.button`
  font-size: 10px;
  margin-left: 5px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;

const CreditName = styled.div`
  height: 30px;
  line-height: 30px;
`;

const CreditDiv = styled.div`
  min-width: 50px;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  display: flex;
`;

const CreditPaymentDiv = styled.div`
  height: 30px;
  line-height: 30px;
`;

// interface Iamport {
//   init: (accountID: string) => void;
//   request_pay: (
//     params: RequestPayParams,
//     callback?: RequestPayResponseCallback
//   ) => void;
// }

// interface Window {
//   IMP?: Iamport;
// }

const Credit = () => {
  const [payment, setPayment] = useState(false);
  const [inputCredit, setInputCredit] = useState(0);
  const userData = useSelector((state: RootState) => state.user.userData);
  const isUpdate = useSelector((state: RootState) => state.total.isUpdate);
  const [credit, setCredit] = useState('0');
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("render")
    if (userData.uCredit) {
      let set_credit = userData.uCredit.toString();
      if (userData.uCredit > 99999999) {
        set_credit = '99999999';
      }
      setCredit(set_credit.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'));
    }
  }, [userData, isUpdate]);
  const togglePayment = () => {
    setPayment(!payment);
  };

  const onInputCredit = (e: any) => {
    setInputCredit(e.target.value);
  };
  const creditPayment = () => {
    console.log('creditPayment');
    const { IMP } = window;
    IMP?.init('imp43006657');
    console.log(IMP);
    if (userData.uPhone) {
      const params: RequestPayParams = {
        pg: 'kakaopay',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: 'haggle credit 충전',
        amount: inputCredit,
        buyer_email: userData.uEmail,
        buyer_name: userData.uName,
        buyer_tel: userData.uPhone,
        buyer_addr: '서울특별시 강남구 신사동',
        buyer_postcode: '01181',
      };

      IMP?.request_pay(params, onPaymentAccepted);
    }
  };
  const onPaymentAccepted = (response: RequestPayResponse) => {
    const { imp_uid, merchant_uid } = response;
    console.log(imp_uid, merchant_uid);
    console.log(response);
    if (response.success === true) {
      const body = {
        uNo: userData.uNo,
        uCredit: inputCredit,
      };
      changeCredit(body)
        .then((res) => {
          console.log(res);
          dispatch(userActions.changeCredit(res.data));
          togglePayment();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <Container>
      <TagP>
        <CreditName> credit</CreditName>
        {/* <CreditDiv>{userData.uCredit} C</CreditDiv> */}
        <CreditDiv>{credit} C</CreditDiv>
        {payment ? (
          <CreditPaymentDiv>
            <input
              type="number"
              style={{ width: '100px', marginLeft: '10px' }}
              value={inputCredit}
              onChange={onInputCredit}
            ></input>
            <br />
            <div style={{ textAlign: 'right' }}>
              <TogglePaymentButton onClick={creditPayment}>
                충전
              </TogglePaymentButton>
              <TogglePaymentButton onClick={togglePayment}>
                취소
              </TogglePaymentButton>
            </div>
          </CreditPaymentDiv>
        ) : (
          <div>
            <TogglePaymentButton onClick={togglePayment}>
              충전하기
            </TogglePaymentButton>
          </div>
        )}
      </TagP>
    </Container>
  );
};

export default Credit;
