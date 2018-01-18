import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form, Dropdown, Label, Icon } from 'semantic-ui-react';

import * as utils from '../../../utils';

import InputField from '../../InputField';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    };
    autobind(this);
  }
  onChangeProvinces(province) {
    this.props.getCantons(province);
  }
  onChangeCantons(canton) {
    this.props.getDistricts(canton);
  }
  onChangeDistricts() {
    this.props.getZipCode();
  }
  getDropDownItems(itemsArray) {
    return _.map(itemsArray, item => ({ text: item, value: item }));
  }
  handleSubmit() {
    const { clientInfo } = this.props;
    if (
      !this.state.hasErrors &&
      clientInfo.term &&
      clientInfo.reason &&
      clientInfo.amount &&
      clientInfo.province &&
      clientInfo.canton &&
      clientInfo.district &&
      clientInfo.zipCode
    ) {
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
    const {
      term,
      reason,
      amount,
      province,
      canton,
      district,
      zipCode,
    } = clientInfo;
    const provinces = utils.getDropDownItems(this.props.provinces);
    const cantons = utils.getDropDownItems(this.props.cantons);
    const districts = utils.getDropDownItems(this.props.districts);
    const terms = utils.getTerms();
    const reasons = utils.getReasons();
    const amounts = utils.getAmounts();
    return (
      <div className="client-subscription Step2">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field className="address">
            <InputField
              placeholder="Dirección casa de habitación *"
              validation={value => this.validation({ value, type: 'text' })}
              errorMessage="Campo requerido."
              onChangeField={onChangeField}
              name="address"
              isRequired
              defaultValue={clientInfo.address}
            />
          </Form.Field>
          <Form.Field className="address-details">
            <Dropdown
              placeholder="Provincia *"
              selection
              fluid
              compact
              search
              options={provinces}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'province', value });
                this.onChangeProvinces(value);
              }}
              defaultValue={province}
            />
            <Dropdown
              placeholder="Cantón *"
              selection
              fluid
              compact
              search
              options={cantons}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'canton', value });
                this.onChangeCantons(value);
              }}
              defaultValue={canton}
            />
            <Dropdown
              placeholder="Distrito *"
              selection
              fluid
              compact
              search
              options={districts}
              onChange={(e, { value }) => {
                this.props.onChangeField({ field: 'district', value });
                this.onChangeDistricts(value);
              }}
              defaultValue={district}
            />
          </Form.Field>
          <Form.Field className="zipCode">
            <Label>
              <Icon name="mail" />
              {zipCode}
              <Label.Detail>Código Postal</Label.Detail>
            </Label>
          </Form.Field>
          <Form.Field className="relativePhone">
            <InputField
              placeholder="Teléfono de un familiar *"
              validation={value => this.validation({ value, type: 'phone' })}
              errorMessage="Campo requerido. Formato de teléfono ####-#### ó ########."
              inputType="tel"
              onChangeField={onChangeField}
              name="relativePhone"
              isRequired
              defaultValue={clientInfo.relativePhone}
            />
          </Form.Field>
          <Form.Field className="cellphone">
            <InputField
              placeholder="Celular *"
              validation={value => this.validation({ value, type: 'phone' })}
              errorMessage="Campo requerido. Formato de teléfono ####-#### ó ########."
              inputType="tel"
              onChangeField={onChangeField}
              name="cellphone"
              isRequired
              defaultValue={clientInfo.cellphone}
            />
          </Form.Field>
          <Form.Field className="disclaimer">
            <p>* Una vez creado el usuario la siguiente información no podrá ser modificada:</p>
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder="Monto *"
              search
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
              search
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
              search
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
          <button type="submit" className="btn default">{this.props.btnText}</button>
          <span>Campos obligatorios **</span>
        </Form>
      </div>
    );
  }
}

Step2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  getCantons: PropTypes.func.isRequired,
  getDistricts: PropTypes.func.isRequired,
  getZipCode: PropTypes.func.isRequired,
  provinces: PropTypes.array.isRequired,
  cantons: PropTypes.array,
  districts: PropTypes.array,
};

export default Step2;
