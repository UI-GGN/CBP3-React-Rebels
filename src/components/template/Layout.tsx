import React from 'react';
import { Props } from '../../types/Interfaces';
import Navbar from '../Navbar';

const Layout = ({ children }: Props) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="text-center">
        <br />© {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.thoughtworks.com">Thoughtworks</a>
      </footer>
    </div>
  );
};

export default Layout;
