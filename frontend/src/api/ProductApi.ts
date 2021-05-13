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
    });
}