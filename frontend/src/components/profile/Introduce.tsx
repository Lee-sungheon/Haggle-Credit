import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import { changeIntroduceAPI } from '../../api/UserApi';
import { USERDATA } from 'styled-components';

const Container = styled.div`
  height: 11.5vw;
  margin-left: 1vw;
`;

const Title = styled.p`
  text-align: left;
`;

const EditSection = styled.div`
  margin: 0;
  text-align: right;
  margin-top: -1vw;
  position: relative;
  zindex: 2;
`;

const EditButton = styled.button`
  font-size: 10px;
  margin: 0;
  margin-right: 2.5vw;
  margin-bottom: 1vw;
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
  margin-right: 2.5vw;
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
  font-size: 1vw;
  border: 2px solid black;
  width: 90%;
  height: 60%;
  text-align: left;
  padding: 8px;
  resize: none;
`;
interface IntroduceProps {
  userData: USERDATA;
}
const Introduce = ({ userData }: IntroduceProps) => {
  const dispatch = useDispatch();

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

  const onIntroduceHandler = (e: any) => {
    setIntroduce(e.target.value);
  };

  const changeIntroduce = () => {
    let body = userData;
    body.uContent = introduce;
    changeIntroduceAPI(body)
      .then((res) => {
        dispatch(userActions.changeIntroduce(res.data));

        onToggleHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Title>내 소개</Title>
      <EditSection>
        {toggle ? (
          <EditButton onClick={onToggleHandler}>수정</EditButton>
        ) : (
          <EditCompleteButton onClick={changeIntroduce}>
            수정완료
          </EditCompleteButton>
        )}
      </EditSection>
      {toggle ? (
        <textarea
          style={{
            border: '1px solid gray',
            width: '90%',
            height: '60%',
            textAlign: 'left',
            padding: '8px',
            resize: 'none',
            fontSize: '1vw',
          }}
          spellCheck="false"
          value={userData.uContent}
          readOnly
        ></textarea>
      ) : (
        <IntroduceTextArea
          value={introduce}
          onChange={onIntroduceHandler}
          placeholder="소개를 입력해주세요."
        ></IntroduceTextArea>
      )}
    </Container>
  );
};

export default Introduce;
