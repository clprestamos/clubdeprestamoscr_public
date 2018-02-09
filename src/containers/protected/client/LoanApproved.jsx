import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Table, Message, Icon, Responsive, Grid } from 'semantic-ui-react';

import * as Loan from '../../../actions/Loan';
import * as utils from '../../../utils';
import Payments from '../../../components/Payments';

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
      loanId,
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
              Préstamo Aprobado
            </Card.Header>
          </Card.Content>
          { stateId === 3 ? (
            <Card.Content>
              <Responsive minWidth={601}>
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
                      <Table.Cell>{loanId}</Table.Cell>
                      <Table.Cell>{utils.amountToMoney(amount)}</Table.Cell>
                      <Table.Cell>{interest ? `${interest}%` : '0%'}</Table.Cell>
                      <Table.Cell>{score}</Table.Cell>
                      <Table.Cell>{term}</Table.Cell>
                      <Table.Cell>{utils.parseDate(requestLoanDate)}</Table.Cell>
                      <Table.Cell>{utils.parseDate(approvedDate)}</Table.Cell>
                      <Table.Cell>{reason}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Payments amount={amount} term={term} interest={interest} approvedDate={approvedDate} />
              </Responsive>
              <Responsive maxWidth={600}>
                <Grid celled>
                  <Grid.Row>
                    <Grid.Column width={6}>ID:</Grid.Column>
                    <Grid.Column width={10}>{loanId}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Monto:</Grid.Column>
                    <Grid.Column width={10}>₡ {amount}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Tasa %:</Grid.Column>
                    <Grid.Column width={10}>{interest ? `${interest}%` : '0%'}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Score:</Grid.Column>
                    <Grid.Column width={10}>{score}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Plazo:</Grid.Column>
                    <Grid.Column width={10}>{term}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Fecha de Solicitud:</Grid.Column>
                    <Grid.Column width={10}>{utils.parseDate(requestLoanDate)}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Fecha de Aprobación:</Grid.Column>
                    <Grid.Column width={10}>{utils.parseDate(approvedDate)}</Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={6}>Motivo:</Grid.Column>
                    <Grid.Column width={10}>{reason}</Grid.Column>
                  </Grid.Row>
                </Grid>
                <Payments amount={amount} term={term} interest={interest} approvedDate={approvedDate} />
              </Responsive>
            </Card.Content>
          ) : (
            <Message icon className="box">
              <Icon name="info circle" />
              <Message.Content>
                <Message.Header>Aún no posee préstamos aprobados!</Message.Header>
                Consulte a su asesor de crédito o visite la sección de contáctenos para mayor información.
              </Message.Content>
            </Message>
          ) }
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loan: state.loan,
});

export default connect(mapStateToProps)(LoanApproved);
