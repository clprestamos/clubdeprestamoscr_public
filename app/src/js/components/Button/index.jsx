import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Button = props => (
  <Link
    className={`btn ${props.buttonType}`}
    to={props.to}
    onClick={props.onClick}
  >
    <span>{props.text}</span>
  </Link>
);

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
