/* eslint  */
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';

const handleKeyDown = () => {};
const ScrollTo = props => (
  <div
    role="button"
    tabIndex={0}
    className="scroll-icon"
    onClick={props.handleScroll}
    onKeyDown={handleKeyDown}
  >
    <div className="scroll-to">
      <Icon size="small" name="chevron down" />
    </div>
    <p>Scroll Down</p>
  </div>
);

ScrollTo.propTypes = {
  handleScroll: PropTypes.func.isRequired,
};

export default ScrollTo;
