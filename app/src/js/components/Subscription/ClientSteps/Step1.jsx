import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import * as utils from '../../../utils';

import InputField from '../../InputField';
import Button from '../../Button';

class Step1 extends Component {
  constructor(props) {
    super(props);
    const { onChangeField, clientInfo } = props;
    this.state = {
      isDisabled: true,
      inputFields: [{
        id: 1,
        placeholder: 'Nombre *',
        errorMessage: 'Campo requerido, digite solamente caracteres',
        customClass: 'name',
        onChangeField,
        name: 'name',
        defaultValue: clientInfo.name,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'text', value })) return false;
          return true;
        },
      },
      {
        id: 2,
        placeholder: 'Apellido *',
        errorMessage: 'Campo requerido, digite solamente caracteres',
        onChangeField,
        name: 'lastName',
        defaultValue: clientInfo.lastName,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'text', value })) return false;
          return true;
        },
      },
      {
        id: 3,
        placeholder: 'Cédula *',
        errorMessage: 'Campo requerido. Formato de cédula 0-0000-0000',
        onChangeField,
        name: 'identification',
        defaultValue: clientInfo.identification,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'identification', value })) return false;
          return true;
        },
      },
      {
        id: 4,
        placeholder: 'Teléfono *',
        errorMessage: 'Campo requerido. Formato de teléfono 0000-0000',
        inputType: 'tel',
        onChangeField,
        name: 'phone',
        defaultValue: clientInfo.phone,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'phone', value })) return false;
          return true;
        },
      },
      {
        id: 5,
        placeholder: 'Teléfono de referencia *',
        errorMessage: 'Campo requerido. Formato de teléfono 0000-0000',
        inputType: 'tel',
        onChangeField,
        name: 'referencePhone',
        defaultValue: clientInfo.referencePhone,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'phone', value })) return false;
          return true;
        },
      },
      {
        id: 6,
        placeholder: 'Email *',
        errorMessage: 'Campo requerido. Formato de email inválido.',
        inputType: 'email',
        customClass: 'email',
        onChangeField,
        name: 'email',
        defaultValue: clientInfo.email,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'email', value })) return false;
          return true;
        },
      }],
    };
    autobind(this);
  }
  componentWillMount() {
    const { clientInfo } = this.props;
    const {
      name,
      lastName,
      identification,
      phone,
      referencePhone,
      email,
    } = clientInfo;
    if (
      name !== '' ||
      lastName !== '' ||
      identification !== '' ||
      phone !== '' ||
      referencePhone !== '' ||
      email !== ''
    ) {
      this.setButtonState(true);
    }
  }
  componentDidMount() {
    if (this.props.isComplete) this.setButtonState(false);
  }
  componentWillReceiveProps(nextProps) {
    const { clientInfo } = nextProps;
    const {
      name,
      lastName,
      identification,
      phone,
      referencePhone,
      email,
    } = clientInfo;
    if (
      !this.state.inputFields[0].validation(name) &&
      !this.state.inputFields[1].validation(lastName) &&
      !this.state.inputFields[1].validation(identification) &&
      !this.state.inputFields[1].validation(phone) &&
      !this.state.inputFields[1].validation(referencePhone) &&
      !this.state.inputFields[1].validation(email)
    ) {
      this.setButtonState(true);
    } else if (
      name === '' ||
      lastName === '' ||
      identification === '' ||
      phone === '' ||
      referencePhone === '' ||
      email === ''
    ) {
      this.setButtonState(true);
    } else {
      this.setButtonState(false);
    }
  }
  setButtonState(isDisabled) {
    this.setState({
      isDisabled,
    });
  }
  handleButtonClick() {
    const { clientInfo } = this.props;
    const {
      name,
      lastName,
      identification,
      phone,
      referencePhone,
      email,
    } = clientInfo;
    if (
      name !== '' ||
      lastName !== '' ||
      identification !== '' ||
      phone !== '' ||
      referencePhone !== '' ||
      email !== ''
    ) {
      this.props.btnOnClick();
    }
  }
  render() {
    const { inputFields } = this.state;
    return (
      <div className="client-subscription step1">
        <Form>
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
                  defaultValue={inputField.defaultValue}
                />
              </Form.Field>
            ))
          }
          <Button
            onClick={this.handleButtonClick}
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

Step1.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Step1;
