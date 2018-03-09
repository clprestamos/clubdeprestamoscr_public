import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Menu, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import LoanList from './LoanList';

class MyInvestsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.match.params.type,
    };
    autobind(this);
  }
  handleOnClickItem(e, { name }) {
    this.setState({
      activeItem: name,
    });
  }
  render() {
    const { activeItem } = this.state;
    const { loans } = this.props.myinvests;
    const formalized = _.filter(loans, { stateId: '3' });
    const waiting = _.filter(loans, (loan) => {
      if (loan.stateId === '4' && loan.investorId !== null) {
        return loan;
      }
      return null;
    });
    return (
      <Card className="menuItems">
        <Card.Content>
          <Menu pointing secondary>
            <Menu.Item as={Link} to="/inversionista/mis-inversiones/formalizadas" name="formalizadas" active={activeItem === 'formalizadas'} onClick={this.handleOnClickItem}>
              Formalizadas <Label circular color="green">{formalized.length}</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/inversionista/mis-inversiones/por-formalizar" name="por-formalizar" active={activeItem === 'por-formalizar'} onClick={this.handleOnClickItem}>
              Por formalizar <Label circular color="green">{waiting.length}</Label>
            </Menu.Item>
          </Menu>
        </Card.Content>
        <Card.Content className="content-form">
          { this.state.activeItem === 'formalizadas' ? <LoanList loans={formalized} /> : '' }
          { this.state.activeItem === 'por-formalizar' ? <LoanList loans={waiting} /> : '' }
        </Card.Content>
      </Card>
    );
  }
}

export default MyInvestsComponent;
