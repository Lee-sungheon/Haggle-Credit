import { useState } from 'react';
import styled from 'styled-components';

interface DealRegionProps {
  onIsRegionHandler: (name: any) => void;
}
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;
const DealRegion = ({ onIsRegionHandler }: DealRegionProps) => {
  const [inputAddress, setInputAddress] = useState('');
  const onInputAddressHandler = (e: any) => {
    let name = e.target.value.slice(0, 20);

    setInputAddress(name);
    onIsRegionHandler(name);
  };
  return (
    <Container id="titleSection">
      <div
        style={{
          width: '20%',
          fontSize: '17px',
          fontWeight: 'bolder',
          minWidth: '130px',
        }}
      >
        거래지역<span style={{ color: 'red' }}>* </span>
      </div>
      <div
        style={{
          width: '80%',
          paddingLeft: '20px',
          minWidth: '650px',
          textAlign: 'left',
        }}
      >
        <input
          style={{
            height: '40px',
            width: '80%',
            maxWidth: '800px',
            border: '1px solid #FF6600',
            marginRight: '25px',
          }}
          value={inputAddress}
          onChange={onInputAddressHandler}
          placeholder="거래지역을 입력해주세요."
        ></input>
        <span>({inputAddress.length}/20)</span>
      </div>
    </Container>
  );
};

export default DealRegion;
