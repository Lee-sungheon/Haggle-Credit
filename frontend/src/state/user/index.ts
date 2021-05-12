import { createReducer } from '../../common/createReducer';

export const types = {
  USER_LOGIN: 'user/SET_MOVIELIST',
};

export const userActions = {
  userLogin: (userData: {}) => ({ type: types.USER_LOGIN, userData }),
};

type userLogin = ReturnType<typeof userActions.userLogin>;

export interface userState {
  userData: object;
  isLogin: boolean;
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
