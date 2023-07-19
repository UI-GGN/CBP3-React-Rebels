import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface PaginationProps {
  currentPage: number;
  nPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  nPages,
  setCurrentPage,
}) => {
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const disableRightButton = currentPage === nPages || nPages === 0;
  const disableLeftButton = currentPage === 1;
  return (
    <div className="flex flex-row justify-end items-center text-light px-2">
      <div className="px-2">{`Page ${currentPage} of ${
        nPages === 0 ? 1 : nPages
      }`}</div>
      <div className="px-2">
        <button
          className="bg-tw_placeholder pagination-button rounded-full p-1 disabled:opacity-20"
          onClick={prevPage}
          disabled={disableLeftButton}
        >
          <AiOutlineLeft size={'1.4rem'} />
        </button>
      </div>

      <div className="px-2">
        <button
          className="bg-tw_placeholder pagination-button rounded-full p-1 disabled:opacity-20"
          onClick={nextPage}
          disabled={disableRightButton}
        >
          <AiOutlineRight size={'1.4rem'} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
