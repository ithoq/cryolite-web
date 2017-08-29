/**
*
* Navigator
*
*/

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';


class Navigator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this._handleNavigation = this._handleNavigation.bind(this);
  }
  
  static propTypes = {
    href: PropTypes.array.isRequired,
    children: PropTypes.node,
  };
  
  _handleNavigation() {
    const { href } = this.props;
    browserHistory.push(`/${href.join('/')}`);
  }
  
  render() {
    const { children } = this.props;
    
    return (
      <div onClick={this._handleNavigation} className="clickable">
        { React.Children.toArray(children) }
      </div>
    );
  }
}

export default Navigator;
