import { createReducer } from "../../common/createReducer";

export const types = {
  SET_ISINDEX: "common/SET_ISINDEX",
};

export const commonActions = {
  setIsIndex: (data: boolean) => ({ type: types.SET_ISINDEX, data }),
};

type SetIsIndex = ReturnType<typeof commonActions.setIsIndex>;

export interface CommonState {
  isIndex: boolean;
}

const INITIAL_STATE: CommonState = {
  isIndex: false,
};

const reducer = createReducer<CommonState>(INITIAL_STATE, {
  [types.SET_ISINDEX]: (state, action: SetIsIndex) => {
    return {
      ...state,
      isIndex: action.data,
    };
  },
});

export default reducer;
