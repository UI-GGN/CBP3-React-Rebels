import React from 'react';
import '../styles/pages/LandingPage.scss';
import { To, useNavigate } from 'react-router-dom';

const LandingPage = (props: any) => {
  const navigate = useNavigate();

  const sectionCards = [
    {
      id: 1,
      label: 'Add a Cab',
      icon: '',
      subLabel: 'Raise a request for a Cab.',
      redirectLink: '/booking',
    },
    {
      id: 2,
      label: 'Cab Requests',
      icon: '',
      subLabel: 'Check all previous cab request records.',
      redirectLink: '/booking-confirmation',
    },
  ];

  const handleCardClick = (section: { redirectLink: To }) => {
    navigate(section?.redirectLink);
  };

  const handleBookCab = () => {
    navigate('/cab-request');
  };

  return (
    <div className="flex justify-end p-4  ">
      <button
        className="bg-tw_primary hover:bg-primary text-white font-inter font-bold py-2 px-4 rounded"
        onClick={handleBookCab}
      >
        Book a cab
      </button>
    </div>
    // <div className="landing-page-wrapper">
    //     <div className="section-cards-wrapper">
    //         {
    //             sectionCards.map(sectionCard=>(
    //                 <div className="section-card" key={sectionCard?.id} onClick={()=>handleCardClick(sectionCard)}>
    //                     <div className="label title">{sectionCard?.label}</div>
    //                     <div className="label">{sectionCard?.subLabel}</div>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // </div>
  );
};

export default LandingPage;
