import React from 'react';
import logo from './../logo.svg';
const Logo = () => {
  return (
    <div style={{ float: 'left' }}>
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
