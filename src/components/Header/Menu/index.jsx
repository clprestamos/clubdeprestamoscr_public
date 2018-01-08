import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import { Link } from 'react-router-dom';
import { Menu, Responsive, Icon, List } from 'semantic-ui-react';

import Logo from '../Logo';

class MenuComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.pathname,
      isSubMenuVisible: false,
    };
    autobind(this);
  }
  handleClickItem(e, { name }) {
    this.setState({
      activeItem: name,
      isSubMenuVisible: false,
    });
  }
  handleSubMenuVisible() {
    this.setState({
      isSubMenuVisible: !this.state.isSubMenuVisible,
    });
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive minWidth={801}>
          <Menu pointing secondary borderless fixed="top">
            <Menu.Item name="/home" as={Link} to="/" onClick={this.handleClickItem}><Logo /></Menu.Item>
            <Menu.Item name="/home" as={Link} to="/" position="right" active={activeItem === '/home'} onClick={this.handleClickItem}>Inicio</Menu.Item>
            <Menu.Item name="/prestamos" as={Link} to="/prestamos" position="right" active={activeItem === '/prestamos'} onClick={this.handleClickItem}>Préstamos</Menu.Item>
            <Menu.Item name="/invierta" as={Link} to="/invierta" position="right" active={activeItem === '/invierta'} onClick={this.handleClickItem}>Invierta</Menu.Item>
            <Menu.Item name="/comofunciona" as={Link} to="/comofunciona" position="right" active={activeItem === '/comofunciona'} onClick={this.handleClickItem}>¿Cómo funciona?</Menu.Item>
            <Menu.Item name="/preguntasfrecuentes" as={Link} to="/preguntasfrecuentes" position="right" active={activeItem === '/preguntasfrecuentes'} onClick={this.handleClickItem}>Preguntas Frecuentes</Menu.Item>
            <Menu.Item as="div" name="/contacto" position="right" active={activeItem === '/contacto'} onClick={this.handleClickItem}><a href="/#contactenos">Contacto</a></Menu.Item>
            <Menu.Item as={Link} to="/login" className="btn default" position="right">Iniciar Sesión</Menu.Item>
          </Menu>
        </Responsive>
        <Responsive maxWidth={800}>
          <Menu secondary borderless fixed="top" className="mobile">
            <Menu.Item name="/home" as={Link} to="/" onClick={this.handleClickItem}><Logo /></Menu.Item>
            <Menu.Item position="right" onClick={this.handleSubMenuVisible}><Icon name="content" /></Menu.Item>
          </Menu>
          { this.state.isSubMenuVisible ? (
            <Menu
              secondary
              fluid
              vertical
              fixed="top"
              className="mobile sub-menu"
            >
              <div className="submenu-header">
                <Logo />
                <Menu.Item onClick={() => this.handleSubMenuVisible(false)}><Icon name="close" /></Menu.Item>
              </div>
              <Menu.Item name="/home" as={Link} to="/" position="right" active={activeItem === '/home'} onClick={this.handleClickItem}>Inicio</Menu.Item>
              <Menu.Item name="/prestamos" as={Link} to="/prestamos" position="right" active={activeItem === '/prestamos'} onClick={this.handleClickItem}>Préstamos</Menu.Item>
              <Menu.Item name="/invierta" as={Link} to="/invierta" position="right" active={activeItem === '/invierta'} onClick={this.handleClickItem}>Invierta</Menu.Item>
              <Menu.Item name="/comofunciona" as={Link} to="/comofunciona" position="right" active={activeItem === '/comofunciona'} onClick={this.handleClickItem}>¿Cómo funciona?</Menu.Item>
              <Menu.Item name="/preguntasfrecuentes" as={Link} to="/preguntasfrecuentes" position="right" active={activeItem === '/preguntasfrecuentes'} onClick={this.handleClickItem}>Preguntas Frecuentes</Menu.Item>
              <Menu.Item as="div" name="/contacto" position="right" active={activeItem === '/contacto'} onClick={this.handleClickItem}><a href="/#contactenos">Contacto</a></Menu.Item>
              <Menu.Item as={Link} to="/login" className="btn default" position="right">Iniciar Sesión</Menu.Item>
              <List horizontal>
                <List.Item>
                  <a href="https://www.twitter.com"><Icon name="twitter" circular /></a>
                </List.Item>
              </List>
            </Menu>
          ) : ''}
        </Responsive>
      </div>
    );
  }
}

MenuComponent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default MenuComponent;
