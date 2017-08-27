/**
*
* ShopHorizontalMenu
*
*/

import React from 'react';
import { Dropdown, DropdownMenu } from 'reactstrap';

import { initHorizontalMenu } from "../../resources/js/treela";

class ShopHorizontalMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    this.state = {
      isCartOpen: false,
    };
    
    this._toggleDropdown = this._toggleDropdown.bind(this);
  }
  
  componentDidMount() {
    initHorizontalMenu();
  }
  
  static propTypes = {
  
  };
  
  _toggleDropdown(key) {
    return () => {
      this.setState({[key]: !this.state[key]});
    }
  }
  
  render() {
    const { isCartOpen } = this.state;
    
    return (
      <div className="bg-white">
        <div className="container">
          <div className="menu-bar header-sm-height d-flex justify-content-between align-content-between"
               data-pages-init='horizontal-menu' data-hide-extra-li="4">
            <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-close" data-toggle="horizontal-menu">
            </a>
            <ul>
              <li className="active">
                <a href="index.html">Dashboard</a>
              </li>
              <li>
                <a href="social.html"><span className="title">Social</span></a>
              </li>
              <li>
                <a href="javascript:;"><span className="title">Calendar</span>
                  <span className=" arrow"/></a>
                <ul className="">
                  <li className="">
                    <a href="calendar.html">Basic</a>
                  </li>
                  <li className="">
                    <a href="calendar_lang.html">Languages</a>
                  </li>
                  <li className="">
                    <a href="calendar_month.html">Month</a>
                  </li>
                  <li className="">
                    <a href="calendar_lazy.html">Lazy load</a>
                  </li>
                  <li className="">
                    <a href="http://pages.revox.io/dashboard/2.1.0/doc/#calendar" target="_blank">Documentation</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;"><span className="title">UI Elements</span>
                  <span className=" arrow"/></a>
                <ul className="">
                  <li className="">
                    <a href="color.html">Color</a>
                  </li>
                  <li className="">
                    <a href="typography.html">Typography</a>
                  </li>
                  <li className="">
                    <a href="icons.html">Icons</a>
                  </li>
                  <li className="">
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li className="">
                    <a href="notifications.html">Notifications</a>
                  </li>
                  <li className="">
                    <a href="modals.html">Modals</a>
                  </li>
                  <li className="">
                    <a href="progress.html">Progress &amp; Activity</a>
                  </li>
                  <li className="">
                    <a href="tabs_accordian.html">Tabs &amp; Accordions</a>
                  </li>
                  <li className="">
                    <a href="sliders.html">Sliders</a>
                  </li>
                  <li className="">
                    <a href="tree_view.html">Tree View</a>
                  </li>
                  <li className="">
                    <a href="nestables.html">Nestable</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">
                  <span className="title">Forms</span>
                  <span className=" arrow"/>
                </a>
                <ul className="">
                  <li className="">
                    <a href="form_elements.html">Form Elements</a>
                  </li>
                  <li className="">
                    <a href="form_layouts.html">Form Layouts</a>
                  </li>
                  <li className="">
                    <a href="form_wizard.html">Form Wizard</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="builder.html">
                  <span className="title">Builder</span>
                </a>
              </li>
              <li>
                <a href="cards.html">
                  <span className="title">Cards</span>
                </a>
              </li>
              <li>
                <a href="views.html">
                  <span className="title">Views</span>
                </a>
              </li>
              <li>
                <a href="javascript:;"><span className="title">Tables</span>
                  <span className=" arrow"></span></a>
                <ul className="">
                  <li className="">
                    <a href="tables.html">Basic Tables</a>
                  </li>
                  <li className="">
                    <a href="datatables.html">Data Tables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;"><span className="title">Maps</span>
                  <span className=" arrow"></span></a>
                <ul className="">
                  <li className="">
                    <a href="google_map.html">Google Maps</a>
                  </li>
                  <li className="">
                    <a href="vector_map.html">Vector Maps</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="charts.html"><span className="title">Charts</span></a>
              </li>
              <li>
                <a href="javascript:;"><span className="title">Extra</span>
                  <span className=" arrow"></span></a>
                <ul className="">
                  <li className="">
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li className="">
                    <a href="404.html">404 Page</a>
                  </li>
                  <li className="">
                    <a href="500.html">500 Page</a>
                  </li>
                  <li className="">
                    <a href="blank_template.html">Blank Page</a>
                  </li>
                  <li className="">
                    <a href="login.html">Login</a>
                  </li>
                  <li className="">
                    <a href="register.html">Register</a>
                  </li>
                  <li className="">
                    <a href="lock_screen.html">Lockscreen</a>
                  </li>
                  <li className="">
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li className="">
                    <a href="timeline.html">Timeline</a>
                  </li>
                </ul>
              </li>
            </ul>
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
