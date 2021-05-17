import { createReducer } from "../../common/createReducer";
import { ITEM } from "styled-components";

export const types = {
  REQUEST_SELLLIST: "home/REQUEST_SELLLIST",
  REQUEST_BUYLIST: "home/REQUEST_BUYLIST",
  SET_SELLLIST: "home/SET_SELLLIST",
  SET_BUYLIST: "home/SET_BUYLIST",
  SET_LOADING: "home/SET_LOADING",
};

export const homeActions = {
  requestSellList: (pageNum: number) => ({ type: types.REQUEST_SELLLIST, pageNum }),
  requestBuyList: (pageNum: number) => ({ type: types.REQUEST_BUYLIST, pageNum }),
  setSellList: (data: ITEM[]) => ({ type: types.SET_SELLLIST, data }),
  setBuyList: (data: ITEM[]) => ({ type: types.SET_BUYLIST, data }),
  setLoading: (isLoading: boolean) => ({
    type: types.SET_LOADING,
    isLoading,
  }),
};

type SetSellList = ReturnType<typeof homeActions.setSellList>;
type SetBuyList = ReturnType<typeof homeActions.setBuyList>;
type SetLoading = ReturnType<typeof homeActions.setLoading>;

export interface HomeState {
  sellLists: ITEM[];
  buyLists: ITEM[];
  isLoading: boolean,
}

const INITIAL_STATE: HomeState = {
  sellLists: [],
  buyLists: [],
  isLoading: false,
};

const reducer = createReducer<HomeState>(INITIAL_STATE, {
  [types.SET_SELLLIST]: (state, action: SetSellList) => {
    return {
      ...state,
      sellLists: action.data,
    };
  },
  [types.SET_BUYLIST]: (state, action: SetBuyList) => {
    return {
      ...state,
      buyLists: action.data,
    };
  },
  [types.SET_LOADING]: (state, action: SetLoading) => {
    return {
      ...state,
      isLoading: action.isLoading
    };
  },
});

export default reducer;
