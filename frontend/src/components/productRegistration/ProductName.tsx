import { useState } from 'react';
import styled from 'styled-components';

interface ProductNameProps {
  onIsNameHandler: (name: any) => void;
}
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;

const ProductName = ({ onIsNameHandler }: ProductNameProps) => {
  const [inputName, setInputName] = useState('');

  const onInputTitleHandler = (e: any) => {
    let name = e.target.value.slice(0, 40);
    setInputName(name);
    onIsNameHandler(name);
  };

  return (
    <Container id="titleSection">
      <div
        style={{
          width: '20%',
          fontSize: '17px',
          fontWeight: 'bolder',
          minWidth: '120px',
        }}
      >
        상품이름<span style={{ color: 'red' }}>* </span>
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
          value={inputName}
          onChange={onInputTitleHandler}
          placeholder="상품 이름을 입력해주세요."
        ></input>
        <span>({inputName.length}/40)</span>
      </div>
    </Container>
  );
};

export default ProductName;
