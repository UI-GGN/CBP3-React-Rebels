import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { T_NavBarElement } from 'src/types/Interfaces';
import '../styles/components/Navabr1.scss';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [istoggle, setIsToggle] = useState(false);
  const toggleState = () => setIsToggle((prevState) => !prevState);
  const location = useLocation();

  const navigationBarElement: T_NavBarElement[] = [
    {
      key: '1',
      link: '/home',
      label: 'Home',
      isSecured: true,
    },
    {
      key: '2',
      link: '/dashboard-admin',
      label: 'Cab Requests',
      isSecured: true,
    },
    {
      key: '3',
      link: '/log-in',
      label: 'Login',
      isSecured: false,
    },
    {
      key: '4',
      link: '/signup',
      label: 'Sign up',
      isSecured: false,
    },
  ];
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="p-[1rem] shadow-md">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <span className="font-bitter text-tw_primary text-2xl font-extrabold tracking-wide my-auto ml-4">
            Hatch-A-Cab
          </span>
        </div>
        <div className="hidden sm:block">
          <div>
            {isLoggedIn &&
              navigationBarElement
                .filter((element) => element.isSecured)
                .map((element) => {
                  const isActive = location.pathname === element.link;
                  let classes =
                    'no-underline font-medium text-lg tracking-wide mx-1 text-tw_primary px-1 pb-1 hover:text-tw_secondary transition duration-300';
                  if (isActive)
                    classes += ' border-b-[3px] border-tw_secondary';
                  return (
                    <Link
                      key={element.key}
                      to={element.link}
                      className={classes}
                    >
                      {element.label}
                    </Link>
                  );
                })}

            {!isLoggedIn &&
              navigationBarElement
                .filter((element) => !element.isSecured)
                .map((element) => {
                  const isActive = location.pathname === element.link;
                  let classes =
                    'no-underline font-medium text-lg tracking-wide mx-1 text-tw_primary px-1 pb-1 hover:text-tw_secondary transition duration-300';
                  if (isActive)
                    classes = classes + ' border-b-4 border-tw_secondary';
                  return (
                    <Link
                      key={element.key}
                      to={element.link}
                      className={classes}
                    >
                      {element.label}
                    </Link>
                  );
                })}
            {isLoggedIn && (
              <Link
                to="/login"
                className="no-underline font-medium text-lg tracking-wide mx-1 text-tw_primary px-1 pb-1 hover:text-tw_secondary"
                onClick={handleLogout}
              >
                Log Out
              </Link>
            )}
          </div>
        </div>
        <div className="block sm:hidden">
          <button onClick={toggleState}>
            <RxHamburgerMenu size={'1.2rem'} />
          </button>
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
