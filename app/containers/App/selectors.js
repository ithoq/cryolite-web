import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectAppDomain = () => (state) => state.get('global');

const makeSelectUserState = () => createSelector(
  selectAppDomain(),
  (subState) => subState.getIn(['user', 'state'])
);

const makeSelectUserInfo = () => createSelector(
  selectAppDomain(),
  (subState) => subState.getIn(['user', 'info'])
);

export {
  makeSelectLocationState,
  makeSelectUserState,
  makeSelectUserInfo,
};
