import ProfileTab from '../../components/profile/ProfileTab';
import styled from 'styled-components';
import ProfileSection from '../../components/profile/ProfileSection';

const Container = styled.div`
  text-align: center;
`;

const Body = styled.div`
  width: 1000px;
  height: 600px;
  margin: auto;
  padding-top: 196px;
  font-size: 18px;
  font-family: Bazzi;
`;
const Profile = () => {
  return (
    <Container>
      <Body>
        <ProfileSection />
        <ProfileTab/>
      </Body>
    </Container>
  );
};

export default Profile;
