import styled from 'styled-components';
import UploadImg from './UploadImg';
import ProfileSub from './ProfileSub';
const Container = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
`;

const ProfileSection = () => {
  return (
    <Container>
      <UploadImg />
      <ProfileSub />
    </Container>
  );
};

export default ProfileSection;
