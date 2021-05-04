import { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const TransactionReviewList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [reviewTab, setReviewTab] = useState(1);
  const [reviewList, setReviewList] = useState(['review1']);
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
          {reviewList.length === 0 ? (
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
                  <div
                    style={{
                      display: 'flex',
                      height: '40px',
                    }}
                  >
                    <div style={{ width: '100px' }}>판매</div>
                    <div style={{ width: '200px' }}>★★★★★</div>
                    <div style={{ width: ' 500px' }}>친절하셨어요 </div>
                    <div style={{ width: ' 100px' }}>2021-05-04</div>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      height: '40px',
                    }}
                  >
                    <div style={{ width: '100px' }}>구매</div>
                    <div style={{ width: '200px' }}>★★★★☆</div>
                    <div style={{ width: ' 500px' }}>상품상태가 좋았어요.</div>
                    <div style={{ width: ' 100px' }}>2021-05-05</div>
                  </div>
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
          {/* <div
    style={{
      paddingTop: '30px',
    }}
  >
    등록된 리뷰가 없습니다.
  </div> */}

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
                <div
                  style={{
                    display: 'flex',
                    height: '40px',
                  }}
                >
                  <div style={{ width: '100px' }}>판매</div>
                  <div style={{ width: '200px' }}>★★★★★</div>
                  <div style={{ width: ' 500px' }}>상품상태가 좋았어요. </div>
                  <div style={{ width: ' 100px' }}>2021-05-04</div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    height: '40px',
                  }}
                >
                  <div style={{ width: '100px' }}>구매</div>
                  <div style={{ width: '200px' }}>★★★★☆</div>
                  <div style={{ width: ' 500px' }}>친절하셨어요</div>
                  <div style={{ width: ' 100px' }}>2021-05-05</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default TransactionReviewList;
