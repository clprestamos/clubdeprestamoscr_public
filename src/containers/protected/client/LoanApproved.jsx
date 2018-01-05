import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Table, Message, Icon } from 'semantic-ui-react';
import moment from 'moment';

import * as Loan from '../../../actions/Loan';

class LoanApproved extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    const { dispatch } = this.props;
    this.boundActionCreators = bindActionCreators({
      Loan,
    }, dispatch);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Loan.getLoanData());
  }
  render() {
    const {
      id,
      amount,
      interest,
      score,
      term,
      requestLoanDate,
      reason,
      stateId,
      approvedDate,
    } = this.props.loan;
    return (
      <div className="loans">
        <Card>
          <Card.Content>
            <Card.Header>
              Préstamos Aprobados
            </Card.Header>
          </Card.Content>
          <Card.Content>
            { stateId === 3 ? (
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Monto</Table.HeaderCell>
                    <Table.HeaderCell>Tasa %</Table.HeaderCell>
                    <Table.HeaderCell>Score</Table.HeaderCell>
                    <Table.HeaderCell>Plazo</Table.HeaderCell>
                    <Table.HeaderCell>Fecha de Solicitud</Table.HeaderCell>
                    <Table.HeaderCell>Fecha de Aprobación</Table.HeaderCell>
                    <Table.HeaderCell>Motivo</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row active>
                    <Table.Cell>{id}</Table.Cell>
                    <Table.Cell>₡ {amount}</Table.Cell>
                    <Table.Cell>{interest ? `${interest}%` : '0%'}</Table.Cell>
                    <Table.Cell>{score}</Table.Cell>
                    <Table.Cell>{term}</Table.Cell>
                    <Table.Cell>{moment(new Date(requestLoanDate)).format('DD/MM/YYYY')}</Table.Cell>
                    <Table.Cell>{moment(new Date(approvedDate)).format('DD/MM/YYYY')}</Table.Cell>
                    <Table.Cell>{reason}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            ) : (
              <Message icon className="box">
                <Icon name="info circle" />
                <Message.Content>
                  <Message.Header>Aún no posee préstamos aprobados!</Message.Header>
                  Consulte a su asesor de crédito o visite la sección de contáctenos para mayor información.
                </Message.Content>
              </Message>
            ) }
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loan: state.loan,
});

export default connect(mapStateToProps)(LoanApproved);
