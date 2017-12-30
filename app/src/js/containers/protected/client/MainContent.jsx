import React from 'react';
import { Sidebar, Responsive, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const MainContent = (props) => {
  const visible = true;
  const { pathname } = props;
  let activeItem = pathname.split(`${props.match.path}/`)[1];
  const handleItemClick = (e, { name }) => {
    activeItem = name;
  };
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
            <Menu.Item
              as={Link}
              name="dashboard"
              active={activeItem === 'dashboard'}
              onClick={handleItemClick}
              to={`${props.match.path}/dashboard`}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              as={Link}
              name="perfil"
              active={activeItem === 'perfil'}
              onClick={handleItemClick}
              to={`${props.match.path}/perfil`}
            >
              Perfil
            </Menu.Item>
            <Menu.Item
              as={Link}
              name="score-crediticio"
              active={activeItem === 'score-crediticio'}
              onClick={handleItemClick}
              to={`${props.match.path}/score-crediticio`}
            >
              Score Crediticio
            </Menu.Item>
            <Menu.Item
              as={Link}
              name="solicitud-credito"
              active={activeItem === 'solicitud-credito'}
              onClick={handleItemClick}
              to={`${props.match.path}/solicitud-credito`}
            >
              Solicitud de Crédito
            </Menu.Item>
            <Menu.Item
              as={Link}
              name="prestamo-aprobado"
              active={activeItem === 'prestamo-aprobado'}
              onClick={handleItemClick}
              to={`${props.match.path}/prestamo-aprobado`}
            >
              Préstamo Aprobado
            </Menu.Item>
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
