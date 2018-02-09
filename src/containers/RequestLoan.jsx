import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as GeneralActionCreators from '../actions';
import * as RegisterClient from '../actions/RegisterClient';
import * as Locales from '../actions/Locales';

import Hero from '../components/Subscription/Hero';
import SubscriptionFormClient from '../components/Subscription/SubscriptionForm/SubscriptionFormClient';
import SubscriptionSuccess from '../components/Subscription/SubscriptionSuccess';

import requestLoanImg from '../images/request-loan.jpg';

class RequestLoan extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      GeneralActionCreators,
      RegisterClient,
      Locales,
    }, dispatch);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GeneralActionCreators.toggleMenuState(false));
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(Locales.getProvinces());
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(RegisterClient.clearClientSubscription());
  }
  getCantons(province) {
    const { dispatch } = this.props;
    dispatch(Locales.getCantons(province));
  }
  getDistricts(canton) {
    const { dispatch, clientInfo } = this.props;
    dispatch(Locales.getDistricts(clientInfo.province, canton));
  }
  getZipCode() {
    const { dispatch } = this.props;
    dispatch(RegisterClient.getZipCode());
  }
  render() {
    const {
      dispatch,
      clientInfo,
    } = this.props;
    const {
      newUser,
      newLoan,
      newClient,
    } = clientInfo;
    const provinces = _.orderBy(this.props.provinces, _.identity, ['asc']);
    const cantons = _.orderBy(this.props.cantons, _.identity, ['asc']);
    const districts = _.orderBy(this.props.districts, _.identity, ['asc']);
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
      case 4:
        currentStep = 'cuatro';
        break;
      default:
        currentStep = 'uno';
    }
    const clientInfoStepEvent = {
      ...clientInfo,
      step1: {
        ...clientInfo.step1,
        handleClick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(1));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(2));
          dispatch(RegisterClient.clientIsCompletedStep(1));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClient.setClientInformation(fieldChange));
        },
      },
      step2: {
        ...clientInfo.step2,
        handleClick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(2));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(3));
          dispatch(RegisterClient.clientIsCompletedStep(2));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClient.stepIsDisabled({ step: 'step2', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterClient.setClientInformation(fieldChange));
        },
        getCantons: (province) => {
          this.getCantons(province);
        },
        getDistricts: (canton) => {
          this.getDistricts(canton);
        },
        getZipCode: () => {
          this.getZipCode();
        },
        provinces,
        cantons,
        districts,
      },
      step3: {
        ...clientInfo.step3,
        handleClick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(3));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(4));
          dispatch(RegisterClient.clientIsCompletedStep(3));
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClient.setClientInformation(fieldChange));
        },
      },
      step4: {
        ...clientInfo.step4,
        handleClick: () => {
          dispatch(RegisterClient.clientChangeCurrentStep(4));
        },
        handleNextOnclick: () => {
          dispatch(RegisterClient.registerUserClient());
        },
        onChangeField: (fieldChange) => {
          dispatch(RegisterClient.stepIsDisabled({ step: 'step4', isDisabled: fieldChange.isDisabled }));
          dispatch(RegisterClient.setClientInformation(fieldChange));
        },
      },
    };
    const componentContent = newUser.saved && newLoan.saved && newClient.saved ? (
      <SubscriptionSuccess roleId="client" />
    ) : (
      <SubscriptionFormClient
        currentStep={currentStep}
        maxSteps="cuatro"
        clientInfo={clientInfoStepEvent}
        captcha={this.props.captcha}
        clientSubscriptionError={this.props.clientSubscriptionError}
      />
    );
    const styles = { backgroundImage: `url(${requestLoanImg})` };
    return (
      <div className="internal-page register client">
        <Hero
          title="Solicite su préstamo"
          content={<p><span>Haga realidad ese proyecto con el que tanto ha soñado</span>, enfrente un imprevisto en su vehículo, herramientas de trabajo o una emergencia personal que no puede esperar más, todo con nuestro Club de Préstamos especializado en crear soluciones donde otros simplemente cierran la puerta.</p>}
          styles={styles}
        />
        {componentContent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  letterStep: state.clientSubscription.letterStep,
  currentStep: state.clientSubscription.currentStep,
  provinces: state.locales.provinces,
  cantons: state.locales.cantons,
  districts: state.locales.districts,
  clientInfo: state.clientSubscription,
  captcha: state.recaptcha.captcha,
  clientSubscriptionError: state.clientSubscription.error,
});

export default withRouter(connect(mapStateToProps)(RequestLoan));
