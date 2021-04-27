import { useState } from 'react';

const Signup = () => {
  const [userData, setUserData] = useState({
    userEmail: '',
    password: '',
    confirmPassword: '',
    userName: '',
    phone: '',
  });

  const userEmailHandler = (e: any) => {
    setUserData({ ...userData, userEmail: e.target.value });
  };
  const userPasswordHandler = (e: any) => {
    setUserData({ ...userData, password: e.target.value });
  };
  const userConfirmPasswordHandler = (e: any) => {
    setUserData({ ...userData, confirmPassword: e.target.value });
  };
  const userUserNameHandler = (e: any) => {
    setUserData({ ...userData, userName: e.target.value });
  };
  const userPhoneHandler = (e: any) => {
    setUserData({ ...userData, phone: e.target.value });
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '500px',
          margin: 'auto',
          marginTop: '196px',
          fontSize: '18px',
          fontFamily: 'Bazzi',
        }}
      >
        <h1>회원가입</h1>
        <form>
          <div
            style={{
              width: '500px',
              margin: 'auto',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '130px',
                textAlign: 'left',
                marginTop: '15px',
              }}
            >
              이메일
            </span>
            <input
              id="email"
              type="email"
              value={userData.userEmail}
              required
              style={{
                height: '25px',
                width: '200px',
              }}
              onChange={userEmailHandler}
            ></input>
          </div>
          <div>
            <span
              style={{
                display: 'inline-block',
                width: '130px',
                textAlign: 'left',
                marginTop: '15px',
              }}
            >
              비밀번호
            </span>
            <input
              id="password"
              type="password"
              required
              style={{
                height: '25px',
                width: '200px',
              }}
              onChange={userPasswordHandler}
            ></input>
          </div>
          <div>
            <span
              style={{
                display: 'inline-block',
                width: '130px',
                textAlign: 'left',
                marginTop: '15px',
              }}
            >
              비밀번호확인
            </span>
            <input
              id="confirmpassword"
              type="password"
              required
              style={{
                height: '25px',
                width: '200px',
              }}
              onChange={userConfirmPasswordHandler}
            ></input>
          </div>
          <div>
            <span
              style={{
                display: 'inline-block',
                width: '130px',
                textAlign: 'left',
                marginTop: '15px',
              }}
            >
              이름
            </span>
            <input
              id="name"
              type="text"
              required
              style={{
                height: '25px',
                width: '200px',
              }}
              onChange={userUserNameHandler}
            ></input>
          </div>
          <div>
            <span
              style={{
                display: 'inline-block',
                width: '130px',
                textAlign: 'left',
                marginTop: '15px',
              }}
            >
              전화번호
            </span>
            <input
              id="phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              style={{
                height: '25px',
                width: '200px',
              }}
              onChange={userPhoneHandler}
            ></input>
          </div>
          <button
            style={{
              width: '350px',
              height: 40,
              marginBottom: 20,
              padding: '1px 2px',
              backgroundColor: '#ffb74d',
              border: 'none',
              color: 'white',
              marginTop: '15px',
              fontSize: '1.1rem',
              borderRadius: '5px',
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
