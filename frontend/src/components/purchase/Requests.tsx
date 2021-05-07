import { useState } from "react";
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

interface ReqeustProps {
  request: string;
  setRequest: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: "10px",
      height: '500px',
      width: '615px',
    },
  }),
);

const RequestBox = styled.div`
  align-items: center;
  border-bottom: 1px solid rgb(234, 233, 241);
  overflow: hidden;
  display: inline-block;
`;

const InputTitle = styled.span`
  cursor: pointer;
  display: inline-block;
  font-size: 0.875rem;
  min-width: 82px;
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

const ChevronButton = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: calc(50% - 10px);
`;

const DestinationTitle = styled.div`
  position: relative;
  flex: 0 0 auto;
  top: 0px;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  font-size: 1.125rem;
  font-weight: bold;
  color: rgb(30, 29, 41);
  background: rgb(255, 255, 255);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 1;
`;

const DestinationCloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 0.5rem;
  right: 0.875rem;
  width: 2.5rem;
  height: 2.5rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMxRTFEMjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTMxIDhsNS4wMzQgNS4wMzRjLjE1LjE1LjIzNS4zNTMuMjM1LjU2NSAwIC4yMTItLjA4NC40MTYtLjIzNS41NjYtLjE1LjE1LS4zNTMuMjM1LS41NjUuMjM1LS4yMTIgMC0uNDE2LS4wODUtLjU2Ni0uMjM1TDggOS4xM2wtNS4wMzUgNS4wMzRjLS4zMTIuMzEyLS44MTguMzEyLTEuMTMgMC0uMzEzLS4zMTMtLjMxMy0uODE5IDAtMS4xMzFMNi44NjggOCAxLjgzNCAyLjk2NWMtLjIwMi0uMjAyLS4yOC0uNDk2LS4yMDctLjc3Mi4wNzQtLjI3Ni4yOS0uNDkyLjU2Ni0uNTY2LjI3Ni0uMDc0LjU3LjAwNS43NzIuMjA3TDggNi44NjhsNS4wMzQtNS4wMzRjLjMxMy0uMzEyLjgyLS4zMTIgMS4xMzEgMCAuMzEzLjMxMy4zMTMuODIgMCAxLjEzMUw5LjEzMSA4eiIvPgo8L3N2Zz4K) center center no-repeat;
`;

const RequestContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 80%;
  overflow: auto;
`;

const RequestArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  line-height: 1.5;
  padding-bottom: 4.625rem !important;
`;

const RequestList = styled.div` 
`;

const RequestItemArea = styled.div`
  cursor: pointer;
  border-bottom: 1px solid rgb(229, 229, 229);
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 1rem 0px;
`;

const InputArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(234, 233, 241);
  overflow: hidden;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 15px;
  padding: 1rem 0px;
  color: rgb(30, 29, 41);
  border: none;
  outline: none;
  appearance: none;
`;

const StringLength = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 12px;
  color: rgb(30, 29, 41);
`;

const SaveButton = styled.div`
  cursor: pointer;
  position: absolute;
  max-width: 640px;
  bottom: 70px;
  width: 100%;
  max-width: 615px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({theme}) => theme.color.main};
  font-weight: bold;
`;

const Requests = ({request, setRequest}: ReqeustProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const [value, setValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <RequestBox onClick={() => handleOpen()}>
        <div style={{display:"flex", alignItems: "center", position: "relative"}} >
          <InputTitle>요청사항</InputTitle>
          {request === '' ? 
           <InputContent>배송 시 요청사항 선택</InputContent>           
           :
           <InputContent style={{color: "black"}}>{request}</InputContent>           
          }
          <ChevronButton src={CHEVRONURL} alt="" />
        </div>
      </RequestBox>
      
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        disableEnforceFocus={true}
        disableAutoFocus={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DestinationTitle>
              요청사항 선택
              <DestinationCloseButton onClick={handleClose}/>
            </DestinationTitle>
            <RequestContainer>
              <RequestArea>
                <RequestList>
                  {REQUESTLIST.map((request, idx) => (
                    <RequestItemArea key={idx} onClick={() => setSelect(idx)}>
                      {select === idx ?
                      <RadioButtonCheckedIcon style={{fontSize: "18px", color: "#ffceae", marginRight: "5px"}}/>
                      :
                      <RadioButtonUncheckedIcon style={{fontSize: "18px", color: "#ffceae", marginRight: "5px"}}/>
                      }
                      <span style={{fontSize: "15px"}}>{request}</span>
                    </RequestItemArea>
                  ))}
                  {select===4 && <InputArea>
                    <InputBox>
                      <StyledInput 
                        type="text" 
                        placeholder="요청사항 입력" 
                        autoComplete="off" 
                        maxLength={50} 
                        autoFocus={true}
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        />
                      <StringLength>{value.length}/50</StringLength>
                    </InputBox>
                  </InputArea>}
                </RequestList>
              </RequestArea>
            </RequestContainer>
            <SaveButton onClick={() => {
              if (select !== 4) {
                setRequest(REQUESTLIST[select]);
              } else {
                setRequest(value);
              }
              handleClose();
            }
            }>저장</SaveButton>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default Requests;

const CHEVRONURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM3MjcwN0YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMDg4IDE5LjQxYy0uMTYyLS4zNi0uMDk3LS43OC4xNjYtMS4wNzVMMTIuNjY0IDEwbC03LjQxLTguMzM2Yy0uMjM4LS4yNjYtLjMxNS0uNjQtLjIwMi0uOTc4LjExMi0uMzQuMzk3LS41OTIuNzQ3LS42NjQuMzUtLjA3Mi43MTEuMDQ4Ljk0OS4zMTRsOCA5Yy4zMzYuMzguMzM2Ljk1IDAgMS4zMjhsLTggOWMtLjE5LjIxNS0uNDYyLjMzNy0uNzQ3LjMzNi0uMzk0LjAwMS0uNzUyLS4yMy0uOTEzLS41OXoiLz4KPC9zdmc+Cg=="
const REQUESTLIST: string[] = [
  "문앞", "직접 받고 부재 시 문앞", "경비실", "우편함", "직접입력"
]