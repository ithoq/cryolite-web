/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  user: {
    state: constants.USER_STATE_DEFAULT,
    info: {}
  }
});

function appPageReducer(state = initialState, action) {
  switch (action.type) {
    case constants.USER_STATE_DEFAULT:
      return state.setIn(['user', 'state'], action.state);
    case constants.USER_STATE_NOT_LOGGED_IN:
      return state.setIn(['user', 'state'], action.state);
    case constants.USER_STATE_LOGIN_IN_PROGRESS:
      return state.setIn(['user', 'state'], action.state);
    case constants.USER_STATE_LOGGED_IN:
      return state.setIn(['user', 'state'], action.state).setIn(['user', 'info'], action.info);
    default:
      return state;
  }
}

export default appPageReducer;
