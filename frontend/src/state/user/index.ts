import { createReducer } from '../../common/createReducer';

export const types = {
  USER_LOGIN: 'user/SET_MOVIELIST',
};

export const userActions = {
  userLogin: (userData: {}) => ({ type: types.USER_LOGIN, userData }),
};

type userLogin = ReturnType<typeof userActions.userLogin>;

export interface userState {
  userData: UserData;
  isLogin: boolean;
}

interface UserData {
  uImage?: string;
  uNo?: number;
  uEmail?: string;
  uPassword?: string;
  uName?: string;
  uPhone?: string;
  uBirth?: string;
  uJoinDate?: string;
  uAuthorit?: string;
  uCredit?: number;
  uPenalty?: string;
  uSellerAuth?: string;
  uJoinConfirm?: string;
  uBankName?: string;
  uBankNo?: string;
  uAuthKey?: string;
  uAuthKeyGeneratedAt?: string;
}

const INITIAL_STATE: userState = {
  userData: {},
  isLogin: false,
};

const reducer = createReducer<userState>(INITIAL_STATE, {
  [types.USER_LOGIN]: (state, action: userLogin) => {
    return {
      ...state,
      userData: action.userData,
      isLogin: true,
    };
  },
});

export default reducer;
