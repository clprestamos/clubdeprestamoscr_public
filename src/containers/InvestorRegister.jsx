import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as GeneralActionCreators from '../actions';
import * as RegisterInvestor from '../actions/RegisterInvestor';

import Hero from '../components/Subscription/Hero';
import SubscriptionFormInvestor from '../components/Subscription/SubscriptionForm/SubscriptionFormInvestor';
import SubscriptionSuccess from '../components/Subscription/SubscriptionSuccess';

class InvestorRegister extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      GeneralActionCreators,
      RegisterInvestor,
    }, dispatch);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GeneralActionCreators.toggleMenuState(false));
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(RegisterInvestor.clearInvestorSubscription());
  }
  render() {
    const {
      dispatch,
      investorInfo,
    } = this.props;
    const { newInvestor } = investorInfo;
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
          dispatch(RegisterInvestor.investorChangeCurrentStep(1));
        },
        handleNextOnclick: () => {
          dispatch(RegisterInvestor.investorChangeCurrentStep(2));
          dispatch(RegisterInvestor.investorIsCompletedStep(1));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterInvestor.setInvestorInformation(fieldChange));
        },
      },
      step2: {
        ...investorInfo.step2,
        handleClick: () => {
          dispatch(RegisterInvestor.investorChangeCurrentStep(2));
        },
        handleNextOnclick: () => {
          dispatch(RegisterInvestor.registerUserInvestor());
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterInvestor.stepIsDisabled({ step: 'step2', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterInvestor.setInvestorInformation(fieldChange));
        },
      },
    };
    const componentContent = newInvestor.saved ? (
      <SubscriptionSuccess />
    ) : (
      <SubscriptionFormInvestor
        currentStep={currentStep}
        maxSteps="dos"
        investorInfo={investorInfoStepEvent}
        captcha={this.props.captcha}
      />
    );
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
        {componentContent}
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
