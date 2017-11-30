import React from 'react';
import PropTypes from 'prop-types';

const Steps = (props) => {
  const { step1, step2, step3 } = props;
  const ovals = (
    <li className="ovals">
      <ul>
        <li className="oval" />
        <li className="oval" />
        <li className="oval" />
      </ul>
    </li>
  );
  return (
    <div className="steps">
      {props.title}
      <ul className="numbers">
        <li><button className={`${step1.isActive ? 'active' : ''} ${step1.isComplete ? 'complete' : ''}`} onClick={step1.handleClick}>1</button></li>
        {ovals}
        <li><button className={`${step2.isActive ? 'active' : ''} ${step2.isComplete ? 'complete' : ''}`} onClick={step2.handleClick}>2</button></li>
        {ovals}
        <li><button className={`${step3.isActive ? 'active' : ''} ${step3.isComplete ? 'complete' : ''}`} onClick={step3.handleClick}>3</button></li>
      </ul>
    </div>
  );
};

Steps.propTypes = {
  title: PropTypes.object.isRequired,
  step1: PropTypes.shape({
    isActive: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleClick: PropTypes.func,
  }),
  step2: PropTypes.shape({
    isActive: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleClick: PropTypes.func,
  }),
  step3: PropTypes.shape({
    isActive: PropTypes.bool,
    isComplete: PropTypes.bool,
    handleClick: PropTypes.func,
  }),
};

export default Steps;
