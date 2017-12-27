import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Container, Form } from 'semantic-ui-react';

import Logo from '../components/Header/Logo';
import InputField from '../components/InputField';
import Modal from '../components/Modal';
import Message from '../components/Message';
import ForgotPassword from './ForgotPassword';

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
      isModalOpen: false,
      isMessageVisible: false,
      hasErrors: false,
    };
    autobind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(MainActionCreators.toggleMenuHideState(true));
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isForgotPasswordSuccess && !this.state.isMessageVisible) {
      this.setState({
        isMessageVisible: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            isMessageVisible: false,
          });
        }, 10000);
      });
    }
    if (nextProps.authData.data !== null) {
      const isClient = nextProps.authData.data.roleId === 1;
      const isInvestor = nextProps.authData.data.roleId === 2;
      this.setState({
        isClient,
        isInvestor,
      });
    } else {
      this.setState({
        isClient: false,
        isInvestor: false,
      });
    }
  }
  onChangeField(e) {
    this.setState({
      [e.field]: e.value,
    });
  }
  login() {
    if (!this.state.hasErrors) {
      const { dispatch } = this.props;
      const { username, password } = this.state;
      dispatch(LoginActionCreators.login({ username, password }));
    }
  }
  handleModalOpen() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleMessage() {
    this.setState({
      isMessageVisible: false,
    });
  }
  validation({ type, value }) {
    let result = true;
    if (value === '') result = true;
    if (utils.validateExp({ type, value })) result = false;
    this.setState({
      hasErrors: result,
    });
    return result;
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
        name: 'username',
        defaultValue: this.state.username,
        isRequired: true,
        validation: value => this.validation({ value, type: 'email' }),
      },
      {
        id: 2,
        placeholder: 'Contraseña',
        hasError: false,
        errorMessage: 'Mínimo 8 caracteres, Máximo 16 caracteres',
        inputType: 'password',
        onChangeField: this.onChangeField,
        name: 'password',
        isRequired: true,
        defaultValue: this.state.password,
        validation: value => this.validation({ value, type: 'password' }),
      },
    ];
    const message = this.props.isForgotPasswordSuccess && this.state.isMessageVisible ? (
      <Message
        positive
        icon="mail"
        header="Mensaje enviado"
        content="Un correo electrónico ha sido enviado a su cuenta, con un link para la restauración de su contraseña. Revise su bandeja de entrada o inbox, sino bien revise su bandeja de spam."
        onDismiss={this.handleMessage}
      />
    ) : '';
    const errorMessage = this.props.authData.error ? (
      <Message
        negative
        header="Error de autenticación"
        content="Verifique correo o contraseña."
        size="mini"
      />
    ) : '';
    return (
      <div className="login">
        <Container fluid>
          {message}
          <Logo />
          <div className="login-box">
            <div className="box">
              <div className="divider" />
              <h3>Ingreso de usuario</h3>
              <p>Digite su correo y contraseña ingresadas al sistema.</p>
              <Form onSubmit={this.login}>
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
                        isRequired={inputField.isRequired}
                      />
                    </Form.Field>
                  ))
                }
                {errorMessage}
                <button
                  type="submit"
                  className="btn default"
                  style={this.props.authData.error ? { marginTop: '5px' } : {}}
                >
                  Ingresar
                </button>
              </Form>
              <Modal
                className="modal"
                trigger={<button className="forgot-password" onClick={this.handleModalOpen}>¿Olvidaste la contraseña?</button>}
                isOpen={this.state.isModalOpen}
                onClose={this.handleModalOpen}
                component={<ForgotPassword closeSelf={this.handleModalOpen} />}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user,
  isForgotPasswordSuccess: state.forgotPassword.isSuccess,
});

export default withRouter(connect(mapStateToProps)(Login));
