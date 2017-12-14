import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import InputField from '../../InputField';
import Button from '../../Button';
import Recaptcha from '../../Recaptcha';

class Step3 extends Component {
  constructor(props) {
    super(props);
    const { onChangeField, clientInfo } = props;
    this.state = {
      isDisabled: true,
      password: '',
      inputFields: [{
        id: 1,
        placeholder: 'Password *',
        hasError: false,
        errorMessage: 'Campo requerido. Mínimo 8 caracteres',
        customClass: 'password',
        inputType: 'password',
        onChangeField: (e) => {
          this.setState({
            password: e.value,
          });
        },
        name: 'confirm',
        defaultValue: clientInfo.password,
        validation: (value) => {
          if (value === '') return true;
          if (/^[A-Za-z\d\s@$!%*?&.()-_]{8,16}$/.test(value)) return false;
          return true;
        },
      },
      {
        id: 2,
        placeholder: 'Confirmar password *',
        hasError: false,
        errorMessage: 'Campo requerido',
        customClass: 'password',
        inputType: 'password',
        onChangeField,
        name: 'password',
        validation: (value) => {
          if (value === '') return true;
          if (value === this.state.password) return false;
          return true;
        },
      }],
    };
    autobind(this);
  }
  componentWillMount() {
    if (this.props.clientInfo.password !== '' || this.props.captcha !== '') {
      this.setButtonState(true);
    }
  }
  componentDidMount() {
    if (this.props.isComplete) this.setButtonState(false);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.clientInfo.password !== '' && nextProps.captcha !== '') {
      this.setButtonState(false);
    }
  }
  setButtonState(isDisabled) {
    this.setState({
      isDisabled,
    });
  }
  render() {
    return (
      <div className="client-subscription step1">
        <Form>
          {
            this.state.inputFields.map(inputField => (
              <Form.Field key={inputField.id} className={inputField.customClass ? inputField.customClass : ''}>
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
          <Form.Field className="recaptcha">
            <Recaptcha />
          </Form.Field>
          <Button
            onClick={this.props.btnOnClick}
            text={this.props.btnText}
            buttonType={this.props.btnType}
            active={this.state.isDisabled}
          />
          <span>Campos obligatorios **</span>
        </Form>
      </div>
    );
  }
}

Step3.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  isComplete: PropTypes.bool.isRequired,
  captcha: PropTypes.string.isRequired,
};

export default Step3;
