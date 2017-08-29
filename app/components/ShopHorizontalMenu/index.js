/**
 *
 * ShopHorizontalMenu
 *
 */

import React, { PropTypes } from 'react';
import { Dropdown, DropdownMenu } from 'reactstrap';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import each from 'lodash/each';
import get from 'lodash/get';
import set from 'lodash/set';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import isUndefined from 'lodash/isUndefined';

import { initHorizontalMenu } from "../../resources/js/treela";

class ShopHorizontalMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    this.state = {
      isCartOpen: false,
      menuTree: {}
    };
    
    this._toggleDropdown = this._toggleDropdown.bind(this);
    this._processMenuTree = this._processMenuTree.bind(this);
    this._renderSubMenu = this._renderSubMenu.bind(this);
  }
  
  componentWillMount() {
    const { menu } = this.props;
    this.setState({menuTree: this._processMenuTree(menu)});
  }
  
  componentDidMount() {
    initHorizontalMenu();
  }
  
  static propTypes = {
    menu: PropTypes.object.isRequired,
  };
  
  _toggleDropdown(key) {
    return () => {
      this.setState({[key]: !this.state[key]});
    }
  }
  
  _processMenuTree(input) {
    let data = !isArray(input.toJS()) ? [] : input.toJS();
    let menuTree = {};
    
    each(data, (item) => {
      menuTree[item.name] = item.parent;
    });
    
    return menuTree;
  }
  
  _buildMenuTree() {
    let menu = {};
    
    return {
      add: (menuTree, value) => {
        let currentMenu = value;
        let arr = [startCase(value)];
        
        while (menuTree[currentMenu] !== '' && !isUndefined(menuTree[menuTree[currentMenu]])) {
          currentMenu = menuTree[currentMenu];
          arr.push(startCase(currentMenu));
        }
        
        arr = arr.reverse();
        
        if (!get(menu, arr.join('.'), false)) {
          set(menu, arr.join('.'), {});
        }
      },
      get: (path) => path ? get(menu, path, false) : menu
    }
  }
  
  _renderSubMenu() {
    const { menuTree } = this.state;
    let menu = this._buildMenuTree();
    
    each(menuTree, (menuItem, key) => {
      menu.add(menuTree, key);
    });
    
    function recurseMenu(value, key, isRoot) {
      if (isEmpty(value)) {
        return (
          <li key={key} className="">
            <a href="#">{key}</a>
          </li>
        )
      }
      
      return (
        <li key={key} className="">
          <a href="javascript:">
            <span className="title">{key}</span>
            <span className="arrow" />
          </a>
          <ul key={key} className={!isRoot ? 'sub-menu' : ''}>
            {map(value, (value, key) => recurseMenu(value, key))}
          </ul>
        </li>
      );
    }
    
    return (
      <ul>
        {
          map(menu.get(), (value, key) => {
            return recurseMenu(value, key, true);
          })
        }
      </ul>
    );
  }
  
  render() {
    const { isCartOpen} = this.state;
    
    return (
      <div className="bg-white">
        <div className="container">
          <div className="menu-bar header-sm-height d-flex justify-content-between align-content-between"
               data-pages-init='horizontal-menu' data-hide-extra-li="4">
            <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-close" data-toggle="horizontal-menu">
            </a>
            { this._renderSubMenu() }
            <Dropdown isOpen={isCartOpen} toggle={this._toggleDropdown('isCartOpen')}
                      className="shopping-cart d-flex justify-content-center align-content-center">
              <div id="notification-center" className="clickable"
                   onClick={this._toggleDropdown('isCartOpen')}
                   aria-haspopup={isCartOpen}
                   data-toggle="dropdown">
                Your Cart &nbsp;
                <a href="javascript:" className="fa fa-shopping-cart">
                  <span className="bubble hidden-md-down"/>
                </a>
              </div>
              
              <DropdownMenu>
                <div className="notification-panel">
                  <div className="notification-body scrollable">
                    <div className="notification-item unread clearfix">
                      <div className="heading open">
                        <a href="#" className="text-complete pull-left">
                          <i className="pg-map fs-16 m-r-10"/>
                          <span className="bold">Carrot Design</span>
                          <span className="fs-12 m-l-10">David Nester</span>
                        </a>
                        <div className="pull-right">
                          <div className="thumbnail-wrapper d16 circular inline m-t-15 m-r-10 toggle-more-details">
                            <div><i className="fa fa-angle-left"/>
                            </div>
                          </div>
                          <span className=" time">few sec ago</span>
                        </div>
                        <div className="more-details">
                          <div className="more-details-inner">
                            <h5 className="semi-bold fs-16">“Apple’s Motivation - Innovation <br/>
                              distinguishes between <br/>
                              A leader and a follower.”
                            </h5>
                            <p className="small hint-text">
                              Commented on john Smiths wall.
                              <br/> via pages framework.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                        <a href="#" className="mark"/>
                      </div>
                    </div>
                    
                    <div className="notification-item  clearfix">
                      <div className="heading">
                        <a href="#" className="text-danger pull-left">
                          <i className="fa fa-exclamation-triangle m-r-10"/>
                          <span className="bold">98% Server Load</span>
                          <span className="fs-12 m-l-10">Take Action</span>
                        </a>
                        <span className="pull-right time">2 mins ago</span>
                      </div>
                      
                      <div className="option">
                        <a href="#" className="mark"/>
                      </div>
                    </div>
                    
                    <div className="notification-item  clearfix">
                      <div className="heading">
                        <a href="#" className="text-warning-dark pull-left">
                          <i className="fa fa-exclamation-triangle m-r-10"/>
                          <span className="bold">Warning Notification</span>
                          <span className="fs-12 m-l-10">Buy Now</span>
                        </a>
                        <span className="pull-right time">yesterday</span>
                      </div>
                      
                      <div className="option">
                        <a href="#" className="mark"/>
                      </div>
                    </div>
                    
                    <div className="notification-item unread clearfix">
                      <div className="heading">
                        <div className="thumbnail-wrapper d24 circular b-white m-r-5 b-a b-white m-t-10 m-r-10">
                          <img width="30" height="30" data-src-retina="assets/img/profiles/1x.jpg"
                               data-src="assets/img/profiles/1.jpg" alt="" src="assets/img/profiles/1.jpg"/>
                        </div>
                        <a href="#" className="text-complete pull-left">
                          <span className="bold">Revox Design Labs</span>
                          <span className="fs-12 m-l-10">Owners</span>
                        </a>
                        <span className="pull-right time">11:00pm</span>
                      </div>
                      
                      <div className="option" data-toggle="tooltip" data-placement="left" title="mark as read">
                        <a href="#" className="mark"/>
                      </div>
                    </div>
                  </div>
                  
                  <div className="notification-footer text-center">
                    <a href="#" className="">Read all notifications</a>
                    <a data-toggle="refresh" className="portlet-refresh text-black pull-right" href="#">
                      <i className="pg-refresh_new"/>
                    </a>
                  </div>
                </div>
              </DropdownMenu>
            </Dropdown>
            <a href="#" className="search-link d-flex justify-content-between align-items-center hidden-lg-up"
               data-toggle="search">Tap here to search <i className="pg-search float-right"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopHorizontalMenu;
