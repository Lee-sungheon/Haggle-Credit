import { useState } from 'react';

interface DealRegionProps {
  onIsRegionHandler: (name: any) => void;
}

const DealRegion = ({ onIsRegionHandler }: DealRegionProps) => {
  const [inputAddress, setInputAddress] = useState('');
  const onInputAddressHandler = (e: any) => {
    let name = e.target.value.slice(0, 20);

    setInputAddress(name);
    onIsRegionHandler(name);
  };
  return (
    <div
      id="titleSection"
      style={{
        display: 'flex',
        borderBottom: '1px solid gray',
        padding: '25px 0',
      }}
    >
      <div
        style={{
          width: '180px',
          fontSize: '17px',
          fontWeight: 'bolder',
        }}
      >
        거래지역<span style={{ color: 'red' }}>* </span>
      </div>
      <div>
        <input
          style={{
            height: '40px',
            width: '50vw',
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
    </div>
  );
};

export default DealRegion;
