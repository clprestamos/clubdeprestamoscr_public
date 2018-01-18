import React, { Component } from 'react';
import _ from 'lodash';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Form, Dropdown, Label, Icon } from 'semantic-ui-react';

import * as utils from '../../../utils';
import * as Locales from '../../../actions/Locales';
import * as Profile from '../../../actions/Profile';
import InputField from '../../../components/Dashboard/InputField';
import ButtonComponent from '../../../components/Button';
import SaveModal from '../../../components/SaveModal';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      isDisabled: true,
      isModalOpen: false,
    };
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      Locales,
      Profile,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    this.loadUserProfile();
    dispatch(Locales.getProvinces());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.province && _.isEmpty(nextProps.cantons) && _.isEmpty(nextProps.districts)) {
      this.getCantons(nextProps.profile.province);
      this.getDistricts(nextProps.profile.canton);
    }
  }
  onChangeProvinces(province) {
    this.getCantons(province);
  }
  onChangeCantons(canton) {
    this.getDistricts(canton);
  }
  onChangeDistricts() {
    const { dispatch } = this.props;
    dispatch(Profile.getZipCode());
  }
  onChangeField({ field, value }) {
    const { dispatch } = this.props;
    dispatch(Profile.editUserProfile({ field, value }));
  }
  getCantons(province) {
    const { dispatch } = this.props;
    dispatch(Locales.getCantons(province));
  }
  getDistricts(canton) {
    const { dispatch } = this.props;
    dispatch(Locales.getDistricts(this.props.profile.province, canton));
  }
  loadUserProfile() {
    const { dispatch, authData } = this.props;
    dispatch(Profile.getUserProfile(authData.data.userId));
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
      this.handleModalOpen();
    }
  }
  handleModalOpen() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  toggleDisableForm() {
    this.setState({
      isDisabled: !this.state.isDisabled,
    });
  }
  cancelEdit() {
    this.toggleDisableForm();
    this.loadUserProfile();
  }
  saveChanges() {
    this.handleModalOpen();
    this.toggleDisableForm();
    const { dispatch } = this.props;
    dispatch(Profile.saveUserProfile());
  }
  render() {
    const provinces = utils.getDropDownItems(this.props.provinces);
    const cantons = utils.getDropDownItems(this.props.cantons);
    const districts = utils.getDropDownItems(this.props.districts);
    const {
      name,
      lastName,
      email,
      nationality,
      identification,
      cellphone,
      address,
      province,
      canton,
      district,
      zipCode,
      referencePhone,
      relativePhone,
      bank,
      clientAccount,
      iban,
      phone,
    } = this.props.profile;
    return (
      <div className="profile">
        <Card>
          <Card.Content>
            <Card.Header>
              Información de perfil
            </Card.Header>
          </Card.Content>
          <Card.Content className="content-form">
            <Form>
              <Form.Group widths="equal">
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Nombre"
                    labelText="Nombre:"
                    handleOnChange={this.onChangeField}
                    defaultValue={name}
                    validation={value => this.validation({ type: 'text', value })}
                    errorMessage="Campo requerido."
                    inputName="name"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Apellidos"
                    labelText="Apellidos:"
                    handleOnChange={this.onChangeField}
                    defaultValue={lastName}
                    validation={value => this.validation({ type: 'text', value })}
                    errorMessage="Campo requerido."
                    inputName="lastName"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <InputField
                  inputType="email"
                  inputPlaceholder="Email"
                  labelText="Email:"
                  handleOnChange={this.onChangeField}
                  defaultValue={email}
                  validation={value => this.validation({ type: 'email', value })}
                  errorMessage="Campo requerido."
                  inputName="email"
                  disabled={this.state.isDisabled}
                />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Nacionalidad"
                    labelText="Nacionalidad:"
                    handleOnChange={this.onChangeField}
                    defaultValue={nationality}
                    validation={value => this.validation({ type: 'text', value })}
                    errorMessage="Campo requerido."
                    inputName="nationality"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Cédula"
                    labelText="Cédula:"
                    handleOnChange={this.onChangeField}
                    defaultValue={identification}
                    validation={value => this.validation({ type: 'identification', value })}
                    errorMessage="Campo requerido. Formato de cédula #-0###-0###"
                    inputName="identification"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field>
                  <InputField
                    inputType="tel"
                    inputPlaceholder="Teléfono"
                    labelText="Teléfono:"
                    handleOnChange={this.onChangeField}
                    defaultValue={phone}
                    validation={value => this.validation({ type: 'phone', value })}
                    errorMessage="Campo requerido. Formato de teléfono ####-#### ó ########."
                    inputName="phone"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
                <Form.Field>
                  <InputField
                    inputType="tel"
                    inputPlaceholder="Celular"
                    labelText="Celular:"
                    handleOnChange={this.onChangeField}
                    defaultValue={cellphone}
                    validation={value => this.validation({ type: 'phone', value })}
                    errorMessage="Campo requerido. Formato de celular ####-#### ó ########."
                    inputName="cellphone"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
              </Form.Group>
              <div className="fields-spacer">
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Dirección"
                    labelText="Dirección:"
                    handleOnChange={this.onChangeField}
                    defaultValue={address}
                    validation={value => this.validation({ type: 'text', value })}
                    errorMessage="Campo requerido."
                    inputName="address"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Field>
                    <Dropdown
                      placeholder="Provincia"
                      fluid
                      search
                      selection
                      options={provinces}
                      onChange={(e, { value }) => {
                        this.onChangeField({ field: 'province', value });
                        this.onChangeProvinces(value);
                      }}
                      value={province}
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      placeholder="Cantón"
                      fluid
                      search
                      selection
                      options={cantons}
                      onChange={(e, { value }) => {
                        this.onChangeField({ field: 'canton', value });
                        this.onChangeCantons(value);
                      }}
                      value={canton}
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Dropdown
                      placeholder="Distrito"
                      fluid
                      search
                      selection
                      options={districts}
                      onChange={(e, { value }) => {
                        this.onChangeField({ field: 'district', value });
                        this.onChangeDistricts(value);
                      }}
                      value={district}
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Label>
                      <Icon name="mail" />
                      {zipCode}
                      <Label.Detail>Código Postal</Label.Detail>
                    </Label>
                  </Form.Field>
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field>
                    <InputField
                      inputType="tel"
                      inputPlaceholder="Teléfono de una referencia"
                      labelText="Teléfono de una referencia:"
                      handleOnChange={this.onChangeField}
                      defaultValue={referencePhone}
                      validation={value => this.validation({ type: 'phone', value })}
                      errorMessage="Campo requerido. Formato de celular ####-#### ó ########."
                      inputName="referencePhone"
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                  <Form.Field>
                    <InputField
                      inputType="tel"
                      inputPlaceholder="Teléfono de un familiar"
                      labelText="Teléfono de un familiar:"
                      handleOnChange={this.onChangeField}
                      defaultValue={relativePhone}
                      validation={value => this.validation({ type: 'phone', value })}
                      errorMessage="Campo requerido. Formato de celular ####-#### ó ########."
                      inputName="relativePhone"
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                </Form.Group>
              </div>
              <div className="fields-spacer">
                <Form.Field>
                  <InputField
                    inputType="text"
                    inputPlaceholder="Banco"
                    labelText="Banco:"
                    handleOnChange={this.onChangeField}
                    defaultValue={bank}
                    validation={value => this.validation({ type: 'text', value })}
                    errorMessage="Campo requerido."
                    inputName="bank"
                    disabled={this.state.isDisabled}
                  />
                </Form.Field>
                <Form.Group widths="equal">
                  <Form.Field>
                    <InputField
                      inputType="number"
                      inputPlaceholder="Cuenta cliente"
                      labelText="Cuenta cliente:"
                      handleOnChange={this.onChangeField}
                      defaultValue={clientAccount}
                      validation={value => this.validation({ type: 'clientAccount', value })}
                      errorMessage="Campo requerido. Debe digitar los 15 dígitos de su cuenta."
                      inputName="clientAccount"
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                  <Form.Field>
                    <InputField
                      inputType="number"
                      inputPlaceholder="IBAN"
                      labelText="IBAN:"
                      handleOnChange={this.onChangeField}
                      defaultValue={iban}
                      validation={value => this.validation({ type: 'iban', value })}
                      errorMessage="Campo requerido. Debe digitar los 22 dígitos de su cuenta."
                      inputName="clientAccount"
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Field>
                  <ButtonComponent
                    buttonType="edit"
                    text="Editar"
                    onClick={this.toggleDisableForm}
                    type="button"
                    btnIcon="pencil"
                    floated="left"
                  />
                  {!this.state.isDisabled ? (
                    <ButtonComponent
                      buttonType="cancel-edit"
                      text="Cancelar"
                      onClick={this.cancelEdit}
                      type="button"
                      btnIcon="cancel"
                      floated="left"
                    />
                  ) : ''}
                  <ButtonComponent
                    buttonType="save"
                    text="Guardar cambios"
                    onClick={this.handleSubmit}
                    type="button"
                    floated="right"
                  />
                  <SaveModal isOpen={this.state.isModalOpen} handleCancel={this.handleModalOpen} handleSave={this.saveChanges} />
                </Form.Field>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user,
  profile: state.userProfile,
  provinces: state.locales.provinces,
  cantons: state.locales.cantons,
  districts: state.locales.districts,
});

export default connect(mapStateToProps)(ProfileComponent);
