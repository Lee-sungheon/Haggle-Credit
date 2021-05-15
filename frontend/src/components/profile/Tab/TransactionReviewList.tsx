import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';

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
interface ReviewList {
  urContent: string;
  urItemNo: number;
  urNo: number;
  urScore: number;
  urUserNo: number;
  urWriteDate: string;
  urWriteUserNo: number;
}
const TransactionReviewList = () => {
  const userData = useSelector((state: RootState) => state.user.userData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [reviewTab, setReviewTab] = useState(1);
  const [myReviewList, setMyReviewList] = useState([] as ReviewList[]);
  const [myWrittenList, setMyWrittenList] = useState([] as ReviewList[]);

  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/review/mine?uNo=${userData.uNo}`
      )
      .then((res) => {
        setMyReviewList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/review/myWritten?uNo=${userData.uNo}`
      )
      .then((res) => {
        setMyWrittenList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onReviewTab1 = () => {
    setReviewTab(1);
  };
  const onReviewTab2 = () => {
    setReviewTab(2);
  };
  return (
    <Container>
      {reviewTab === 1 ? (
        <>
          <Body>
            <ReviewTab1 style={{ marginRight: '10px' }} onClick={onReviewTab1}>
              내가 작성한 리뷰
            </ReviewTab1>
            <ReviewTab2 style={{ color: '#bdbdbd' }} onClick={onReviewTab2}>
              나를 평가한 리뷰
            </ReviewTab2>
          </Body>
          {myWrittenList.length === 0 ? (
            <div
              style={{
                paddingTop: '30px',
              }}
            >
              등록된 리뷰가 없습니다.
            </div>
          ) : (
            <div
              style={{
                paddingTop: '30px',
                marginTop: '30px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    marginBottom: '30px',
                  }}
                >
                  <div style={{ width: '100px' }}>판매/구매</div>
                  <div style={{ width: '200px' }}>평가점수</div>
                  <div style={{ width: ' 500px' }}>내용</div>
                  <div style={{ width: ' 100px' }}>작성일</div>
                </div>
                <div>
                  {myWrittenList.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          height: '40px',
                        }}
                      >
                        <div style={{ width: '100px' }}>
                          {item.urUserNo === item.urWriteUserNo
                            ? '판매'
                            : '구매'}
                        </div>
                        <div style={{ width: '200px' }}>{item.urScore}</div>
                        <div style={{ width: ' 500px' }}>{item.urContent} </div>
                        <div style={{ width: ' 100px' }}>
                          {item.urWriteDate.slice(0, 10)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            style={{
              marginTop: '30px',
              paddingLeft: '30px',
              textAlign: 'left',
              height: '50px',
              borderBottom: '1px solid #bdbdbd',
              display: 'flex',
            }}
          >
            <ReviewTab1
              style={{ marginRight: '10px', color: '#bdbdbd' }}
              onClick={onReviewTab1}
            >
              내가 작성한 리뷰
            </ReviewTab1>
            <ReviewTab2 onClick={onReviewTab2}>나를 평가한 리뷰</ReviewTab2>
          </div>
          <div
            style={{
              paddingTop: '30px',
              marginTop: '30px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  textAlign: 'center',
                  marginBottom: '30px',
                }}
              >
                <div style={{ width: '100px' }}>판매/구매</div>
                <div style={{ width: '200px' }}>평가점수</div>
                <div style={{ width: ' 500px' }}>내용</div>
                <div style={{ width: ' 100px' }}>작성일</div>
              </div>
              <div>
                {myReviewList.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        height: '40px',
                      }}
                    >
                      <div style={{ width: '100px' }}>
                        {item.urUserNo === item.urWriteUserNo ? '판매' : '구매'}
                      </div>
                      <div style={{ width: '200px' }}>{item.urScore}</div>
                      <div style={{ width: ' 500px' }}>{item.urContent} </div>
                      <div style={{ width: ' 100px' }}>
                        {item.urWriteDate.slice(0, 10)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default TransactionReviewList;
