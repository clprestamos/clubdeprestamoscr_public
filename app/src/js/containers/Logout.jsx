import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';
import Logo from '../components/Header/Logo';

// import * as service from '../service';

import * as LoginActionCreators from '../actions/LoginActionCreators';
import * as MainActionCreators from '../actions/';

class Logout extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      LoginActionCreators,
      MainActionCreators,
    }, dispatch);
    this.state = {
      isAuth: true,
      from: props.location.state && props.location.state.from,
    };
    autobind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(MainActionCreators.toggleMenuHideState(true));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authData.data === null) {
      this.setState({
        isAuth: false,
      });
    }
  }
  logout() {
    const { dispatch } = this.props;
    dispatch(LoginActionCreators.logout());
    dispatch(MainActionCreators.toggleMenuState(true));
    dispatch(MainActionCreators.toggleMenuHideState(false));
  }
  cancel() {
    this.props.history.goBack();
  }
  render() {
    const logoutComponent = this.state.isAuth ? (
      <div className="logout">
        <Container fluid>
          <Logo />
          <div className="logout-box">
            <div className="box">
              <div className="divider" />
              <h3>Cerrar sesión</h3>
              <p>¿Desea cerrar su sesión?</p>
              <button className="btn default" onClick={this.logout}>Cerrar</button>
              <Link to={this.state.from} className="cancel">Cancelar</Link>
            </div>
          </div>
        </Container>
      </div>
    ) : (
      <Redirect to="/" />
    );
    return logoutComponent;
  }
}

const mapStateToProps = state => ({
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Logout));
