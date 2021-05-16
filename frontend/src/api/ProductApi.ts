import axios from "axios";

export function callApiHomeProductSellList(pageNo: number) {
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

export function callApiCategoryCount(main:string, sub:string) {
  let url: string = "";
  if (sub === "") {
    url = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/categoryCount?ctgrMain=${main}`;
  } else {
    url = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/categoryCount?ctgrMain=${main}&ctgrSub=${sub}`;
  }
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return 0;
    });
}

export function callApiImageList(itemNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/image/getItemPhotoList?ipItemNo=${itemNo}`;
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

export function callApiQnaList(itemNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/item/qna?iqItemNo=${itemNo}`;
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

interface QNA{
  iqContent: string;
  iqItemNo: number;
  iqUserNo: number;
}
export function callApiWriteQna(body: QNA) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/item/qna/write`;
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
  });
}

export function callApiDeleteQna(QnaNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/item/qna/delete?iqNo=${QnaNo}`
  return axios
    .delete(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
  });
}

export function callApiUserInfo(userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/myinfo?uNo=${userNo}`;
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

export function callApiStoreInfo(userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/myitem?uNo=${userNo}`;
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

export function callApiCheckedStatus(itemNo: number, userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/bookmark/checkedStatus?bItemNo=${itemNo}&bUserNo=${userNo}`;
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

interface ZZiM {
  bItemNo: number|undefined;
  bUserNo: number|undefined;
}
export function callApiCreateZzim(body: ZZiM) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/bookmark/create`;
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
  });
}

export function callApiDeleteZzim(itemNo: number, userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/bookmark/delete?bItemNo=${itemNo}&bUserNo=${userNo}`
  return axios
    .delete(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
  });
}

export function callApiGetZzim(userNo: number){
  const url:string = `https://k4d107.p.ssafy.io/haggle-credit/bookmark/count?&uNo=${userNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return 0;
    });
}

export function callApiGetStoreReview(userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/review/mystore?page=1&uNo=${userNo}`;
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

export function callApiGetStoreReviewCnt(userNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/review/count?urUserNo=${userNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return 0;
    });
}



export function callApiItemDetail(itemNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/detail/inform?isItemNo=${itemNo}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return {};
    });
}

export function callApiUpdateAuction(price: number, itemNo: number, userNo: number, uaNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/auction?isAuctionPrice=${price}&isItemNo=${itemNo}&isUserNo=${userNo}&uaNo=${uaNo}`;
  return axios
    .put(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
  });
}

export function callApiDealCompleted(itemNo: number, uNo: number, uaNo: number){
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/itemSell/updateDealCompleted?isItemNo=${itemNo}&uNo=${uNo}&uaNo=${uaNo}`;
  return axios
    .put(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
  });
}