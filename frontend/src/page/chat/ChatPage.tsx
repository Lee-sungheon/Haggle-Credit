import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { RouteComponentProps } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import ChatInput from '../../components/chat/ChatInput';
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import { callApiRoomInfo, callApiChat } from '../../api/ChatApi';
import { ROOMINFO, CHAT } from 'styled-components';
import moment from 'moment';

interface MatchParams {
  id: string;
}

interface LocationParams {
  isModal: boolean;
}

interface HistoryParams {
}

interface MSG {
  [key: string]: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 392px;
  height: 675px;
  background: rgb(244, 244, 250);
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  background: rgb(255, 255, 255);
  z-index: 10;
  justify-content: center;
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
`;

const ItemArea = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 2px solid ${({theme})=>theme.color.main};
  padding: 0.5rem;
  flex-direction: row;
  z-index: 1;
  align-items: center;
`;

const ItemBox = styled.div`
  display: flex;
  flex: 1 1 0%;
  padding-right: 0.5rem;
  overflow: hidden;
`;

const ItemContentArea = styled.div`
  flex: 1 1 0%;
  min-width: 0px;
  line-height: 1.2;
`;

const ItemPrice = styled.div`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ItemTitle = styled.div`
  display: block;
  font-size: 14px;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ChatPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const serverURL = `https://k4d107.p.ssafy.io/haggle-credit/websocket`;
  const [value, setValue] = useState("");
  const [feeds, setFeeds] = useState<CHAT[]>([]);
  const [roomInfo, setRoomInfo] = useState<ROOMINFO[]>([]);
  const [userOrder, setUserOrder] = useState("One");
  const dispatch = useDispatch();
  const crNo = location.pathname.split('/')[3];
  const userNo = location.pathname.split('/')[2];
  const socket = useMemo(()=>{
    return new SockJS(serverURL);
  }, [serverURL])
  const stompClient = useMemo(()=>{
    return Stomp.over(socket);
  }, [socket])
  useEffect(()=>{
    const fetchRoomInfo = async() => {
      const result = await callApiRoomInfo(crNo);
      await setRoomInfo(result);
      if (result[0].crUserNoOne === parseInt(userNo)){
        setUserOrder("Two");
      }
      else {
        setUserOrder("One");
      }
    }
    const fetchChat = async() => {
      const result = await callApiChat(crNo);
      await setFeeds(result);
      await stompClient.connect(
        {},
        frame => {
          stompClient.connected = true;
          stompClient.subscribe("/send", res => {
            if (String(JSON.parse(res.body).icCrNo) === crNo){
              let date = JSON.parse(res.body).icDate.slice(0,10) + ' ' + JSON.parse(res.body).icDate.slice(11,19);
              date = moment(date, "YYYY-MM-DD HH:mm:ss").add(9, 'h').format("YYYY-MM-DD HH:mm:ss");
              const message = {
                icNo: JSON.parse(res.body).icNo,
                icCrNo: JSON.parse(res.body).icCrNo,
                icUserNo: JSON.parse(res.body).icUserNo,
                icChatContent: JSON.parse(res.body).icChatContent,
                icDate: date,
              }
              setFeeds((feeds) => [...feeds, message])
            }
          });
        },
        error => {
          console.log('소켓 연결 실패', error);
          stompClient.connected = false;
        }
      );
  
      return () => {
        if (stompClient) {
          stompClient.unsubscribe("/send");
          stompClient.disconnect();
        }
      }
    }
    fetchRoomInfo();
    fetchChat();
  }, [crNo, stompClient, userNo])

  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    dispatch(commonActions.setIsPurchase(true));
    return () => {
      dispatch(commonActions.setIsIndex(false));
      dispatch(commonActions.setIsPurchase(false));
    };
  }, [dispatch]);

  useEffect(() => {
  }, [serverURL, stompClient]);
  
  const send = (message: MSG) => {
    if (stompClient && stompClient.connected) {
      const msg = { 
        icUserNo: userNo,
        icChatContent: message.content,
        icCrNo: crNo,
      };
      stompClient.send("/pub/receive", JSON.stringify(msg), {});
    }
  }

  return (
    <Container>
      <Header>
        <Title>{roomInfo.length > 0 && userOrder === "One" && roomInfo[0].crUserOneName}</Title>
        <Title>{roomInfo.length > 0 && userOrder === "Two" && roomInfo[0].crUserTwoName}</Title>
      </Header>
      <ItemArea>
        <ItemBox>
          {roomInfo.length > 0 && <img 
            src={roomInfo[0].crItemImage}
            alt="ItemImage" 
            style={{height: "2.5rem", width: "2.5rem", marginRight: "0.5rem"}}
            />}
          <ItemContentArea>
            <ItemPrice>{roomInfo.length > 0 && roomInfo[0].crItemPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<small> 원</small></ItemPrice>
            <ItemTitle>{roomInfo.length > 0 && roomInfo[0].crItemName}</ItemTitle>
          </ItemContentArea>
        </ItemBox>
      </ItemArea>
      <Chat feeds={feeds} userNo={userNo} roomInfo={roomInfo[0]} userOrder={userOrder}/>
      <ChatInput value={value} setValue={setValue} send={send}/>
    </Container>
  )
}

export default ChatPage;