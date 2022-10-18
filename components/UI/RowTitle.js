import React from 'react';

const RowTitle = (props) => {
  const { children, color } = props;
  return (
    <h2
      className="row-title"
      style={{ backgroundColor: color, padding: '1rem' }}
    >
      {children}
    </h2>
  );
};

export default RowTitle;
