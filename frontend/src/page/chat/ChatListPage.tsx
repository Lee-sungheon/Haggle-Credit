import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { RouteComponentProps } from 'react-router-dom';
import ChatList from "../../components/chat/ChatList";

interface MatchParams {
  id: string;
}

interface LocationParams {
  isModal: boolean;
}

interface HistoryParams {
}

const Container = styled.div`
  width: 390px;
  height: 677px;
  background: rgb(244, 244, 250);
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
  border-bottom: 2px solid ${({theme})=>theme.color.main};
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
`;

const ChatListPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(commonActions.setIsIndex(true));
    dispatch(commonActions.setIsPurchase(true));
    return () => {
      dispatch(commonActions.setIsIndex(false));
      dispatch(commonActions.setIsPurchase(false));
    };
  }, [dispatch]);
  return (
    <Container>
      <Header>
        <Title>크레딧톡</Title>
      </Header>
      <ChatList />
    </Container>
  )
}

export default ChatListPage;