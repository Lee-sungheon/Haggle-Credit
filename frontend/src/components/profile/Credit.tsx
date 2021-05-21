import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RequestPayParams } from 'iamport-typings';
import { RequestPayResponse } from 'iamport-typings';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { changeCredit } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import { USERDATA } from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  width: 45%;
  height: auto;
`;

const TagP = styled.div`
  margin: 0;
  position: relative;
  padding-left: 1vw;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3vw;
  display: flex;
`;

const TogglePaymentButton = styled.button`
  min-width: 60px;
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
  height: 1.5vw;
  line-height: 1.5vw;
`;

const CreditDiv = styled.div`
  min-width: 6vw;
  height: 1.5vw;
  line-height: 1.5vw;
  margin-left: 1vw;
  display: flex;
`;

const CreditPaymentDiv = styled.div`
  height: 1.5vw;
  line-height: 1.5vw;
`;

interface CreditProps {
  userData: USERDATA;
}
const Credit = ({ userData }: CreditProps) => {
  const [payment, setPayment] = useState(false);
  const [rePayment, setRepayMent] = useState(false);
  const [inputCredit, setInputCredit] = useState(0);
  const isUpdate = useSelector((state: RootState) => state.total.isUpdate);
  const [credit, setCredit] = useState('0');

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/user/mycredit?uNo=${userData.uNo}`
      )
      .then((res) => {
        setCredit(
          res.data.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')
        );
      });
  }, []);
  useEffect(() => {
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
    setRepayMent(false);
  };
  const toggleRePayment = () => {
    setPayment(!payment);
    setRepayMent(!rePayment);
  };

  const onInputCredit = (e: any) => {
    setInputCredit(e.target.value);
  };
  const onRePaymentAccepted = () => {
    if (userData.uCredit) {
      if (inputCredit <= userData.uCredit) {
        const body = {
          uNo: userData.uNo,
          uCredit: -inputCredit,
        };
        changeCredit(body)
          .then((res) => {
            dispatch(userActions.changeCredit(res.data));
            togglePayment();
            alert('환전된 금액은 3일후 계좌로 입금됩니다.');
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('환전하실 금액을 다시 설정해주세요');
      }
    }
  };
  const creditPayment = () => {
    const { IMP } = window;
    IMP?.init('imp43006657');
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
    if (response.success === true) {
      const body = {
        uNo: userData.uNo,
        uCredit: inputCredit,
      };
      changeCredit(body)
        .then((res) => {
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
              style={{ width: '5vw', marginLeft: '.5vw' }}
              value={inputCredit}
              onChange={onInputCredit}
            ></input>
            <br />
            <div style={{ textAlign: 'right' }}>
              {!rePayment ? (
                <>
                  <TogglePaymentButton onClick={creditPayment}>
                    충전
                  </TogglePaymentButton>
                  <TogglePaymentButton onClick={togglePayment}>
                    취소
                  </TogglePaymentButton>
                </>
              ) : (
                <>
                  <TogglePaymentButton onClick={onRePaymentAccepted}>
                    환전
                  </TogglePaymentButton>
                  <TogglePaymentButton onClick={toggleRePayment}>
                    취소
                  </TogglePaymentButton>
                </>
              )}
            </div>
          </CreditPaymentDiv>
        ) : (
          <div>
            <TogglePaymentButton onClick={togglePayment}>
              충전하기
            </TogglePaymentButton>
            <TogglePaymentButton onClick={toggleRePayment}>
              환전
            </TogglePaymentButton>
          </div>
        )}
      </TagP>
    </Container>
  );
};

export default Credit;
