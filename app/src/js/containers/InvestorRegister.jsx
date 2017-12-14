import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as GeneralActionCreators from '../actions';
import * as RegisterInvestorActionCreators from '../actions/RegisterInvestorActionCreators';

import Hero from '../components/Subscription/Hero';
import SubscriptionFormInvestor from '../components/Subscription/SubscriptionForm/SubscriptionFormInvestor';

class InvestorRegister extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      GeneralActionCreators,
      RegisterInvestorActionCreators,
    }, dispatch);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GeneralActionCreators.toggleMenuState(false));
  }
  render() {
    const { dispatch, investorInfo } = this.props;
    let currentStep = 'uno';
    switch (this.props.currentStep) {
      case 1:
        currentStep = 'uno';
        break;
      case 2:
        currentStep = 'dos';
        break;
      default:
        currentStep = 'uno';
    }
    const investorInfoStepEvent = {
      ...investorInfo,
      step1: {
        ...investorInfo.step1,
        handleClick: () => {
          dispatch(RegisterInvestorActionCreators.investorChangeCurrentStep(1));
        },
        handleNextOnclick: () => {
          dispatch(RegisterInvestorActionCreators.investorChangeCurrentStep(2));
          dispatch(RegisterInvestorActionCreators.investorIsCompletedStep(1));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterInvestorActionCreators.setInvestorInformation(fieldChange));
        },
      },
      step2: {
        ...investorInfo.step2,
        handleClick: () => {
          dispatch(RegisterInvestorActionCreators.investorChangeCurrentStep(2));
        },
        handleNextOnclick: () => {
          console.log('SUCCESS');
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterInvestorActionCreators.stepIsDisabled({ step: 'step2', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterInvestorActionCreators.setInvestorInformation(fieldChange));
        },
      },
    };
    return (
      <div className="internal-page register investor">
        <Hero
          title="Invierta con nosotros"
          content={
            <div>
              <p>La economía social genera oportunidades para el bienestar de la población.</p>
              <p>El Club de Préstamos le ofrece una gran alternativa <span>para invertir con un mayor y mejor retorno mientras se transforman vidas,</span> proyectos y comunidades.</p>
            </div>
          }
        />
        <SubscriptionFormInvestor
          currentStep={currentStep}
          maxSteps="dos"
          investorInfo={investorInfoStepEvent}
          captcha={this.props.captcha}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  letterStep: state.investorSubscription.letterStep,
  currentStep: state.investorSubscription.currentStep,
  investorInfo: state.investorSubscription,
  captcha: state.recaptcha.captcha,
});

export default withRouter(connect(mapStateToProps)(InvestorRegister));
