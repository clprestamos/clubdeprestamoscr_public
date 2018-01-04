import React, { Component } from 'react';
import autobind from 'react-autobind';
import { Menu, Card, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import LoanList from './LoanList';

class OpportunitiesComponent extends Component {
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
    const { loans } = this.props.opportunities;
    const availables = _.filter(loans, { stateId: 4, investorId: null });
    const waiting = _.filter(loans, (loan) => {
      if (loan.stateId === 4 && loan.investorId !== null) {
        return loan;
      }
      return null;
    });
    return (
      <Card className="menuItems">
        <Card.Content>
          <Menu pointing secondary>
            <Menu.Item as={Link} to="/inversionista/oportunidades/disponibles" name="disponibles" active={activeItem === 'disponibles'} onClick={this.handleOnClickItem}>
              Disponibles para invertir <Label circular color="green">{availables.length}</Label>
            </Menu.Item>
            <Menu.Item as={Link} to="/inversionista/oportunidades/en-proceso" name="en-proceso" active={activeItem === 'en-proceso'} onClick={this.handleOnClickItem}>
              Inversión en proceso <Label circular color="green">{waiting.length}</Label>
            </Menu.Item>
          </Menu>
        </Card.Content>
        <Card.Content className="content-form">
          { this.state.activeItem === 'disponibles' ? <LoanList loans={availables} /> : '' }
          { this.state.activeItem === 'en-proceso' ? <LoanList loans={waiting} /> : '' }
        </Card.Content>
      </Card>
    );
  }
}

export default OpportunitiesComponent;
