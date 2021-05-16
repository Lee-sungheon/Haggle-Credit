import { all } from '@redux-saga/core/effects';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import HomeReducer from '../state/home';
import HomeSaga from '../state/home/saga';
import CommonReducer from '../state/common/index';
import TotalReducer from '../state/common/common';
import UserReducer from '../state/user';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'total'],
};

const reducer = combineReducers({
  home: HomeReducer,
  common: CommonReducer,
  user: UserReducer,
  total: TotalReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistReducer(persistConfig, reducer),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([HomeSaga(),]);
}
sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof reducer>;
