import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import { changeIntroduceAPI } from '../../api/UserApi';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  height: 230px;
  margin-left: 20px;
`;

const Title = styled.p`
  text-align: left;
`;

const EditSection = styled.div`
  margin: 0;
  text-align: right;
  margin-top: -20px;
  position: relative;
  zindex: 2;
`;

const EditButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-right: 25px;
  margin-bottom: 10px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  width: 50px;
  height: 20px;
  :hover {
    cursor: pointer;
  }
`;

const EditCompleteButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-right: 25px;
  margin-bottom: 10px;
  background-color: white;
  color: rgb(136, 136, 136);
  font-weight: bold;
  border-radius: 4px;
  width: 80px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`;

const IntroduceTextArea = styled.textarea`
  border: 2px solid black;
  width: 90%;
  height: 60%;
  text-align: left;
  padding: 8px;
  resize: none;
`;

const Introduce = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.joinUserData);

  const [toggle, setToggle] = useState(true);
  const [introduce, setIntroduce] = useState('');
  useEffect(() => {
    if (userData.uContent) {
      setIntroduce(userData.uContent);
    }
  }, []);
  const onToggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Title>소개</Title>
      <textarea
        style={{
          border: '1px solid gray',
          width: '90%',
          height: '60%',
          textAlign: 'left',
          padding: '8px',
          resize: 'none',
        }}
        spellCheck="false"
        value={userData.uContent}
        readOnly
      ></textarea>
    </Container>
  );
};

export default Introduce;
