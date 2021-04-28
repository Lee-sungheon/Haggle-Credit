import { createReducer } from "../../common/createReducer";

export const types = {
  SET_MOVIELIST: "home/SET_MOVIELIST",
};

export const homeActions = {
  setMovieList: (data: []) => ({ type: types.SET_MOVIELIST, data }),
};

type SetMovieList = ReturnType<typeof homeActions.setMovieList>;

export interface HomeState {
  movieLists: object[];
}

const INITIAL_STATE: HomeState = {
  movieLists: [{'1': 'test'}],
};

const reducer = createReducer<HomeState>(INITIAL_STATE, {
  [types.SET_MOVIELIST]: (state, action: SetMovieList) => {
    return {
      ...state,
      movieLists: action.data,
    };
  },
});

export default reducer;
