import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';
import '../../styles/font/font.css';

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
      <Form>
        <InputTag id="email" type="email" placeholder="이메일"></InputTag>
        <InputTag
          id="password"
          type="password"
          placeholder="비밀번호"
        ></InputTag>
        <LoginButton>로그인</LoginButton>
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
