import styled from 'styled-components';
import UserName from './UserName';
import Credit from './Credit';
import Account from './Account';
import Introduce from './Introduce';

const Container = styled.div`
  width: 700px;
  height: 300px;
`;

const Section = styled.div`
  width: 700px;
  height: 70px;
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
