import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, Header } from 'semantic-ui-react';

import QuestionIcon from '../QuestionIcon';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleAnswerView = this.toggleAnswerView.bind(this);
  }
  toggleAnswerView() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <Responsive minWidth={601}>
          <div className="question">
            <div className={`question-box ${this.state.isOpen ? 'open' : ''}`}>
              <div className="top-gradient" />
              <QuestionIcon />
              <p>{this.props.question}</p>
            </div>
            <div className={`answer ${this.state.isOpen ? 'open' : ''}`}>
              <p className={`${this.state.isOpen ? 'open' : ''}`}>{this.props.answer}</p>
              <button onClick={this.toggleAnswerView}>{`${this.state.isOpen ? 'Cerrar' : 'Ver respuesta'}`}</button>
            </div>
          </div>
        </Responsive>
        <Responsive maxWidth={600}>
          <div className="question">
            <div className="question-box">
              <div className="top-gradient" />
              <Header>
                <QuestionIcon /> <p>{this.props.question}</p>
                <Header.Subheader>
                  {this.props.answer}
                </Header.Subheader>
              </Header>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Question;
