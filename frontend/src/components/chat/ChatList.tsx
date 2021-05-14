import styled from 'styled-components';
import { ROOMINFO } from 'styled-components';

interface Props {
  roomLists: ROOMINFO[];
  userNo: string;
}

const ChannelList = styled.ul`
  flex: 1 1 0%;
  height: calc(617px);
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ChannelItem = styled.div`
  display: flex;
  background: rgb(255, 255, 255);
  flex-direction: row;
  align-items: center;
  height: 80px;
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
  max-width: 9.75rem;
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
  padding-top: 16px;
  height: 80%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 1.4;
  color: rgb(153, 153, 153);
`;

const MoreButtonArea = styled.div`
  margin-top: -5px;
  flex-direction: row;
  align-items: center;
`;

const MoreButton = styled.div`
  cursor: pointer;
  outline: none;
`;

const ChatList = ({roomLists, userNo}: Props) => {
  return(
    <ChannelList>
      {roomLists.length > 0 && roomLists.map((room, idx) => (
        <li key={idx}>
          <ChannelItem>
            <ChannelAvatar>
            {parseInt(userNo) === room.crUserNoOne ? 
              <img src={room.crUserTwoProfile} alt="" width="48," height="48" style={{borderRadius: '50%'}}/>:
              <img src={room.crUserOneProfile} alt="" width="48," height="48" style={{borderRadius: '50%'}}/>
            }
            </ChannelAvatar>
            <ItemContentBox onClick={() => window.open(`../chat/${room.crUserNoOne}/${room.crNo}`, '_blank', "width=387,height=667")}>
              {parseInt(userNo) === room.crUserNoOne ? 
                <ItemTitle>{room.crUserTwoName}</ItemTitle>:
                <ItemTitle>{room.crUserOneName}</ItemTitle>
              }
              <ItemContent>{room.crLatestMessage}</ItemContent>
            </ItemContentBox>
            <StyledDate>
              {room.crLatestMessage !== null && room.crLatestMessageTime.slice(0, 10)}
            </StyledDate>
            <MoreButtonArea>
              <MoreButton>
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9IiNDM0MyQ0MiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYiIGN5PSI5LjIiIHI9IjEuOCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEuOCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMjIuOCIgcj0iMS44Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                  alt="" 
                  height="32"
                />
              </MoreButton>
            </MoreButtonArea>
          </ChannelItem>
        </li>
      ))}
    </ChannelList>
  )
}

export default ChatList;