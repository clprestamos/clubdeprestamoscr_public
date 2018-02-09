import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import * as utils from '../../../utils';

import InputField from '../../InputField';

class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
    };
    autobind(this);
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
  handleSubmit() {
    if (!this.state.hasErrors) {
      this.props.handleSubmit();
    }
  }
  render() {
    const { onChangeField, clientInfo } = this.props;
    return (
      <div className="client-subscription step1">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Field className="client-name">
              <InputField
                placeholder="Nombre *"
                validation={value => this.validation({ value, type: 'text' })}
                errorMessage="Campo requerido, digite solamente caracteres"
                inputType="text"
                onChangeField={onChangeField}
                name="name"
                defaultValue={clientInfo.name}
                isRequired
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field className="client-lastname">
              <InputField
                placeholder="Apellidos *"
                validation={value => this.validation({ value, type: 'text' })}
                errorMessage="Campo requerido, digite solamente caracteres"
                inputType="text"
                onChangeField={onChangeField}
                name="lastName"
                defaultValue={clientInfo.lastName}
                isRequired
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <InputField
                placeholder="Cédula *"
                validation={value => this.validation({ value, type: 'identification' })}
                errorMessage="Campo requerido"
                inputType="text"
                onChangeField={onChangeField}
                name="identification"
                defaultValue={clientInfo.identification}
                isRequired
              />
            </Form.Field>
            <Form.Field>
              <InputField
                placeholder="Nacionalidad *"
                validation={value => this.validation({ value, type: 'text' })}
                errorMessage="Campo requerido, digite solamente caracteres"
                inputType="text"
                onChangeField={onChangeField}
                name="nationality"
                defaultValue={clientInfo.nationality}
                isRequired
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <InputField
                placeholder="Teléfono *"
                validation={value => this.validation({ value, type: 'phone' })}
                errorMessage="Campo requerido. Formato de teléfono ####-#### ó ########"
                inputType="tel"
                onChangeField={onChangeField}
                name="phone"
                defaultValue={clientInfo.phone}
                isRequired
              />
            </Form.Field>
            <Form.Field>
              <InputField
                placeholder="Teléfono de referencia *"
                validation={value => this.validation({ value, type: 'phone' })}
                errorMessage="Campo requerido. Formato de teléfono ####-#### ó ########"
                inputType="tel"
                onChangeField={onChangeField}
                name="referencePhone"
                defaultValue={clientInfo.referencePhone}
                isRequired
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field className="client-email">
              <InputField
                placeholder="Email (Este va ser su usuario) *"
                validation={value => this.validation({ value, type: 'email' })}
                errorMessage="Campo requerido. Formato de email inválido."
                inputType="email"
                onChangeField={onChangeField}
                name="email"
                defaultValue={clientInfo.email}
                isRequired
              />
            </Form.Field>
          </Form.Group>
          <button
            type="submit"
            className="btn default"
          >
            {this.props.btnText}
          </button>
          <span>Campos obligatorios **</span>
        </Form>
      </div>
    );
  }
}

Step1.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Step1;
