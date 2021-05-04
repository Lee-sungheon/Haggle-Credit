import styled from 'styled-components';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import RoomServiceOutlinedIcon from '@material-ui/icons/RoomServiceOutlined';

const Container = styled.div`
  padding-top: 10px;
  text-align: left;
  padding-right: 30px;
  border-right: 1px solid rgb(238, 238, 238);
`;

const QuestionTitle = styled.div`
  font-size: 18px;
  padding: 48px 0px 16px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const InputContainer = styled.div`
  border-right: 1px solid rgb(238, 238, 238);
  border-bottom: 1px solid rgb(238, 238, 238);
  border-left: 1px solid rgb(238, 238, 238);
  width: 100%;
`;

const MainInputArea = styled.div`
  padding: 20px;
  height: 80px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const MainInput = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  font-size: 13px;
  line-height: 1.5;
  color: rgb(33, 33, 33);
  :focus {
    outline: none;
  }
`;

const SubInputArea = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;

const SubInput = styled.div`
  margin-left: 10px;
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

const InputButton = styled.div`
  border: 1px solid rgb(238, 238, 238);
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 13px;
  color: rgb(136, 136, 136);
  cursor: pointer;
`;

const QuestionContainer = styled.div`
  margin-top: 10px;
`;

const QuestionArea = styled.div`
  padding-top: 25px;
  display: flex;
  width: 100%;
`;

const Avatar = styled.div`
  display: block;
  margin-right: 15px;
`;

const QuestionItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const QuestionHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: rgb(136, 136, 136);
  margin-bottom: 10px;
  align-items: center;
`;

const QuestionContent = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  white-space: pre-wrap;
  font-weight: 500;
  font-size: 14px;
`;

const QuestionFooter = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const QuestionButtonArea = styled.div`
  color: rgb(136, 136, 136);
  font-size: 13px;
  display: flex;
  align-items: unset;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
`;

const ProductQuestion = () => {
  return (
    <Container>
      <QuestionTitle>
        상품문의 <span style={{color: 'red'}}>2</span>
      </QuestionTitle>
      <InputContainer>
        <MainInputArea>
          <MainInput placeholder="상품문의 입력" />
        </MainInputArea>
        <SubInputArea>
          <SubInput>1 / 100</SubInput>
          <InputButton><CreateOutlinedIcon style={{ fontSize: '20px' }}/>등록</InputButton>
        </SubInputArea>
      </InputContainer>
      <QuestionContainer>
        <QuestionArea>
          <Avatar>
            <img 
              src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
              alt="" 
              width="48" 
              height="48"
              style={{borderRadius: "50%"}}
            />
          </Avatar>
          <QuestionItem>
            <QuestionHeader>
              <div>싸피4기취업못함엄마미안해</div>
              <div style={{fontSize: '13px', color: 'rgb(204, 204, 204)'}}>3초전</div>
            </QuestionHeader>
            <QuestionContent>
              건전지는 어는정도 사용했나요.)??<br />
              두개다 사용한건가요??
            </QuestionContent>
            <QuestionFooter>
              <QuestionButtonArea>
                <InsertCommentOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/> 댓글달기
              </QuestionButtonArea>
              <div style={{ borderRight: "1px solid rgb(238, 238, 238)", width: "1px", marginRight: "10px"}}/>
              <QuestionButtonArea>
                <RoomServiceOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/>신고하기
              </QuestionButtonArea>
            </QuestionFooter>
          </QuestionItem>
        </QuestionArea>
        <QuestionArea>
          <Avatar>
            <img 
              src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
              alt="" 
              width="48" 
              height="48"
              style={{borderRadius: "50%"}}
            />
          </Avatar>
          <QuestionItem>
            <QuestionHeader>
              <div>싸피4기취업못함엄마미안해</div>
              <div style={{fontSize: '13px', color: 'rgb(204, 204, 204)'}}>3초전</div>
            </QuestionHeader>
            <QuestionContent>
              건전지는 어는정도 사용했나요.)??<br />
              두개다 사용한건가요??
            </QuestionContent>
            <QuestionFooter>
              <QuestionButtonArea>
                <InsertCommentOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/> 댓글달기
              </QuestionButtonArea>
              <div style={{ borderRight: "1px solid rgb(238, 238, 238)", width: "1px", marginRight: "10px"}}/>
              <QuestionButtonArea>
                <RoomServiceOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/>신고하기
              </QuestionButtonArea>
            </QuestionFooter>
          </QuestionItem>
        </QuestionArea>
        <QuestionArea>
          <Avatar>
            <img 
              src="https://blog.kakaocdn.net/dn/baEtCH/btqZP2YQRdV/LrutxTVFJfRSb1KN9zIbdk/img.jpg" 
              alt="" 
              width="48" 
              height="48"
              style={{borderRadius: "50%"}}
            />
          </Avatar>
          <QuestionItem>
            <QuestionHeader>
              <div>싸피4기취업못함엄마미안해</div>
              <div style={{fontSize: '13px', color: 'rgb(204, 204, 204)'}}>3초전</div>
            </QuestionHeader>
            <QuestionContent>
              건전지는 어는정도 사용했나요.)??<br />
              두개다 사용한건가요??
            </QuestionContent>
            <QuestionFooter>
              <QuestionButtonArea>
                <InsertCommentOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/> 댓글달기
              </QuestionButtonArea>
              <div style={{ borderRight: "1px solid rgb(238, 238, 238)", width: "1px", marginRight: "10px"}}/>
              <QuestionButtonArea>
                <RoomServiceOutlinedIcon style={{fontSize: "20px", marginRight: "5px"}}/>신고하기
              </QuestionButtonArea>
            </QuestionFooter>
          </QuestionItem>
        </QuestionArea>
      </QuestionContainer>
    </Container>
  )
}

export default ProductQuestion;