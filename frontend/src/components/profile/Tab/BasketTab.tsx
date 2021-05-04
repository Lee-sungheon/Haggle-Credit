import { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const BasketTab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        등록된 찜목록이 없습니다.
      </div>
    </Container>
  );
};

export default BasketTab;
