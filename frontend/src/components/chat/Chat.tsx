import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ROOMINFO, CHAT } from 'styled-components';

interface Props {
  feeds: CHAT[];
  roomInfo: ROOMINFO;
  userNo: string;
  userOrder: string;
}

const Container = styled.div`
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

const Chat = ({feeds, roomInfo, userNo, userOrder}: Props) => {
  const DivRef = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    if (null !== DivRef.current){
      DivRef.current.scrollIntoView();
    }
  }, [feeds]);

  return(
    <Container>
      <ChatArea>
        {feeds.length > 0 && feeds.map((feed, idx)=>(
          <div key={idx}>
            {idx >= 1 && feeds[idx-1].icDate.slice(0,10) !== feed.icDate.slice(0,10) ?
              <StyledDate>{feed.icDate.slice(0,10)}</StyledDate>
            :
              <></>
            }
            {parseInt(userNo) === feed.icUserNo ?
            <MyChatArea>
              <MyChatBubble>
                <SubContent>
                {idx+1 < feeds.length && feeds[idx+1].icUserNo === feed.icUserNo && feeds[idx+1].icDate.slice(11,16) === feed.icDate.slice(11,16) ? 
                    <div style={{marginLeft: '10px', width: '47px'}}/>
                    :
                    <div style={{color: 'rgb(195, 194, 204)', paddingLeft: '10px', textAlign: 'right'}}>
                      {feed.icDate.slice(11,16)}
                    </div>
                  }
                </SubContent>
                <MyChat>
                  {feed.icChatContent}
                </MyChat>
              </MyChatBubble>
            </MyChatArea>
            :
            <YourChatArea>
              <YourChatBox>
                  <YourChatAvatar>
                    {idx-1 >= 0 && feeds[idx-1].icUserNo === feed.icUserNo ? 
                      <div /> : <img 
                      src={userOrder==="One" ? `${roomInfo.crUserOneProfile}`:`${roomInfo.crUserTwoProfile}`}
                      alt="프로필이미지" 
                      width="36" 
                      height="36" 
                      style={{ borderRadius: '50%'}} />
                    }
                  </YourChatAvatar>
                <YourChatBubble>
                  <YourChat>
                    {feed.icChatContent}
                  </YourChat>
                </YourChatBubble>
                <SubContent>
                  {idx+1 < feeds.length && feeds[idx+1].icUserNo === feed.icUserNo && feeds[idx+1].icDate.slice(11,16) === feed.icDate.slice(11,16) ? 
                    <div style={{marginLeft: '10px', width: '47px'}}/>
                    :
                    <div style={{color: 'rgb(195, 194, 204)', paddingLeft: '10px', textAlign: 'right'}}>
                      {feed.icDate.slice(11,16)}
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