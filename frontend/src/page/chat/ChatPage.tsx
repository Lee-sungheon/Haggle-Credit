import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";
import { RouteComponentProps } from 'react-router-dom';
import Chat from '../../components/chat/Chat';
import ChatInput from '../../components/chat/ChatInput';

interface MatchParams {
  id: string;
}

interface LocationParams {
  isModal: boolean;
}

interface HistoryParams {
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
  const [value, setValue] = useState("");
  const [feeds, setFeeds] = useState(FEEDS);
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
        <Title>싸피4기취업못함</Title>
      </Header>
      <ItemArea>
        <ItemBox>
          <img 
            src="https://media.bunjang.co.kr/product/109253582_{cnt}_1569993641_w{res}.jpg" 
            alt="ItemImage" 
            style={{height: "2.5rem", width: "2.5rem", marginRight: "0.5rem"}}
            />
          <ItemContentArea>
            <ItemPrice>{'60000'.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}<small> 원</small></ItemPrice>
            <ItemTitle>몽블랑 카드지갑</ItemTitle>
          </ItemContentArea>
        </ItemBox>
      </ItemArea>
      <Chat feeds={feeds}/>
      <ChatInput feeds={feeds} setFeeds={setFeeds} value={value} setValue={setValue}/>
    </Container>
  )
}

export default ChatPage;


interface CHAT {
  id: string;
  url: string;
  content: string;
  date: string;
}

const FEEDS: CHAT[] = [
  {
    id: '1',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '그러세요 그러세요 그러세요 그러세요',
    date: '오후 11:42'
  }, 
  {
    id: '2',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요',
    date: '오후 11:42'
  }, 
  {
    id: '2',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요',
    date: '오후 11:42'
  }, 
  {
    id: '1',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '그러세요 그러세요 그러세요 그러세요',
    date: '오후 11:42'
  },
  {
    id: '1',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '그러세요 그러세요 그러세요 그러세요',
    date: '오후 11:42'
  }, 
  {
    id: '2',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요',
    date: '오후 11:42'
  }, 
  {
    id: '1',
    url: 'https://blog.kakaocdn.net/dn/sOFQo/btqFXIdG4BC/OSX6phlqjlj7p3EYH1jZjk/img.png',
    content: '그러세요 그러세요 그러세요 그러세요',
    date: '오후 11:42'
  }, 
]