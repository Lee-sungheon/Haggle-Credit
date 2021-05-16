import { useState } from 'react';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Requests from './Requests';
import Address from './Address';
import { callApiAddAddress } from '../../api/UserApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useHistory } from "react-router";

const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 60px;
  position: relative;
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  align-items: center;
  border-bottom: 1px solid rgb(234, 233, 241);
  overflow: hidden;
  display: inline-block;
  ::after {
    content: '';
    display: block;
    width: 0;
    height: 1.5px;
    background: ${({theme}) => theme.color.main};
    transition: width .3s;
  }
  :focus-within::after {
    width: 100%;
  }
`;

const InputLabel = styled.label`
  cursor: pointer;
  padding: 0.9375rem 0px;
  float: left;
  font-size: 0.875rem;
  min-width: 80px;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  padding: 1.25rem 0px;
  height: 3.5rem;
  color: rgb(30, 29, 41);
  border: none;
  outline: none;
  appearance: none;
`;

const InputContent = styled.p`
  cursor: pointer;
  margin: 1.25rem 0px;
  box-sizing: border-box;
  width: 100%;
  padding-right: 2.5rem;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(135, 134, 143);
`;

const CheckBoxArea = styled.div`
  position: relative;
  margin-bottom: 1.625rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: red;
`;

const AddButton = styled.div`
  cursor: pointer;
  position: absolute;
  max-width: 640px;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({theme}) => theme.color.main};
  font-weight: bold;
`;

const AddDestination = () => {
  const [isBasic, setIsBasic] = useState(false);
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [detail, setDetail] = useState('');
  const [detailError, setDetailError] = useState('');
  const [request, setReqeust] = useState('');
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  const history = useHistory();

  const validationForm = async() => {
    if (title === '') {
      setTitleError("배송지 이름을 입력해주세요.");
    }
    if (name === '') {
      setNameError("받는 분 이름을 입력해주세요.");
    }
    if (phone === '') {
      setPhoneError("폰 번호를 입력해주세요.");
    }
    if (!/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(phone)){
      setPhoneError("-없이 숫자만 입력해주세요.");
    }
    if (address === '') {
      setAddressError("주소를 입력해주세요.");
    } else {
      if (detail === '') {
        setDetailError("상세 주소를 입력해주세요.");
      }
    }
    
    if (!titleError && !nameError && !phoneError && !addressError && !detailError) {
      if (userNo !== undefined) {
        const result = await callApiAddAddress(
          String(isBasic),
          address + '/' + detail,
          title,
          name,
          phone,
          request,
          userNo
        );
        if (result === '배송지 추가 완료') {
          alert("배송지 추가가 완료됐습니다.");
          history.goBack();
        } else {
          alert("다시 시도해주세요.");
        }
      }
    }
  }

  return (
    <Container>
      <InputArea>
         <InputBox>
          <div style={{display:"flex", alignItems: "center"}}>
            <InputLabel htmlFor="title">배송지</InputLabel>
            <StyledInput
              type="text" 
              autoComplete="off" 
              placeholder="배송지 이름" 
              id="title" 
              value={title} 
              onChange={(e)=>{
                setTitle(e.target.value);
                if (e.target.value === '') {
                  setTitleError("배송지 이름을 입력해주세요.");
                } else {
                  setTitleError("")
                }
              }}
            />
          </div>
        </InputBox>
        {titleError !== "" && <ErrorMessage>{titleError}</ErrorMessage>}
        <InputBox>
          <div style={{display:"flex", alignItems: "center"}}>
            <InputLabel htmlFor="name">받는 분</InputLabel>
            <StyledInput 
              type="text" 
              autoComplete="off" 
              placeholder="수령인 이름" 
              id="name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value);
                if (e.target.value === '') {
                  setNameError("받는 분 이름을 입력해주세요.");
                } else {
                  setNameError("")
                }
              }}
            />
          </div>
        </InputBox>
        {nameError !== "" && <ErrorMessage>{nameError}</ErrorMessage>}
        <InputBox>
          <div style={{display:"flex", alignItems: "center"}}>
            <InputLabel htmlFor="phone">휴대전화</InputLabel>
            <StyledInput 
              type="text" 
              autoComplete="off" 
              placeholder="-없이 숫자만 입력" 
              maxLength={11} 
              inputMode="numeric" 
              id="phone"
              value={phone}
              onChange={(e)=>{
                setPhone(e.target.value);
                if (e.target.value === '') {
                  setPhoneError("폰 번호를 입력해주세요.");
                } else {
                  if (!/^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/.test(phone)){
                    setPhoneError("-없이 숫자만 입력해주세요.");
                  } else {
                    setPhoneError("")
                  }
                }
              }}
            />
          </div>
        </InputBox>
        {phoneError !== "" && <ErrorMessage>{phoneError}</ErrorMessage>}
        <Address address={address} setAddress={setAddress} setAddressError={setAddressError}/>
        {addressError !== "" && <ErrorMessage>{addressError}</ErrorMessage>}
        {address !== '' &&
          <>
            <InputBox>
              <div style={{display:"flex", alignItems: "center"}}>
                <InputLabel htmlFor="detail">상세주소</InputLabel>
                <StyledInput 
                  type="text" 
                  autoComplete="off" 
                  placeholder="상세 주소 입력" 
                  id="detail"
                  value={detail}
                  onChange={(e)=>{
                    setDetail(e.target.value);
                    if (e.target.value === '') {
                      setDetailError("상세 주소를 입력해주세요.");
                    } else {
                      setDetailError("")
                    }
                  }}
                />
              </div>
            </InputBox>
            {detailError !== "" && <ErrorMessage>{detailError}</ErrorMessage>}
          </>
        }
        <Requests request={request} setRequest={setReqeust}/>
        <CheckBoxArea>
          <CheckCircleOutlineIcon 
            onClick={() => setIsBasic(!isBasic)}
            style={isBasic ? {color: "#ffceae", cursor: "pointer"}:{color: "rgb(155, 153, 169)", cursor: "pointer"}}
          />
          <InputContent
            style={{ marginLeft: "10px", color: "black"}}
            onClick={() => setIsBasic(!isBasic)}
          >기본 배송지로 설정</InputContent>
        </CheckBoxArea>
      </InputArea>
      <AddButton onClick={validationForm}>등록 완료</AddButton>
    </Container>
  )
}

export default AddDestination;