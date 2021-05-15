import { createReducer } from "../../common/createReducer";
import { ITEM } from "styled-components";

export const types = {
  SET_ISINDEX: "common/SET_ISINDEX",
  SET_ISPURCHASE: "common/SET_ISPURCHASE",
  SET_ISSEARCH: "common/SET_ISSEARCH",
  SET_ISLIKE: "common/SET_ISLIKE",
  ADD_RECENTLY: "common/ADD_RECENTLY",
  DELETE_RECENTLY: "common/DELETE_RECENTLY",
};

export const commonActions = {
  setIsIndex: (data: boolean) => ({ type: types.SET_ISINDEX, data }),
  setIsPurchase: (data: boolean) => ({ type: types.SET_ISPURCHASE, data }),
  setIsSearch: (data: boolean) => ({ type: types.SET_ISSEARCH, data }),
  setIsLike: (data: boolean) => ({ type: types.SET_ISLIKE, data }),
  addRecently: (data: ITEM) => ({ type: types.ADD_RECENTLY, data }),
  deleteRecently: (data: ITEM) => ({ type: types.DELETE_RECENTLY, data }),
};

type SetIsIndex = ReturnType<typeof commonActions.setIsIndex>;
type SetIsPurchase = ReturnType<typeof commonActions.setIsPurchase>;
type SetIsSearch = ReturnType<typeof commonActions.setIsSearch>;
type SetIsLike = ReturnType<typeof commonActions.setIsLike>;
type AddRecently = ReturnType<typeof commonActions.addRecently>;
type DeleteRecently = ReturnType<typeof commonActions.deleteRecently>;

export interface CommonState {
  isIndex: boolean;
  isPurchase: boolean;
  isSearch: boolean;
  isLike: boolean;
  recentlyItems: ITEM[];
}

const INITIAL_STATE: CommonState = {
  isIndex: false,
  isPurchase: false,
  isSearch: false,
  isLike: false,
  recentlyItems: [],
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
  [types.ADD_RECENTLY]: (state, action: AddRecently) => {
    let isExist: boolean = false;
    for(let i = 0; i < state.recentlyItems.length; i++) {
      if(state.recentlyItems[i].ipItemNo === action.data.ipItemNo)  {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      state.recentlyItems.push(action.data)
    }
    state.recentlyItems = [...state.recentlyItems];
    return {
      ...state,
    };
  },
  [types.DELETE_RECENTLY]: (state, action: DeleteRecently) => {
    for(let i = 0; i < state.recentlyItems.length; i++) {
      if(state.recentlyItems[i].ipItemNo === action.data.ipItemNo)  {
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
