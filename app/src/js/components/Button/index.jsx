import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Button = props => (
  <Link
    className={`btn ${props.type}`}
    to={props.to}
    onClick={props.onClick}
  >
    <span>{props.text}</span>
  </Link>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
