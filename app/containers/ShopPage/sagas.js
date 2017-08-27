import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';

import * as appConstants from '../App/constants';
import * as appActions from '../App/actions';

import { isLoggedIn } from "../../utils/authentication";

export function* checkIsUserLoggedIn() {
  let userLoginState = yield isLoggedIn();
  
  if (!userLoginState.status) {
    return yield put(appActions.setUserNotLoggedIn());
  }
  
  yield put(appActions.userLoginSuccess(userLoginState.info));
}

// Individual exports for testing
export function* watchCheckIsUserLoggedIn() {
  yield takeLatest(appConstants.CHECK_IS_USER_LOGGED_IN, checkIsUserLoggedIn);
}

// All sagas to be loaded
export default [
  watchCheckIsUserLoggedIn,
];
