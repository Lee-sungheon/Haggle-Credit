import styled from 'styled-components';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

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

const AlarmItem = () => {
  return (
    <ChannelItem>
      <ChannelAvatar>
        <img src={"../images/no_image.gif"} alt="" width="54," height="54"/>
      </ChannelAvatar>
      <ItemContentBox>
        <ItemTitle>{"이름"}</ItemTitle>
        <ItemContent>{'등록한 물품이 유찰되었습니다. 물품이 기부로 넘어갑니다.'}</ItemContent>
      </ItemContentBox>
      <StyledDate>
        {"2021-05-18"}
      </StyledDate>
      <MoreButtonArea>
        <MoreButton>
          <DeleteForeverOutlinedIcon style={{fontSize: "18px", color: 'red'}}/>
        </MoreButton>
      </MoreButtonArea>
    </ChannelItem>
  )
}

export default AlarmItem;