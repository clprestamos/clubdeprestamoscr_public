import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

const ModalComponent = props => (
  <Modal
    trigger={props.trigger}
    open={props.isOpen}
    onClose={props.onClose}
    basic
    size="small"
    className={props.className}
  >
    <Modal.Content>
      {props.component}
    </Modal.Content>
  </Modal>
);

ModalComponent.propTypes = {
  trigger: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
};

export default ModalComponent;
