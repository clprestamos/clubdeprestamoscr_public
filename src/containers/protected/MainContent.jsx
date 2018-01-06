import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Sidebar, Menu, Icon, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

import Modal from '../../components/Modal';
import ForgotPassword from '../ForgotPassword';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.routing.pathname,
      isModalOpen: false,
    };
    autobind(this);
  }
  handleItemClick(e, { to }) {
    if (to !== '/inversionista/oportunidades' && to !== '/inversionista/mis-inversiones') {
      this.setState({
        activeItem: to,
      });
    }
  }
  handleModalOpen() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    const clientMenuItems = [
      {
        name: 'dashboard',
        text: 'Dashboard',
        url: '/cliente/dashboard',
      },
      {
        name: 'perfil',
        text: 'Perfil',
        url: '/cliente/perfil',
      },
      {
        name: 'score-crediticio',
        text: 'Score Crediticio',
        url: '/cliente/score-crediticio',
      },
      {
        name: 'solicitud-credito',
        text: 'Solicitud de crédito',
        url: '/cliente/solicitud-credito',
      },
      {
        name: 'prestamo-aprobado',
        text: 'Préstamo aprobado',
        url: '/cliente/prestamo-aprobado',
      },
    ];
    const investorMenuItems = [
      {
        name: 'dashboard',
        text: 'Dashboard',
        url: '/inversionista/dashboard',
      },
      {
        name: 'perfil',
        text: 'Perfil',
        url: '/inversionista/perfil',
      },
      {
        name: 'oportunidades',
        text: 'Oportunidades',
        url: '/inversionista/oportunidades',
        items: [
          {
            name: 'disponibles',
            text: 'Disponibles para invertir',
            icon: 'chevron right',
            url: '/inversionista/oportunidades/disponibles',
          },
          {
            name: 'en-proceso',
            text: 'Inversión en proceso',
            icon: 'chevron right',
            url: '/inversionista/oportunidades/en-proceso',
          },
        ],
      },
      {
        name: 'mis-inversiones',
        text: 'Mis Inversiones',
        url: '/inversionista/mis-inversiones',
        items: [
          {
            name: 'por-formalizar',
            text: 'Por formalizar',
            icon: 'chevron right',
            url: '/inversionista/mis-inversiones/por-formalizar',
          },
          {
            name: 'formalizadas',
            text: 'Formalizadas',
            icon: 'chevron right',
            url: '/inversionista/mis-inversiones/formalizadas',
          },
        ],
      },
    ];
    let menuItems = [];
    if (this.props.authData.data.roleId === 1) {
      menuItems = clientMenuItems;
    } else if (this.props.authData.data.roleId === 2) {
      menuItems = investorMenuItems;
    }
    return (
      <div className="main-content">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            visible={this.props.isMenuVisible}
            animation="push"
            vertical
            pointing
            secondary
          >
            {menuItems.map((menuItem, index) => {
              const subMenu = menuItem.items ? (
                menuItem.items.map((subItem, subIndex) => (
                  <Menu.Item
                    key={subIndex} // eslint-disable-line
                    as={Link}
                    name={subItem.name}
                    active={this.state.activeItem === subItem.url}
                    onClick={this.handleItemClick}
                    to={subItem.url}
                    className={subItem.icon ? 'icon' : ''}
                  >
                    {subItem.icon ? <Icon name={subItem.icon} /> : ''}
                    {subItem.text}
                  </Menu.Item>
                ))
              ) : false;
              return (
                <Menu.Item
                  key={index} // eslint-disable-line
                  as={subMenu ? 'div' : Link}
                  name={menuItem.name}
                  active={this.state.activeItem === menuItem.url && !subMenu}
                  onClick={this.handleItemClick}
                  to={menuItem.url}
                  className={menuItem.icon ? 'icon' : ''}
                >
                  {menuItem.icon ? <Icon name={menuItem.icon} /> : ''}
                  {menuItem.text}
                  {subMenu ? (
                    <Menu.Menu>
                      {subMenu}
                    </Menu.Menu>
                  ) : ''}
                </Menu.Item>
              );
            })}
            <Responsive maxWidth={600}>
              <Menu.Item
                as={Link}
                to={{
                  pathname: '/logout',
                  state: {
                    from: '/cliente/dashboard',
                  },
                }}
              >
                <Icon name="log out" /> Logout
              </Menu.Item>
              <Modal
                className="modal"
                trigger={<Menu.Item onClick={this.handleModalOpen}><Icon name="setting" /> Cambiar contraseña</Menu.Item>}
                isOpen={this.state.isModalOpen}
                onClose={this.handleModalOpen}
                component={<ForgotPassword closeSelf={this.handleModalOpen} />}
              />
            </Responsive>
          </Sidebar>
          <Sidebar.Pusher>
            <Routes authData={this.props.authData} match={this.props.match} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default MainContent;
