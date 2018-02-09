import React from 'react';
import moment from 'moment';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Table, Header, Icon } from 'semantic-ui-react';
import * as utils from '../../utils';

const Payments = (props) => {
  const {
    term,
    amount,
    interest,
    approvedDate,
  } = props;
  const months = term && term.split('-')[0];
  const payment = utils.getPmt({
    ir: (interest / 100) / 12,
    np: months,
    pv: amount,
  });
  const paymentMonths = [];
  for (let i = 0; i < months; i += 1) {
    paymentMonths.push(moment(approvedDate).add(i + 1, 'months').format('DD-MM-YYYY'));
  }
  let currentAmount = amount;
  const paymentRows = _.map(paymentMonths, (paymentMonth, key) => {
    const interestPay = (currentAmount * (interest / 100)) / 12;
    const amort = payment - interestPay;
    const balance = currentAmount - amort;
    currentAmount = balance;
    return (
      <Table.Row key={key + 1}>
        <Table.Cell>
          {paymentMonth}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {utils.amountToMoney(payment)}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {utils.amountToMoney(interestPay)}
        </Table.Cell>
        <Table.Cell textAlign="center">
          {utils.amountToMoney(amort)}
        </Table.Cell>
        <Table.Cell textAlign="center">{utils.amountToMoney(balance)}</Table.Cell>
      </Table.Row>
    );
  });
  return (
    <div className="payments">
      <Header as="h2" icon textAlign="center">
        <Icon name="payment" />
        Proyección de pagos
        <Header.Subheader>
          Esta es solamente proyección de los pagos a realizar, no implica que estos sean los pagos finales a realizar.
        </Header.Subheader>
      </Header>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Fecha de pago
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Monto a pagar
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Interés
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Amortización
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              Balance
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell textAlign="center">{utils.amountToMoney(amount)}</Table.Cell>
          </Table.Row>
          {paymentRows}
        </Table.Body>
      </Table>
    </div>
  );
};

Payments.propTypes = {
  amount: PropTypes.string,
  interest: PropTypes.number,
  term: PropTypes.string,
  approvedDate: PropTypes.string,
};

export default Payments;
