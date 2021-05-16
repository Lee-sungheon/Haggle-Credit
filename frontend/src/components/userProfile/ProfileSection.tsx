import styled from 'styled-components';
import UploadImg from './UploadImg';
import ProfileSub from './ProfileSub';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 20vw;
  display: flex;
`;
interface ProfileSectionProps {
  userData: USERDATA;
}
const ProfileSection = ({ userData }: ProfileSectionProps) => {
  return (
    <Container>
      <UploadImg userData={userData} />
      <ProfileSub userData={userData} />
    </Container>
  );
};

export default ProfileSection;
