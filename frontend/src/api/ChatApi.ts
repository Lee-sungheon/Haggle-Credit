import axios from "axios";

export function callApiRoomInfo(crNo: string) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/chat/roominfo?crNo=${crNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return [];
    });
}

export function callApiRoomList(uNo: string) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/chat/roomlist?uNo=${uNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return [];
    });
}

export function callApiChat(crNo: string) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/chat/enter?crNo=${crNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return [];
    });
}

interface CONNECTBODY {
  crItemNo: number;
  crUserNoOne: number | undefined;
  crUserNoTwo: number;
}

export function callConnetChat(body: CONNECTBODY) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/chat/connect`;
  return axios
    .post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((Resoponse) => {
      console.log(Resoponse.data);
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return -1;
    });
}