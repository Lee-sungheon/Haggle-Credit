import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    },
    logo_div: {
      marginBottom: '15px',
    },
    form_div: {
      margin: 0,
      width: '100%',
    },
    inputTag: {
      width: '100%',
      height: 35,
      marginBottom: 20,
      border: 'none',
      borderBottom: '1px solid gray',
    },
    loginButton: {
      width: '100%',
      height: 40,
      marginBottom: 20,
      padding: '1px 2px',
      backgroundColor: '#ffb74d',
      border: 'none',
      color: 'white',
    },
    sub_div: {
      fontSize: '15px',
      marginBottom: '10px',
    },
    sub_div_p: {
      fontSize: '13px',
    },
  })
);

const Login: React.FunctionComponent<LoginProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.logo_div}>
        <img src={'../images/logo.png'} style={{ height: '58px' }} alt="logo" />
      </div>
      <div className={classes.form_div}>
        <input
          id="email"
          type="email"
          className={classes.inputTag}
          placeholder="이메일"
        ></input>
        <input
          id="password"
          type="password"
          className={classes.inputTag}
          placeholder="비밀번호"
        ></input>
        <button className={classes.loginButton}>로그인</button>
      </div>
      <div className={classes.sub_div}>
        <p>비밀번호를 잊어버리셨나요?</p>
        <p className={classes.sub_div_p}>비밀번호 찾기</p>
      </div>
      <div className={classes.sub_div}>
        <p>아직 회원이 아니신가요?</p>
        <p className={classes.sub_div_p}>회원가입하기</p>
      </div>
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
