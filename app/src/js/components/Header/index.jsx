import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from './Logo';
import Menu from './Menu';
import Button from '../Button';

const Header = (props) => {
  const styleClass = props.isHomeMenu ? '' : 'secondary-page';
  return (
    <header className={`header ${styleClass}`}>
      <Logo />
      <Menu />
      <div className="action-btn">
        <Button to="/login" buttonType="default" text="Iniciar Sesión" />
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  isHomeMenu: state.main.isHomeMenu,
});

export default withRouter(connect(mapStateToProps)(Header));
