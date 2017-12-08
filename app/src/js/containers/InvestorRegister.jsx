import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState, investorChangeCurrentStep } from '../actions';

import Hero from '../components/Subscription/Hero';
import SubscriptionFormInvestor from '../components/Subscription/SubscriptionForm/SubscriptionFormInvestor';

const InvestorRegister = (props) => {
  props.toggleMenuState(false);
  let currentStep = 'uno';
  switch (props.currentStep) {
    case 1:
      currentStep = 'uno';
      break;
    case 2:
      currentStep = 'dos';
      break;
    default:
      currentStep = 'uno';
  }
  const step1 = {
    ...props.step1,
    handleClick: () => {
      props.investorChangeCurrentStep(1);
      console.log('Step 1 clicked!');
    },
    handleNextOnclick: () => {
      props.investorChangeCurrentStep(2);
    },
  };
  const step2 = {
    ...props.step2,
    handleClick: () => {
      props.investorChangeCurrentStep(2);
      console.log('Step 2 clicked!');
    },
    handleNextOnclick: () => {
      console.log('SUCCESS');
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
        steps={{
          step1,
          step2,
        }}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  letterStep: state.investorSubscription.letterStep,
  currentStep: state.investorSubscription.currentStep,
  step1: state.investorSubscription.step1,
  step2: state.investorSubscription.step2,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
    investorChangeCurrentStep,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InvestorRegister));
