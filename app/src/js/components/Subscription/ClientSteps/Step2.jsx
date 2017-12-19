import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form, Dropdown } from 'semantic-ui-react';

import * as utils from '../../../utils';

import InputField from '../../InputField';
import Button from '../../Button';

class Step2 extends Component {
  constructor(props) {
    super(props);
    const { onChangeField, clientInfo } = props;
    this.state = {
      isDisabled: true,
      inputFields: [{
        id: 1,
        placeholder: 'Dirección casa de habitación *',
        errorMessage: 'Campo requerido',
        customClass: 'address',
        onChangeField,
        name: 'address',
        defaultValue: clientInfo.address,
        validation: (value) => {
          if (value === '') return true;
          return false;
        },
      },
      {
        id: 2,
        placeholder: 'Teléfono de un familiar *',
        hasError: false,
        errorMessage: 'Campo requerido. Formato de teléfono 0000-00-00',
        customClass: 'familyPhone',
        inputType: 'tel',
        onChangeField,
        name: 'familyPhone',
        defaultValue: clientInfo.familyPhone,
        validation: (value) => {
          if (value === '') return true;
          if (utils.validateExp({ type: 'phone', value })) return false;
          return true;
        },
      }],
    };
    autobind(this);
  }
  componentWillMount() {
    const { clientInfo } = this.props;
    const {
      address,
      familyPhone,
      amount,
      term,
      reason,
    } = clientInfo;
    if (
      address !== '' ||
      familyPhone !== '' ||
      amount !== '' ||
      term !== '' ||
      reason !== ''
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
      address,
      familyPhone,
      amount,
      term,
      reason,
    } = clientInfo;
    if (
      address !== '' &&
      familyPhone !== '' &&
      amount !== '' &&
      term !== '' &&
      reason !== ''
    ) {
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
      address,
      familyPhone,
      term,
      reason,
      amount,
    } = clientInfo;
    if (
      address !== '' ||
      familyPhone !== '' ||
      term !== '' ||
      reason !== '' ||
      amount !== ''
    ) {
      this.props.btnOnClick();
    }
  }
  render() {
    const { clientInfo } = this.props;
    const {
      term,
      reason,
      amount,
    } = clientInfo;
    const terms = [
      { text: '12 meses', value: '12-meses' },
      { text: '18 meses', value: '18-meses' },
      { text: '24 meses', value: '24-meses' },
      { text: '30 meses', value: '30-meses' },
      { text: '36 meses', value: '36-meses' },
    ];
    const reasons = [
      { text: 'Deuda tarjeta de crédito', value: 'Deuda-tarjeta-de-credito' },
      { text: 'Deudas almacén', value: 'Deudas-almacen' },
      { text: 'Préstamos personales', value: 'Prestamos-personales' },
      { text: 'Viajes', value: 'Viajes' },
      { text: 'Compra de vehículos', value: 'Compra-de-vehiculos' },
    ];
    const amounts = [
      { text: '₡ 100 000', value: 100000 },
      { text: '₡ 200 000', value: 200000 },
      { text: '₡ 300 000', value: 300000 },
      { text: '₡ 400 000', value: 400000 },
      { text: '₡ 500 000', value: 500000 },
      { text: '₡ 600 000', value: 600000 },
      { text: '₡ 700 000', value: 700000 },
      { text: '₡ 800 000', value: 800000 },
      { text: '₡ 900 000', value: 900000 },
      { text: '₡ 1 000 000', value: 1000000 },
      { text: '₡ 1 100 000', value: 1100000 },
      { text: '₡ 1 200 000', value: 1200000 },
      { text: '₡ 1 300 000', value: 1300000 },
      { text: '₡ 1 400 000', value: 1400000 },
      { text: '₡ 1 500 000', value: 1500000 },
      { text: '₡ 1 600 000', value: 1600000 },
      { text: '₡ 1 700 000', value: 1700000 },
      { text: '₡ 1 800 000', value: 1800000 },
      { text: '₡ 1 900 000', value: 1900000 },
      { text: '₡ 2 000 000', value: 2000000 },
      { text: '₡ 2 100 000', value: 2100000 },
      { text: '₡ 2 200 000', value: 2200000 },
      { text: '₡ 2 300 000', value: 2300000 },
      { text: '₡ 2 400 000', value: 2400000 },
      { text: '₡ 2 500 000', value: 2500000 },
      { text: '₡ 2 600 000', value: 2600000 },
      { text: '₡ 2 700 000', value: 2700000 },
      { text: '₡ 2 800 000', value: 2800000 },
      { text: '₡ 2 900 000', value: 2900000 },
      { text: '₡ 3 000 000', value: 3000000 },
      { text: '₡ 3 100 000', value: 3100000 },
      { text: '₡ 3 200 000', value: 3200000 },
      { text: '₡ 3 300 000', value: 3300000 },
      { text: '₡ 3 400 000', value: 3400000 },
      { text: '₡ 3 500 000', value: 3500000 },
      { text: '₡ 3 600 000', value: 3600000 },
      { text: '₡ 3 700 000', value: 3700000 },
      { text: '₡ 3 800 000', value: 3800000 },
      { text: '₡ 3 900 000', value: 3900000 },
      { text: '₡ 4 000 000', value: 4000000 },
      { text: '₡ 4 100 000', value: 4100000 },
      { text: '₡ 4 200 000', value: 4200000 },
      { text: '₡ 4 300 000', value: 4300000 },
      { text: '₡ 4 400 000', value: 4400000 },
      { text: '₡ 4 500 000', value: 4500000 },
      { text: '₡ 4 600 000', value: 4600000 },
      { text: '₡ 4 700 000', value: 4700000 },
      { text: '₡ 4 800 000', value: 4800000 },
      { text: '₡ 4 900 000', value: 4900000 },
      { text: '₡ 5 000 000', value: 5000000 },
    ];
    const { inputFields } = this.state;
    return (
      <div className="client-subscription Step2">
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
          <Form.Field>
            <Dropdown
              placeholder="Monto *"
              selection
              fluid
              compact
              options={amounts}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'amount', value });
              }}
              defaultValue={amount}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Plazo *"
              selection
              fluid
              compact
              options={terms}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'term', value });
              }}
              defaultValue={term}
            />
          </Form.Field>
          <Form.Field className="reason">
            <Dropdown
              placeholder="Motivo *"
              selection
              fluid
              compact
              options={reasons}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'reason', value });
              }}
              defaultValue={reason}
            />
          </Form.Field>
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

Step2.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Step2;
