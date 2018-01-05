import React from 'react';

const TitleHeader = (props) => {
  const {
    title,
    subHeader,
    imageHeader,
  } = props;
  return (
    <div className="sub-header">
      <div className="left-content">
        <div className="divider" />
        <h2>{title}</h2>
        <div className="divider" />
        <p>{subHeader}</p>
      </div>
      <div className="right-content">
        <img src={imageHeader} alt={title} />
      </div>
    </div>
  );
};

export default TitleHeader;
