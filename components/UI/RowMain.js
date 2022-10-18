import React from 'react';

const RowMain = (props) => {
  const { subtitle, children, colorLight } = props;
  return (
    <div className="row-main" style={{ backgroundColor: colorLight }}>
      <h3 style={{ paddingBottom: '0.5rem' }}>{subtitle}</h3>
      <div
        style={{ fontFamily: 'Arial, Helvetica, sans-serif', lineHeight: 1.4 }}
      >
        {children}
      </div>
    </div>
  );
};

export default RowMain;
