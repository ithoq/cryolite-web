/*
 *
 * ShopPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';

import * as appConstants from '../App/constants';
import { checkIsUserLoggedIn, performUserLogin } from "../App/actions";
import { makeSelectUserState, makeSelectUserInfo } from "../App/selectors";

import makeSelectShopPage from './selectors';
import messages from './messages';

import AppHeader from '../../components/AppHeader';

export class ShopPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  
    this._checkLocation = this._checkLocation.bind(this);
    this._performUserLogin = this._performUserLogin.bind(this);
  }
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node,
    userState: PropTypes.string.isRequired,
    userInfo: PropTypes.object.isRequired,
  };
  
  _checkLocation(predicate) {
    const { location } = this.props;
    return location.pathname === predicate;
  }
  
  componentWillMount() {
    const { dispatch } = this.props;
    
    dispatch(checkIsUserLoggedIn());
    
    if ( this._checkLocation('/shop') ) {
      return browserHistory.push('/shop/home')
    }
  }
  
  _performUserLogin(mode, credentials) {
    this.props.dispatch(performUserLogin(mode, credentials));
  }
  
  render() {
    const { children, userState, userInfo } = this.props;
  
    if ( userState === appConstants.USER_STATE_DEFAULT ) {
      return (
        <section>Loading...</section>
      );
    }
    
    if ( _.isEmpty(children) ) {
      return (
        <section>
          <AppHeader userState={userState} onLoginClick={this._performUserLogin} user={userInfo} />
          
          <FormattedMessage {...messages.header} />
        </section>
      );
    }
    
    return (
      <section>
        <AppHeader userState={userState} onLoginClick={this._performUserLogin} user={userInfo} />
        
        {React.Children.toArray(children)}
      </section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shopState: makeSelectShopPage(),
  userState: makeSelectUserState(),
  userInfo: makeSelectUserInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
