/*
 *
 * AccountPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Particles from 'react-particles-js';
import { createStructuredSelector } from 'reselect';

import { makeSelectUserInfo, makeSelectUserState } from "../App/selectors";

import * as actions from './actions';
import makeSelectAccountPage from './selectors';

export class AccountPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired,
    userState: PropTypes.string.isRequired,
  };
  
  componentWillMount() {
    this.props.dispatch(actions.defaultAction());
  }
  
  render() {
    return (
      <div className="social-wrapper">
        <div className="social " data-pages="social">
          <div className="jumbotron account-cover">
            <div className="particles">
              <Particles height="30vh" width="100vw"/>
            </div>
            <div className="container container-fixed-lg sm-p-l-0 sm-p-r-0">
              <div className="inner">
                <div className="pull-bottom bottom-left m-b-40 sm-p-l-15">
                  <h1 className="text-white no-margin">My <span className="semi-bold">Account</span></h1>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container container-fixed-lg sm-p-l-0 sm-p-r-0">
            <div className="feed">
              <div className="day" data-social="day">
                <div className="card no-border bg-transparent full-width" data-social="item">
                  
                  <div className="container-fluid p-t-30 p-b-30 ">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="container-xs-height">
                          <div className="row-xs-height">
                            <div className="social-user-profile col-xs-height text-center col-top">
                              <div className="thumbnail-wrapper d48 circular bordered b-white">
                                <img alt="Avatar" width="55" height="55"
                                     data-src-retina="assets/img/profiles/avatar_small2x.jpg"
                                     data-src="assets/img/profiles/avatar.jpg" src="assets/img/profiles/avatar.jpg" />
                              </div>
                              <br />
                                <i className="fa fa-check-circle text-success fs-16 m-t-10" />
                            </div>
                            <div className="col-xs-height p-l-20">
                              <h3 className="no-margin p-b-5">David Nester</h3>
                              <p className="no-margin fs-16">is excited about the new pages design framework
                              </p>
                              <p className="hint-text m-t-5 small">San Fransisco Bay | CEO at Pages.inc
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <p className="no-margin fs-16">Hi My Name is David Nester, &amp;
                          heres my new pages user profile page</p>
                        <p className="hint-text m-t-5 small">I love reading people's about page especially
                          those who are in the same industry as me.</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="m-b-5 small">1,435 Mutual Friends</p>
                        <ul className="list-unstyled ">
                          <li className="m-r-10">
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/1x.jpg"
                                   data-src="assets/img/profiles/1.jpg" alt="Profile Image"
                                   src="assets/img/profiles/1.jpg" />
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/2x.jpg"
                                   data-src="assets/img/profiles/2.jpg" alt="Profile Image"
                                   src="assets/img/profiles/2.jpg" />
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/3x.jpg"
                                   data-src="assets/img/profiles/3.jpg" alt="Profile Image"
                                   src="assets/img/profiles/3.jpg"/>
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/4x.jpg"
                                   data-src="assets/img/profiles/4.jpg" alt="Profile Image"
                                   src="assets/img/profiles/4.jpg"/>
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/5x.jpg"
                                   data-src="assets/img/profiles/5.jpg" alt="Profile Image"
                                   src="assets/img/profiles/5.jpg"/>
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/6x.jpg"
                                   data-src="assets/img/profiles/6.jpg" alt="Profile Image"
                                   src="assets/img/profiles/6.jpg"/>
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                              <img width="35" height="35" data-src-retina="assets/img/profiles/7x.jpg"
                                   data-src="assets/img/profiles/7.jpg" alt="Profile Image"
                                   src="assets/img/profiles/7.jpg"/>
                            </div>
                          </li>
                          <li>
                            <div className="thumbnail-wrapper d32 circular b-white">
                              <div className="bg-master text-center text-white"><span>+34</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <br/>
                          <p className="m-t-5 small">More friends</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  accountPage: makeSelectAccountPage(),
  userInfo: makeSelectUserInfo(),
  userState: makeSelectUserState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
