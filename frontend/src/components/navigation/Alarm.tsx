import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import AlarmItem from './AlarmItem';
import { callApiAlarmList } from '../../api/UserApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';

interface ALARM {
  aNo: number;
  aItemNo: number;
  aItemImageValue: string;
  aType: string;
  aRecvUserNo: number;
  aTitle: string;
  aContent: string;
  aTime: string;
  aCause: string;
}

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

const ChannelList = styled.ul`
  flex: 1 1 0%;
  height: calc(617px);
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0 10px;
`;

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
      height: '400px',
      width: '615px',
      paddingBottom: '20px',
    },
  }),
);

const Alarm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alarmList, setAlarmList] = useState<ALARM[]>([]);
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  const isUpdate = useSelector((state: RootState) => state.total.isUpdate );
  
  useEffect(()=>{
    const fetchData = async() => {
      if (userNo !== undefined) {
        const data = await callApiAlarmList(userNo);
        setAlarmList(data.reverse());
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
  }, [userNo, isUpdate])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={handleOpen}
      >
        알림<span style={{color: 'red', fontWeight: 900, paddingLeft: '3px'}}>{alarmList?.length > 0 && alarmList?.length}</span>
      </div>
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
              알림
              <DestinationCloseButton onClick={handleClose}/>
            </DestinationTitle>
            <DestinationBox>
              {alarmList?.length === 0 && <DestinationContent>
                <div>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgdmlld0JveD0iMCAwIDU2IDU2Ij4KICAgIDxwYXRoIGZpbGw9IiNEQ0RCRTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQ5LjU4IDEyLjAyYy41MjYuNTI1LjgyIDEuMjM3LjgyIDEuOTh2MzkuMmMwIDEuNTQ2LTEuMjU0IDIuOC0yLjggMi44SDguNGMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOFYyLjhDNS42IDEuMjU0IDYuODU0IDAgOC40IDBoMjhjLjc0MyAwIDEuNDU1LjI5NCAxLjk4LjgybDExLjIgMTEuMnpNNDQuOCA1MC40VjE1LjE2TDM1LjI0IDUuNkgxMS4ydjQ0LjhoMzMuNnptLTUuNi0xMS4yYzAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjhIMTkuNmMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOCAwLTEuNTQ2IDEuMjU0LTIuOCAyLjgtMi44aDE2LjhjMS41NDYgMCAyLjggMS4yNTQgMi44IDIuOHptLTE5LjYtMTRoMTYuOGMxLjU0NiAwIDIuOCAxLjI1NCAyLjggMi44IDAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjhIMTkuNmMtMS41NDYgMC0yLjgtMS4yNTQtMi44LTIuOCAwLTEuNTQ2IDEuMjU0LTIuOCAyLjgtMi44em04LjQtNS42aC04LjRjLTEuNTQ2IDAtMi44LTEuMjU0LTIuOC0yLjggMC0xLjU0NiAxLjI1NC0yLjggMi44LTIuOEgyOGMxLjU0NiAwIDIuOCAxLjI1NCAyLjggMi44IDAgMS41NDYtMS4yNTQgMi44LTIuOCAyLjh6Ii8+Cjwvc3ZnPgo=" alt=""/>
                  <div style={{ marginTop: '1.125rem', fontSize: '0.875rem', color: 'rgb(155, 153, 169)' }}>
                    알림이 없습니다.
                  </div>
                </div>
              </DestinationContent>}
              <ChannelList>
              {alarmList.map((alarm, idx)=>(
                <li key={idx}>
                  <AlarmItem alarm={alarm} setOpen={setOpen} alarmList={alarmList} setAlarmList={setAlarmList}/>
                </li>
              ))}
              </ChannelList>
            </DestinationBox>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

export default Alarm;