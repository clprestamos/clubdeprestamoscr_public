import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Hero = props => (
  <div className="hero box">
    <Icon circular inverted name="home" size="big" color="teal" />
    <p className="welcome">Hola {props.authData.data.name} bienvenido a tu cuenta.</p>
    <p>Aquí el sistema muestra el detalle de tu solictud de crédito, tu score credicticio y puedes manejar tu información de usuario.</p>
  </div>
);

Hero.propTypes = {
  authData: PropTypes.object.isRequired,
};

export default Hero;
