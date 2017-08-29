/*
 *
 * AccountPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import * as actions from './actions';
import makeSelectAccountPage from './selectors';
import messages from './messages';

export class AccountPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    
  }
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };
  
  componentWillMount() {
    this.props.dispatch(actions.defaultAction());
  }
  
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accountPage: makeSelectAccountPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
