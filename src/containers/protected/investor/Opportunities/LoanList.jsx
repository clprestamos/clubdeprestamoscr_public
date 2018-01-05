import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table, Image, Rating, Icon, Segment } from 'semantic-ui-react';
import moment from 'moment';

const LoanList = (props) => {
  if (props.loans.length) {
    return (
      <Table striped className="available">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Solicitante</Table.HeaderCell>
            <Table.HeaderCell>Score Crediticio</Table.HeaderCell>
            <Table.HeaderCell>Monto</Table.HeaderCell>
            <Table.HeaderCell>Plazo</Table.HeaderCell>
            <Table.HeaderCell>Tasa</Table.HeaderCell>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell>Invertir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { props.loans.map((loan, index) => {
            const key = index + 1;
            return (
              <Table.Row key={key}>
                <Table.Cell>
                  <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" size="mini" circular />
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
                  { moment(new Date(loan.requestLoanDate)).format('MMM DD, YYYY') }
                </Table.Cell>
                <Table.Cell>
                  <Link to={`/inversionista/prestamo/${loan.loanId}`}><Icon name="usd" /></Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
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
