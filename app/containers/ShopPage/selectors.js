import { createSelector } from 'reselect';

/**
 * Direct selector to the shopPage state domain
 */
const selectShopPageDomain = () => (state) => state.get('shopPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShopPage
 */

const makeSelectShopPage = () => createSelector(
  selectShopPageDomain(),
  (subState) => subState
);

export default makeSelectShopPage;
export {
  selectShopPageDomain,
};
