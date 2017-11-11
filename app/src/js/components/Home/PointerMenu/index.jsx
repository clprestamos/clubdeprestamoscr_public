import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

const PointerMenu = (props) => {
  const menu = props.menuItems.map(item => (
    <Link to={item.anchor} className={`oval ${item.isSelected ? 'filled' : ''}`} key={item.id} />
  ));
  return (
    <div className="pointer-menu">
      {menu}
    </div>
  );
};

PointerMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
};

export default PointerMenu;
