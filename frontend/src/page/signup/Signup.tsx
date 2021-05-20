import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { userSignup, checkUserEmail } from '../../api/UserApi';

const SignupContainer = styled.div`
  width: 500px;
  margin: auto;
  padding-top: 196px;
  font-size: 18px;
  font-family: Bazzi;
  text-align: center;
`;

const Logo = styled.div`
  margin-bottom: 15px;
`;

const Form = styled.div`
  width: 500px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 10px;
`;

const SectionSpan = styled.span`
  display: inline-block;
  width: 130px;
  text-align: left;
  margin-top: 15px;
`;

const SectionInput = styled.input`
  height: 25px;
  width: 200px;
  padding-left: 5px;
`;

const Button = styled.button`
  width: 350px;
  height: 40px;
  margin-bottom: 20px;
  padding: 1px 2px;
  background-color: #ffb74d;
  border: none;
  color: white;
  margin-top: 15px;
  font-size: 1.1rem;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #ffa726;
  }
`;

const Signup = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    u_email: '',
    u_password: '',
    confirmPassword: '',
    u_name: '',
    u_phone: '',
    phone_1: '',
    phone_2: '',
    phone_3: '',
    u_birth: '',
    uImage: '',
  });
  const [dataCheck, setDataCheck] = useState({
    u_emailCheck: false,
    u_password: false,
    u_name: false,
    u_phone: true,
    u_birth: false,
  });
  const [overlappingCheck, setOverlappingCheck] = useState({
    u_emailCheck: false,
    u_phone: true,
    u_confirmPassword: false,
  });

  const userEmailHandler = async (e: any) => {
    setUserData({ ...userData, u_email: e.target.value });
  };
  const userPasswordHandler = (e: any) => {
    setUserData({ ...userData, u_password: e.target.value });
  };
  const userConfirmPasswordHandler = (e: any) => {
    setUserData({ ...userData, confirmPassword: e.target.value });
  };
  const userUserNameHandler = (e: any) => {
    setUserData({ ...userData, u_name: e.target.value });
  };

  const userPhoneHandler_1 = (e: any) => {
    const p1 = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');

    setUserData({ ...userData, phone_1: p1.substring(0, 3) });
  };
  const userPhoneHandler_2 = (e: any) => {
    const p2 = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    setUserData({ ...userData, phone_2: p2.substring(0, 4) });
  };
  const userPhoneHandler_3 = (e: any) => {
    const p3 = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    setUserData({ ...userData, phone_3: p3.substring(0, 4) });
  };
  const userBirthHandler = (e: any) => {
    const birth = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');

    setUserData({ ...userData, u_birth: birth.substring(0, 8) });
  };

  useEffect(() => {
    if (userData.u_email) {
      const userEmail = userData.u_email;
      const check_Email = function (str: any) {
        let regExp =
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return regExp.test(str) ? true : false;
      };

      if (check_Email(userData.u_email) === false) {
        setDataCheck({ ...dataCheck, u_emailCheck: false });
        return;
      } else {
        setDataCheck({ ...dataCheck, u_emailCheck: true });
      }
      checkUserEmail(userEmail)
        .then((res) => {
          if (res.data === '사용 가능한 아이디 입니다.') {
            setOverlappingCheck({ ...overlappingCheck, u_emailCheck: true });
          } else {
            setOverlappingCheck({ ...overlappingCheck, u_emailCheck: false });
          }
        })
        .catch((err) => {});
    }
  }, [userData.u_email]);

  useEffect(() => {
    const check_Password = function (str: any) {
      var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
      return !reg_pwd.test(str) ? false : true;
    };
    if (check_Password(userData.u_password) === false) {
      setDataCheck({ ...dataCheck, u_password: false });
      return;
    } else {
      setDataCheck({ ...dataCheck, u_password: true });
    }
    if (userData.u_password === userData.confirmPassword) {
      setOverlappingCheck({ ...overlappingCheck, u_confirmPassword: true });
    } else {
      setOverlappingCheck({ ...overlappingCheck, u_confirmPassword: false });
    }
  }, [userData.u_password, userData.confirmPassword]);

  useEffect(() => {
    setUserData({
      ...userData,
      u_phone: userData.phone_1 + userData.phone_2 + userData.phone_3,
    });
  }, [userData.phone_1, userData.phone_2, userData.phone_3]);

  useEffect(() => {
    const check_Name = function (str: any) {
      var regNm = /^[가-힣]{1,5}/;
      return regNm.test(str) ? true : false;
    };
    if (check_Name(userData.u_name) === true) {
      setDataCheck({ ...dataCheck, u_name: true });
    } else {
      setDataCheck({ ...dataCheck, u_name: false });
    }
  }, [userData.u_name]);

  useEffect(() => {
    if (userData.u_birth.length === 8) {
      setDataCheck({ ...dataCheck, u_birth: true });
    } else {
      setDataCheck({ ...dataCheck, u_birth: false });
    }
  }, [userData.u_birth]);
  useEffect(() => {}, [userData.u_phone]);
  useEffect(() => {
    let num = Math.floor(Math.random() * 6) + 1;
    setUserData({ ...userData, uImage: `../images/profileImage_${num}.jpg` });
  }, []);
  const SignupHandler = () => {
    setIsLoading(true);
    const body = {
      uEmail: userData.u_email,
      uPassword: userData.u_password,
      uName: userData.u_name,
      uPhone: userData.u_phone,
      uImage: userData.uImage,
      uBirth:
        userData.u_birth.substring(0, 4) +
        '-' +
        userData.u_birth.substring(4, 6) +
        '-' +
        userData.u_birth.substring(6, 8),
    };
    if (
      userData.u_email &&
      dataCheck.u_emailCheck &&
      overlappingCheck.u_emailCheck
    ) {
    } else {
      alert('이메일을 다시 작성해 주세요.');
      setIsLoading(false);

      return;
    }
    if (
      userData.u_password &&
      userData.confirmPassword &&
      dataCheck.u_password &&
      overlappingCheck.u_confirmPassword
    ) {
    } else {
      alert('비밀번호를 다시 작성해 주세요.');
      setIsLoading(false);

      return;
    }
    if (userData.u_name && dataCheck.u_name) {
    } else {
      alert('이름을 다시 작성해 주세요.');
      setIsLoading(false);

      return;
    }
    if (userData.u_phone && dataCheck.u_phone && overlappingCheck.u_phone) {
    } else {
      alert('전화번호를 다시 작성해 주세요.');
      setIsLoading(false);

      return;
    }
    if (userData.u_birth && dataCheck.u_birth) {
      userSignup(body)
        .then((res: any) => {
          alert('이메일 인증을 진행해 주세요.');
          setIsLoading(false);

          history.push('/home');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert('생년월일을 다시 작성해 주세요.');
      setIsLoading(false);

      return;
    }
  };
  return (
    <SignupContainer>
      <Logo>
        <img
          src={'../images/logo2.png'}
          style={{ height: '200px' }}
          alt="logo"
        />
      </Logo>
      <Form>
        <Section>
          <SectionSpan>이메일</SectionSpan>
          <SectionInput
            id="email"
            type="email"
            value={userData.u_email}
            required
            onChange={userEmailHandler}
          ></SectionInput>
          {userData.u_email && dataCheck.u_emailCheck === false ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                color: 'red',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
              }}
            >
              사용할 수 없는 이메일입니다.
            </p>
          ) : null}
          {userData.u_email &&
          dataCheck.u_emailCheck === true &&
          overlappingCheck.u_emailCheck === false ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                color: 'red',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
              }}
            >
              이미 존재하는 이메일입니다.
            </p>
          ) : null}
          {userData.u_email &&
          dataCheck.u_emailCheck === true &&
          overlappingCheck.u_emailCheck === true ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                color: 'blue',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
              }}
            >
              사용가능한 이메일입니다.
            </p>
          ) : null}
        </Section>
        <Section>
          <SectionSpan>비밀번호</SectionSpan>
          <SectionInput
            id="password"
            type="password"
            value={userData.u_password}
            required
            onChange={userPasswordHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>비밀번호확인</SectionSpan>
          <SectionInput
            id="confirmpassword"
            type="password"
            value={userData.confirmPassword}
            required
            onChange={userConfirmPasswordHandler}
          ></SectionInput>
          {userData.u_password && dataCheck.u_password === false ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                color: 'red',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
              }}
            >
              영문, 숫자를 혼합하여 6~20자 이내로 작성해주세요.
            </p>
          ) : null}
          {userData.u_password &&
          dataCheck.u_password === true &&
          overlappingCheck.u_confirmPassword === true ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
                color: 'blue',
              }}
            >
              사용가능한 비밀번호입니다.
            </p>
          ) : null}
          {userData.u_password &&
          userData.confirmPassword &&
          dataCheck.u_password === true &&
          overlappingCheck.u_confirmPassword === false ? (
            <p
              style={{
                textAlign: 'right',
                paddingRight: '80px',
                fontSize: '13px',
                height: '10px',
                marginTop: '5px',
                marginBottom: '0',
                color: 'red',
              }}
            >
              비밀번호가 일치하지 않습니다.
            </p>
          ) : null}
        </Section>
        <Section>
          <SectionSpan>이름</SectionSpan>
          <SectionInput
            id="name"
            type="text"
            value={userData.u_name}
            onChange={userUserNameHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>전화번호</SectionSpan>
          <span style={{ width: '200px' }}>
            <input
              id="phone1"
              type="text"
              value={userData.phone_1}
              onChange={userPhoneHandler_1}
              style={{ width: '40px' }}
            ></input>
            <span> - </span>
            <input
              id="phone2"
              type="text"
              value={userData.phone_2}
              onChange={userPhoneHandler_2}
              style={{ width: '60px' }}
            ></input>
            <span> - </span>
            <input
              id="phone3"
              type="text"
              value={userData.phone_3}
              onChange={userPhoneHandler_3}
              style={{ width: '60px' }}
            ></input>
          </span>
        </Section>
        <Section>
          <SectionSpan>생년월일</SectionSpan>
          <SectionInput
            id="birth"
            type="tel"
            placeholder="yyyymmdd"
            value={userData.u_birth}
            onChange={userBirthHandler}
          ></SectionInput>
        </Section>
        <Button onClick={SignupHandler}>
          {!isLoading ? <span>회원가입</span> : <span>Loading...</span>}
        </Button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
