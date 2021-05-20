import ProfileTab from '../../components/userProfile/ProfileTab';
import styled from 'styled-components';
import ProfileSection from '../../components/userProfile/ProfileSection';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

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
interface MatchParams {
  id: string;
}

const UserProfile = ({ match }: RouteComponentProps<MatchParams>) => {
  const userData = useSelector((state: RootState) => state.user.joinUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/user/myinfo?uNo=${match.params.id}`
      )
      .then((res) => {
        dispatch(userActions.joinUserData(res.data));
      })
      .catch((err) => {});
    return () => {
      dispatch(userActions.joinUserData({}));
    };
  }, []);

  return (
    <Container>
      <Body>
        <ProfileSection userData={userData} />
        {userData && <ProfileTab userData={userData} />}
      </Body>
    </Container>
  );
};

export default UserProfile;
