import axios from "axios";

export function callApiHomeProductSellList(pageNo: string) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/viewHome?UD=up&pageNo=${pageNo}&sortName=is_no`;
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

export function callApiCategoryProductList(ud:string, main:string, sub:string, pageNo: string, sortName: string) {
  let url: string = ''
  if (sub === ""){
    url = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/views?UD=${ud}&ctgrMain=${main}&pageNo=${pageNo}&sortName=${sortName}`
  } else {
    url = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/views?UD=${ud}&ctgrMain=${main}&ctgrSub=${sub}&pageNo=${pageNo}&sortName=${sortName}`
  }
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

export function callApiCategoryCount(main: string) {
  let url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/cgtrCnt?ctgrMain=${main}`;
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