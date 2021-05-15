import styled from 'styled-components';
import UploadImg from './UploadImg';
import ProfileSub from './ProfileSub';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 1000px;
  height: 300px;
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
