import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';

const InvestorSteps = (props) => {
  const { investorInfo } = props;
  const { step1, step2 } = investorInfo;
  let stepContent = (
    <Step1
      btnOnClick={step1.handleNextOnclick}
      btnText="Siguiente"
      btnType="default"
      onChangeField={step1.onChangeField}
      investorInfo={investorInfo}
      isComplete={step1.isComplete}
    />
  );
  if (step1.isActive) {
    stepContent = (
      <Step1
        btnOnClick={step1.handleNextOnclick}
        btnText="Siguiente"
        btnType="default"
        onChangeField={step1.onChangeField}
        investorInfo={investorInfo}
        isComplete={step1.isComplete}
      />
    );
  } else if (step2.isActive) {
    stepContent = (
      <Step2
        btnOnClick={step2.handleNextOnclick}
        btnText="Enviar datos"
        btnType="default"
        onChangeField={step2.onChangeField}
        investorInfo={investorInfo}
        isComplete={step2.isComplete}
        captcha={props.captcha}
      />
    );
  }
  return stepContent;
};

InvestorSteps.propTypes = {
  investorInfo: PropTypes.object.isRequired,
  captcha: PropTypes.string.isRequired,
};

export default InvestorSteps;
