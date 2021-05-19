import styled from 'styled-components';
import UserName from './UserName';
import Credit from './Credit';
import Account from './Account';
import Introduce from './Introduce';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin-left: 2.5vw;
  height: 20vw;
`;

const Section = styled.div`
  height: 3.5vw;
  display: flex;
`;
interface ProfileSubProps {
  userData: USERDATA;
}
const ProfileSub = ({ userData }: ProfileSubProps) => {
  return (
    <Container>
      <Section>
        <UserName userData={userData} />
        <Credit userData={userData} />
        <Account userData={userData} />
      </Section>
      <Introduce userData={userData} />
    </Container>
  );
};

export default ProfileSub;
