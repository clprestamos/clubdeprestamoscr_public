import React from 'react';
import PropTypes from 'prop-types';

import Divider from '../../Divider';
import Button from '../../Button';

const Section = props => (
  <section
    className="home-section"
    style={{ background: `url(${props.bgImg})` }}
    id={props.itemId}
  >
    <h2>{props.title}</h2>
    <Divider />
    <p>{props.content}</p>
    <Button
      onClick={props.btnOnClick}
      text={props.buttonText}
      buttonType={props.buttonType}
      to={props.buttonTo}
    />
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
};

export default Section;
