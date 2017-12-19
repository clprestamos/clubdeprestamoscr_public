import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';
import Logo from '../components/Header/Logo';

// import * as service from '../service';

import * as LoginActionCreators from '../actions/LoginActionCreators';
import * as MainActionCreators from '../actions/';

class Login extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      LoginActionCreators,
      MainActionCreators,
    }, dispatch);
    this.state = {
      isClient: false,
      isInvestor: false,
    };
    autobind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(MainActionCreators.toggleMenuHideState(true));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authData.data !== null) {
      if (nextProps.authData.data.roleId === 'client') {
        this.setState({
          isClient: true,
          isInvestor: false,
        });
      } else if (nextProps.authData.data.roleId === 'investor') {
        this.setState({
          isClient: false,
          isInvestor: true,
        });
      }
    } else {
      this.setState({
        isClient: false,
        isInvestor: false,
      });
    }
  }
  login() {
    const { dispatch } = this.props;
    dispatch(LoginActionCreators.login());
  }
  render() {
    let pathname = '/';
    if (this.props.authData.isAuth && this.state.isClient) {
      pathname = '/cliente/dashboard';
    } else if (this.props.authData.isAuth && this.state.isInvestor) {
      pathname = '/cliente/dashboard';
    }
    const { from } = this.props.location.state || { from: { pathname } };
    const { isAuth } = this.props.authData;

    if (isAuth) {
      return <Redirect to={from} />;
    }
    return (
      <div className="login">
        <Container fluid>
          <Logo />
          <div className="login-box">
            <div className="box">
              <div className="divider" />
              <h3>Ingreso de usuario</h3>
              <p>Ingrese al sistema con su correo y contraseña.</p>
              <button className="btn default" onClick={this.login}>Ingresar</button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Login));
