import styled from 'styled-components';
import { ROOMINFO } from 'styled-components';
import ChatListItem from './ChatListItem';

interface Props {
  roomLists: ROOMINFO[];
  userNo: string;
  setRoomLists: Function;
}

const ChannelList = styled.ul`
  flex: 1 1 0%;
  height: calc(617px);
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ChatList = ({roomLists, userNo, setRoomLists}: Props) => {
  return(
    <ChannelList>
      {roomLists.length > 0 && roomLists.map((room, idx) => (
        <li key={idx}>
          <ChatListItem room={room} userNo={userNo} setRoomLists={setRoomLists} roomLists={roomLists}/>
        </li>
      ))}
    </ChannelList>
  )
}

export default ChatList;