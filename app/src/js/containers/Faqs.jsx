import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';

import Question from '../components/Question';

const Faqs = (props) => {
  props.toggleMenuState(false);
  const faqsList = [
    {
      id: 1,
      question: '¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      question: '¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      question: '¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      question: '¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];
  const allFaqs = faqsList.map(item => (
    <Question
      question={item.question}
      answer={item.answer}
      key={item.id}
    />
  ));
  return (
    <div className="faqs-page">
      <div className="title">
        <h2><span>Preguntas más frecuentes entre nuestros usuarios</span></h2>
      </div>
      <div className="content">
        {allFaqs}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(Faqs));
