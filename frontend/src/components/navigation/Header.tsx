import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Login from '../login/Login';

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  /* background-color: ${({ theme }) => theme.color.background}; */
  z-index: 7;
  font-family: Spoqa Han Sans, Sans-serif;
  color: #3c4758;
  display: block;
  opacity: 1;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 0 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const LogoBox = styled.div`
  visibility: visible;
  height: 52px;
  cursor: pointer;
  z-index: 2;
`;

const MenuList = styled.div``;

const Menu = styled.div`
  width: 80px;
  height: 40px;
  margin-left: 12px;
  float: left;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledLink = styled(Link).attrs(() => ({}))`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  font-size: 14px;
  :hover {
    font-weight: 900;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function myFunction() {
      if (null !== navRef.current) {
        if (window.pageYOffset > 0) {
          navRef.current.style.backgroundColor = 'white';
          navRef.current.style.boxShadow = '0 4px 8px 0 rgb(0 0 0 / 4%)';
        } else {
          navRef.current.style.backgroundColor = 'inherit';
          navRef.current.style.boxShadow = 'none';
        }
      }
    }
    window.addEventListener('scroll', function () {
      myFunction();
    });
    return window.removeEventListener('scroll', function () {
      myFunction();
    });
  }, [navRef]);

  return (
    <Container ref={navRef}>
      <HeaderContainer>
        <LogoBox>
          <Link to={'/home'}>
            <img
              src={'../images/logo.png'}
              style={{ height: '58px', marginRight: '10px' }}
              alt="logo"
            />
          </Link>
        </LogoBox>
        <MenuList>
          <Menu>
            <StyledLink to={'/signup'}>회원가입</StyledLink>
          </Menu>
          <Menu onClick={handleOpen}>
            <p>로그인</p>
          </Menu>
          <Menu>
            <StyledLink to={'/home'}>내상점</StyledLink>
          </Menu>
        </MenuList>
      </HeaderContainer>
      <Login open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Header;
