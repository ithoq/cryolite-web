/*
 *
 * ShopPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

const initialState = fromJS({
  categories: {
    state: constants.CATEGORIES_STATE_DEFAULT,
    info: [],
  },
  error: {}
});

function shopPageReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_CATEGORIES:
      return state.setIn(['categories', 'state'], action.state);
    case constants.GET_CATEGORIES_SUCCESS:
      return state.setIn(['categories', 'state'], action.state).setIn(['categories', 'info'], action.info);
    case constants.GET_CATEGORIES_FAILURE:
      return state.setIn(['categories', 'state'], action.state).setIn(['error'], action.error);
    default:
      return state;
  }
}

export default shopPageReducer;
