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

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';

import * as selectors from './selectors';

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    this._checkLocation = this._checkLocation.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node,
    userState: PropTypes.string.isRequired,
  };
  
  _checkLocation(predicate) {
    const { location } = this.props;
    return location.pathname === predicate;
  }
  
  componentWillMount() {
    if ( this._checkLocation('/') ) {
      return browserHistory.push('/shop');
    }
  }

  render() {
    if ( this._checkLocation('/') ) { return null; }
    
    return (
      <section>
        {React.Children.toArray(this.props.children)}
      </section>
    );
  }
}

let mapStateToProps = createStructuredSelector({
  locationState: selectors.makeSelectLocationState(),
  userState: selectors.makeSelectUserState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
