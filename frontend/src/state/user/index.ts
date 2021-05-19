import { createReducer } from '../../common/createReducer';
import { ITEM } from 'styled-components';

export const types = {
  USER_LOGIN: 'user/USER_LOGIN',
  USER_LOGOUT: 'user/USER_LOGOUT',
  UPDATE_BANK: 'user/UPDATE_BANK',
  CHANGE_CREDIT: 'user/CHANGE_CREDIT',
  CHANGE_PROFILE_IMAGE: 'user/CHANGE_PROFILE_IMAGE',
  CHANGE_INTRODUCE: 'user/CHANGE_INTRODUCE',
  JOIN_USER_DATA: 'user/JOIN_USER_DATA',
  ADD_RECENTLY: 'user/ADD_RECENTLY',
  DELETE_RECENTLY: 'user/DELETE_RECENTLY',
};

export const userActions = {
  userLogin: (userData: {}) => ({ type: types.USER_LOGIN, userData }),
  userLogout: () => ({ type: types.USER_LOGOUT }),
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
  joinUserData: (joinUserData: {}) => ({
    type: types.JOIN_USER_DATA,
    joinUserData,
  }),
  addRecently: (data: ITEM) => ({ type: types.ADD_RECENTLY, data }),
  deleteRecently: (data: ITEM) => ({ type: types.DELETE_RECENTLY, data }),
};

type userLogin = ReturnType<typeof userActions.userLogin>;
type userLogout = ReturnType<typeof userActions.userLogout>;
type updateBank = ReturnType<typeof userActions.updateBank>;
type changeCredit = ReturnType<typeof userActions.changeCredit>;
type changeProfileImage = ReturnType<typeof userActions.changeProfileImage>;
type changeIntroduce = ReturnType<typeof userActions.changeIntroduce>;
type joinUserData = ReturnType<typeof userActions.joinUserData>;
type AddRecently = ReturnType<typeof userActions.addRecently>;
type DeleteRecently = ReturnType<typeof userActions.deleteRecently>;

export interface userState {
  userData: UserData;
  isLogin: boolean;
  joinUserData: UserData;
  recentlyItems: ITEM[];
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
  joinUserData: {},
  isLogin: false,
  recentlyItems: [],
};

const reducer = createReducer<userState>(INITIAL_STATE, {
  [types.USER_LOGIN]: (state, action: userLogin) => {
    return {
      ...state,
      userData: action.userData,
      isLogin: true,
    };
  },
  [types.JOIN_USER_DATA]: (state, action: joinUserData) => {
    return {
      ...state,
      joinUserData: action.joinUserData,
    };
  },
  [types.USER_LOGOUT]: (state, action: userLogout) => {
    return {
      ...state,
      userData: {},
      isLogin: false,
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
  [types.ADD_RECENTLY]: (state, action: AddRecently) => {
    let isExist: boolean = false;
    for (let i = 0; i < state.recentlyItems.length; i++) {
      if (state.recentlyItems[i].ipItemNo === action.data.ipItemNo) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      state.recentlyItems.push(action.data);
    }
    state.recentlyItems = [...state.recentlyItems];
    return {
      ...state,
    };
  },
  [types.DELETE_RECENTLY]: (state, action: DeleteRecently) => {
    for (let i = 0; i < state.recentlyItems.length; i++) {
      if (state.recentlyItems[i].ipItemNo === action.data.ipItemNo) {
        state.recentlyItems.splice(i, 1);
        break;
      }
    }
    state.recentlyItems = [...state.recentlyItems];
    return {
      ...state,
    };
  },
});

export default reducer;
