import axios from 'axios';

export function userLogin(body: any) {
  const url: string = 'https://k4d107.p.ssafy.io/haggle-credit/user/login';
  return axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function userSignup(body: any) {
  const url: string = 'https://k4d107.p.ssafy.io/haggle-credit/user/join';
  return axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function checkUserEmail(userEmail: any) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/check/id?uEmail=${userEmail}`;
  return axios.get(url);
}
