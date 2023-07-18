import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { T_NavBarElement } from 'src/types/Interfaces';
import '../styles/components/Navabr1.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { logout, loggedInUser, login } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [istoggle, setIsToggle] = useState(false);
  const location = useLocation();
  let navigationBarElement: T_NavBarElement[] = [];

  const classes =
    'no-underline font-medium text-lg tracking-wide mx-1 text-tw_primary px-1 hover:text-tw_secondary transition duration-300';

  const activeClasses = classes + '  border-b-[3px] border-tw_secondary';

  useEffect(() => {
    if (localStorage.getItem('loggedInUser') !== null) {
      const loggedInUser = JSON.parse(
        localStorage.getItem('loggedInUser') || '{}'
      );
      login(loggedInUser);
    }
    if (loggedInUser.id !== '-1') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [loggedInUser.id]);

  const toggleState = () => setIsToggle((prevState: boolean) => !prevState);

  const handleLogout = () => {
    localStorage.clear();
    logout();
    setIsLoggedIn(false);
  };

  if (loggedInUser.profile === 'admin') {
    navigationBarElement = [
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
        link: '/login',
        label: 'Log Out',
        onClick: handleLogout,
      },
    ];
  }
  if (loggedInUser.profile === 'user') {
    navigationBarElement = [
      {
        key: '1',
        link: '/home',
        label: 'Home',
      },
      {
        key: '2',
        link: '/login',
        label: 'Log Out',
        onClick: handleLogout,
      },
    ];
  }

  const splitedName = loggedInUser.name.split(' ');
  let nameInitials = splitedName[0].charAt(0).toUpperCase();
  if (splitedName.length > 1)
    nameInitials += splitedName[splitedName.length - 1].charAt(0).toUpperCase();
  return (
    <nav className="p-[1rem] shadow-md">
      <div className="flex flex-row justify-between items-center">
        <div className="block sm:hidden">
          <button onClick={toggleState}>
            <RxHamburgerMenu size={'1.2rem'} />
          </button>
        </div>
        <div className="flex flex-row">
          <span className="font-bitter text-tw_primary text-2xl font-extrabold tracking-wide my-auto ml-4">
            Hatch-A-Cab
          </span>
        </div>
        <div className="hidden sm:block">
          <div className="flex flex-row items-center">
            {isLoggedIn &&
              navigationBarElement.map((element) => {
                const isActive = location.pathname === element.link;
                if (element.onClick) {
                  return (
                    <Link
                      to={element.link}
                      key={element.key}
                      onClick={element.onClick}
                      className={isActive ? activeClasses : classes}
                    >
                      {element.label}
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={element.key}
                      to={element.link}
                      className={isActive ? activeClasses : classes}
                    >
                      {element.label}
                    </Link>
                  );
                }
              })}
            {loggedInUser.profile !== 'guest' && (
              <div
                title={loggedInUser.name}
                className="flex flex-row items-center justify-center bg-tw_secondary w-9 h-9 rounded-full text-light font-bold cursor-pointer"
              >
                {nameInitials}
              </div>
            )}
          </div>
        </div>
        {loggedInUser.profile !== 'guest' && (
          <div className="block sm:hidden">
            <div
              title={loggedInUser.name}
              className="bg-tw_secondary w-8 h-8 rounded-full text-light font-bold flex flex-row items-center justify-center"
            >
              {nameInitials}
            </div>
          </div>
        )}
      </div>
      {istoggle && (
        <div className="block sm:hidden">
          <ul className="p-0">
            {navigationBarElement.map((element) => {
              return (
                <li key={element.key} className="p-1 border-b-2">
                  <Link
                    to={element.link}
                    className="no-underline ml-4 text-lg tracking-wide px-1 py-2 font-bold text-tw_primary hover:border-b-2 hover:border-tw_primary hover:text-tw_primary"
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

export default Navbar;
