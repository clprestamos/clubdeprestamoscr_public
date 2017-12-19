import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'react-autobind';

import Routes from './router';

import '../style/index.scss';
import * as service from './service';
import { loginSuccess } from './actions/LoginActionCreators';
import { toggleMenuHideState } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      loginSuccess,
    }, dispatch);
    autobind(this);
  }
  componentWillMount() {
    const userData = service.validateToken();
    const { dispatch } = this.props;
    if (userData) {
      dispatch(loginSuccess(userData));
      dispatch(toggleMenuHideState(true));
    }
  }
  render() {
    return <div><Routes /></div>;
  }
}

export default connect()(App);
