import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

const Container = styled.div`
  height: 11.5vw;
  margin-left: 1vw;
`;

const Title = styled.p`
  text-align: left;
`;



const Introduce = () => {
  const userData = useSelector((state: RootState) => state.user.joinUserData);

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
