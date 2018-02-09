import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Grid, Image, Button, Icon, Responsive } from 'semantic-ui-react';

import * as utils from '../../../utils';
import * as Locales from '../../../actions/Locales';
import * as Profile from '../../../actions/Profile';
import InputField from '../../../components/Dashboard/InputField';
import ButtonComponent from '../../../components/Button';
import SaveModal from '../../../components/SaveModal';
import ChangeAvatarModal from '../../../components/ChangeAvatarModal';

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      isDisabled: true,
      isModalOpen: false,
      isChangeAvatarModalOpen: false,
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
    dispatch(Profile.editUserProfile({ field, value }));
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
  handleChangeAvatarModalOpen() {
    this.setState({
      isChangeAvatarModalOpen: !this.state.isChangeAvatarModalOpen,
    });
  }
  render() {
    const {
      avatar,
      name,
      lastName,
      identification,
      cellphone,
      phone,
      email,
      bank,
      clientAccount,
      iban,
    } = this.props.userProfile;
    const imageAvatar = !avatar ? 'https://react.semantic-ui.com/assets/images/wireframe/square-image.png' : avatar;
    const avatarContent = (
      <div>
        <Image onClick={this.handleChangeAvatarModalOpen} src={imageAvatar} size="small" circular />
        <Button onClick={this.handleChangeAvatarModalOpen} className="btn upload" icon labelPosition="left">
          <Icon name="camera" />
          Actualizar imagen
        </Button>
        <ChangeAvatarModal isOpen={this.state.isChangeAvatarModalOpen} handleCancel={this.handleChangeAvatarModalOpen} />
      </div>
    );
    const formContent = (
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
              errorMessage="Campo requerido. Formato de cédula #-0###-0###"
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
        <Form.Group widths="equal">
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
          <Form.Field>
            <InputField
              inputType="text"
              inputPlaceholder="Cuenta cliente"
              labelText="Cuenta cliente:"
              handleOnChange={this.onChangeField}
              defaultValue={clientAccount}
              validation={value => this.validation({ type: 'clientAccount', value })}
              errorMessage="Campo requerido."
              inputName="clientAccount"
              disabled={this.state.isDisabled}
            />
          </Form.Field>
          <Form.Field>
            <InputField
              inputType="text"
              inputPlaceholder="IBAN"
              labelText="IBAN:"
              handleOnChange={this.onChangeField}
              defaultValue={iban}
              validation={value => this.validation({ type: 'iban', value })}
              errorMessage="Campo requerido."
              inputName="iban"
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
    );
    return (
      <div className="profile investor">
        <h2>Perfil</h2>
        <Responsive minWidth={801}>
          <Grid celled className="box">
            <Grid.Row>
              <Grid.Column width={4} className="avatar">
                {avatarContent}
              </Grid.Column>
              <Grid.Column width={12} className="content-form">
                {formContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
        <Responsive maxWidth={800}>
          <Grid celled className="box">
            <Grid.Row>
              <Grid.Column width={16} className="avatar">
                {avatarContent}
              </Grid.Column>
              <Grid.Column width={16} className="content-form">
                {formContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user,
  userProfile: state.userProfile,
});

export default connect(mapStateToProps)(ProfileComponent);
