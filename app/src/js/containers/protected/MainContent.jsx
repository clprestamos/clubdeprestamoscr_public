import React from 'react';
import { Sidebar, Responsive, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const MainContent = (props) => {
  const visible = true;
  let activeItem = props.location.pathname;
  const handleItemClick = (e, { to }) => {
    activeItem = to;
  };
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
        {
          name: 'proceso-activacion',
          text: 'Proceso de activación',
          icon: 'chevron right',
          url: '/inversionista/oportunidades/proceso-activacion',
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
  if (props.authData.data.roleId === 1) {
    menuItems = clientMenuItems;
  } else if (props.authData.data.roleId === 2) {
    menuItems = investorMenuItems;
  }
  return (
    <div className="main-content">
      <Responsive minWidth={768}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            visible={visible}
            animation="slide along"
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
                    active={activeItem === subItem.url}
                    onClick={handleItemClick}
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
                  active={activeItem === menuItem.url}
                  onClick={handleItemClick}
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
          </Sidebar>
          <Sidebar.Pusher>
            <Routes authData={props.authData} match={props.match} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    </div>
  );
};

export default MainContent;
