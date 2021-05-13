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
    });
}