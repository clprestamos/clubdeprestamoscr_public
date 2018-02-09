import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Message, Icon, Header, Statistic, Rating, Popup } from 'semantic-ui-react';

import * as Loan from '../../../actions/Loan';
import Paypal from '../../../components/Paypal';

class Score extends Component {
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
      interest,
      score,
    } = this.props.loan;
    return (
      <div className="score">
        <Card>
          <Card.Content>
            <Card.Header>
              Calificación crediticia
            </Card.Header>
          </Card.Content>
          <Card.Content>
            { score ? (
              <div>
                <Message icon className="box">
                  <Icon name="line chart" />
                  <Message.Content className="text">
                    Este es el resultado de su análisis crediticio. Para su préstamo usted posee:
                  </Message.Content>
                  <Message.Content className="score-result">
                    <Statistic>
                      <Statistic.Value>
                        <Rating maxRating={5} defaultRating={score} icon="star" size="huge" disabled />
                      </Statistic.Value>
                      <Statistic.Label>Calificación</Statistic.Label>
                    </Statistic>
                  </Message.Content>
                  <Message.Content className="interest-result">
                    <Statistic>
                      <Statistic.Value>{interest}%</Statistic.Value>
                      <Statistic.Label>Interés</Statistic.Label>
                    </Statistic>
                  </Message.Content>
                </Message>
                <Popup
                  trigger={
                    <Header as="h4" icon style={{ width: '100%' }}>
                      <Icon name="paypal" />
                      Número de referencia de Paypal.
                      <Header.Subheader>
                        {!this.props.paymentId ? 'Aún no ingresado al sistema' : this.props.paymentId}
                      </Header.Subheader>
                    </Header>
                  }
                  content="Este es el número de referencia que usted reportó al hacer el pago de su membrecía."
                  position="bottom center"
                />
              </div>
            ) : (
              <div>
                <Message icon className="box">
                  <Icon name="info circle" />
                  <Message.Content>
                    <Message.Header>Aún no está el resultado de su análisis crediticio!</Message.Header>
                    Consulte a su asesor de crédito o visite la sección de contáctenos para mayor información.
                  </Message.Content>
                </Message>
                <div className="payment-process">
                  <Header as="h2" icon>
                    <Icon name="paypal" />
                    Solicitud de análisis crediticio.
                    <Header.Subheader>
                      Si aún no ha cancelado los $15 para realizar su análisis, su préstamo no será presentado ante nuestros inversionistas.
                      Basado en este análisis su score e interés será calculado.
                    </Header.Subheader>
                  </Header>
                  <Paypal />
                </div>
              </div>
            ) }
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loan: state.loan,
  paymentId: state.userProfile.paymentId,
});

export default connect(mapStateToProps)(Score);
