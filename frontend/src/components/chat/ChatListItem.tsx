import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ROOMINFO } from 'styled-components';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { callApiDeleteRoom } from '../../api/ChatApi';

interface Props {
  room: ROOMINFO;
  userNo: string;
  setRoomLists: Function;
  roomLists: ROOMINFO[];
}

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

const ChatListItem = ({room, userNo, setRoomLists, roomLists}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  
  const menuHandleToggle = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const menuHandleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setMenuOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setMenuOpen(false);
    }
  }

  const prevOpen = React.useRef(menuOpen);
  React.useEffect(() => {
    if (prevOpen.current === true && menuOpen === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = menuOpen;
  }, [menuOpen]);

  const deleteRoom = async() => {
    const result = await callApiDeleteRoom(room.crNo);
    if (result === 1){
      for (let i=0 ; i<roomLists.length; i++){
        if (room.crNo === roomLists[i].crNo ) {
          roomLists.splice(i, 1);
          setRoomLists([...roomLists]);
          break;
        }
      }
    }
  }

  return (
    <ChannelItem>
      <ChannelAvatar>
      {parseInt(userNo) === room.crUserNoOne ? 
        <img src={room.crUserTwoProfile} alt="" width="48," height="48" style={{borderRadius: '50%'}}/>:
        <img src={room.crUserOneProfile} alt="" width="48," height="48" style={{borderRadius: '50%'}}/>
      }
      </ChannelAvatar>
      <ItemContentBox onClick={() => window.open(`../chat/${userNo}/${room.crNo}`, '_blank', "width=387,height=667")}>
        {parseInt(userNo) === room.crUserNoOne ? 
          <ItemTitle>{room.crUserTwoName}</ItemTitle>:
          <ItemTitle>{room.crUserOneName}</ItemTitle>
        }
        <ItemContent>{room.crLatestMessage}</ItemContent>
      </ItemContentBox>
      <StyledDate>
        {room.crLatestMessageTime !== null && String(room.crLatestMessageTime).slice(0, 10)}
      </StyledDate>
      <MoreButtonArea>
        <MoreButton 
          ref={anchorRef}
          aria-controls={menuOpen ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={menuHandleToggle}>
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9IiNDM0MyQ0MiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYiIGN5PSI5LjIiIHI9IjEuOCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjEuOCIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMjIuOCIgcj0iMS44Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
            alt="" 
            height="32"
          />
        </MoreButton>
      </MoreButtonArea>

      <Popper style={{zIndex: 99}} open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: 'center top'}}
          >
            <Paper style={{fontSize: '14px'}}>
              <ClickAwayListener onClickAway={menuHandleClose}>
                <MenuList autoFocusItem={menuOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={(e) => {deleteRoom(); menuHandleClose(e);}} style={{fontSize: '14px'}}>방 나가기</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ChannelItem>
  )
}

export default ChatListItem;