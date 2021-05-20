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
interface ProductEventAgreeProps {
  onIsEventAgree: (name: any) => void;
}
const ProductEventAgree = ({ onIsEventAgree }: ProductEventAgreeProps) => {
  const [stateSelectedValue, setStateSelectedValue] = useState('');
  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateSelectedValue(event.target.value);
    onIsEventAgree(event.target.value);
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
        기부여부<span style={{ color: 'red' }}>* </span>
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
                id="radio11"
                checked={stateSelectedValue === 'true'}
                onChange={handleState}
                value="true"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />
              <StateLabel htmlFor="radio11">동의</StateLabel>
            </div>
            <div>
              <Radio
                id="radio22"
                checked={stateSelectedValue === 'false'}
                onChange={handleState}
                value="false"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
              <StateLabel htmlFor="radio22">미동의</StateLabel>
            </div>
          </div>
          <div style={{ fontSize: '12px', color: 'red' }}>
            *기부를 동의하시면 기간내에 물품이 판매되지 않을경우 <br/>자동으로 물품을 기부하며 기부를 통한 자선활동 참여로 기부자에 이름을
            올려보세요.
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductEventAgree;
