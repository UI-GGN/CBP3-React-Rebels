import React from 'react';
import '../../styles/pages/Home.scss';
import { To, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Home = (props: any) => {
  const navigate = useNavigate();
  const handleCardClick = (section: { redirectLink: To }) => {
    navigate(section?.redirectLink);
  };

  const handleBookCab = () => {
    navigate('/dashboard-admin');
  };

  return (
    <div className="home pt-12">
      <div className="w-11/12 mx-auto ">
        <div className="text-tw_primary text-3xl mb-4">
          <div className="text-center font-bitter text-2xl sm:text-5xl font-bold">
            Welcome to <span className="text-tw_secondary">Hatch-A-Cab</span>
          </div>
          <div className="mt-3 text-center text-xl sm:text-3xl">
            Your Ultimate Cab Request and Routing Solution!
          </div>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-24 mb-8 font-inter flex-col md:flex-row justify-center mx-auto inner-container items-center">
        <div
          className="bg-light text-base sm:w-96 mx-8 my-16 drop-shadow-2xl shadow-lg shadow-tw_yellow md:mx-16 hover:scale-105 cursor-pointer  hover:ease-in-out hover:duration-300"
          onClick={handleBookCab}
        >
          <div className="w-full h-52 request-banner"></div>
          <div className="border-b-2 p-2 mt-2 h-28">
            Effortlessly handle cab requests, communicate with vendors and
            simplify cab management and enhance the travel experience for all.
          </div>
          <div className="p-2 flex flex-row font-semibold items-center text-md mb-2">
            <span className="border-b-2 text-tw_primary border-tw_primary hover:border-tw_secondary text-lg">
              Requests
            </span>
            <span className="px-2 h-full">
              <BsArrowRight size={'1.5rem'} />
            </span>
          </div>
        </div>
        <div className="bg-light text-base sm:w-96 mx-8 my-16 drop-shadow-2xl shadow-lg shadow-tw_yellow md:mx-16 hover:scale-105 hover:ease-in-out hover:duration-300 cursor-pointer">
          <div className="w-full h-52 route-banner"></div>
          <div className="border-b-2 p-2 mt-2 h-28">
            Effortlessly manage routes, optimize travel, and simplify route
            management for efficient operations.
          </div>
          <div className="p-2 flex flex-row font-semibold items-center text-md mb-2">
            <span className="border-b-2 border-tw_primary text-lg text-muted">
              Routes
            </span>
            <span className="px-2">
              <BsArrowRight size={'1.5rem'} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
