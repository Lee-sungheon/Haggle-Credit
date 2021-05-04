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
`;

const TogglePaymentButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-left: 25px;
  margin-bottom: 10px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;

interface Iamport {
  init: (accountID: string) => void;
  request_pay: (
    params: RequestPayParams,
    callback?: RequestPayResponseCallback
  ) => void;
}

interface Window {
  IMP?: Iamport;
}

const Credit = () => {
  const [payment, setPayment] = useState(false);

  const togglePayment = () => {
    setPayment(!payment);
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
      amount: 1,
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
  };
  return (
    <Container>
      <TagP>
        보유 credit : 0 C
        {payment ? (
          <>
            <input
              type="number"
              style={{ width: '100px', marginLeft: '10px' }}
            ></input>
            <TogglePaymentButton onClick={creditPayment}>
              충전
            </TogglePaymentButton>
          </>
        ) : (
          <TogglePaymentButton onClick={togglePayment}>
            충전하기
          </TogglePaymentButton>
        )}
      </TagP>
    </Container>
  );
};

export default Credit;
