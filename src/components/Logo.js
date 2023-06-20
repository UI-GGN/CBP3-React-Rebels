import React from 'react';
import logo from './../logo.svg';
const Logo = () => {
  return (
    <div className="tw-container-style">
      <h1
        style={{
          fontWeight: '700',
          fontStyle: 'italic',
          fontFamily: 'inter',
          color: '#F2617A',
        }}
      >
        Hatch-A-Cab
      </h1>
      <img src={logo} alt="Car Icon with red outline" />
    </div>
  );
};

export default Logo;
