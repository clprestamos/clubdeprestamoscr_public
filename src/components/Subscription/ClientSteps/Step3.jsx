/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Form, Dropdown, Radio, Message } from 'semantic-ui-react';

import * as utils from '../../../utils';

import * as RegisterClient from '../../../actions/RegisterClient';

class Step3 extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      RegisterClient,
    }, dispatch);
    this.state = {
      requiredMessage: false,
    };
    autobind(this);
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(RegisterClient.clearErrorSubscription());
  }
  onRadioChange({ value, name }) {
    const isChecked = value === 'yes';
    this.props.onChangeField({ field: name, value: isChecked });
  }
  handleSubmit() {
    if (this.validation()) {
      this.props.handleSubmit();
    } else {
      this.setState({
        requiredMessage: true,
      });
    }
  }
  validation() {
    const {
      sex,
      maritalStatus,
      home,
      jobSector,
      jobCategory,
      academicLevel,
      jobTime,
    } = this.props.clientInfo;
    if (sex && maritalStatus && home &&
      jobSector && jobCategory && academicLevel && jobTime
    ) {
      return true;
    }
    return false;
  }
  render() {
    const { clientInfo } = this.props;
    const { clientSubscriptionError } = this.props;
    const errorMessage = this.state.requiredMessage ? (
      <Message negative content="Todos los campos son requeridos" />
    ) : '';
    return (
      <div className="client-subscription step4">
        {errorMessage}
        <Form onSubmit={this.handleSubmit} error={clientSubscriptionError}>
          <Form.Group>
            <Form.Field>
              <label>Sexo:</label>
              <Dropdown
                placeholder="Sexo *"
                selection
                fluid
                compact
                search
                options={utils.getSex()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'sex', value });
                }}
                defaultValue={clientInfo.sex}
              />
            </Form.Field>
            <Form.Field>
              <label>Estado Civil:</label>
              <Dropdown
                placeholder="Estado Civil *"
                selection
                fluid
                compact
                search
                options={utils.getMaritalStatus()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'maritalStatus', value });
                }}
                defaultValue={clientInfo.maritalStatus}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Casa de habitación:</label>
              <Dropdown
                placeholder="Casa de habitación *"
                selection
                fluid
                compact
                search
                options={utils.getHome()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'home', value });
                }}
                defaultValue={clientInfo.home}
              />
            </Form.Field>
            <Form.Field>
              <label>Otras Propiedades:</label>
              <Radio
                label="Si"
                name="otherProperties"
                value="yes"
                checked={clientInfo.otherProperties}
                onChange={(e, { value, name }) => {
                  this.onRadioChange({ value, name });
                }}
              />
              <Radio
                label="No"
                name="otherProperties"
                value="no"
                checked={!clientInfo.otherProperties}
                onChange={(e, { value, name }) => {
                  this.onRadioChange({ value, name });
                }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Sector Empleo:</label>
              <Dropdown
                placeholder="Sector Empleo *"
                selection
                fluid
                compact
                search
                options={utils.getJobSector()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'jobSector', value });
                }}
                defaultValue={clientInfo.jobSector}
              />
            </Form.Field>
            <Form.Field>
              <label>Categoria Laboral:</label>
              <Dropdown
                placeholder="Categoria Laboral *"
                selection
                fluid
                compact
                search
                options={utils.getJobCategory()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'jobCategory', value });
                }}
                defaultValue={clientInfo.jobCategory}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Nivel Académico:</label>
              <Dropdown
                placeholder="Nivel Académico *"
                selection
                fluid
                compact
                search
                options={utils.getAcademicLevel()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'academicLevel', value });
                }}
                defaultValue={clientInfo.academicLevel}
              />
            </Form.Field>
            <Form.Field>
              <label>Posee Vehículo:</label>
              <Radio
                label="Si"
                name="hasVehicle"
                value="yes"
                checked={clientInfo.hasVehicle}
                onChange={(e, { value, name }) => {
                  this.onRadioChange({ value, name });
                }}
              />
              <Radio
                label="No"
                name="hasVehicle"
                value="no"
                checked={!clientInfo.hasVehicle}
                onChange={(e, { value, name }) => {
                  this.onRadioChange({ value, name });
                }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <label>Antiguedad laboral:</label>
              <Dropdown
                placeholder="Antiguedad laboral *"
                selection
                fluid
                compact
                search
                options={utils.getJobTime()}
                onChange={(e, { value }) => {
                  this.props.onChangeField({ field: 'jobTime', value });
                }}
                defaultValue={clientInfo.jobTime}
              />
            </Form.Field>
          </Form.Group>
          <button type="submit" className="btn default">{this.props.btnText}</button>
          <span>Campos obligatorios **</span>
        </Form>
      </div>
    );
  }
}

Step3.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  onChangeField: PropTypes.func.isRequired,
  clientInfo: PropTypes.object.isRequired,
  clientSubscriptionError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default connect()(Step3);
