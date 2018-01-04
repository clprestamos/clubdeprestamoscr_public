import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Menu, Icon, Dropdown, Responsive, Sidebar } from 'semantic-ui-react';

import MainContent from './MainContent';
import ForgotPassword from '../ForgotPassword';
import Logo from '../../components/Header/Logo';
import Modal from '../../components/Modal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isModalOpen: false,
    };
    autobind(this);
  }
  toggleVisible() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  handleModalOpen() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    const logoutItem = (
      <Menu.Item position="right" className="item-logout">
        <Link to={{
            pathname: '/logout',
            state: {
              from: this.props.location.pathname,
            },
          }}
        >
          <Icon name="log out" />
        </Link>
      </Menu.Item>
    );
    return (
      <div className="dashboard">
        <div className="wrapper">
          <Responsive minWidth={768}>
            <Menu stackable className="fixed">
              <Menu.Item position="left" name="home" className="item-logo">
                <Logo />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item position="right">
                  <Dropdown pointing="top right" icon="user circle outline">
                    <Dropdown.Menu>
                      <Modal
                        className="modal"
                        trigger={<Dropdown.Item onClick={this.handleModalOpen}>Cambiar contraseña</Dropdown.Item>}
                        isOpen={this.state.isModalOpen}
                        onClose={this.handleModalOpen}
                        component={<ForgotPassword closeSelf={this.handleModalOpen} />}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                {logoutItem}
              </Menu.Menu>
            </Menu>
            <MainContent
              authData={this.props.authData}
              {...this.props}
            />
          </Responsive>
          <Responsive maxWidth={767}>
            <div className="mobile-header">
              <Logo />
              <Button icon onClick={this.toggleVisible}>
                <Icon name="content" />
              </Button>
            </div>
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                animation="push"
                direction="top"
                visible={this.state.visible}
                inverted
                stackable
              >
                {logoutItem}
              </Sidebar>
              <Sidebar.Pusher>
                <MainContent
                  authData={this.props.authData}
                  {...this.props}
                />
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Responsive>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
