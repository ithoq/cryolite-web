import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as constants from './constants';

export function* defaultSaga() {
  console.log('reaching');
}

// Individual exports for testing
export function* watchDefaultSaga() {
  yield takeLatest(constants.DEFAULT_ACTION, defaultSaga);
}

// All sagas to be loaded
export default [
  watchDefaultSaga,
];
