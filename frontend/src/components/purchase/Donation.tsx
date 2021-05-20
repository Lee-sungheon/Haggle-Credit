import { useState, useEffect } from 'react';
import styled, { ITEM } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { callApiParticipantDonation } from '../../api/DonationApi';
import { callApiGetCredit } from '../../api/UserApi';
import { useDispatch } from 'react-redux';
import { totalActions } from "../../state/common/common";

interface Props {
  desc: ITEM;
  uaNo: number;
}

const ItemTitle = styled.div`
position: relative;
font-size: 14px;
padding-right: 10px;
color: rgb(153, 153, 153);
`;

const ItemContent = styled.div`
font-size: 14px;
position: relative;
display: flex;
`;  

const PurchaseArea = styled.div`
padding: 20px 0;
display: flex;
flex-direction: column;
border-bottom: 1px solid rgb(220, 219, 228);
`;

const PurchaseTitle = styled.div`
font-size: 1rem;
padding-bottom: 10px;
font-weight: bold;
`;

const PurchaseItem = styled.div`
display: flex;
justify-content: space-between;
padding: 5px 0;
`;

const PurchaseInputArea = styled.div` 
width: 100%;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgb(234, 233, 241);
height: 3.5rem;
`;

const StyledInput = styled.input`
width: 100%; 
box-sizing: border-box;
background: none;
border: none;
text-align: left;
font-size: 1rem;
padding-left: 8px;
outline: 0px;
appearance: none;
font-size: 16px;
font-weight: bold;
`;

const ChargingButton = styled.div`
cursor: pointer;
margin-left: 1.125rem;
width: 4.2rem;
height: 2rem;
background-color: rgb(234, 233, 241);
font-size: 0.8125rem;
color: rgb(94, 92, 107);
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`;

const AvailablePoint = styled.div`
margin-left: 10px;
font-size: 0.8125rem;
color: rgb(63, 62, 75);
padding: 5px 0;
`;

const PurchaseButton = styled.p`
cursor: pointer;
border-radius: 2px;
width: 100%;
padding: 1.125rem 0;
background: ${({theme}) => theme.color.main };
color: rgb(255, 255, 255);
font-size: 1.125rem;
font-weight: bold;
text-align: center;
`;

const Purchase = ({desc, uaNo}: Props) => {
  const credit = 100;
  const [ userCredit, setUserCredit ] = useState(0);
  const userData = useSelector((state: RootState) => state.user.userData);
  const isUpdate = useSelector((state: RootState) => state.total.isUpdate );
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchData = async() => {
      if (userData.uNo !== undefined){
        const result = await callApiGetCredit(userData.uNo);
        setUserCredit(result);
      }
    }
    fetchData();
  }, [userData.uNo])

  const submitPurchase = async() => {
    if (desc.isItemNo !== undefined && userData.uNo !== undefined && uaNo !== -1){
      const result = await callApiParticipantDonation(desc.isItemNo, userData.uNo, uaNo);
      dispatch(totalActions.setIsUpdate(!isUpdate));
      if (result === "성공"){
        alert('기부가 완료되었습니다.');
      } else {
        alert('오류가 발생했습니다.');
      }
      window.close();
    } else {
      alert('배송지를 입력해주세요!');
    }
  }
  
  return (
    <>
      <PurchaseArea>
        <PurchaseTitle>기부하기</PurchaseTitle>
        <PurchaseItem>
          <ItemTitle>기부가</ItemTitle>
          <ItemContent style={{fontSize: "18px"}}>100 C</ItemContent>
        </PurchaseItem>
        <PurchaseItem style={{flexDirection: 'column'}}>
          <ItemTitle>상품금액</ItemTitle>
          <div style={{paddingLeft: "100px"}}>
            <ItemContent>
              <PurchaseInputArea>
                <StyledInput 
                  type="text" 
                  disabled
                  value={credit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  />
                <ChargingButton>충전하기</ChargingButton>
              </PurchaseInputArea>
            </ItemContent>
            <AvailablePoint>사용 가능한 크레딧 <span style={{fontWeight: 'bold'}}>
              {userCredit !== undefined && userCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} C</span>
            </AvailablePoint>
          </div>
        </PurchaseItem>
      </PurchaseArea>
      <PurchaseButton onClick={submitPurchase}>기부하기</PurchaseButton>
    </>
  )
}

export default Purchase;