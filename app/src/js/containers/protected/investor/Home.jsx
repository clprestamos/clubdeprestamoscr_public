import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Hero from '../../../components/Hero';
import Card from '../../../components/Card';

import * as OpportunitiesActions from '../../../actions/Opportunities';

class Home extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      OpportunitiesActions,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(OpportunitiesActions.getOpportunities());
  }
  render() {
    const newLoans = _.filter(this.props.opportunities.loans, { stateId: 1 });
    const waitingLoans = _.filter(this.props.opportunities.loans, { stateId: 4 });
    const formalized = _.filter(this.props.opportunities.loans, { stateId: 3 });
    const cards = [
      {
        icon: 'credit card',
        header: 'Oportunidades disponibles',
        content: 'Aquí podrá encontrar todas las oportunidad de inversión disponibles, estamos seguros que encontrará la ideal para sus planes de crecimiento financiero.',
        btnTo: '/inversionista/oportunidades/disponibles',
        qty: newLoans.length + waitingLoans.length,
      },
      {
        icon: 'thumbs outline up',
        header: 'Inversiones formalizadas',
        content: 'Explore y administre sus inversiones accesando esta sección.',
        btnTo: '/inversionista/formalizadas',
        qty: formalized.length,
      },
    ];
    return (
      <div className="home">
        <Hero authData={this.props.authData} />
        <section>
          <Card cards={cards} />
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  authData: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  opportunities: state.opportunities,
});

export default connect(mapStateToProps)(Home);
