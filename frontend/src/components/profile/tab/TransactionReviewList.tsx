import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';

import Rating from '@material-ui/lab/Rating';

const Container = styled.div``;

const Body = styled.div`
  margin-top: 30px;
  padding-left: 30px;
  text-align: left;
  height: 50px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
`;
const Avatar = styled.div`
  cursor: pointer;
  display: inline-flex;
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
  u_name: string;
  u_image: string;
  ur_write_user_no: number;
  ur_no: number;
  ur_user_no: number;
  ur_item_no: number;
  ur_content: string;
  ur_score: number;
  ur_write_date: string;
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
        `https://k4d107.p.ssafy.io/haggle-credit/review/mystore?page=1&uNo=${userData.uNo}`
      )
      .then((res) => {
        setMyReviewList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/review/myWritten?page=1&uNo=${userData.uNo}`
      )
      .then((res) => {
        setMyWrittenList(res.data);
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
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    textAlign: 'center',
                    marginBottom: '30px',
                    width: '100%',
                  }}
                >
                  <div style={{ width: '14%' }}>작성자</div>
                  <div style={{ width: '10%' }}>판매/구매</div>
                  <div style={{ width: '20%' }}>평가점수</div>
                  <div style={{ width: ' 41%' }}>내용</div>
                  <div style={{ width: ' 15%' }}>작성일</div>
                </div>
                <div>
                  {myWrittenList.map((review, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          height: '40px',
                          width: '100%',
                        }}
                      >
                        <div style={{ width: '14%', lineHeight: '32px' }}>
                          <Avatar>
                            <img
                              src={review.u_image}
                              alt=""
                              width="32"
                              height="32"
                              style={{ borderRadius: '50%' }}
                            />
                            <div
                              style={{ lineHeight: '32px', marginLeft: '5px' }}
                            >
                              {review.u_name}
                            </div>
                          </Avatar>
                        </div>
                        <div style={{ width: '10%', lineHeight: '32px' }}>
                          {review.ur_user_no === review.ur_write_user_no
                            ? '판매'
                            : '구매'}
                        </div>
                        <div style={{ width: '20%', lineHeight: '32px' }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            value={review.ur_score}
                            precision={0.5}
                            defaultChecked
                            readOnly
                            size="small"
                          />
                        </div>
                        <div style={{ width: ' 41%', lineHeight: '32px' }}>
                          {review.ur_content}{' '}
                        </div>
                        <div style={{ width: '15%', lineHeight: '32px' }}>
                          {review.ur_write_date.slice(0, 10)}
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
          <Body>
            <ReviewTab1
              style={{ marginRight: '10px', color: '#bdbdbd' }}
              onClick={onReviewTab1}
            >
              내가 작성한 리뷰
            </ReviewTab1>
            <ReviewTab2 style={{ color: 'black' }} onClick={onReviewTab2}>
              나를 평가한 리뷰
            </ReviewTab2>
          </Body>
          {myReviewList.length === 0 ? (
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
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    textAlign: 'center',
                    marginBottom: '30px',
                    width: '100%',
                  }}
                >
                  <div style={{ width: '14%' }}>작성자</div>
                  <div style={{ width: '10%' }}>판매/구매</div>
                  <div style={{ width: '20%' }}>평가점수</div>
                  <div style={{ width: ' 41%' }}>내용</div>
                  <div style={{ width: ' 15%' }}>작성일</div>
                </div>
                <div>
                  {myReviewList.map((review, idx) => {
                    return (
                      <div
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          height: '40px',
                          width: '100%',
                        }}
                      >
                        <div style={{ width: '14%', lineHeight: '32px' }}>
                          <Avatar>
                            <img
                              src={review.u_image}
                              alt=""
                              width="32"
                              height="32"
                              style={{ borderRadius: '50%' }}
                            />
                            <div
                              style={{ lineHeight: '32px', marginLeft: '5px' }}
                            >
                              {review.u_name}
                            </div>
                          </Avatar>
                        </div>
                        <div style={{ width: '10%', lineHeight: '32px' }}>
                          {review.ur_user_no === review.ur_write_user_no
                            ? '판매'
                            : '구매'}
                        </div>
                        <div style={{ width: '20%', lineHeight: '32px' }}>
                          <Rating
                            name="half-rating-read"
                            defaultValue={0}
                            precision={0.5}
                            readOnly
                            defaultChecked
                            size="small"
                            value={review.ur_score}
                          />
                        </div>
                        <div style={{ width: ' 41%', lineHeight: '32px' }}>
                          {review.ur_content}{' '}
                        </div>
                        <div style={{ width: '15%', lineHeight: '32px' }}>
                          {review.ur_write_date.slice(0, 10)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default TransactionReviewList;
