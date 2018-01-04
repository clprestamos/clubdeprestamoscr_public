import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Grid, Image, Button, Icon } from 'semantic-ui-react';

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
    this.loadUserProfile();
  }
  onChangeField({ field, value }) {
    const { dispatch } = this.props;
    dispatch(Profile.editInvestorProfile({ field, value }));
  }
  loadUserProfile() {
    const { dispatch } = this.props;
    dispatch(Profile.getInvestorProfile());
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
    dispatch(Profile.saveInvestorProfile());
  }
  render() {
    const {
      name,
      lastName,
      identification,
      cellphone,
      phone,
      email,
    } = this.props.profile;
    return (
      <div className="profile investor">
        <h2>Perfil</h2>
        <Grid celled className="box">
          <Grid.Row>
            <Grid.Column width={4} className="avatar">
              <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" size="small" circular />
              <Button className="btn upload" icon labelPosition="left">
                <Icon name="camera" />
                Actualizar imagen
              </Button>
            </Grid.Column>
            <Grid.Column width={12} className="content-form">
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
                <Form.Group widths="equal">
                  <Form.Field>
                    <InputField
                      inputType="text"
                      inputPlaceholder="Cédula"
                      labelText="Cédula:"
                      handleOnChange={this.onChangeField}
                      defaultValue={identification}
                      validation={value => this.validation({ type: 'identification', value })}
                      errorMessage="Campo requerido. Formato de cédula 0-0000-0000 ó 000000000."
                      inputName="identification"
                      disabled={this.state.isDisabled}
                    />
                  </Form.Field>
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
                      errorMessage="Campo requerido. Formato de teléfono 0000-0000."
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
                      errorMessage="Campo requerido. Formato de celular 0000-0000."
                      inputName="cellphone"
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
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.investorProfile,
});

export default connect(mapStateToProps)(ProfileComponent);
