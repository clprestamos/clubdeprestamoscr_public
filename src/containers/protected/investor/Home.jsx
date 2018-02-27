import React, { Component } from 'react';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import Hero from '../../../components/Hero';
import Card from '../../../components/Card';

import * as OpportunitiesActions from '../../../actions/Opportunities';
import * as MyInvestsActions from '../../../actions/MyInvests';

class Home extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      OpportunitiesActions,
      MyInvestsActions,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(OpportunitiesActions.getOpportunities());
  }
  componentWillReceiveProps(nextProps) {
    const { userId } = nextProps.userProfile;
    if (userId) {
      const { dispatch } = this.props;
      dispatch(MyInvestsActions.getMyInvests(userId));
    }
  }
  render() {
    const waitingLoans = _.filter(this.props.opportunities.loans, { stateId: 4 });
    const formalized = _.filter(this.props.myinvests, { stateId: 3 });
    const cards = [
      {
        icon: 'credit card',
        header: 'Oportunidades disponibles',
        content: 'Aquí podrá encontrar todas las oportunidad de inversión disponibles, estamos seguros que encontrará la ideal para sus planes de crecimiento financiero.',
        btnTo: '/inversionista/oportunidades/disponibles',
        qty: waitingLoans.length,
      },
      {
        icon: 'thumbs outline up',
        header: 'Inversiones formalizadas',
        content: 'Explore y administre sus inversiones accesando esta sección.',
        btnTo: '/inversionista/mis-inversiones/formalizadas',
        qty: formalized.length,
      },
    ];
    return (
      <div className="home">
        <Hero userProfile={this.props.userProfile} />
        <section>
          <Card cards={cards} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  opportunities: state.opportunities,
  myinvests: state.myinvests.loans,
});

export default connect(mapStateToProps)(Home);
