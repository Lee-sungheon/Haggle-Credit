import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import CloseIcon from '@material-ui/icons/Close';
import {
  callApiQnaList,
  callApiWriteQna,
  callApiDeleteQna,
} from '../../api/ProductApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store';
import { useHistory } from 'react-router-dom';

interface Props {
  itemNo: number | undefined;
}

interface QNA {
  iqContent: string;
  iqDate: string;
  iqItemNo: number;
  iqNo: number;
  iqUserNo: number;
  u_name: string;
  u_image: string;
}

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
  cursor: pointer;
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

const ProductQuestion = ({ itemNo }: Props) => {
  const [qnaList, setQnaList] = useState<QNA[]>([]);
  const [value, setValue] = useState('');
  const userNo = useSelector((state: RootState) => state.user.userData.uNo);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      if (itemNo !== undefined) {
        const result = await callApiQnaList(itemNo);
        setQnaList(result.reverse());
      }
    };
    fetchData();
  }, [itemNo]);

  const submitQna = async () => {
    if (!userNo) {
      alert('qna를 남기려면 로그인 해주세요.');
    } else {
      if (itemNo !== undefined) {
        const data = {
          iqContent: value,
          iqItemNo: itemNo,
          iqUserNo: userNo,
        };
        await callApiWriteQna(data);
        const result = await callApiQnaList(itemNo);
        setQnaList(result.reverse());
      }
      setValue('');
    }
  };

  const deleteQna = async (qnaNo: number) => {
    await callApiDeleteQna(qnaNo);
    if (itemNo !== undefined) {
      const result = await callApiQnaList(itemNo);
      setQnaList(result.reverse());
    }
  };

  const recommentQna = async (userName: string) => {
    setValue(`@${userName} ` + value);
  };

  return (
    <Container>
      <QuestionTitle>
        상품문의 <span style={{ color: 'red' }}>{qnaList.length}</span>
      </QuestionTitle>
      <InputContainer>
        <MainInputArea>
          <MainInput
            placeholder="상품문의 입력"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            maxLength={100}
          />
        </MainInputArea>
        <SubInputArea>
          <SubInput>{value.length} / 100</SubInput>
          <InputButton onClick={submitQna}>
            <CreateOutlinedIcon style={{ fontSize: '20px' }} />
            등록
          </InputButton>
        </SubInputArea>
      </InputContainer>
      <QuestionContainer>
        {qnaList.map((qna, idx) => (
          <QuestionArea key={idx}>
            <Avatar
              onClick={() => {
                history.push({
                  pathname: `/userprofile/${qna.iqUserNo}`,
                });
              }}
            >
              <img
                src={qna.u_image}
                alt=""
                width="48"
                height="48"
                style={{ borderRadius: '50%' }}
              />
            </Avatar>
            <QuestionItem>
              <QuestionHeader>
                <div
                  onClick={() => {
                    history.push({
                      pathname: `/userprofile/${qna.iqUserNo}`,
                    });
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {qna.u_name}
                </div>
                <div style={{ fontSize: '13px', color: 'rgb(204, 204, 204)' }}>
                  {qna.iqDate}
                </div>
              </QuestionHeader>
              <QuestionContent>{qna.iqContent}</QuestionContent>
              <QuestionFooter>
                <QuestionButtonArea onClick={() => recommentQna(qna.u_name)}>
                  <InsertCommentOutlinedIcon
                    style={{ fontSize: '20px', marginRight: '5px' }}
                  />{' '}
                  댓글달기
                </QuestionButtonArea>
                <QuestionButtonArea onClick={() => deleteQna(qna.iqNo)}>
                  <CloseIcon style={{ fontSize: '20px', marginRight: '3px' }} />
                  {qna.iqUserNo === userNo && '삭제하기'}
                </QuestionButtonArea>
              </QuestionFooter>
            </QuestionItem>
          </QuestionArea>
        ))}
      </QuestionContainer>
    </Container>
  );
};

export default ProductQuestion;
