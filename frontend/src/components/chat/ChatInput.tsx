import styled from 'styled-components';

interface Props {
  value: string;
  setValue: Function;
  send: Function;
}

const Container = styled.div`
  width: 100%;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(238, 238, 238);
  padding-bottom: 18px;
  position: relative;
`;

const InputArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const InputBox = styled.div`
  flex: 1 1 0%;
  margin-right: 10px;
  padding: 0 15px;
  margin-top: 10px;
`;

const StyledInput = styled.div`
  background: rgb(244, 244, 250);
  border-radius: 20px;
  position: relative;
  direction: ltr;
  padding: 0 15px;
`;

const SubmitButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: calc(50% - 20px);
  right: 34px;
  width: 2rem;
  height: 2rem;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiNGRjUwNTgiLz4KICAgICAgICA8ZyBmaWxsPSIjRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMCA5KSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjcyMiAxLjA2NmwuMTA2LjEwNmExIDEgMCAwIDEgMCAxLjQxNEwyLjU4NiA2LjgyOGExIDEgMCAwIDEtMS40MTQgMGwtLjAxNS0uMDE1YTEgMSAwIDAgMS0uMDE1LTEuMzk4TDUuMjkzIDEuMDhhMSAxIDAgMCAxIDEuNDMtLjAxNXoiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjg0NCA2LjgxM2wtLjAxNi4wMTVhMSAxIDAgMCAxLTEuNDE0IDBMNS4yMyAyLjY0NGExIDEgMCAwIDEgLjA1OC0xLjQ2OGwuMTE1LS4wOThhMSAxIDAgMCAxIDEuMzcxLjA2OWw0LjA4NSA0LjI2OGExIDEgMCAwIDEtLjAxNSAxLjM5OHoiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMTAiIHg9IjUiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  max-height: 63px;
  overflow: auto;
  overflow-wrap: break-word;
  text-align: left;
  color: rgb(33, 33, 33);
  letter-spacing: -0.5px;
  appearance: none;
  background: transparent;
  outline: none;
  border: 0px;
  border-radius: 2px 0px 0px 2px;
  line-height: 1.4;
  padding: 10px 0;
  overflow: hidden;
  font-size: 15px;
  resize: none;
`;

const ChatInput = ({value, setValue, send}: Props) => {
  const submitFeed = () => {
    if (value.trimEnd().length > 0) {
      const feed = {
        content: value.trimEnd(),
      }
      send(feed)
      setValue('')
    }
  }
  return(
    <Container>
      <InputArea>
        <InputBox>
          <StyledInput>
            <StyledTextArea 
              placeholder="채팅을 입력해주세요" 
              rows={1} 
              value={value}
              onChange={(e)=>setValue(e.target.value.trimStart())}
              onKeyPress={
                (e) => {if(e.key === 'Enter'){
                  submitFeed();
                }}
              }
            />
          </StyledInput >
          <SubmitButton onClick={submitFeed}/>
        </InputBox>
      </InputArea>
    </Container>
  )
}

export default ChatInput;