import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Button, Menu, Icon, Dropdown, Responsive, Sidebar, Image } from 'semantic-ui-react';

import MainContent from './MainContent';
import ForgotPassword from '../ForgotPassword';
import Logo from '../../components/Header/Logo';
import Modal from '../../components/Modal';

import * as Profile from '../../actions/Profile';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      Profile,
    }, dispatch);
    this.state = {
      visible: false,
      isModalOpen: false,
    };
    autobind(this);
  }
  componentDidMount() {
    const { dispatch, authData } = this.props;
    dispatch(Profile.getUserProfile(authData.data.userId));
  }
  toggleMenuVisible() {
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
    const trigger = (
      <span>
        {!this.props.userProfile.avatar ? (
          <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" avatar />
        ) : (
          <Image src={this.props.userProfile.avatar} avatar />
        )}
      </span>
    );
    return (
      <div className="dashboard">
        <div className="wrapper">
          <Responsive minWidth={601}>
            <Menu stackable className="fixed">
              <Menu.Item position="left" name="home" className="item-logo">
                <Logo />
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item position="right">
                  <Dropdown trigger={trigger} pointing="top right" icon={null}>
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
              authData={this.props.userProfile}
              isMenuVisible
            />
          </Responsive>
          <Responsive maxWidth={600}>
            <div className="mobile-header">
              <Logo />
              <Button icon onClick={this.toggleMenuVisible}>
                <Icon name="content" />
              </Button>
            </div>
            <Sidebar.Pushable>
              <Sidebar.Pusher>
                <MainContent
                  authData={this.props.userProfile}
                  isMenuVisible={this.state.visible}
                  toggleMenuVisible={this.toggleMenuVisible}
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
  routing: state.routing.location,
  authData: state.user,
  userProfile: state.userProfile,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
