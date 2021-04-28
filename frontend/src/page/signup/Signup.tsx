import { useState } from 'react';
import styled from 'styled-components';

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

const Head = styled.h1`
  text-align: center;
`;

const Form = styled.form`
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
    <SignupContainer>
      <Logo>
        <img
          src={'../images/logo2.png'}
          style={{ height: '200px' }}
          alt="logo"
        />
      </Logo>
      {/* <Head>회원가입</Head> */}
      <Form>
        <Section>
          <SectionSpan>이메일</SectionSpan>
          <SectionInput
            id="email"
            type="email"
            value={userData.userEmail}
            required
            onChange={userEmailHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>비밀번호</SectionSpan>
          <SectionInput
            id="password"
            type="password"
            required
            onChange={userPasswordHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>비밀번호확인</SectionSpan>
          <SectionInput
            id="confirmpassword"
            type="password"
            required
            onChange={userConfirmPasswordHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>이름</SectionSpan>
          <SectionInput
            id="name"
            type="text"
            required
            onChange={userUserNameHandler}
          ></SectionInput>
        </Section>
        <Section>
          <SectionSpan>전화번호</SectionSpan>
          <SectionInput
            id="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={userPhoneHandler}
          ></SectionInput>
        </Section>
        <Button>회원가입</Button>
      </Form>
    </SignupContainer>
  );
};

export default Signup;
