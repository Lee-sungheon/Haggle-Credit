import { createReducer } from "../../common/createReducer";

export const types = {
  SET_ISINDEX: "common/SET_ISINDEX",
  SET_ISPURCHASE: "common/SET_ISPURCHASE",
  SET_ISSEARCH: "common/SET_ISSEARCH",
  SET_ISLIKE: "common/SET_ISLIKE",
};

export const commonActions = {
  setIsIndex: (data: boolean) => ({ type: types.SET_ISINDEX, data }),
  setIsPurchase: (data: boolean) => ({ type: types.SET_ISPURCHASE, data }),
  setIsSearch: (data: boolean) => ({ type: types.SET_ISSEARCH, data }),
  setIsLike: (data: boolean) => ({ type: types.SET_ISLIKE, data }),
};

type SetIsIndex = ReturnType<typeof commonActions.setIsIndex>;
type SetIsPurchase = ReturnType<typeof commonActions.setIsPurchase>;
type SetIsSearch = ReturnType<typeof commonActions.setIsSearch>;
type SetIsLike = ReturnType<typeof commonActions.setIsLike>;

export interface CommonState {
  isIndex: boolean;
  isPurchase: boolean;
  isSearch: boolean;
  isLike: boolean;
}

const INITIAL_STATE: CommonState = {
  isIndex: false,
  isPurchase: false,
  isSearch: false,
  isLike: false,
};

const reducer = createReducer<CommonState>(INITIAL_STATE, {
  [types.SET_ISINDEX]: (state, action: SetIsIndex) => {
    return {
      ...state,
      isIndex: action.data,
    };
  },
  [types.SET_ISPURCHASE]: (state, action: SetIsPurchase) => {
    return {
      ...state,
      isPurchase: action.data,
    };
  },
  [types.SET_ISSEARCH]: (state, action: SetIsSearch) => {
    return {
      ...state,
      isSearch: action.data,
    };
  },
  [types.SET_ISLIKE]: (state, action: SetIsLike) => {
    return {
      ...state,
      isLike: action.data,
    };
  },
});

export default reducer;
