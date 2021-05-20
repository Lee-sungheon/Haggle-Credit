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
  const url: string =
    'https://k4d107.p.ssafy.io/haggle-credit/user/join';
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

export function updateBank(body: any) {
  const url: string = 'https://k4d107.p.ssafy.io/haggle-credit/user/updateBank';
  return axios.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function changeCredit(body: any) {
  const url: string =
    'https://k4d107.p.ssafy.io/haggle-credit/user/chargeCredit';
  return axios.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function changeIntroduceAPI(body: any) {
  const url: string = 'https://k4d107.p.ssafy.io/haggle-credit/user/update';
  return axios.put(url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


export function changeProfileImageAPI(body: any) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/image/profileUpload`;
  return axios.put(url, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
export function callApiGetAddress(uNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/address?uNo=${uNo}`;
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

export function callApiAddAddress(
  uaDefaultSetting: string,
  uaLnmAddress: string,
  uaName: string,
  uaRecvUserName: string,
  uaRecvUserPhone: string,
  uaReqeust: string,
  uaUserNo: number
) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/address/add?uaDefaultSetting=${uaDefaultSetting}&uaLnmAddress=${uaLnmAddress}&uaName=${uaName}&uaRecvUserName=${uaRecvUserName}&uaRecvUserPhone=${uaRecvUserPhone}&uaRequest=${uaReqeust}&uaUserNo=${uaUserNo}`;
  return axios
    .post(url, {
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

export function callApiChangeDefaultAddress(uNo: number, uaNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/address/change/defaultAddress?uNo=${uNo}&uaNo=${uaNo}`;
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

export function callApiDeleteAddress(uaNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/address/delete?uaNo=${uaNo}`;
  return axios
    .delete(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
  });
}

export function callApiAlarmList(uNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/alarm/read?uNo=${uNo}`;
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

export function callApiDeleteAlarm(aNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/alarm/delete?aNo=${aNo}`;
  return axios
    .delete(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error)=>{
      console.log(Error);
      return '오류';
    })
}

export function callApiGetCredit(uNo: number) {
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/mycredit?uNo=${uNo}`;
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

export function callApiKeyAlter(email: string, token: string){
  const url: string = `https://k4d107.p.ssafy.io/haggle-credit/user/key_alter?email=${email}&token=${token}`;
  return axios
    .get(url)
    .then((Resoponse) => {
      return Resoponse.data;
    })
    .catch((Error) => {
      console.log(Error);
      return '인증 실패';
    });
}