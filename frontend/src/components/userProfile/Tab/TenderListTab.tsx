import styled from 'styled-components';

const Container = styled.div``;

const TenderListTab = () => {
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
        입찰내역
      </div>
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        입찰내역이 없습니다.
      </div>
    </Container>
  );
};

export default TenderListTab;
