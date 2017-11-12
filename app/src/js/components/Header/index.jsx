import React from 'react';

import Logo from './Logo';
import Menu from './Menu';
import Button from '../Button';

const Header = () => (
  <header className="header">
    <Logo />
    <Menu />
    <div className="action-btn">
      <Button to="/login" buttonType="default" text="Iniciar Sesión" />
    </div>
  </header>
);

export default Header;
