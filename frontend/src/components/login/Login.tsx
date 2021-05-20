import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import '../../styles/font/font.css';
import { userLogin } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';

const Logo = styled.div`
  margin-bottom: 15px;
`;

const Form = styled.div`
  margin: 0;
  width: 100%;
`;

const InputTag = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid gray;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 1px 2px;
  background-color: #ffb74d;
  border: none;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #ffa726;
  }
`;

const SubSection = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

const SubSectionLink = styled.p`
  fontsize: 13px;
  :hover {
    font-weight: 600;
  }
`;

interface LoginProps {
  open: boolean;
  handleClose: any;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 280,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
      fontFamily: 'Bazzi',
    },
  })
);

const Login: React.FunctionComponent<LoginProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });

  const onEmailHandler = (e: any) => {
    setInputData({ ...inputData, email: e.target.value });
  };
  const onPasswordHandler = (e: any) => {
    setInputData({ ...inputData, password: e.target.value });
  };

  const LoginHandler = () => {
    const body = {
      uEmail: inputData.email,
      uPassword: inputData.password,
    };
    userLogin(body)
      .then((res) => {
        if (res.status === 200) {
          alert('로그인에 성공하셨습니다.');
          dispatch(userActions.userLogin(res.data));
          handleClose();
          // 로그인 성공
        } else if (res.status === 204) {
          // 비밀번호 틀림
          alert('비밀번호가 틀렸습니다.');
        }
      })
      .catch((err) => {
        // 없는 이메일
        alert('존재하지 않는 이메일입니다.');

        console.log(err);
      });
  };
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Logo>
        <img
          src={'../images/logo2.png'}
          style={{ height: '200px' }}
          alt="logo"
        />
      </Logo>
      <Form onSubmit={LoginHandler}>
        <InputTag
          id="email"
          type="email"
          placeholder="이메일"
          value={inputData.email}
          onChange={onEmailHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              LoginHandler();
            }
          }}
        ></InputTag>
        <InputTag
          id="password"
          type="password"
          placeholder="비밀번호"
          value={inputData.password}
          onChange={onPasswordHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              LoginHandler();
            }
          }}
        ></InputTag>
        <LoginButton onClick={LoginHandler}>로그인</LoginButton>
      </Form>
      <SubSection>
        <p>비밀번호를 잊어버리셨나요?</p>
        <SubSectionLink>
          <Link to="" onClick={handleClose} style={{ color: 'black' }}>
            비밀번호 찾기
          </Link>
        </SubSectionLink>
      </SubSection>
      <SubSection>
        <p>아직 회원이 아니신가요?</p>
        <SubSectionLink>
          <Link to="/signup" onClick={handleClose} style={{ color: 'black' }}>
            회원가입하기
          </Link>
        </SubSectionLink>
      </SubSection>
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default Login;
