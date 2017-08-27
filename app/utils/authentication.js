/**
 * Project: [treela-web]
 * Created on: '8/26/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */
import isEmpty from 'lodash/isEmpty';
import { call } from 'redux-saga/effects';
import { fromJS } from 'immutable';

import { getCookie } from "./cookies";
import { axios } from './backend';

import config from 'appConfig';

export function* isLoggedIn() {
  let defOpts = { unSign: true };
  let accessToken = getCookie('access_token', defOpts);
  let userId = getCookie('userId', defOpts);
  let loginState = {
    status: false,
  };
  
  if (isEmpty(accessToken) || isEmpty(userId)) { return loginState; }
  
  try {
    let filter = JSON.stringify({include: ['identities']});
    let params = {
      'access_token': accessToken,
      filter,
    };
    
    let response = yield call(axios.get, `/users/${userId}`, {params});
    loginState.info = fromJS(response.data);
    loginState.status = true;
    return loginState;
    
  } catch (error) {
    loginState.error = error;
    return loginState;
    
  }
  
}

export function* login(mode) {
  if (mode !== 'local') {
    return window.location.href = `${config.hostUrl}/auth/${mode}`;
  }
  
  console.log('will think about local');
}
