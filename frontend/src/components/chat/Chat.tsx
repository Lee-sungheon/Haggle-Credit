import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Stomp from 'webstomp-client'
import SockJS from 'sockjs-client'
import moment from 'moment';

interface Props {
  feeds: CHAT[]
}

interface CHAT {
  id: string;
  url: string;
  content: string;
  date: string;
}

const Container = styled.div`
  /* flex: 1 1 0%; */
  background: rgb(244, 244, 250);
  display: block;
  overflow: auto;
  overflow-x: hidden;
  height: 480px;
`;

const ChatArea = styled.div`
  padding: 12px 0 ;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  width: 100%;
`;

const StyledDate = styled.div`
  display: flex;
  margin-bottom: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: rgb(195, 194, 204);
  font-size: 12px;
  ::before {
    content: "";
    flex: 1 1 0%;
    border-top: 1px solid rgb(234, 233, 241);
    margin-right: 0.5rem;
  }
  ::after {
    content: "";
    flex: 1 1 0%;
    border-top: 1px solid rgb(234, 233, 241);
    margin-right: 0.5rem;
  }
`;

const MyChatArea = styled.div`
  display: flex;
  font-size: 15px;
  padding: 0px 1rem;
  margin-bottom: 24px;
  align-self: flex-end;
  width: calc(100% - 60px);
  flex-direction: row-reverse;
`;

const MyChatBubble = styled.div`
  display: flex;
  flex-shrink: 1;
`;

const MyChat = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5px 12px;
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 1;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.4;
  background: ${({theme}) => theme.color.main };
  color: rgb(255, 255, 255);
  border-radius: 1rem 2px 1rem 1rem;
`;

const SubContent = styled.div`
  position: relative;
  bottom: -8px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-width: 2.72rem;
  margin: 0px 10px 0px 0px;
  font-size: 10px;
  flex-shrink: 0;
  justify-content: flex-end;
`;

const YourChatArea = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  padding-top: 4px;
  padding-bottom: 8px;
  margin-bottom: 24px;
  width: 93%;
  padding: 0 1rem;
`;

const YourChatBox = styled.div`
  display: flex;
  font-size: 15px;
  width: 100%;
  align-self: flex-end;
  flex-direction: row;
`;

const YourChatAvatar = styled.div`
  flex-shrink: 0;
  margin-right: 10px;
  width: 2rem;
  height: 2rem;
`;

const YourChatBubble = styled.div`
  display: flex;
  flex-shrink: 1;
`;

const YourChat = styled.div`
  width: 100%;
  height: 100%;
  padding: 5.5px 12px;
  position: relative;
  flex-shrink: 1;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.4;
  background: rgb(255, 255, 255);
  border-radius: 2px 1rem 1rem;
  display: flex;
  align-items: center;
`;

const Chat = ({feeds}: Props) => {
  const userId = '1';
  const DivRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (null !== DivRef.current){
      DivRef.current.scrollIntoView();
    }
  }, [feeds]);

  useEffect(()=>{
    const serverURL = `https://k4d107.p.ssafy.io/haggle-credit/websocket`
    let socket = new SockJS(serverURL);
    const stompClient = Stomp.over(socket);
    console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
    stompClient.connect(
      {},
      frame => {
        stompClient.connected = true;
        console.log('소켓 연결 성공', frame);
        stompClient.subscribe("/send", res => {
          console.log('구독으로 받은 메시지 입니다.', '1', JSON.parse(res.body));
          const message = {
            id: JSON.parse(res.body).mrcUNo,
            roomNo: JSON.parse(res.body).mrcMrNo,
            author: '1',
            contents: JSON.parse(res.body).mrcContent,
            date: moment().format('HH:mm'),
            uImage: ''
          }
          if(message.roomNo == '1'){
            console.log("방번호가 일치합니다.")
            // feed.push(message)
            console.log(message)
          }
        });
        const msg = { 
        mrcUNo: '1',
        mrcContent: '',
        mrcMrNo: '1'
        };
      console.log(msg)
      stompClient.send("/pub", JSON.stringify(msg), {});
      },
      error => {
        console.log('소켓 연결 실패', error);
        stompClient.connected = false;
      }
    );
    const onNewOwnMessage = (message: string) => {
      const newOwnMessage = {
        id: '1',
        author: '',
        contents: message,
        date: moment().format('HH:mm')
      };
      // send();
    }
    const send = () => {
      if (stompClient && stompClient.connected) {
        const msg = { 
          mrcUNo: '1',
          mrcContent: '',
          mrcMrNo: '1'
        };
        stompClient.send("/pub/receive", JSON.stringify(msg), {});
      }
    }

    return () => {
      console.log("채팅창 종료!");
      if (stompClient) {
        stompClient.unsubscribe("/send");
        stompClient.disconnect();
      }
    }
  }, []);


  return(
    <Container>
      <ChatArea>
        <StyledDate>2021. 5. 12 수요일</StyledDate>
        {feeds.map((feed, idx)=>(
          <div key={idx}>
            {userId === feed.id ?
            <MyChatArea>
              <MyChatBubble>
                <SubContent>
                {idx+1 < feeds.length && feeds[idx+1].id === feed.id && feeds[idx+1].date === feed.date ? 
                    <div style={{marginLeft: '10px', width: '47px'}}/>
                    :
                    <div style={{color: 'rgb(195, 194, 204)', paddingLeft: '10px', textAlign: 'right'}}>
                      {feed.date}
                    </div>
                  }
                </SubContent>
                <MyChat>
                  {feed.content}
                </MyChat>
              </MyChatBubble>
            </MyChatArea>
            :
            <YourChatArea>
              <YourChatBox>
                  <YourChatAvatar>
                    {idx-1 > 0 && feeds[idx-1].id === feed.id ? 
                      <div /> : <img 
                      src={feed.url} 
                      alt="프로필이미지" 
                      width="36" 
                      height="36" 
                      style={{ borderRadius: '50%'}} />
                    }
                  </YourChatAvatar>
                <YourChatBubble>
                  <YourChat>
                    {feed.content}
                  </YourChat>
                </YourChatBubble>
                <SubContent>
                  {idx+1 < feeds.length && feeds[idx+1].id === feed.id && feeds[idx+1].date === feed.date ? 
                    <div style={{marginLeft: '10px', width: '47px'}}/>
                    :
                    <div style={{color: 'rgb(195, 194, 204)', paddingLeft: '10px', textAlign: 'right'}}>
                      {feed.date}
                    </div>
                  }
                </SubContent>
              </YourChatBox>
            </YourChatArea>
            }
          </div>
        ))}
        <div ref={DivRef}/>
      </ChatArea>
    </Container>
  )
}

export default Chat;