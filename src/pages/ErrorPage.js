import React from 'react';
import { NavLink } from 'react-router-dom';
import errorImg from '../assets/404.svg';

const ErrorPage = () => {
  return (
    <>
      <div className="py-9 text-center">
        <div>
          <div className="flex justify-center">
            <img
              src={errorImg}
              alt="404 Error. Page not found."
              className="w-80 h-auto"
            />
          </div>

          <h3 className="text-10xl">UH OH! You are lost.</h3>
          <p className="my-8 px-4">
            The Page you are looking for does not exist. How you got here is a
            mystery. You can click on the button below to go back to homepage.
          </p>
          <NavLink to="/home">
            <button
              className={`btn-1 text-white px-3 py-2 mr-2 rounded-md font-bold bg-tw_blue`}
            >
              Return To Home
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
