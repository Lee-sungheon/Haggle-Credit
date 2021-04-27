import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { time } from 'node:console';
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background: url(../images/banner.jpg);
  background-size: cover;
  background-position: 50%;
`;

const ChevronIcon = styled(KeyboardArrowDownIcon).attrs(()=>({
}))`
  position: absolute;
  bottom: 23px;
  left: 50%;
  color: ${({ theme }) => theme.color.background};
  width: 32px;
  height: 32px;
  transform: translate3d(-50%,0,0);
  cursor: pointer;
  animation-name: move;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes move {
    from {
    }
    to {
      bottom: 15px;
    }
  }
`;

const ContentBox = styled.div`
  position: absolute;
  left: 40px;
  top: 168px;
`;

const SubText = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.grey_text};
  animation-duration: .8s;
  animation-name: move;
  animation-fill-mode: forwards;
  opacity: 0;
  @keyframes move {
    from {
      transform: translate3d(0,20px,0)
    }
    to {
      transform: translate3d(0,0,0);
      opacity: 1
    }
  }
`;

const MainText = styled.h2`
  font-size: 52px;
  margin: 0;
  line-height: 72px;
  font-weight: 700;
  letter-spacing: -2px;
  color: ${({ theme }) => theme.color.grey_text};
  animation-duration: .8s;
  animation-delay: .15s;
  animation-name: move;
  animation-fill-mode: forwards;
  opacity: 0;
  @keyframes move {
    from {
      transform: translate3d(0,20px,0)
    }
    to {
      transform: translate3d(0,0,0);
      opacity: 1
    }
  }
`;

const AboutContainer = styled.div`
  padding-top: 90px;
  width: 100%;
  height: 100vh;
`;

const AboutContent = styled.div`
  display: none;
`;

const IndexPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
    console.log("ref" + Date.now());
    function myFunction() {
      if (null !== aboutRef.current) {
        if (window.pageYOffset > 100){
          aboutRef.current.style.display = "block";
        }
      }
    }
    window.onscroll = () => {
      myFunction();
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({top: window.innerHeight, behavior:'smooth'});
  };

  return (
    <>
      <Container>
        <ChevronIcon style={{ fontSize: 35 }} onClick={scrollToBottom} />
        <ContentBox >
          <SubText>NO.1 중고 거래 플랫폼</SubText>
          <MainText> Haggle Credit으로 <br/> 중고 거래를 쉽고 즐겁게 </MainText>
        </ContentBox>
      </Container>
      <AboutContainer>
        <AboutContent ref={aboutRef}>
          <MainText style={{textAlign: 'center'}}> Haggle Credit은 </MainText>
          <SubText style={{textAlign: 'center'}}>
            <br />경매 시스템을 기반으로 소비자와 판매자의 연결고리<br />
            역할을 하고 있는 중고거래의 필수템, <span style={{'fontWeight': 700}}>압도적 1위</span><br />
            <span style={{'fontWeight': 700}}>플랫폼</span>입니다.
          </SubText>
        </AboutContent>
      </AboutContainer>
    </>
  );
};
export default IndexPage;