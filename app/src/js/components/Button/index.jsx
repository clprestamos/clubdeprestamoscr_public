import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

const Button = (props) => {
  const buttonClass = props.active ? `btn ${props.buttonType} disabled` : `btn ${props.buttonType}`;
  const btn = props.to ? (
    <Link
      className={`btn ${props.buttonType}`}
      to={props.to}
      onClick={props.onClick}
    >
      <span>{props.text}</span>
    </Link>
  ) : (
    <button type="button" className={buttonClass} onClick={props.onClick} disabled={props.active}>{props.text}</button>
  );
  return btn;
};

Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Button;
