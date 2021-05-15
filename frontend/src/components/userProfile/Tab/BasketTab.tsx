import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../common/store';

const Container = styled.div``;

interface BookMarkList {
  bItemNo: number;
  bNo: number;
  bUserNo: number;
}
const BasketTab = () => {
  const userData = useSelector((state: RootState) => state.user.joinUserData);
  const [bookMarkList, setBookMarkList] = useState([] as BookMarkList[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/bookmark/read?uNo=${userData.uNo}`
      )
      .then((res) => {
        setBookMarkList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container>
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
      {bookMarkList ? (
        <>
          <div
            style={{
              paddingTop: '30px',
            }}
          >
            등록된 찜목록이 없습니다.
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default BasketTab;
