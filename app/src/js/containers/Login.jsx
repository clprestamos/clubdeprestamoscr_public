import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Container, Form } from 'semantic-ui-react';

import Logo from '../components/Header/Logo';
import InputField from '../components/InputField';

import * as utils from '../utils';

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
      username: '',
      password: '',
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
  onChangeField(e) {
    if (e.field === 'email') {
      this.setState({
        username: e.value,
      });
    } else if (e.field === 'password') {
      this.setState({
        password: e.value,
      });
    }
  }
  login() {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    dispatch(LoginActionCreators.login({ username, password }));
  }
  render() {
    let pathname = '/';
    if (this.props.authData.isAuth && this.state.isClient) {
      pathname = '/cliente/dashboard';
    } else if (this.props.authData.isAuth && this.state.isInvestor) {
      pathname = '/inversionista/dashboard';
    }
    const { from } = this.props.location.state || { from: { pathname } };
    const { isAuth } = this.props.authData;

    if (isAuth) {
      return <Redirect to={from} />;
    }

    const inputFields = [
      {
        id: 1,
        placeholder: 'Email',
        errorMessage: 'Ingrese un email válido.',
        onChangeField: this.onChangeField,
        name: 'email',
        defaultValue: this.state.email,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'email', value })) return false;
          return true;
        },
      },
      {
        id: 2,
        placeholder: 'Contraseña',
        hasError: false,
        errorMessage: 'Mínimo 8 caracteres, Máximo 16 caracteres',
        inputType: 'password',
        onChangeField: this.onChangeField,
        name: 'password',
        defaultValue: this.state.password,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'password', value })) return false;
          return true;
        },
      },
    ];
    return (
      <div className="login">
        <Container fluid>
          <Logo />
          <div className="login-box">
            <div className="box">
              <div className="divider" />
              <h3>Ingreso de usuario</h3>
              <p>Digite su correo y contraseña ingresadas al sistema.</p>
              <Form>
                {
                  inputFields.map(inputField => (
                    <Form.Field key={inputField.id}>
                      <InputField
                        placeholder={inputField.placeholder}
                        validation={inputField.validation}
                        errorMessage={inputField.errorMessage}
                        inputType={inputField.inputType}
                        onChangeField={inputField.onChangeField}
                        name={inputField.name}
                        defaultValue={inputField.defaultValue}
                      />
                    </Form.Field>
                  ))
                }
              </Form>
              <button className="btn default" onClick={this.login}>Ingresar</button>
              <Link to="/contrasena" className="forgot-password">¿Olvidaste la contraseña?</Link>
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
