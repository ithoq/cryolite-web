/**
*
* A
*
*/

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';


class A extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    this._onClick = this._onClick.bind(this);
  }
  
  static propTypes = {
    href: PropTypes.array.isRequired,
    className: PropTypes.string,
    onClicked: PropTypes.func.isRequired,
    children: PropTypes.node,
  };
  
  _onClick() {
    const { href, onClicked } = this.props;
    browserHistory.push(`/${href.join('/')}`);
    onClicked();
  }
  
  render() {
    const { children, className } = this.props;
    
    return (
      <a onClick={this._onClick} className={className}>
        {React.Children.toArray(children)}
      </a>
    );
  }
}

export default A;
