/*
 *
 * ShopPage actions
 *
 */

import * as constants from './constants';

export function getCategories() {
  return {
    type: constants.GET_CATEGORIES,
    state: constants.CATEGORIES_STATE_FETCHING,
  };
}

export function getCategoriesSuccess(info) {
  return {
    type: constants.GET_CATEGORIES_SUCCESS,
    state: constants.CATEGORIES_STATE_FETCHED,
    info,
  };
}

export function getCategoriesFailure(error) {
  return {
    type: constants.GET_CATEGORIES_FAILURE,
    state: constants.CATEGORIES_STATE_ERROR,
    error,
  };
}
