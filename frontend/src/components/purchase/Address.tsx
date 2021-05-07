import { useState } from "react";
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import DaumPostcode from 'react-daum-postcode';

interface AddressProps {
  address: string;
  setAddress: Function;
  setAddressError: Function;
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

const AddressBox = styled.div`
  align-items: center;
  border-bottom: 1px solid rgb(234, 233, 241);
  overflow: hidden;
  display: inline-block;
  width: 100%;
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

const SearchButton = styled.img`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: calc(50% - 16px);
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

const Address = ({address, setAddress, setAddressError}: AddressProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCompletePost = (data: any) => {
    setAddress(data.roadAddress);
    setAddressError("");
    handleClose();
  };

  return (
    <>
      <AddressBox onClick={() => handleOpen()}>
        <div style={{display:"flex", alignItems: "center", position: "relative"}}>
          <InputTitle>도로명</InputTitle>
          {address === '' ? 
           <InputContent>도로명 주소 검색</InputContent>           
           :
           <InputContent style={{color: "black"}}>{address}</InputContent>           
          }
          <SearchButton src={SEARCHURL} alt="" />
        </div>
      </AddressBox>

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
              도로명 검색
              <DestinationCloseButton onClick={handleClose}/>
            </DestinationTitle>
            <DaumPostcode autoClose onComplete={onCompletePost } />
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default Address;

const SEARCHURL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZD0iTTIxLjMyIDE5LjQwNmw0LjMzNyA0LjMzN2ExIDEgMCAxIDEtMS40MTQgMS40MTRsLTQuMzM3LTQuMzM3YTggOCAwIDEgMSAxLjQxNC0xLjQxNHpNMTUgMjAuNWE2IDYgMCAxIDAgMC0xMiA2IDYgMCAwIDAgMCAxMnoiLz4KICAgICAgICA8cGF0aCBkPSJNMjEuMzIgMTkuNDA2bDQuMzM3IDQuMzM3YTEgMSAwIDEgMS0xLjQxNCAxLjQxNGwtNC4zMzctNC4zMzdhOCA4IDAgMSAxIDEuNDE0LTEuNDE0ek0xNSAyMC41YTYgNiAwIDEgMCAwLTEyIDYgNiAwIDAgMCAwIDEyeiIvPgogICAgPC9nPgo8L3N2Zz4K"