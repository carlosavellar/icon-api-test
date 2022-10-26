import { all } from 'redux-saga/effects';
import characterSaga from './characters';

export function* rootSaga() {
  yield all([...characterSaga]);
}
