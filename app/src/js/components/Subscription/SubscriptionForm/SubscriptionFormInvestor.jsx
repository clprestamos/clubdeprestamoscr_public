import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../../Divider';
import Steps from '../Steps';
import InvestorSteps from '../InvestorSteps';

const SubscriptionFormInvestor = props => (
  <div className="subscription-form">
    <div>
      <h3>Por favor proporcionar su información básica de contacto</h3>
      <Divider />
      <Steps
        title={<p><b>¡Ya casi está listo!</b> Continuar con el paso <span>{props.currentStep}</span> de {props.maxSteps}</p>}
        step1={props.steps.step1}
        step2={props.steps.step2}
      />
      <InvestorSteps steps={props.steps} />
    </div>
  </div>
);

SubscriptionFormInvestor.propTypes = {
  currentStep: PropTypes.string.isRequired,
  maxSteps: PropTypes.string.isRequired,
  steps: PropTypes.object.isRequired,
};

export default SubscriptionFormInvestor;
