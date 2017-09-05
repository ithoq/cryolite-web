import { createSelector } from 'reselect';

/**
 * Direct selector to the accountPage state domain
 */
const selectAccountPageDomain = () => (state) => state.get('accountPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AccountPage
 */

const makeSelectAccountPage = () => createSelector(
  selectAccountPageDomain(),
  (subState) => subState
);

export default makeSelectAccountPage;
export {
  selectAccountPageDomain,
};
