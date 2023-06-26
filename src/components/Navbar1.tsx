import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { T_NavBarElement } from 'src/types/Interfaces';
import '../styles/components/Navabr1.scss';

const Navbar1 = () => {
  const [istoggle, setIsToggle] = useState(false);

  const toggleState = () => setIsToggle((prevState) => !prevState);
  const location = useLocation();

  const navigationBarElement: T_NavBarElement[] = [
    {
      key: '1',
      link: '/home',
      label: 'Home',
    },
    {
      key: '2',
      link: '/dashboard-admin',
      label: 'Cab Requests',
    },
    {
      key: '3',
      link: '/log-out',
      label: 'Log Out',
    },
  ];
  return (
    <nav className="p-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex h-12 flex-row">
          <span className="font-bitter text-tw_primary text-2xl font-extrabold tracking-wide mt-auto ml-2">
            Hatch-A-Cab
          </span>
        </div>
        <div className="hidden sm:block">
          <div>
            {navigationBarElement.map((element) => {
              const isActive = location.pathname === element.link;
              let classes =
                'no-underline text-lg tracking-wide mx-1 text-tw_primary px-1 pb-1 hover:text-tw_primary hover:border-b-4 hover:border-tw_primary';
              if (isActive)
                classes =
                  classes + ' border-b-4 border-tw_yellow font-semibold';
              return (
                <Link key={element.key} to={element.link} className={classes}>
                  {element.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="block sm:hidden">
          <button onClick={toggleState}>Test</button>
        </div>
      </div>
      {istoggle && (
        <div className="block sm:hidden">
          <ul className="p-0">
            {navigationBarElement.map((element) => {
              return (
                <li key={element.key}>
                  <Link
                    to={element.link}
                    className="no-underline text-lg tracking-wide px-1 py-2 font-bold text-tw_primary hover:border-b-2 hover:border-tw_primary hover:text-tw_primary"
                  >
                    {element.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;
