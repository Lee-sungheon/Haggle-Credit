import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useHistory } from "react-router";

interface Props {
  isScroll: boolean;
  idx: number;
}

const StyledLinearProgress = withStyles({
  root: {
    height: 6,
  },
  colorPrimary: {
    backgroundColor: "grey"
  },
  barColorPrimary: {
    backgroundColor: "#f5a21a"
  },
})(LinearProgress);

const CardArea = styled.div`
cursor: pointer;
float: left;
position: relative;
width: 23%;
height: 100%;
background-color: #fff;
color: #fff;
box-sizing: border-box;
margin: 10px 1%;
margin-bottom: 50px;
border: 1px solid rgba(0,0,0,.11);
@media (max-width: 1248px) {
  width: 31%;
}
@media (max-width: 748px) {
  width: 48%;
}
`;

const Card = styled.div`
padding: 0;
cursor: pointer;
padding: 0 10px;
`;

const Title = styled.div`
overflow: hidden;
text-overflow: ellipsis;
height: 50px;
line-height: 25px;
word-wrap: break-word;
word-break: break-all;
font-size: 15px;
letter-spacing: -.5px;
color: #333;
text-align: left;
font-weight: 700;
`;

const SubTitle = styled.div`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin-top: 8px;
margin-bottom: 5px;
font-size: 13px;
color: #828282;
`;

const ProgressArea = styled.strong`
display: inline-block;
margin-top: 11px;
font-size: 17px;
letter-spacing: -.2px;
color: #f5a21a;
`;

const ProgressMoney = styled.strong`
float: right;
margin-top: 11px;
font-size: 17px;
color: #333;
`;

const DonationButton = styled.div`
position: absolute;
bottom: -50;
left: -1px;
width: 100%;
background-color: #f5a21a;
height: 46px;
text-align: center;
line-height: 46px;
font-size: 18px;
font-weight: 900;
border: 1px solid rgba(0,0,0,.11);
`;

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
`;

const DonationItem = ({ isScroll, idx }: Props) => {
  const [progress, setProgress] = React.useState(0);
  const history = useHistory();
  const goDetail = () => {
    history.push({
      pathname: `/donation_detail/${'1'}`,
      // state: {item}
    });
  };

  React.useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 46) {
          return 46;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 46);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [isScroll]);
  
  return (
    <CardArea id={`card-${idx}`}>
      <ImgBox onClick={goDetail} >
        <img 
          src="https://happybean-phinf.pstatic.net/20210503_170/1620031355174XqanD_PNG/noname01.png?type=a360" 
          alt="" 
          width="100%"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            height: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </ImgBox>
      <Card onClick={goDetail} >
        <Title>행복한 미소, 아름다운 사진 장수사진관</Title>
        <SubTitle>도봉서원종합사회복지관</SubTitle>
        {isScroll && <StyledLinearProgress variant="determinate" value={progress} />}
        <ProgressArea>46%</ProgressArea>
        <ProgressMoney>{'140200'.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} C</ProgressMoney>
        <SubTitle>기부 참여자 : {'1000'.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명</SubTitle>
      </Card>
      <DonationButton onClick={()=>window.open(`../donation/${`6076`}`, '_blank')}>기부 참여 (100C)</DonationButton>
    </CardArea>
  )
}

export default DonationItem;