import ProfileTab from '../../components/userProfile/ProfileTab';
import styled from 'styled-components';
import ProfileSection from '../../components/userProfile/ProfileSection';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import { USERDATA } from 'styled-components';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

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
interface MatchParams {
  id: string;
}

const UserProfile = ({ match, location }: RouteComponentProps<MatchParams>) => {
  const history = useHistory();
  const userData = useSelector((state: RootState) => state.user.joinUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(match);
    axios
      .get(
        `https://k4d107.p.ssafy.io/haggle-credit/user/myinfo?uNo=${match.params.id}`
      )
      .then((res) => {
        dispatch(userActions.joinUserData(res.data));

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      dispatch(userActions.joinUserData({}));
    };
  }, []);

  return (
    <Container>
      <Body>
        <ProfileSection />
        {userData && <ProfileTab />}
      </Body>
    </Container>
  );
};

export default UserProfile;
