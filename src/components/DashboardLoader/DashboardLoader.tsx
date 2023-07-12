import React from 'react';
import '../../styles/components/DashboardLoader.scss';

const DashboardLoader = () => {
  const totalItems = 8;

  const items = new Array(totalItems).fill(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
      {items.map((_, idx) => (
        <div className="cards font-inter w-80 my-2 mx-auto" key={idx}></div>
      ))}
    </div>
  );
};

export default DashboardLoader;
