import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import { useState } from 'react';

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
        상태<span style={{ color: 'red' }}>* </span>
      </div>
      <div>
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
    </div>
  );
};

export default ProductState;
