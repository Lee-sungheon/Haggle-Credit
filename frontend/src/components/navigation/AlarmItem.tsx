import styled from 'styled-components';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { useHistory } from 'react-router';
import { callApiDeleteAlarm } from '../../api/UserApi';

interface Props {
  alarm: ALARM;
  setOpen: Function;
  setAlarmList: Function;
  alarmList: ALARM[];
}

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

const ChannelItem = styled.div`
display: flex;
background: rgb(255, 255, 255);
flex-direction: row;
align-items: center;
height: 80px;
padding: 5px 0;
border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ChannelAvatar = styled.div`
display: flex;
margin: 0px 16px;
cursor: pointer;
`;

const ItemContentBox = styled.div`
flex: 1 1 0%;
overflow: hidden;
cursor: pointer;
`;

const ItemTitle = styled.div`
display: flex;
align-items: center;
line-height: 1.4;
font-size: 16px;
font-weight: 600;
color: rgb(33, 33, 33);
`;

const ItemContent = styled.div`
line-height: 1.4;
font-size: 14px;
margin-top: 4px;
color: rgb(102, 102, 102);
white-space: pre-wrap;
text-overflow: ellipsis;
word-break: break-all;
overflow-wrap: break-word;
max-height: 2.8em;
overflow: hidden;
`;

const StyledDate = styled.div`
padding-top: 70px;
padding-right: 10px;
padding-left: 5px;
height: 80%;
font-size: 12px;
display: flex;
flex-direction: column;
align-items: flex-end;
color: rgb(153, 153, 153);
`;

const MoreButtonArea = styled.div`
margin-top: 25px;
flex-direction: row;
align-items: center;
`;

const MoreButton = styled.div`
cursor: pointer;
outline: none;
`;

const AlarmItem = ({alarm, setOpen, setAlarmList, alarmList}: Props) => {
  const history = useHistory();
  return (
    <ChannelItem>
      <ChannelAvatar 
        onClick={() => {history.push(`/profile`); setOpen(false);}}>
        <img src={alarm?.aItemImageValue} alt="" width="54," height="54"/>
      </ChannelAvatar>
      <ItemContentBox onClick={() => {history.push(`/profile`); setOpen(false);}}>
        <ItemTitle>{alarm.aTitle}</ItemTitle>
        <ItemContent>{alarm.aContent}</ItemContent>
      </ItemContentBox>
      <StyledDate>
        {alarm.aTime.slice(0,10) + ' ' + alarm.aTime.slice(11,16)}
      </StyledDate>
      <MoreButtonArea>
        <MoreButton>
          <DeleteForeverOutlinedIcon 
            style={{fontSize: "18px", color: 'red'}}
            onClick={async() => {
              const result: string = await callApiDeleteAlarm(alarm.aNo);
              if (result === '알람 삭제 성공'){
                for (let i=0 ; i < alarmList.length; i++){
                  if (alarm.aNo === alarmList[i].aNo) {
                    alarmList.splice(i, 1);
                    setAlarmList([...alarmList]);
                    break;
                  }
                }
              }
            }}
          />
        </MoreButton>
      </MoreButtonArea>
    </ChannelItem>
  )
}

export default AlarmItem;