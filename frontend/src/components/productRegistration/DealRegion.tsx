import styled from 'styled-components';

const Container = styled.div`
  padding: 145px 200px 0 200px;
  @media (max-width: 1024px) {
    padding: 145px 40px 0 40px;
  }
`;

const DealRegion = () => {
  return (
    <div
      id="address"
      style={{
        display: 'flex',
        padding: '25px 0',
        borderBottom: '1px solid gray',
      }}
    >
      <div
        style={{
          width: '180px',
          fontSize: '17px',
          fontWeight: 'bolder',
        }}
      >
        <p>
          거래지역<span style={{ color: 'red' }}>* </span>
        </p>
      </div>
    </div>
  );
};

export default DealRegion;
