/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'semantic-ui-react';

class ChangeAvatarModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    autobind(this);
  }
  onChangeField(e) {
    this.setState({
      input: e.target,
    });
  }
  render() {
    const { input } = this.state;
    return (
      <Modal
        size="tiny"
        open={this.props.isOpen}
        className="change-avatar-modal"
      >
        <Modal.Content>
          <Form>
            <Form.Field>
              <label style={{ fontSize: '2rem' }}>¿Desea cambiar la imagen de su avatar?</label>
              <input type="file" onChange={this.onChangeField} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button className="cancel btn cancel" onClick={this.props.handleCancel}>Cancelar</Button>
          <Button className="change-avatar btn default" onClick={() => this.props.handleUpload({ input })}>Cambiar</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

ChangeAvatarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
};

export default ChangeAvatarModal;
