/*
 *
 * App actions
 *
 */

import * as constants from './constants';

export function checkIsUserLoggedIn() {
  return {
    type: constants.CHECK_IS_USER_LOGGED_IN,
    state: constants.CHECK_IS_USER_LOGGED_IN
  };
}

export function setUserNotLoggedIn() {
  return {
    type: constants.USER_STATE_NOT_LOGGED_IN,
    state: constants.USER_STATE_NOT_LOGGED_IN
  };
}

export function performUserLogin(mode, credentials) {
  let action = {
    type: constants.USER_STATE_LOGIN_IN_PROGRESS,
    state: constants.USER_STATE_LOGIN_IN_PROGRESS,
    mode
  };
  
  switch (mode) {
    case 'local':
      action.credentials = credentials;
      break;
    case 'facebook':
    default:
      /* do something cool */
      break;
  }
  
  return action;
}

export function userLoginSuccess(info) {
  return {
    type: constants.USER_STATE_LOGGED_IN,
    state: constants.USER_STATE_LOGGED_IN,
    info
  }
}
