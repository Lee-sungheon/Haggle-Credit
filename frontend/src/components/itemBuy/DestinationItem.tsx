import React, { useState, useRef } from 'react';
import styled, { DEST, USERDATA } from 'styled-components';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {
  callApiChangeDefaultAddress,
  callApiDeleteAddress,
} from '../../api/UserApi';

interface DestinationItemProps {
  destination: DEST;
  userData: USERDATA;
  setRefresh: Function;
  refresh: boolean;
  setDestination: Function;
}

const MoreButton = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM3MjcwN0YiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE2YzAtMS4xMDMtLjg5Ny0yLTItMnMtMiAuODk3LTIgMiAuODk3IDIgMiAyIDItLjg5NyAyLTJ6bTAtNmMwLTEuMTAzLS44OTctMi0yLTJzLTIgLjg5Ny0yIDIgLjg5NyAyIDIgMiAyLS44OTcgMi0yem0wLTZjMC0xLjEwMy0uODk3LTItMi0ycy0yIC44OTctMiAyIC44OTcgMiAyIDIgMi0uODk3IDItMnoiLz4KPC9zdmc+Cg==)
    0px 0px no-repeat;
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

const BasicDestination = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 1.125rem;
  margin-left: 0.5rem;
  padding: 0px 0.375rem;
  font-size: 0.75rem;
  color: rgb(255, 80, 88);
  border-radius: 9px;
  border: 1px solid rgb(255, 80, 88);
`;

const DestinationItem = ({
  destination,
  userData,
  setRefresh,
  refresh,
  setDestination,
}: DestinationItemProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor_Ref = useRef<HTMLDivElement>(null);

  const menuHandleToggle = () => {
    setMenuOpen((prev_Open) => !prev_Open);
  };

  const menuHandleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchor_Ref.current &&
      anchor_Ref.current.contains(event.target as HTMLElement)
    ) {
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

  const prev_Open = React.useRef(menuOpen);
  React.useEffect(() => {
    if (prev_Open.current === true && menuOpen === false) {
      anchor_Ref.current!.focus();
    }

    prev_Open.current = menuOpen;
  }, [menuOpen]);

  const changeDefault = async () => {
    if (userData.uNo !== undefined && destination.uaNo !== undefined) {
      await callApiChangeDefaultAddress(userData.uNo, destination.uaNo);
      setRefresh(!refresh);
    }
  };

  const deleteAddress = async () => {
    if (destination.uaNo !== undefined) {
      const result = await callApiDeleteAddress(destination.uaNo);
      if (result === '배송지 삭제 완료') {
        alert('배송지가 삭제되었습니다.');
      }
      setRefresh(!refresh);
    }
  };

  return (
    <DestinationItemArea onClick={() => setDestination(destination)}>
      <AddressBox>
        <p>{destination.uaLnmAddress}</p>
        {destination.uaDefaultSetting === 'true' && (
          <BasicDestination>기본 배송지</BasicDestination>
        )}
      </AddressBox>
      <ContentBox>
        {destination.uaName} ・ {destination.uaRecvUserName} ・{' '}
        {destination.uaRecvUserPhone}
      </ContentBox>
      <RequestBox>
        <span>요청사항 | {destination.uaRequest}</span>
        <MoreButton
          ref={anchor_Ref}
          aria-controls={menuOpen ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={menuHandleToggle}
        />
        <Popper
          style={{ zIndex: 99 }}
          open={menuOpen}
          anchorEl={anchor_Ref.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'center top' }}
            >
              <Paper style={{ fontSize: '14px' }}>
                <ClickAwayListener onClickAway={menuHandleClose}>
                  <MenuList
                    autoFocusItem={menuOpen}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={(e) => {
                        changeDefault();
                        menuHandleClose(e);
                      }}
                      style={{ fontSize: '14px' }}
                    >
                      기본 배송지로 설정하기
                    </MenuItem>
                    <MenuItem
                      onClick={(e) => {
                        deleteAddress();
                        menuHandleClose(e);
                      }}
                      style={{ fontSize: '14px' }}
                    >
                      삭제하기
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </RequestBox>
    </DestinationItemArea>
  );
};

export default DestinationItem;
