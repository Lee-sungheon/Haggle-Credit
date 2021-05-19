import { useState, useEffect } from 'react';
import styled, { DONATION, ITEM } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useHistory } from "react-router";
import { callApiItemDetail } from '../../api/ProductApi';

interface Props {
  isScroll: boolean;
  idx: number;
  donation: DONATION;
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
:hover{
  background-color: #ffceae;
}
`;

const ImgBox = styled.div`
  width: 100%;
  height: 0;
  position: relative;
  padding: 45% 0;
  border-radius: 3px;
`;

const DonationItem = ({ isScroll, idx, donation }: Props) => {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState(0);
  const [item, setItem] = useState<ITEM>({});
  const history = useHistory();
  
  useEffect(()=>{
    const fetchData = async() => {
      if (donation.idItemNo !== undefined) {
        const data: ITEM = await callApiItemDetail(donation.idItemNo);
        setItem(data);
      }
    }
    fetchData();
  }, [donation.idItemNo])
  
  useEffect(()=>{
    if (donation?.idIngPrice && donation?.idEndPrice){
      setPercent(parseInt(String(donation.idIngPrice / donation.idEndPrice * 100)))
    }
  }, [donation.idEndPrice, donation.idIngPrice])
  
  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === percent) {
          return percent;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, percent);
      });
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [isScroll, percent]);
  
  const goDetail = () => {
    history.push({
      pathname: `/donation_detail/${donation?.idItemNo}`
    });
  };
  
  return (
    <CardArea id={`card-${idx}`}>
      <ImgBox onClick={goDetail} >
        <img 
          src={item.ipValue !== undefined ? item.ipValue : '../images/no_image.gif'}
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
        <Title>{item?.isItemName}</Title>
        <SubTitle>목표가 : {String(donation?.idEndPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} C</SubTitle>
        {isScroll && <StyledLinearProgress variant="determinate" value={progress} />}
        <ProgressArea>{percent}%</ProgressArea>
        <ProgressMoney>{String(donation?.idIngPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} C</ProgressMoney>
        <SubTitle>기부 참여자 : {String(donation.donationParticipant?.length).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}명</SubTitle>
      </Card>
      <DonationButton onClick={()=>window.open(`../donation/${donation.idItemNo}`, '_blank')}>기부 참여 (100C)</DonationButton>
    </CardArea>
  )
}

export default DonationItem;