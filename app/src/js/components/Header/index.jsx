import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';

const Login = () => <Link to="/login" className="btn default">Iniciar Sesión</Link>;
const Header = (props) => {
  const styleClass = props.isHomeMenu ? '' : 'secondary-page';
  const headerComponent = !props.hide ? (
    <header className={`header ${styleClass}`}>
      <Logo />
      <Menu />
      <div className="action-btn">
        <Login />
      </div>
    </header>
  ) : '';
  return headerComponent;
};

Header.propTypes = {
  isHomeMenu: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default Header;
