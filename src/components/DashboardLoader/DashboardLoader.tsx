import React from 'react';
import '../../styles/components/DashboardLoader.scss';

const DashboardLoader = () => {
  const totalItems = 8;

  const items = new Array(totalItems).fill(null);

  return (
    // <div className="cabRequest pt-12">
    //   <div className="w-11/12 mx-auto">
    //     <div className="text-light text-3xl mb-4">Loading ...</div>
    //     <div className="inner-container pb-4">
    //       <div className="bg-light rounded flex-col md:flex-row justify-between mb-3 flex items-center p-2"></div>
    //       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
    //       {items.map((_, idx) =>
    //        <div className="cards w-80 font-inter relative my-2 mx-auto" key={idx}>
    //          <div className="cover"></div>
    //        </div>
    //        )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 sm:gap-1 md:gap-2">
      {items.map((_, idx) => (
        <div className="cards w-80 font-inter relative my-2 mx-auto" key={idx}>
          <div className="cover"></div>
        </div>
      ))}
    </div>
  );
};

export default DashboardLoader;
