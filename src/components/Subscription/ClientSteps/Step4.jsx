import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

import * as utils from '../../../utils';

import InputField from '../../InputField';
import Recaptcha from '../../Recaptcha';

import * as RegisterClient from '../../../actions/RegisterClient';

class Step4 extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      RegisterClient,
    }, dispatch);
    this.state = {
      hasErrors: true,
      password: '',
    };
    autobind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      hasErrors: !(nextProps.clientInfo.password !== '' && nextProps.captcha !== ''),
    });
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(RegisterClient.clearErrorSubscription());
  }
  handleSubmit() {
    if (!this.state.hasErrors && this.props.captcha) {
      this.props.handleSubmit();
    }
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
    const { onChangeField, clientInfo } = this.props;
    const inputFields = [
      {
        id: 1,
        placeholder: 'Password *',
        errorMessage: 'Campo requerido. Mínimo 8 caracteres, Máximo 16 caracteres.',
        customClass: 'password',
        inputType: 'password',
        onChangeField: (e) => {
          this.setState({
            password: e.value,
          });
        },
        name: 'password',
        isRequired: true,
        defaultValue: clientInfo.password,
        validation: value => this.validation({ value, type: 'password' }),
      },
      {
        id: 2,
        placeholder: 'Confirmar password *',
        hasError: false,
        errorMessage: 'Los campos no coinciden.',
        customClass: 'password',
        inputType: 'password',
        onChangeField,
        name: 'password',
        isRequired: true,
        validation: (value) => {
          if (value !== this.state.password) {
            this.setState({
              hasErrors: true,
            });
            return true;
          }
          return this.validation({ value, type: 'password' });
        },
      },
    ];
    const { clientSubscriptionError } = this.props;
    return (
      <div className="client-subscription step4">
        <Form onSubmit={this.handleSubmit} error={clientSubscriptionError && clientSubscriptionError === 409}>
          {
            inputFields.map(inputField => (
              <Form.Field key={inputField.id} className={inputField.customClass ? inputField.customClass : ''}>
                <InputField
                  placeholder={inputField.placeholder}
                  validation={inputField.validation}
                  errorMessage={inputField.errorMessage}
                  inputType={inputField.inputType}
                  onChangeField={inputField.onChangeField}
                  name={inputField.name}
                  isRequired={inputField.isRequired}
                  defaultValue={inputField.defaultValue}
                />
              </Form.Field>
            ))
          }
          <Form.Field className="recaptcha">
            <Recaptcha />
          </Form.Field>
          <button type="submit" className="btn default">{this.props.btnText}</button>
          <span>Campos obligatorios **</span>
          <Message
            error
            header="Usuario ya existe"
            content="Debe registrar otro usuario en nuestro sistema, ya existe el elegido."
          />
        </Form>
      </div>
    );
  }
}

Step4.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  captcha: PropTypes.string.isRequired,
  clientSubscriptionError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default connect()(Step4);
