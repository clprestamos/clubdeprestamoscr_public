import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as GeneralActionCreators from '../actions';
import * as RegisterClientActionCreators from '../actions/RegisterClientActionCreators';

import Hero from '../components/Subscription/Hero';
import SubscriptionFormClient from '../components/Subscription/SubscriptionForm/SubscriptionFormClient';

class RequestLoan extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      GeneralActionCreators,
      RegisterClientActionCreators,
    }, dispatch);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GeneralActionCreators.toggleMenuState(false));
  }
  render() {
    const { dispatch, clientInfo } = this.props;
    let currentStep = 'uno';
    switch (this.props.currentStep) {
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
    const clientInfoStepEvent = {
      ...clientInfo,
      step1: {
        ...clientInfo.step1,
        handleClick: () => {
          dispatch(RegisterClientActionCreators.clientChangeCurrentStep(1));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClientActionCreators.clientChangeCurrentStep(2));
          dispatch(RegisterClientActionCreators.clientIsCompletedStep(1));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClientActionCreators.setClientInformation(fieldChange));
        },
      },
      step2: {
        ...clientInfo.step2,
        handleClick: () => {
          dispatch(RegisterClientActionCreators.clientChangeCurrentStep(2));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClientActionCreators.clientChangeCurrentStep(3));
          dispatch(RegisterClientActionCreators.clientIsCompletedStep(2));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClientActionCreators.stepIsDisabled({ step: 'step2', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterClientActionCreators.setClientInformation(fieldChange));
        },
      },
      step3: {
        ...clientInfo.step3,
        handleClick: () => {
          dispatch(RegisterClientActionCreators.clientChangeCurrentStep(3));
        },
        handleNextOnclick: () => {
          console.log('SUCCESS');
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClientActionCreators.stepIsDisabled({ step: 'step3', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterClientActionCreators.setClientInformation(fieldChange));
        },
      },
    };
    return (
      <div className="internal-page register client">
        <Hero
          title="Solicite su préstamo"
          content={<p><span>Haga realidad ese proyecto con el que tanto ha soñado</span>, enfrente un imprevisto en su vehículo, herramientas de trabajo o una emergencia personal que no puede esperar más, todo con nuestro Club de Préstamos especializado en crear soluciones donde otros simplemente cierran la puerta.</p>}
        />
        <SubscriptionFormClient
          currentStep={currentStep}
          maxSteps="tres"
          clientInfo={clientInfoStepEvent}
          captcha={this.props.captcha}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  letterStep: state.clientSubscription.letterStep,
  currentStep: state.clientSubscription.currentStep,
  clientInfo: state.clientSubscription,
  captcha: state.recaptcha.captcha,
});

export default withRouter(connect(mapStateToProps)(RequestLoan));
