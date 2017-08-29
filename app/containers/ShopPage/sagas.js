import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { fromJS } from 'immutable';

import * as appConstants from '../App/constants';
import * as appActions from '../App/actions';

import * as actions from './actions';
import * as constants from './constants';

import { isLoggedIn } from "../../utils/authentication";
import { getCookie } from "../../utils/cookies";
import { axios } from '../../utils/backend';

export function* checkIsUserLoggedIn() {
  let userLoginState = yield isLoggedIn();
  
  if (!userLoginState.status) {
    return yield put(appActions.setUserNotLoggedIn());
  }
  
  yield put(appActions.userLoginSuccess(userLoginState.info));
}

export function* getCategories() {
  let defOpts = { unSign: true };
  let accessToken = getCookie('access_token', defOpts);
  
  try {
    let params = {
      'access_token': accessToken,
    };
    
    let response = yield call(axios.get, `/categories`, {params});
    yield put(actions.getCategoriesSuccess(fromJS(response.data)));
    
  } catch (error) {
    console.log(error); //TODO
    yield put(actions.getCategoriesFailure(fromJS(error)));
    
  }
}

// Individual exports for testing
export function* watchCheckIsUserLoggedIn() {
  yield takeLatest(appConstants.CHECK_IS_USER_LOGGED_IN, checkIsUserLoggedIn);
}

export function* watchGetCategories() {
  yield takeLatest(constants.GET_CATEGORIES, getCategories);
}

// All sagas to be loaded
export default [
  watchCheckIsUserLoggedIn,
  watchGetCategories,
];
