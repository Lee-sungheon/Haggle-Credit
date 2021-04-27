import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      padding: '20px',
      fontSize: '13px',
    },
    iconButton: {
      marginRight: '15px',
      color: '#ffb74d',
    },
  }),
);

const Container = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  background-color: ${({ theme }) => theme.color.background};
  z-index: 7;
  font-family: Spoqa Han Sans, Sans-serif;
  color: #3c4758;
  opacity: 1;
  border-bottom: 1px solid grey;
  padding: 5px 60px;
  padding-top: 10px;
  align-items: center;
`;

const InputContainer = styled.div`
  border: 2px solid #ffb74d;
  width: 40vw;
  height: 40px;
  box-sizing: border-box;
  position: relative;
`;

const InputBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

const MenuBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

const MenuItem = styled.div`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const NavBar = () => {
  const classes = useStyles();
  return (
    <Container>
      <MenuIcon style={{ fontSize: 33, cursor: 'pointer', marginRight: '5vw'}} />
      <InputContainer>
        <InputBox>
          <InputBase
            className={classes.input}
            style={{padding: 0}} 
            placeholder="상품명, 키워드 입력"
            inputProps={{ 'aria-label': '상품명 입력' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </InputBox>
      </InputContainer>
      <MenuBox style={{marginRight: "100px"}}>
        <MenuItem>
          <img src="../images/navbar/sell.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          팝니다
        </MenuItem>
        <MenuItem>
          <img src="../images/navbar/buy.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          삽니다
        </MenuItem>
        <MenuItem>
          <img src="../images/navbar/event.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          이벤트 경매
        </MenuItem>
      </MenuBox>
    </Container>
  );
}

export default NavBar;