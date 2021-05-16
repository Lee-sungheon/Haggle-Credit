import ProfileTab from '../../components/profile/ProfileTab';
import styled from 'styled-components';
import ProfileSection from '../../components/profile/ProfileSection';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  text-align: center;
  padding: 196px 200px 0 200px;

  @media (max-width: 1024px) {
    padding: 196px 40px 0 40px;
  }
`;

const Body = styled.div`
  margin: 0;
  font-size: 1vw;
  font-family: Bazzi;
`;
const Profile = () => {
  const history = useHistory();

  const userData = useSelector((state: RootState) => state.user.userData);
  useEffect(() => {
    if (!userData.uNo) {
      history.push('/home');
    }
  }, []);
  return (
    <Container>
      <Body>
        <ProfileSection />
        <ProfileTab />
      </Body>
    </Container>
  );
};

export default Profile;
