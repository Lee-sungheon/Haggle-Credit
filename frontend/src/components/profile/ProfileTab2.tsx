import { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.div`
  height: 50px;
  width: 160px;
  border: 1px solid black;
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;
const ProfileTab2 = () => {
  const [tabId, setTabId] = useState(0);
  const clickHandler = (id: number) => {
    setTabId(id);
  };
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '10px',
      }}
    >
      <div
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'inline-flex',
          textAlign: 'center',
        }}
      >
        {tabId === 0 ? (
          <Tab onClick={() => clickHandler(0)}>
            <p>상품</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(0)}
          >
            <p>상품</p>
          </div>
        )}
        {tabId === 1 ? (
          <Tab onClick={() => clickHandler(1)}>
            <p>상품문의</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(1)}
          >
            <p>상품문의</p>
          </div>
        )}
        {tabId === 2 ? (
          <Tab onClick={() => clickHandler(2)}>
            <p>찜</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(2)}
          >
            <p>찜</p>
          </div>
        )}
        {tabId === 3 ? (
          <Tab onClick={() => clickHandler(3)}>
            <p>입찰내역</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(3)}
          >
            <p>입찰내역</p>
          </div>
        )}
        {tabId === 4 ? (
          <Tab onClick={() => clickHandler(4)}>
            <p>팔로잉</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(4)}
          >
            <p>팔로잉</p>
          </div>
        )}
        {tabId === 5 ? (
          <Tab onClick={() => clickHandler(5)}>
            <p>팔로워</p>
          </Tab>
        ) : (
          <div
            style={{
              height: '50px',
              width: '160px',
              border: '1px solid #e0e0e0',
              backgroundColor: '#f5f5f5',
              color: '#bdbdbd',
              borderBottom: '1px solid black',
            }}
            onClick={() => clickHandler(5)}
          >
            <p>팔로워</p>
          </div>
        )}
      </div>
      <div key="1" hidden={tabId !== 0}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          상품
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          등록된 상품이 없습니다.
        </div>
      </div>
      <div key="2" hidden={tabId !== 1}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          상품문의
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          등록된 문의가 없습니다.
        </div>
      </div>
      <div key="3" hidden={tabId !== 2}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          찜
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          등록된 찜목록이 없습니다.
        </div>
      </div>
      <div key="4" hidden={tabId !== 3}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          입찰내역
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          입찰내역이 없습니다.
        </div>
      </div>
      <div key="5" hidden={tabId !== 4}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          팔로잉
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          팔로잉이 없습니다.
        </div>
      </div>
      <div key="6" hidden={tabId !== 5}>
        <div
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            textAlign: 'left',
            height: '50px',
            borderBottom: '1px solid #bdbdbd',
          }}
        >
          팔로워
        </div>
        <div
          style={{
            paddingTop: '30px',
          }}
        >
          팔로워가 없습니다.
        </div>
      </div>
    </div>
  );
};

export default ProfileTab2;
