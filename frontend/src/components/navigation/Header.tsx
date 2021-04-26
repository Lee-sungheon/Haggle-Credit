import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 7;
  font-family: Spoqa Han Sans,Sans-serif;
  color: #3c4758;
  display: block;
  border-bottom: 1px solid rgb(238, 238, 238);
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
  height: 40px;
  cursor: pointer;
  z-index: 2;
`;

const MenuList = styled.div`
`;

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

const StyledLink = styled(Link).attrs(()=>({}))`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  :hover {
    font-weight: 900;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <LogoBox >
          <Link to={"/home"}>
            <img
              src={"../images/logo.png"}
              style={{ height: "52px", marginRight: "10px" }}
              alt="logo"
            />
          </Link>
        </LogoBox>
        <MenuList>
          <Menu><StyledLink to={"/home"}>회원가입</StyledLink></Menu>
          <Menu><StyledLink to={"/home"}>로그인</StyledLink></Menu>
          <Menu><StyledLink to={"/home"}>내상점</StyledLink></Menu>
        </MenuList>
      </HeaderContainer>
    </Container>
  )
}

export default Header;