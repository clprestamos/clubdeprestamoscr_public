import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const Header = (props) => {
  const styleClass = props.isHomeMenu ? '' : 'secondary-page';
  const headerComponent = !props.hide ? (
    <header className={`main-header ${styleClass}`}>
      <Menu pathname={props.pathname} />
    </header>
  ) : '';
  return headerComponent;
};

Header.propTypes = {
  isHomeMenu: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Header;
