import { useState } from 'react';
import styled from 'styled-components';
import {
  RequestPayParams,
  RequestPayAdditionalParams,
  Display,
} from 'iamport-typings';
import {
  RequestPayResponse,
  RequestPayAdditionalResponse,
  RequestPayResponseCallback,
} from 'iamport-typings';

const Container = styled.div`
  width: 500px;
  height: auto;
  text-align: left;
`;

const TagP = styled.p`
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
  margin-left: 15px;
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
  const [credit, setCredit] = useState<any>(0);

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
    const params: RequestPayParams = {
      pg: 'kakaopay',
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: 'haggle credit 충전',
      amount: inputCredit,
      buyer_email: 'gildong@gmail.com',
      buyer_name: '홍길동',
      buyer_tel: '010-4242-4242',
      buyer_addr: '서울특별시 강남구 신사동',
      buyer_postcode: '01181',
    };

    IMP?.request_pay(params, onPaymentAccepted);
  };
  const onPaymentAccepted = (response: RequestPayResponse) => {
    const { imp_uid, merchant_uid } = response;
    console.log(imp_uid, merchant_uid);
    console.log(response);
    if (response.success === true) {
      setCredit(credit + response?.paid_amount);
      togglePayment();
    }
  };
  return (
    <Container>
      <TagP>
        <CreditName> credit</CreditName>
        <CreditDiv>{credit} C</CreditDiv>
        {payment ? (
          <CreditPaymentDiv>
            <input
              type="number"
              style={{ width: '100px', marginLeft: '10px' }}
              value={inputCredit}
              onChange={onInputCredit}
            ></input>
            <TogglePaymentButton onClick={creditPayment}>
              충전
            </TogglePaymentButton>
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
