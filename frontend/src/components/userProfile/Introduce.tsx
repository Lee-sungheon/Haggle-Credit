import styled from 'styled-components';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  height: 11.5vw;
  margin-left: 1vw;
`;

const Title = styled.p`
  text-align: left;
`;

interface IntroduceProps {
  userData: USERDATA;
}
const Introduce = ({ userData }: IntroduceProps) => {
  return (
    <Container>
      <Title>소개</Title>
      <textarea
        style={{
          border: '1px solid gray',
          width: '90%',
          height: '90%',
          textAlign: 'left',
          padding: '8px',
          resize: 'none',
          fontSize: '1vw',
        }}
        spellCheck="false"
        value={userData.uContent}
        readOnly
      ></textarea>
    </Container>
  );
};

export default Introduce;
