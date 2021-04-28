import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { CATEGORYS } from '../../common/data';


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
      color: '#ffceae',
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 205px;
  align-items: center;
`;

const CategoryBox = styled.div`
  position: relative;
  :hover {
    color: ${({ theme }) => theme.color.main};
  }
  padding: 20px 0;
`;

const CategoryArea = styled.div`
  position: absolute;
  display: none;
  height: 70vh;
  width: 200px;
  top: 79px;
  color: black;
`;

const SubCategoryArea = styled.div`
  position: absolute;
  display: none;
  height: 70vh;
  width: 200px;
  left: 200px;
  top: 79px;
  color: black;=
`;

const CategoryTitle = styled.div`
  display: flex;
  padding-left: 15px;
  align-items: center;
  font-size: 13px;
  font-weight: 900;
  height: 35px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const CategoryList = styled.ul`
  box-sizing: border-box; 
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 20px 0;
  list-style: none;
  overflow: auto;
  height: 60vh;
  background-color: white;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 15px;
  height: 30px;
  font-weight: 600;
  background-color: white;
  :hover {
    color: white;
    background-color: ${({ theme }) => theme.color.main};
  }
`;

const SubCategoryItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-left: 15px;
  height: 30px;
  font-weight: 600;
  background-color: white;
  :hover {
    color: ${({ theme }) => theme.color.main};
    text-decoration: underline;
  }
`;

const StyledMenuIcon = styled(MenuIcon).attrs(()=>({
  fontSize: "large"
}))`
  font-size: 33px;
  cursor: pointer;
  margin-right: 2vw;
`;

const InputContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.main};
  width: 35vw;
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

const StyledMenuItem = styled.div`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  @media (max-width: 1220px) {
    display: block;
    text-align: center;
  }
`;

const NavBar = () => {
  const classes = useStyles();
  const categoryRef = useRef<HTMLDivElement>(null);
  const subCategoryRef = useRef<HTMLDivElement>(null);
  const [mainCategory, setMainCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  useEffect(()=>{
    if (mainCategory !== '') {
      if (null !== subCategoryRef.current) {
        if (subCategoryRef.current.style.display === '' || subCategoryRef.current.style.display === 'none'){
          subCategoryRef.current.style.display = 'block';
        }
      }
    } else {
      if (null !== subCategoryRef.current) {
        if (subCategoryRef.current.style.display === 'block'){
          subCategoryRef.current.style.display = 'none';
        }
      }
    }
  }, [mainCategory])

  const enterEvent = (e: any) => {
    if (null !== categoryRef.current) {
      if (categoryRef.current.style.display === '' || categoryRef.current.style.display === 'none'){
        categoryRef.current.style.display = 'block';
      }
    }
  };
  const leaveEvent = (e: any) => {
    if (null !== categoryRef.current) {
      if (categoryRef.current.style.display === 'block'){
        categoryRef.current.style.display = 'none';
      }
    }
    setMainCategory('');
  }

  return (
    <Container>
      <CategoryBox onMouseEnter={enterEvent} onMouseLeave={leaveEvent}>
        <StyledMenuIcon />
        <CategoryArea ref={categoryRef}>
          <CategoryTitle>전체 카테고리</CategoryTitle>
          <CategoryList>
            {CATEGORYLIST.map((category, idx) => (
              <CategoryItem 
                key={idx} 
                onMouseEnter={()=>setMainCategory(category)}
              >
                {category}
              </CategoryItem>
            ))}
          </CategoryList>
        </CategoryArea>
        {mainCategory !== '' && <SubCategoryArea ref={subCategoryRef}>
          <CategoryTitle>{mainCategory}</CategoryTitle>
          <CategoryList>
            {CATEGORYS[mainCategory].map((category, idx) => (
              <SubCategoryItem 
                key={idx}
                onClick={()=>{setSubCategory(category); console.log(subCategory)}}
              >
                {category}
              </SubCategoryItem>
            ))}
          </CategoryList>
        </SubCategoryArea>}
      </CategoryBox>

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
      <MenuBox style={{marginRight: "400px", marginLeft: '2vw'}}>
        <StyledMenuItem>
          <img src="../images/navbar/sell.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          <p style={{margin: 0}}>팝니다</p>
        </StyledMenuItem>
        <StyledMenuItem>
          <img src="../images/navbar/buy.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          <p style={{margin: 0}}>삽니다</p>
        </StyledMenuItem>
        <StyledMenuItem>
          <img src="../images/navbar/event.png" alt="" style={{width: 26, height: 26, marginRight: '5px'}}/>
          <p style={{margin: 0}}>이벤트 경매</p>
        </StyledMenuItem>
      </MenuBox>
    </Container>
  );
}

export default NavBar;


const CATEGORYLIST: string[] = Object.keys(CATEGORYS);