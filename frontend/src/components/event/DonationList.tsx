import { useState, useEffect, useRef } from 'react';
import styled, { DONATION } from 'styled-components';
import { CountUp } from 'use-count-up';
import { callApiDonationList, callApiDonationTotal } from '../../api/DonationApi';
import DonationItem from './DonationItem';

const Contianer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  font-family: NanumBarunGothic,dotum,Sans-serif;
  font-size: 14px;
  line-height: 19px;
  padding-bottom: 50px;
  color: #202020;
`;

const TotalCardArea = styled.div<{height: number}>`
  border: 1px solid rgba(0,0,0,.09);
  float: left;
  position: relative;
  width: 23%;
  height: ${({height}) => height+48}px;
  display: table;
  background-color: #ffceae;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  margin: 10px 1%;
  @media (max-width: 1248px) {
    width: 31%;
  }
  @media (max-width: 748px) {
    width: 48%;
  }
`;

const TotalCard = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Total = styled.span`
  display: block;
  width: 70px;
  margin: 0 auto;
  padding: 6px 0 5px;
  background-color: #f5a21a;
  font-weight: 900;
  letter-spacing: .3px;
`;

const TotalTitle = styled.span`
  display: block;
  margin-top: 17px;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -1px;
  font-weight: 700;
`;

const TotalContent = styled.div`
  display: inline-block;
  /* display: none; */
  margin-top: 34px;
  padding: 0 5px;
  font-size: 20px;
  line-height: 30px;
  :before {
    display: block;
    width: 29px;
    height: 1px;
    margin: 0 auto 37px;
    background-color: white;
    content: '';
  }
`;

const DonationList = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const [height, setHeight] = useState(400);
  const [donationList, setDonationList] = useState<DONATION[]>([]);
  const [money, setMoney] = useState(0);
  const [people, setPeople] = useState(0);
  useEffect(()=>{                                      
    const fetchData = async() => {
      window.scrollTo(0, 0);
      const data = await callApiDonationList();
      setDonationList(data);
      const totalData = await callApiDonationTotal();
      if(totalData !== undefined) {
        setMoney(totalData.donation);
        setPeople(totalData.participant);
      }
    }
    fetchData();
    function listener(event: StorageEvent) {
      if (event.storageArea !== localStorage) return;
      fetchData();
    }
    window.addEventListener('storage', listener);
    return () => {
      window.removeEventListener('storage', listener);
    }
  }, [])
  useEffect(()=>{
    const myFunction = () => {
      if (null !== ref.current && !isScroll) {
        if (
          window.pageYOffset >
          ref.current.offsetHeight / 3
          ) {
            setIsScroll(true);
          }
        }
      }
    const myFunction2 = () => {
      const cardheight = document.getElementById('card-0')?.clientHeight;
      if (cardheight){
        setHeight(cardheight);
      }
    }
    myFunction2();
    window.addEventListener('scroll', myFunction);
    window.addEventListener('resize', myFunction2);
    return () => {
      window.removeEventListener('scroll', myFunction);
      window.removeEventListener('resize', myFunction2);
    };
  }, [isScroll, donationList])

  return (
    <Contianer>
      <TotalCardArea height={height}>
        <TotalCard>
          <Total>Total</Total>
          <TotalTitle>Haggle과 <br /> 함께한 기부금</TotalTitle>
          <TotalContent>
            <strong>{isScroll && <CountUp isCounting start={0} end={people} duration={2} thousandsSeparator={','}/>} 명</strong>이 
            <br /> <strong>{isScroll&&<CountUp isCounting start={0} end={money} duration={2} thousandsSeparator={','}/>} C</strong>를 <br /> 기부하였습니다.
          </TotalContent>
        </TotalCard>
      </TotalCardArea>
      <div ref={ref} />
      {donationList.map((donation, idx)=>(
        <DonationItem key={donation.idNo} isScroll={isScroll} idx={idx} donation={donation}/>
      ))}
    </Contianer>
  )
}

export default DonationList;