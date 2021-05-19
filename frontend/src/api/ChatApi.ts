import axios from "axios";
import moment from 'moment';

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
    .then((Response) => {
      const data = Response.data;
      for (let i=0 ; i < data.length ; i++){
        let date = data[i].icDate.slice(0,10) + ' ' + data[i].icDate.slice(11,19);
        data[i].icDate = moment(date, "YYYY-MM-DD HH:mm:ss").add(9, 'h').format("YYYY-MM-DD HH:mm:ss");
      }
      return data;
    })
    .catch((Error) => {
      console.log(Error);
      return [];
    });
}

interface CONNECTBODY {
  crItemNo: number| undefined;
  crUserNoOne: number | undefined;
  crUserNoTwo: number| undefined;
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
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return -1;
    });
}

export function callApiDeleteRoom(crNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/chat/delete?crNo=${crNo}`;
  return axios
    .delete(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return -1;
    });
}