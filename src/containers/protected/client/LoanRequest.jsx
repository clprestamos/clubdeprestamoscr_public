import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Table, Responsive, Grid } from 'semantic-ui-react';

import * as Loan from '../../../actions/Loan';
import * as utils from '../../../utils';

class LoanRequest extends Component {
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
      term,
      requestLoanDate,
      reason,
      stateName,
    } = this.props.loan;
    return (
      <div className="loans">
        <Card>
          <Card.Content>
            <Card.Header>
              Solicitud de crédito
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Responsive minWidth={601}>
              <Table>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Monto</Table.HeaderCell>
                    <Table.HeaderCell>Tasa %</Table.HeaderCell>
                    <Table.HeaderCell>Plazo</Table.HeaderCell>
                    <Table.HeaderCell>Fecha de Solicitud</Table.HeaderCell>
                    <Table.HeaderCell>Motivo</Table.HeaderCell>
                    <Table.HeaderCell>Estado</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row active>
                    <Table.Cell>{loanId}</Table.Cell>
                    <Table.Cell>{utils.amountToMoney(amount)}</Table.Cell>
                    <Table.Cell>{interest ? `${interest}%` : '0%'}</Table.Cell>
                    <Table.Cell>{term}</Table.Cell>
                    <Table.Cell>{utils.parseDate(requestLoanDate)}</Table.Cell>
                    <Table.Cell>{reason}</Table.Cell>
                    <Table.Cell>{stateName}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Responsive>
            <Responsive maxWidth={600}>
              <Grid celled>
                <Grid.Row>
                  <Grid.Column width={6}>ID:</Grid.Column>
                  <Grid.Column width={10}>{loanId}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Monto:</Grid.Column>
                  <Grid.Column width={10}>{utils.amountToMoney(amount)}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Tasa %:</Grid.Column>
                  <Grid.Column width={10}>{interest ? `${interest}%` : '0%'}</Grid.Column>
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
                  <Grid.Column width={6}>Motivo:</Grid.Column>
                  <Grid.Column width={10}>{reason}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Estado:</Grid.Column>
                  <Grid.Column width={10}>{stateName}</Grid.Column>
                </Grid.Row>
              </Grid>
            </Responsive>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loan: state.loan,
});

export default connect(mapStateToProps)(LoanRequest);
