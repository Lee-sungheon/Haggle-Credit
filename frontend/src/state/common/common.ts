import { createReducer } from "../../common/createReducer";

export const types = {
  SET_ISUPDATE: "total/SET_ISUPDATE",
};

export const totalActions = {
  setIsUpdate: (data: boolean) => ({ type: types.SET_ISUPDATE, data }),
};

type SetIsUpdate = ReturnType<typeof totalActions.setIsUpdate>;

export interface CommonState {
  isUpdate: boolean;
}

const INITIAL_STATE: CommonState = {
  isUpdate: false,
};

const reducer = createReducer<CommonState>(INITIAL_STATE, {
  [types.SET_ISUPDATE]: (state, action: SetIsUpdate) => {
    return {
      ...state,
      isUpdate: action.data,
    };
  },
});

export default reducer;
