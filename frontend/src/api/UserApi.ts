import axios from 'axios';

export function callApiMovieList() {
  const url: string = `netcha/movie/list`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    });
}

export function userLogin(body: any) {
  const url: string = 'https://k4d107.p.ssafy.io/haggle-credit/user/login';
  return axios.post(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
