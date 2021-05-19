import styled from 'styled-components';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  width: 15%;
  text-align: left;
`;

const TagP = styled.p`
  margin: 0;
  position: relative;
  padding-left: 1vw;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3vw;
`;
interface UserNameProps {
  userData: USERDATA;
}
const UserName = ({ userData }: UserNameProps) => {
  return (
    <Container>
      <TagP>{userData.uName} 님</TagP>
    </Container>
  );
};

export default UserName;
