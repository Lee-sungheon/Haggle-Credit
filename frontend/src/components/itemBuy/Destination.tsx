import { useEffect, useState } from 'react';
import styled, { DEST, USERDATA } from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router';
import DestinationItem from './DestinationItem';
import { callApiGetAddress } from '../../api/UserApi';

interface DestinationProps {
  isModal: boolean;
  userData: USERDATA;
  onIsRegionHandler: (name: any) => void;
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
      borderRadius: '10px',
      height: '400px',
      width: '615px',
    },
  })
);

const DestinationArea = styled.div`
  position: relative;
  padding-bottom: 0.5rem;
  line-height: 3.5rem;
  font-size: 1rem;
`;

const DestinationButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 30px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: rgb(155, 153, 169);
`;

const StyledIcon = styled.span`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0.75rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM3MjcwN0YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMDg4IDE5LjQxYy0uMTYyLS4zNi0uMDk3LS43OC4xNjYtMS4wNzVMMTIuNjY0IDEwbC03LjQxLTguMzM2Yy0uMjM4LS4yNjYtLjMxNS0uNjQtLjIwMi0uOTc4LjExMi0uMzQuMzk3LS41OTIuNzQ3LS42NjQuMzUtLjA3Mi43MTEuMDQ4Ljk0OS4zMTRsOCA5Yy4zMzYuMzguMzM2Ljk1IDAgMS4zMjhsLTggOWMtLjE5LjIxNS0uNDYyLjMzNy0uNzQ3LjMzNi0uMzk0LjAwMS0uNzUyLS4yMy0uOTEzLS41OXoiLz4KPC9zdmc+Cg==)
    center center no-repeat;
  ::before {
    position: absolute;
    content: '';
    left: 0px;
    width: 1px;
    height: 24px;
    top: calc(50% - 12px);
    background: rgb(234, 233, 241);
  }
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
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMxRTFEMjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMTMxIDhsNS4wMzQgNS4wMzRjLjE1LjE1LjIzNS4zNTMuMjM1LjU2NSAwIC4yMTItLjA4NC40MTYtLjIzNS41NjYtLjE1LjE1LS4zNTMuMjM1LS41NjUuMjM1LS4yMTIgMC0uNDE2LS4wODUtLjU2Ni0uMjM1TDggOS4xM2wtNS4wMzUgNS4wMzRjLS4zMTIuMzEyLS44MTguMzEyLTEuMTMgMC0uMzEzLS4zMTMtLjMxMy0uODE5IDAtMS4xMzFMNi44NjggOCAxLjgzNCAyLjk2NWMtLjIwMi0uMjAyLS4yOC0uNDk2LS4yMDctLjc3Mi4wNzQtLjI3Ni4yOS0uNDkyLjU2Ni0uNTY2LjI3Ni0uMDc0LjU3LjAwNS43NzIuMjA3TDggNi44NjhsNS4wMzQtNS4wMzRjLjMxMy0uMzEyLjgyLS4zMTIgMS4xMzEgMCAuMzEzLjMxMy4zMTMuODIgMCAxLjEzMUw5LjEzMSA4eiIvPgo8L3N2Zz4K)
    center center no-repeat;
`;

const DestinationAddButton = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  top: 0.5rem;
  right: 3.4rem;
  width: 2.5rem;
  height: 2.5rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMxRTFEMjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjExMiAxLjg4OEMxMi45NzUuNzUgMTEuMTMuNzUgOS45OTIgMS44ODhsLTguNDg5IDguNDljLS4zLjMtLjQ2OS43MDYtLjQ2OSAxLjEzdjEuODU4YzAgLjg4My43MTcgMS42IDEuNiAxLjZoMS44NjdjLjQyNSAwIC44MzItLjE3IDEuMTMyLS40N2w4LjQ4LTguNDg5LjExNy0uMTI0YzEuMDE5LTEuMTQ0Ljk4LTIuODk5LS4xMTgtMy45OTV6TTguOTA1IDUuMjM3bDEuODU3IDEuODU3LTYuMjcxIDYuMjcySDMuMDM0Yy0uMjIgMC0uNC0uMTgtLjQtLjR2LTEuNDU3bDYuMjctNi4yNzJ6bTIuMjItMi4yMThjLjUxMi0uNTEzIDEuMzQzLS41MTMgMS44NTYgMCAuNTEzLjUxMy41MTMgMS4zNDQgMCAxLjg1N2wtMS4wODcgMS4wODYtMS44NTctMS44NTcgMS4wODctMS4wODZ6Ii8+Cjwvc3ZnPgo=)
    center center no-repeat;
`;

const DestinationBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 350px;
`;

const DestinationContent = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.25rem 0px 1rem;
  border: none !important;
`;

const ResgistButton = styled.div`
  cursor: pointer;
  display: inline-block;
  line-height: 40px;
  border-radius: 2px;
  margin-top: 1rem;
  padding: 0px 1rem;
  background-color: ${({ theme }) => theme.color.main};
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;
`;

const DestinationList = styled.div`
  width: 100%;
`;

const DestinationItemArea = styled.div`
  cursor: pointer;
  position: relative;
  padding: 1.5rem 1rem;
  background-color: rgb(255, 255, 255);
  font-size: 0.875rem;
  line-height: normal;
  align-self: flex-start;
  border-bottom: 1px solid rgb(234, 233, 241);
`;

const AddressBox = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-weight: bold;
`;

const ContentBox = styled.div`
  font-size: 13px;
`;

const RequestBox = styled.div`
  font-size: 13px;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Destination = ({
  isModal,
  userData,
  onIsRegionHandler,
}: DestinationProps) => {
  const classes = useStyles();
  const [open, setOpen] = useState(isModal);
  const [destList, setDestList] = useState<DEST[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [destination, setDestination] = useState<DEST>({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      if (userData.uNo !== undefined) {
        const data = await callApiGetAddress(userData.uNo);
        setDestList(data);
        if (data.length > 0 && data[0].uaDefaultSetting === 'true') {
          onIsRegionHandler(data[0].uaNo);
        }
      }
    };
    fetchData();
  }, [userData.uNo]);

  useEffect(() => {
    if (Object.keys(destination).length > 0) {
      onIsRegionHandler(destination.uaNo);
      setOpen(false);
    }
  }, [destination]);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DestinationArea>
        <p style={{ fontWeight: 'bold', margin: 0 }}>배송지</p>
        <DestinationButton onClick={handleOpen}>
          <StyledIcon />
        </DestinationButton>
        {Object.keys(destination).length === 0 &&
          destList.length > 0 &&
          destList[0].uaDefaultSetting === 'true' && (
            <DestinationItemArea
              style={{ border: 'none', padding: 0, paddingBottom: 20 }}
            >
              <AddressBox>
                <p>{destList[0].uaLnmAddress}</p>
              </AddressBox>
              <ContentBox>
                {destList[0].uaName} ・ {destList[0].uaRecvUserName} ・{' '}
                {destList[0].uaRecvUserPhone}
              </ContentBox>
              <RequestBox>
                <span>요청사항 | {destList[0].uaRequest}</span>
              </RequestBox>
            </DestinationItemArea>
          )}
        {Object.keys(destination).length > 0 && (
          <DestinationItemArea
            style={{ border: 'none', padding: 0, paddingBottom: 20 }}
          >
            <AddressBox>
              <p>{destination.uaLnmAddress}</p>
            </AddressBox>
            <ContentBox>
              {destination.uaName} ・ {destination.uaRecvUserName} ・{' '}
              {destination.uaRecvUserPhone}
            </ContentBox>
            <RequestBox>
              <span>요청사항 | {destination.uaRequest}</span>
            </RequestBox>
          </DestinationItemArea>
        )}
      </DestinationArea>

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
              배송지 선택
              <DestinationAddButton
                onClick={() =>
                  history.push({
                    pathname: `/add_destination`,
                    state: {},
                  })
                }
              />
              <DestinationCloseButton onClick={handleClose} />
            </DestinationTitle>
            <DestinationBox>
              {destList.length === 0 ? (
                <DestinationContent>
                  <div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDU2IDU2Ij4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQ5LjU4IDEyLjAyYy41MjYuNTI1LjgyIDEuMjM3LjgyIDEuOTh2MzkuMmMwIDEuNTQ2LTEuMjU0IDIuOC0yLjggMi44SDguNGMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOFYyLjhDNS42IDEuMjU0IDYuODU0IDAgOC40IDBoMjhjLjc0MyAwIDEuNDU1LjI5NCAxLjk4LjgybDExLjIgMTEuMnpNNDQuOCA1MC40VjE1LjE2TDM1LjI0IDUuNkgxMS4ydjQ0LjhoMzMuNnptLTUuNi0xMS4yYzAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjhIMTkuNmMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOCAwLTEuNTQ2IDEuMjU0LTIuOCAyLjgtMi44aDE2LjhjMS41NDYgMCAyLjggMS4yNTQgMi44IDIuOHptLTE5LjYtMTRoMTYuOGMxLjU0NiAwIDIuOCAxLjI1NCAyLjggMi44IDAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjhIMTkuNmMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOCAwLTEuNTQ2IDEuMjU0LTIuOCAyLjgtMi44em04LjQtNS42aC04LjRjLTEuNTQ2IDAtMi44LTEuMjU0LTIuOC0yLjggMC0xLjU0NiAxLjI1NC0yLjggMi44LTIuOEgyOGMxLjU0NiAwIDIuOCAxLjI1NCAyLjggMi44IDAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjh6Ii8+Cjwvc3ZnPgo="
                      alt=""
                    />
                    <div
                      style={{
                        marginTop: '1.125rem',
                        fontSize: '0.875rem',
                        color: 'rgb(155, 153, 169)',
                      }}
                    >
                      배송지를 등록하고, 손쉽게 관리해보세요.
                    </div>
                    <ResgistButton
                      onClick={() =>
                        history.push({
                          pathname: `/add_destination`,
                          state: {},
                        })
                      }
                    >
                      배송지 등록하기
                    </ResgistButton>
                  </div>
                </DestinationContent>
              ) : (
                <DestinationList>
                  {destList.map((destination, idx) => (
                    <DestinationItem
                      key={idx}
                      destination={destination}
                      userData={userData}
                      setRefresh={setRefresh}
                      refresh={refresh}
                      setDestination={setDestination}
                    />
                  ))}
                </DestinationList>
              )}
            </DestinationBox>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Destination;
