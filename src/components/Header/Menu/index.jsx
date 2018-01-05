import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import { Link } from 'react-router-dom';
import { Menu, Responsive, Icon } from 'semantic-ui-react';

import Logo from '../Logo';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.pathname,
    };
    autobind(this);
  }
  handleClickItem(e, { name }) {
    this.setState({
      activeItem: name,
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive minWidth={1025}>
          <Menu pointing secondary borderless fixed="top">
            <Menu.Item name="/home" as={Link} to="/" onClick={this.handleClickItem}><Logo /></Menu.Item>
            <Menu.Item name="/home" as={Link} to="/" position="right" active={activeItem === '/home'} onClick={this.handleClickItem}>Inicio</Menu.Item>
            <Menu.Item name="/prestamos" as={Link} to="/prestamos" position="right" active={activeItem === '/prestamos'} onClick={this.handleClickItem}>Préstamos</Menu.Item>
            <Menu.Item name="/invierta" as={Link} to="/invierta" position="right" active={activeItem === '/invierta'} onClick={this.handleClickItem}>Invierta</Menu.Item>
            <Menu.Item name="/comofunciona" as={Link} to="/comofunciona" position="right" active={activeItem === '/comofunciona'} onClick={this.handleClickItem}>¿Cómo funciona?</Menu.Item>
            <Menu.Item name="/preguntasfrecuentes" as={Link} to="/preguntasfrecuentes" position="right" active={activeItem === '/preguntasfrecuentes'} onClick={this.handleClickItem}>Preguntas Frecuentes</Menu.Item>
            <Menu.Item name="/contacto" as={Link} to="/contacto" position="right" active={activeItem === '/contacto'} onClick={this.handleClickItem}>Contacto</Menu.Item>
            <Menu.Item as={Link} to="/login" className="btn default" position="right">Iniciar Sesión</Menu.Item>
          </Menu>
        </Responsive>
        <Responsive maxWidth={1024}>
          <Menu secondary borderless fixed="top" className="mobile">
            <Menu.Item name="/home" as={Link} to="/" onClick={this.handleClickItem}><Logo /></Menu.Item>
            <Menu.Item position="right"><Icon name="content" /></Menu.Item>
          </Menu>
        </Responsive>
      </div>
    );
  }
}

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default MenuComponent;
