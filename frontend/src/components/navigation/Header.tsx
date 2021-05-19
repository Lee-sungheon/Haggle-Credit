import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Login from '../login/Login';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useDispatch } from 'react-redux';
import { userActions } from '../../state/user/index';
import Alarm from './Alarm';

const Container = styled.div<{ isPurchase: boolean }>`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 7;
  font-family: Spoqa Han Sans, Sans-serif;
  color: #3c4758;
  display: block;
  opacity: 1;
  display: ${({ isPurchase }) => (isPurchase ? 'none' : 'block')};
`;

const HeaderContainer = styled.div<{ isIndex: boolean }>`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: ${({ isIndex }) => (isIndex ? '0 40px' : '0 200px')};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    padding: 0 40px !important;
  }
  @media (max-width: 414px) {
    justify-content: center;
  }
`;

const LogoBox = styled.div`
  visibility: visible;
  height: 52px;
  cursor: pointer;
  z-index: 2;
`;

const MenuList = styled.div`
  @media (max-width: 414px) {
    display: none;
  }
`;

const Menu = styled.div<{ isIndex: boolean }>`
  width: ${({ isIndex }) => (isIndex ? 80 : 60)}px;
  height: 40px;
  margin-left: 12px;
  float: left;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  :hover {
    font-weight: 900;
  }
`;

const StyledLink = styled(Link).attrs(() => ({}))`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const isIndex = useSelector((state: RootState) => state.common.isIndex);
  const isPurchase = useSelector((state: RootState) => state.common.isPurchase);
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navRef = useRef<HTMLDivElement>(null);

  const myFunction = useCallback(() => {
    if (isIndex) {
      if (null !== navRef.current) {
        if (window.pageYOffset > 0) {
          navRef.current.style.backgroundColor = 'white';
          navRef.current.style.boxShadow = '0 4px 8px 0 rgb(0 0 0 / 4%)';
        } else {
          navRef.current.style.backgroundColor = 'inherit';
          navRef.current.style.boxShadow = 'none';
        }
      }
    } else {
      if (null !== navRef.current) {
        navRef.current.style.backgroundColor = 'white';
        navRef.current.style.boxShadow = '0 4px 8px 0 rgb(0 0 0 / 4%)';
      }
    }
  }, [isIndex]);
  const logOut = () => {
    dispatch(userActions.userLogout());
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('persist:root');
    window.location.href = '/home';
  };
  useEffect(() => {
    if (isIndex) {
      window.addEventListener('scroll', myFunction);
    } else {
      window.removeEventListener('scroll', myFunction);
    }

    return () => {
      window.removeEventListener('scroll', myFunction);
    };
  }, [navRef, isIndex, myFunction]);

  return (
    <Container
      ref={navRef}
      style={!isIndex ? { backgroundColor: 'white' } : {}}
      isPurchase={isPurchase}
    >
      <HeaderContainer
        isIndex={isIndex}
        style={!isIndex ? { backgroundColor: 'white' } : {}}
      >
        <LogoBox>
          <Link to={'/home'}>
            <img
              src={'../images/logo3.png'}
              style={{ height: '58px', marginRight: '10px' }}
              alt="logo"
            />
          </Link>
        </LogoBox>
        <MenuList>
          {!isLogin ? (
            <>
              <Menu isIndex={isIndex}>
                <StyledLink to={'/signup'}>회원가입</StyledLink>
              </Menu>
              <Menu onClick={handleOpen} isIndex={isIndex}>
                <p style={{ textDecoration: 'none', color: 'black' }}>로그인</p>
              </Menu>
            </>
          ) : (
            <>
              <Menu isIndex={isIndex}>
                <Alarm />
              </Menu>
              <Menu isIndex={isIndex}>
                <div
                  onClick={() =>
                    window.open(
                      `../chatlist/${userNo}`,
                      '_blank',
                      'width=387,height=667'
                    )
                  }
                >
                  크레딧톡
                </div>
              </Menu>
              <Menu isIndex={isIndex}>
                <StyledLink to={'/profile'}>내상점</StyledLink>
              </Menu>
              <Menu onClick={logOut} isIndex={isIndex}>
                <p style={{ textDecoration: 'none', color: 'black' }}>
                  로그아웃
                </p>
              </Menu>
            </>
          )}
        </MenuList>
      </HeaderContainer>
      <Login open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Header;
