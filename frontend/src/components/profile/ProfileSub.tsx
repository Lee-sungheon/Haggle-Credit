import styled from 'styled-components';
import UserName from './UserName';
import Credit from './Credit';
import Account from './Account';
import Introduce from './Introduce';

const Container = styled.div`
  width: 70%;
  margin-left: 2.5vw;
  height: 20vw;
`;

const Section = styled.div`
  height: 3.5vw;
  display: flex;
`;

const ProfileSub = () => {
  return (
    <Container>
      <Section>
        <UserName />
        <Credit />
        <Account />
      </Section>
      <Introduce />
    </Container>
  );
};

export default ProfileSub;
