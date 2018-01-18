import React, { Component } from 'react';
import autobind from 'react-autobind';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

import ChangeAvatarModal from '../ChangeAvatarModal';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChangeAvatarModalOpen: false,
    };
    autobind(this);
  }
  handleChangeAvatarModalOpen() {
    this.setState({
      isChangeAvatarModalOpen: !this.state.isChangeAvatarModalOpen,
    });
  }
  render() {
    const {
      roleId,
      avatar,
      name,
    } = this.props.userProfile;
    let legend = (
      <p>Aquí el sistema muestra el detalle de tu solictud de crédito, tu score credicticio y puedes manejar tu información de usuario.</p>
    );
    if (roleId === 2) {
      legend = (
        <div>
          <p>Aquí el sistema le muestra el total de oportunidades de inversión que están disponibles.</p>
          <p>Así como el total de operaciones en las que ha invertido.</p>
        </div>
      );
    }
    return (
      <div className={`hero box ${roleId === 2 ? 'investor' : 'client'}`}>
        {!avatar ? <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" size="tiny" circular onClick={this.handleChangeAvatarModalOpen} /> : <Image src={avatar} size="tiny" circular onClick={this.handleChangeAvatarModalOpen} />}
        <p className="welcome">Hola {name} bienvenido a tu cuenta.</p>
        {legend}
        <ChangeAvatarModal isOpen={this.state.isChangeAvatarModalOpen} handleCancel={this.handleChangeAvatarModalOpen} />
      </div>
    );
  }
}

Hero.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default Hero;
