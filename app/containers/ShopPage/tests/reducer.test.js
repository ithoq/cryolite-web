
import { fromJS } from 'immutable';
import shopPageReducer from '../reducer';

describe('shopPageReducer', () => {
  it('returns the initial state', () => {
    expect(shopPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
