import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Table, Responsive, Grid } from 'semantic-ui-react';
import moment from 'moment';

import * as Loan from '../../../actions/Loan';

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
      id,
      amount,
      interest,
      term,
      requestLoanDate,
      reason,
      stateId,
    } = this.props.loan;
    let stateName = stateId === 1 ? 'Nuevo ingreso' : '';
    stateName = stateId === 2 ? 'Pre-Aprobado' : stateName;
    stateName = stateId === 3 ? 'Aprobado' : stateName;
    stateName = stateId === 4 ? 'En espera' : stateName;
    stateName = stateId === 5 ? 'Rechazado' : stateName;
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
                    <Table.Cell>{id}</Table.Cell>
                    <Table.Cell>₡ {amount}</Table.Cell>
                    <Table.Cell>{interest ? `${interest}%` : '0%'}</Table.Cell>
                    <Table.Cell>{term}</Table.Cell>
                    <Table.Cell>{moment(new Date(requestLoanDate)).format('DD/MM/YYYY')}</Table.Cell>
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
                  <Grid.Column width={10}>{id}</Grid.Column>
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
                  <Grid.Column width={6}>Plazo:</Grid.Column>
                  <Grid.Column width={10}>{term}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Fecha de Solicitud:</Grid.Column>
                  <Grid.Column width={10}>
                    {moment(new Date(requestLoanDate)).format('DD/MM/YYYY')}
                  </Grid.Column>
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
