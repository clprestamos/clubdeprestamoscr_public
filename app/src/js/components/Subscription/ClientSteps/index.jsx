import React from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const ClientSteps = (props) => {
  const { clientInfo } = props;
  const { step1, step2, step3 } = clientInfo;
  let stepContent = (
    <Step1
      btnOnClick={step1.handleNextOnclick}
      btnText="Siguiente"
      btnType="default"
      onChangeField={step1.onChangeField}
      clientInfo={clientInfo}
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
        clientInfo={clientInfo}
        isComplete={step1.isComplete}
      />
    );
  } else if (step2.isActive) {
    stepContent = (
      <Step2
        btnOnClick={step2.handleNextOnclick}
        btnText="Siguiente"
        btnType="default"
        onChangeField={step2.onChangeField}
        clientInfo={clientInfo}
        isComplete={step2.isComplete}
      />
    );
  } else if (step3.isActive) {
    stepContent = (
      <Step3
        btnOnClick={step3.handleNextOnclick}
        btnText="Enviar datos"
        btnType="default"
        onChangeField={step3.onChangeField}
        clientInfo={clientInfo}
        isComplete={step3.isComplete}
        captcha={props.captcha}
      />
    );
  }
  return stepContent;
};

ClientSteps.propTypes = {
  clientInfo: PropTypes.object.isRequired,
  captcha: PropTypes.string.isRequired,
};

export default ClientSteps;
