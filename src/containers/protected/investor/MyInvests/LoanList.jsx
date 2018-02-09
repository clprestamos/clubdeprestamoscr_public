import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Image, Rating, Icon, Segment, Responsive, Grid } from 'semantic-ui-react';

import * as utils from '../../../../utils';

const LoanList = (props) => {
  if (props.loans.length) {
    return (
      <div>
        <Responsive minWidth={601}>
          <Table striped className="available">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Solicitante</Table.HeaderCell>
                <Table.HeaderCell>Calificación</Table.HeaderCell>
                <Table.HeaderCell>Monto</Table.HeaderCell>
                <Table.HeaderCell>Plazo</Table.HeaderCell>
                <Table.HeaderCell>Tasa</Table.HeaderCell>
                <Table.HeaderCell>Fecha</Table.HeaderCell>
                <Table.HeaderCell>Inversión</Table.HeaderCell>
                <Table.HeaderCell>Detalle</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { props.loans.map((loan, index) => {
                const key = index + 1;
                return (
                  <Table.Row key={key}>
                    <Table.Cell>
                      <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" avatar />
                      {index + 1}. {loan.name} {loan.lastName}
                    </Table.Cell>
                    <Table.Cell>
                      <Rating maxRating={5} defaultRating={loan.score} icon="star" size="tiny" disabled />
                    </Table.Cell>
                    <Table.Cell>
                      ₡ {loan.amount}
                    </Table.Cell>
                    <Table.Cell>
                      {loan.term}
                    </Table.Cell>
                    <Table.Cell>
                      {loan.interest}%
                    </Table.Cell>
                    <Table.Cell>
                      {utils.parseDate(loan.requestLoanDate)}
                    </Table.Cell>
                    <Table.Cell>
                      {loan.investorPercentage}%
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={`/inversionista/prestamo/${loan.loanId}`}><Icon name="usd" /></Link>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Responsive>
        <Responsive maxWidth={600}>
          { props.loans.map((loan, index) => {
            const key = index + 1;
            return (
              <Grid key={key} celled>
                <Grid.Row>
                  <Grid.Column width={6}>Solicitante:</Grid.Column>
                  <Grid.Column width={10}>
                    <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" avatar /> {index + 1}. {loan.name} {loan.lastName}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Score Crediticio:</Grid.Column>
                  <Grid.Column width={10}>
                    <Rating maxRating={5} defaultRating={loan.score} icon="star" size="large" disabled />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Monto:</Grid.Column>
                  <Grid.Column width={10}>₡ {loan.amount}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Plazo:</Grid.Column>
                  <Grid.Column width={10}>{loan.term}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Tasa:</Grid.Column>
                  <Grid.Column width={10}>{loan.interest}%</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Fecha:</Grid.Column>
                  <Grid.Column width={10}>{utils.parseDate(loan.requestLoanDate)}</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Inversión:</Grid.Column>
                  <Grid.Column width={10}>{loan.investorPercentage}%</Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>Detalle:</Grid.Column>
                  <Grid.Column width={10}>
                    <Link to={`/inversionista/prestamo/${loan.loanId}`}><Icon name="usd" /> Ver detalle</Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            );
          })}
        </Responsive>
      </div>
    );
  }
  return (
    <Segment inverted color="blue"><Icon name="warning sign" /> No posee inversiones disponibles en este momento.</Segment>
  );
};

LoanList.propTypes = {
  loans: PropTypes.array.isRequired,
};

export default LoanList;
