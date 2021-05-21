import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { USERDATA } from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';
import TransactionList from './transactionList/TransactionList';
import axios from 'axios';
const Container = styled.div``;
const Body = styled.div`
  margin-top: 30px;
  padding-left: 30px;
  text-align: left;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
`;

const ReviewTab1 = styled.div`
  :hover {
    cursor: pointer;
  }
`;
const ReviewTab2 = styled.div`
  :hover {
    cursor: pointer;
  }
`;
interface TransactionListTabProps {
  userData: USERDATA;
}
const TransactionListTab = ({ userData }: TransactionListTabProps) => {
  const [reviewTab, setReviewTab] = useState(1);
  const [sellTransactionList, setSellTransactionListTab] = useState([]);
  const [buyTransactionList, setBuyTransactionListTab] = useState([]);

  const onReviewTab1 = () => {
    setReviewTab(1);
  };
  const onReviewTab2 = () => {
    setReviewTab(2);
  };
  const onDNumberChange = (dNumber: any, iNo: any) => {
    if (dNumber) {
      axios
        .get(
          `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/send?idDeliveryNo=${dNumber}&idItemNo=${iNo}`
        )
        .then(() => {
          axios
            .get(
              `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/selectSendAll?idSendUserNo=${userData.uNo}`
            )
            .then((res) => {
              setSellTransactionListTab(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        });
    }
  };
  const onReceive = (iNo: any) => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/receive?idItemNo=${iNo}`
      )
      .then(() => {
        axios
          .get(
            `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/selectReceiveAll?idReceiveUserNo=${userData.uNo}`
          )
          .then((res) => {
            setBuyTransactionListTab(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/selectSendAll?idSendUserNo=${userData.uNo}`
      )
      .then((res) => {

        setSellTransactionListTab(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/itemDelivery/selectReceiveAll?idReceiveUserNo=${userData.uNo}`
      )
      .then((res) => {

        setBuyTransactionListTab(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {reviewTab === 1 ? (
        <>
          <Body>
            <ReviewTab1 style={{ marginRight: '10px' }} onClick={onReviewTab1}>
              판매
            </ReviewTab1>
            <ReviewTab2 style={{ color: '#bdbdbd' }} onClick={onReviewTab2}>
              구매
            </ReviewTab2>
          </Body>
          {sellTransactionList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              판매상품이 없습니다.
            </div>
          ) : (
            <TransactionList
              buy={false}
              products={sellTransactionList}
              onReceive={onReceive}
              onDNumberChange={onDNumberChange}
            />
          )}
        </>
      ) : (
        <>
          <Body>
            <ReviewTab1
              style={{ marginRight: '10px', color: '#bdbdbd' }}
              onClick={onReviewTab1}
            >
              판매
            </ReviewTab1>
            <ReviewTab2 onClick={onReviewTab2}>구매</ReviewTab2>
          </Body>
          {buyTransactionList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              구매상품이 없습니다.
            </div>
          ) : (
            <TransactionList
              buy={true}
              products={buyTransactionList}
              onReceive={onReceive}
              onDNumberChange={onDNumberChange}
            />
          )}
        </>
      )}
    </>
  );
};

export default TransactionListTab;
