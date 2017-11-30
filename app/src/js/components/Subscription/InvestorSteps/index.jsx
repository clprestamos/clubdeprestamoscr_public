import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const InvestorSteps = (props) => {
  const { steps } = props;
  let stepContent = <Step1 />;
  if (steps.step1.isActive) {
    stepContent = <Step1 />;
  } else if (steps.step2.isActive) {
    stepContent = <Step2 />;
  } else if (steps.step3.isActive) {
    stepContent = <Step3 />;
  }
  return stepContent;
};

InvestorSteps.propTypes = {
  steps: PropTypes.object.isRequired,
};

export default InvestorSteps;
