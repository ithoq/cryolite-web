/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import config from 'appConfig';

import AppHeader from '../../components/AppHeader';

import * as actions from './actions';
import * as selectors from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
  };
  
  componentWillMount() {
    this.props.dispatch(actions.defaultAction());
  }

  render() {
    return (
      <section>
        <AppHeader/>
        
        {React.Children.toArray(this.props.children)}
      </section>
    );
  }
}

let mapStateToProps = createStructuredSelector({
  locationState: selectors.makeSelectLocationState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
