import { ImageType } from 'react-images-uploading';
import { createReducer } from '../../common/createReducer';

export const types = {
  USER_LOGIN: 'user/USER_LOGIN',
  UPDATE_BANK: 'user/UPDATE_BANK',
  CHANGE_CREDIT: 'user/CHANGE_CREDIT',
  CHANGE_PROFILE_IMAGE: 'user/CHANGE_PROFILE_IMAGE',
  CHANGE_INTRODUCE: 'user/CHANGE_INTRODUCE',
};

export const userActions = {
  userLogin: (userData: {}) => ({ type: types.USER_LOGIN, userData }),
  updateBank: (userData: {}) => ({ type: types.UPDATE_BANK, userData }),
  changeCredit: (userData: {}) => ({ type: types.CHANGE_CREDIT, userData }),
  changeProfileImage: (userData: {}) => ({
    type: types.CHANGE_PROFILE_IMAGE,
    userData,
  }),
  changeIntroduce: (userData: {}) => ({
    type: types.CHANGE_INTRODUCE,
    userData,
  }),
};

type userLogin = ReturnType<typeof userActions.userLogin>;
type updateBank = ReturnType<typeof userActions.updateBank>;
type changeCredit = ReturnType<typeof userActions.changeCredit>;
type changeProfileImage = ReturnType<typeof userActions.changeProfileImage>;
type changeIntroduce = ReturnType<typeof userActions.changeIntroduce>;

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
  uContent?: string;
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
  [types.UPDATE_BANK]: (state, action: updateBank) => {
    return {
      ...state,
      userData: action.userData,
    };
  },
  [types.CHANGE_CREDIT]: (state, action: changeCredit) => {
    return {
      ...state,
      userData: action.userData,
    };
  },
  [types.CHANGE_PROFILE_IMAGE]: (state, action: changeProfileImage) => {
    return {
      ...state,
      userData: action.userData,
    };
  },

  [types.CHANGE_INTRODUCE]: (state, action: changeIntroduce) => {
    return {
      ...state,
      userData: action.userData,
    };
  },
});

export default reducer;
