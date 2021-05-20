import { useEffect } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { callApiKeyAlter } from '../../api/UserApi';

interface MatchParams {
}

interface LocationParams {
}

interface HistoryParams {
}

const CertificationPage = ({match, location}: RouteComponentProps<MatchParams, HistoryParams, LocationParams>) => {
  const data = location.search.slice(1,).split('&');
  const token = data[0].split('=')[1];
  const email = data[1].split('=')[1];
  const history = useHistory();
  console.log(token, email)
  useEffect(()=>{
    const fetchData = async() => {
      const result = await callApiKeyAlter(email, token);
      if (result === '인증 완료') {
        alert("인증에 성공하였습니다. 로그인 해주세요");
        history.push('/home');
      } else {
        alert("인증에 실패하였습니다.");
        history.push('/home');
      }
    }
    fetchData();
  }, [email, history, token])
  return (
    <>
      <div style={{height: '50vh'}}></div>
    </>
  )
}

export default CertificationPage;