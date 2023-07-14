import React from 'react';
import { Props } from '../../types/Interfaces';
import Navbar from '../Navbar';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Layout = ({ children }: Props) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className="text-tw_primary text-xs sm:text-lg flex flex-row items-center justify-center font-inter sm:tracking-widest p-1">
        <span>Copyright </span>
        <span className="px-1">
          <AiOutlineCopyrightCircle />
        </span>{' '}
        <span> 2023 - Thoughtworks Inc. All rights reserverd.</span>
      </footer>
    </div>
  );
};

export default Layout;
