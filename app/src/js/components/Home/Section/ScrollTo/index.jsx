import React from 'react';
import PropTypes from 'prop-types';

const ScrollTo = props => (
  <div className="scroll">
    <a href={props.scrollTo}><span /></a>
  </div>
);

ScrollTo.propTypes = {
  scrollTo: PropTypes.string.isRequired,
};

export default ScrollTo;
