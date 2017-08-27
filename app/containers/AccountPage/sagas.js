// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as constants from './constants';

// Individual exports for testing
export function* watchDefaultSaga() {
  yield takeLatest(constants.DEFAULT_ACTION, () => console.log('xxxxxxx'));
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  watchDefaultSaga,
];
