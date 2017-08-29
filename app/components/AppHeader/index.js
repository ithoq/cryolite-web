/**
 *
 * AppHeader
 *
 */
import React, { PropTypes } from 'react';
import { Dropdown, DropdownMenu } from 'reactstrap';
import { Modal, ModalBody } from 'reactstrap';
import Avatar from 'react-avatar';

import * as appConstants from '../../containers/App/constants';
import * as constants from './constants';

import ShopHorizontalMenu from '../ShopHorizontalMenu';
import Navigator from '../Navigator';
import A from '../A';

import { staticImages } from "../../utils/importAll";
import { getCookie, deleteCookie } from "../../utils/cookies";

import config from 'appConfig';

class AppHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    
    this.state = {
      isProfileOpen: false,
      isLoginPanelOpen: false,
      isRegisterPanelOpen: false,
      loginForm: {
        username: '',
        password: ''
      }
    };
    
    this._toggleDropdown = this._toggleDropdown.bind(this);
    this._toggleModal = this._toggleModal.bind(this);
    this._renderUserPanel = this._renderUserPanel.bind(this);
    this._renderLoginPanelModal = this._renderLoginPanelModal.bind(this);
    this._onLoginClick = this._onLoginClick.bind(this);
    this._renderSubMenu = this._renderSubMenu.bind(this);
    this._logout = this._logout.bind(this);
  }
  
  static propTypes = {
    userState: PropTypes.string.isRequired,
    onLoginClick: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    menuType: PropTypes.string.isRequired,
    menu: PropTypes.object,
  };
  
  _toggleDropdown(key) {
    return () => {
      this.setState({[key]: !this.state[key]});
    }
  }
  
  _toggleModal(key) {
    return () => {
      this.setState({[key]: !this.state[key]});
    }
  }
  
  _onLoginClick(mode) {
    return () => {
      this.props.onLoginClick(mode, this.state.loginForm);
    };
  }
  
  _logout() {
    const access_token = getCookie('access_token', true);
    ['roles', 'access_token', 'userId'].forEach(key => deleteCookie(key));
    window.location.href = `${config.hostUrl}/auth/logout/${access_token}`;
  }
  
  _renderUserPanel() {
    const { userState, user } = this.props;
    const { isProfileOpen } = this.state;
    
    if ( userState === appConstants.USER_STATE_NOT_LOGGED_IN ) {
      return (
        <div className="d-flex align-items-center">
          <div className="pull-left p-r-10 fs-14 font-heading text-white">
            <span className="clickable" onClick={this._toggleModal('isLoginPanelOpen')}>
              Login
            </span> &nbsp;
            <span className="clickable" onClick={this._toggleModal('isRegisterPanelOpen')}>
              Register
            </span>
          </div>
        </div>
      )
    }
    
    if (userState === appConstants.USER_STATE_LOGGED_IN) {
      const userIdentity = user.get('identities').get(0);
      
      return (
        <div className="d-flex align-items-center">
          <div className="pull-left p-r-10 fs-14 font-heading hidden-md-down text-white">
            <span className="semi-bold">{userIdentity.getIn(['profile', 'name', 'givenName'])}</span>&nbsp;
            <span className="">{userIdentity.getIn(['profile', 'name', 'familyName'])}</span>
          </div>
          <Dropdown isOpen={isProfileOpen} toggle={this._toggleDropdown('isProfileOpen')} className="pull-right">
            <button className="profile-dropdown-toggle clickable" type="button"
                    onClick={this._toggleDropdown('isProfileOpen')}
                    data-toggle="dropdown"
                    aria-haspopup={isProfileOpen} aria-expanded="false">
                <span className="thumbnail-wrapper d32 circular inline sm-m-r-5">
                  <Avatar facebookId={userIdentity.getIn(['profile', 'id'])} size={32} />
                </span>
            </button>
            
            <DropdownMenu className="dropdown-menu-right profile-dropdown">
              <A href={['shop', 'account']} className="dropdown-item clickable"
                 onClicked={this._toggleDropdown('isProfileOpen')}>
                <i className="pg-settings_small"/> My Account
              </A>
              <a href="#" className="dropdown-item"><i className="pg-outdent"/> Feedback</a>
              <a href="#" className="dropdown-item"><i className="pg-signals"/> Help</a>
              <a className="clearfix bg-master-lighter dropdown-item clickable" onClick={this._logout}>
                <span className="pull-left">Logout</span>
                <span className="pull-right"><i className="pg-power"/></span>
              </a>
            </DropdownMenu>
          </Dropdown>
        </div>
      )
    }
  }
  
  _renderLoginPanelModal() {
    const { isLoginPanelOpen } = this.state;
    
    return (
      <Modal modalClassName="slide-right" isOpen={isLoginPanelOpen} size="sm"
             toggle={this._toggleModal('isLoginPanelOpen')}>
        <ModalBody>
          <button type="button" className="close" data-dismiss="modal"
                  aria-hidden="true" onClick={this._toggleModal('isLoginPanelOpen')}>
            <i className="pg-close fs-14" />
          </button>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <h5 className="text-primary">
                  Login to your account
                </h5>
                <br />
                <div className="form-group form-group-default required">
                  <label>Username</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group form-group-default required">
                  <label>Password</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="col justify-content-center">
                <button type="button" className="btn btn-primary btn-block"
                        onClick={this._onLoginClick('local')}>Login</button>
                <button type="button" className="btn btn-default btn-block" data-dismiss="modal"
                        onClick={this._toggleModal('isLoginPanelOpen')}>Cancel</button>
                <br/>
                
                <div style={{textAlign: 'center'}}>
                  <span className="bold text-primary">OR</span>
                </div>
                
                <br/>
                
                <button className="btn btn-block btn-info" type="button" onClick={this._onLoginClick('facebook')}>
                  <span className="pull-left"><i className="fa fa-facebook" /></span>
                  <span className="bold">Login with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    )
  }
  
  _renderSubMenu() {
    const { menuType, menu } = this.props;
    
    if (menuType === constants.MENU_TYPE_SHOP) {
      return (<ShopHorizontalMenu menu={menu} />)
    }
    
    return null; //TODO add admin menu
  }
  
  render() {
    return (
      <div className="header p-r-0 bg-primary">
        <div className="header-inner header-md-height">
          <a href="#" className="btn-link toggle-sidebar hidden-lg-up pg pg-menu text-white"
             data-toggle="horizontal-menu"/>
          <div className="">
            <div className="brand inline no-border hidden-xs-down">
              <Navigator href={['shop', 'home']}>
                <img src={staticImages['root']['logo_white.png']} alt="logo"
                     data-src={staticImages['root']['logo_white.png']}
                     data-src-retina={staticImages['root']['logo_white_2x.png']} width="78" height="22"/>
              </Navigator>
            </div>
            
            <a href="#" className="search-link hidden-md-down" data-toggle="search">
              <i className="pg-search"/>Type anywhere to <span className="bold">search</span>
            </a>
          </div>
          
          {this._renderUserPanel()}
        </div>
        
        { this._renderLoginPanelModal() }
        
        { this._renderSubMenu() }
      </div>
    );
  }
}

export default AppHeader;
