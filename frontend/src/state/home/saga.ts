import { all, call, put, takeLeading } from 'redux-saga/effects';
import { homeActions, types } from './index';
import {
  callApiHomeProductSellList,
} from '../../api/ProductApi';

export function* contentData(action: ReturnType<typeof homeActions.requestSellList>): any {
  yield put(homeActions.setLoading(true));
  try {
    const data = yield call(callApiHomeProductSellList, action.pageNum);
    if (data !== undefined) {
      yield put(homeActions.setSellList(data));
    }
  } catch(error) {
    yield put(homeActions.setSellList([]));
  }
  yield put(homeActions.setLoading(false));
} 

export default function* saga() {
  yield all([
    takeLeading(types.REQUEST_SELLLIST, contentData),
  ]);
}