import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { browserHistory } from 'react-router';

import * as appConstants from '../App/constants';
import * as appActions from '../App/actions';

import { isLoggedIn, login } from "../../utils/authentication";

export function* loginUser(params) {
  let userInfo = yield login(params.mode);
  console.log(userInfo);
}

// Individual exports for testing
export function* watchLoginUser() {
  yield takeLatest(appConstants.USER_STATE_LOGIN_IN_PROGRESS, loginUser);
}

// All sagas to be loaded
export default [
  watchLoginUser,
];
