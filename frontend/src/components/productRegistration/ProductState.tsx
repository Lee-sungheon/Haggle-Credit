import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  padding: 25px 0;
  width: 100%;
`;
const StateLabel = styled.label`
  :hover {
    cursor: pointer;
  }
`;
interface ProductStateProps {
  onIsUsedStatus: (name: any) => void;
}
const ProductState = ({ onIsUsedStatus }: ProductStateProps) => {
  const [stateSelectedValue, setStateSelectedValue] = useState('a');
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateSelectedValue(event.target.value);
    onIsUsedStatus(event.target.value);
  };
  return (
    <Container id="address">
      <div
        style={{
          width: '20%',
          fontSize: '17px',
          fontWeight: 'bolder',
          minWidth: '120px',
        }}
      >
        상태<span style={{ color: 'red' }}>* </span>
      </div>
      <div
        style={{
          width: '80%',
          paddingLeft: '20px',
          minWidth: '650px',
          textAlign: 'left',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <div>
              <Radio
                id="radio1"
                checked={stateSelectedValue === '새상품'}
                onChange={handleState}
                value="새상품"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
              <StateLabel htmlFor="radio1">새상품</StateLabel>
            </div>
            <div>
              <Radio
                id="radio2"
                checked={stateSelectedValue === '중고상품'}
                onChange={handleState}
                value="중고상품"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
              <StateLabel htmlFor="radio2">중고상품</StateLabel>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductState;
