import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import ScrollTo from './ScrollTo';

const Section = props => (
  <section
    className="home-section"
    style={{ backgroundImage: `url(${props.bgImg})` }}
    id={props.itemId}
  >
    <h2>{props.title}</h2>
    <div className="divider" />
    <p>{props.content}</p>
    <Button
      onClick={props.btnOnClick}
      text={props.buttonText}
      buttonType={props.buttonType}
      to={props.buttonTo}
    />
    <ScrollTo scrollTo={props.scrollTo} />
  </section>
);

Section.propTypes = {
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  btnOnClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonTo: PropTypes.string.isRequired,
  scrollTo: PropTypes.string,
};

export default Section;
