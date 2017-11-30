import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState, changeCurrentStep } from '../actions';

import Hero from '../components/Subscription/Hero';
import SubscriptionForm from '../components/Subscription/SubscriptionForm';

const RequestLoan = (props) => {
  props.toggleMenuState(false);
  let currentStep = 'uno';
  switch (props.currentStep) {
    case 1:
      currentStep = 'uno';
      break;
    case 2:
      currentStep = 'dos';
      break;
    case 3:
      currentStep = 'tres';
      break;
    default:
      currentStep = 'uno';
  }
  const step1 = {
    ...props.step1,
    handleClick: () => {
      props.changeCurrentStep(1);
      console.log('Step 1 clicked!');
    },
    handleNextOnclick: () => {
      props.changeCurrentStep(2);
    },
  };
  const step2 = {
    ...props.step2,
    handleClick: () => {
      props.changeCurrentStep(2);
      console.log('Step 2 clicked!');
    },
    handleNextOnclick: () => {
      props.changeCurrentStep(3);
    },
  };
  const step3 = {
    ...props.step3,
    handleClick: () => {
      props.changeCurrentStep(3);
      console.log('Step 3 clicked!');
    },
    handleNextOnclick: () => {
      console.log('SUCCESS');
    },
  };
  return (
    <div className="internal-page request-loan">
      <Hero
        title="Solicite su préstamo"
        content={<p><span>Haga realidad ese proyecto con el que tanto ha soñado</span>, enfrente un imprevisto en su vehículo, herramientas de trabajo o una emergencia personal que no puede esperar más, todo con nuestro Club de Préstamos especializado en crear soluciones donde otros simplemente cierran la puerta.</p>}
      />
      <SubscriptionForm
        currentStep={currentStep}
        maxSteps="tres"
        steps={{
          step1,
          step2,
          step3,
        }}
        isClientSteps
      />
    </div>
  );
};

const mapStateToProps = state => ({
  letterStep: state.clientSubscription.letterStep,
  currentStep: state.clientSubscription.currentStep,
  step1: state.clientSubscription.step1,
  step2: state.clientSubscription.step2,
  step3: state.clientSubscription.step3,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
    changeCurrentStep,
  }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequestLoan));
