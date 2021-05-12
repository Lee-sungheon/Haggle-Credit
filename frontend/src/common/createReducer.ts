export type Handlers<T> = {
  [type: string]: (state: T, action: any) => T;
};

export function createReducer<S>(initialState: S, handlerMap: Handlers<S>) {
  // tslint:disable-next-line: only-arrow-functions
  return function (state: S = initialState, action: any) {
    const handler = handlerMap[action.type];
    if (handler) return handler(state, action);
    return state;
  };
}

// 다양한 방법으로 활용 가능
// export function createSetValueAction(type) {
//   return (key, value) => ({ type, key, value });
// }
// export function setValueReducer(state, action) {
//   state[action.key] = action.value;
// }
