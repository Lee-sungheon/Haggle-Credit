import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { commonActions } from "../../state/common";

interface ITEM {
  id: number,
  title: string,
  url: string,
  price: number,
}

interface RecentlyBoxItemProps {
  item: ITEM;
}

const Item = styled.div`
  cursor: pointer;
  display: block;
  width: 100%;
  height: 66px;
  margin-bottom: 2px;
  position: relative;
  font-size: 13px;
`;

const ItemImg = styled.img`
  width: 66px;
  height: 66px;
`;

const ItemDesBox = styled.div`
  position: absolute;
  background-color: white;
  width: 150px;
  height: 66px;
  left: -150px;
  top: -1px;
  visibility: hidden;
  border: 1px solid black;
  border-right: none;
`;

const DesTitle = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: rgb(33, 33, 33);
`;

const DeleteButton = styled.div`
  position: absolute;
  top: -1px;
  left: -18px;
  width: 17px;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(34, 34, 34);
  color: white;
`;

const RecentlyBoxItem = ({ item }: RecentlyBoxItemProps) => {
  const ItemRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  const ItemEnter = () => {
    if (!isHover) {
      setIsHover(true);
    }
    if (null !== ItemRef.current){
      ItemRef.current.style.visibility = 'visible';
    }
  }
  const ItemLeave = () => {
    if (isHover) {
      setIsHover(false);
    }
    if (null !== ItemRef.current){
      ItemRef.current.style.visibility = 'hidden';
    }
  }
  const deleteItem = () => {
    dispatch(commonActions.deleteRecently(item));
  }

  return (
    <Item 
      onMouseEnter={ItemEnter} 
      onMouseLeave={ItemLeave} 
      style={isHover?{border: '1px solid black', borderLeft: 'none'}:{}}
    >
      <ItemDesBox ref={ItemRef}>
        <DesTitle>{item.title}</DesTitle>
        <DesTitle style={{fontWeight: 900}}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</DesTitle>
        <DeleteButton onClick={deleteItem}>X</DeleteButton>
      </ItemDesBox>
      <ItemImg src={item.url} alt={item.title} />
    </Item>
  )
};

export default RecentlyBoxItem;