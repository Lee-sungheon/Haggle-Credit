import { useState } from 'react';

interface ProductNameProps {
  onIsNameHandler: (name: any) => void;
}

const ProductName = ({ onIsNameHandler }: ProductNameProps) => {
  const [inputName, setInputName] = useState('');
  const onInputTitleHandler = (e: any) => {
    setInputName(e.target.value);
    onIsNameHandler(e.target.value);
  };
  return (
    <div
      id="titleSection"
      style={{
        height: 'auto',
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
        상품이름<span style={{ color: 'red' }}>* </span>
      </div>
      <div>
        <input
          style={{
            height: '40px',
            width: '800px',
            border: '1px solid #FF6600',
            marginRight: '25px',
          }}
          value={inputName}
          onChange={onInputTitleHandler}
          placeholder="상품 이름을 입력해주세요."
        ></input>
        <span>({inputName.length}/40)</span>
      </div>
    </div>
  );
};

export default ProductName;
