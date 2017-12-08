import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';

const InvestorSteps = (props) => {
  const { steps } = props;
  let stepContent = <Step1 btnOnClick={steps.step1.handleNextOnclick} btnText="Siguiente" btnType="default" />;
  if (steps.step1.isActive) {
    stepContent = <Step1 btnOnClick={steps.step1.handleNextOnclick} btnText="Siguiente" btnType="default" />;
  } else if (steps.step2.isActive) {
    stepContent = <Step2 btnOnClick={steps.step2.handleNextOnclick} btnText="Enviar datos" btnType="default" />;
  }
  return stepContent;
};

InvestorSteps.propTypes = {
  steps: PropTypes.object.isRequired,
};

export default InvestorSteps;
