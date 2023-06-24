import React from 'react';

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
  return (
    <div className="flex flex-row justify-end text-light px-2">
      <div className="px-2">{`Showing Page ${currentPage} of ${
        nPages === 0 ? 1 : nPages
      }`}</div>
      {currentPage !== 1 && (
        <div className="px-2">
          <button onClick={prevPage}>Prev</button>
        </div>
      )}
      {currentPage !== nPages && nPages !== 0 && (
        <div className="px-2">
          <button onClick={nextPage}>Next</button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
